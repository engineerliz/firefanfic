import { css } from '@emotion/css'
import React, { useState } from 'react'
import createArtifact from '../../actions/artifacts/createArtifact'
import { uploadFile } from '../../actions/storage/uploadFile'
import Button, { ButtonSize } from '../../components/button/Button'
import FileUploader from '../../components/fileUploader/FileUploader'
import { FlexCss } from '../../components/styles/flex'
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts'
import TextInput from '../../components/textInput/TextInput'
import { FlexCol, FlexRow } from '../../firefly/styles/layout'
import Portfolio from '../../models/portfolio/PortfolioModel'
import { artifactEditStyles } from './artifactEdit.styles'

interface ArtifactEditProps {
  portfolio?: Portfolio;
  onDismiss: () => void;
}

const ArtifactEdit = ({
  portfolio,
  onDismiss,
}: ArtifactEditProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [images, setImages] = useState<FileList>();

  const onSubmit = () => {
    if (title) {
      if (images) {
        uploadFile(images[0], (id: string, url: string) => {
          createArtifact({
            portfolio,
            title,
            description,
            images: {
              id,
              url,
            },
          }).then(() => onDismiss())

        })
      } else {
        createArtifact({
          portfolio,
          title,
          description,
          images,
        }).then(() => onDismiss())
      }
    }
  }

  const onTest = () => {
    images && uploadFile(images[0], (url: string) => console.log('NEW URL', url))
  }

  return (
    <FlexCol className={artifactEditStyles.container}>
      <Heading.H26>
        Add a pop to your soda
      </Heading.H26>
      <Paragraph.P14>
        Pops are artifacts in your portfolio to showcase your work. You can add and edit pops in your portfolio at any time.
      </Paragraph.P14>
      <FlexCol className={artifactEditStyles.formBody}>
        <div>
          <FileUploader
            onChange={(fileList?: FileList) => setImages(fileList)}
          />
          <TextInput
            label='Title'
            className={artifactEditStyles.input}
            value={title}
            onChange={(value) => { setTitle(value) }}
          />
          <TextInput
            label='Description'
            isMultiline={true}
            height={200}
            className={artifactEditStyles.input}
            value={description}
            onChange={(value) => { setDescription(value) }}
          />
        </div>
        <FlexRow className={css(FlexCss.alignCenter, FlexCss.spaceBetween)}>
          <Subheading.SH14 onClick={onTest}>
            Cancel
          </Subheading.SH14>
          <Button
            text='Create Artifact'
            buttonSize={ButtonSize.Small}
            onClick={onSubmit}
          />
        </FlexRow>
      </FlexCol>
    </FlexCol>
  )
}

export default ArtifactEdit