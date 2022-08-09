import { css } from '@emotion/css'
import React, { useState } from 'react'
import createArtifact from '../../actions/artifacts/createArtifact'
import Button, { ButtonSize } from '../../components/button/Button'
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

  const onSubmit = () => {
    title && createArtifact({
      portfolio,
      title,
      description,
    }).then(() => onDismiss())
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
          <Subheading.SH14>
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