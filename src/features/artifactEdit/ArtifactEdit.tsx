import { List } from 'immutable';
import React, { useEffect, useState } from 'react';
// import createArtifact from '../../actions/artifacts/createArtifact';
import { uploadFileList } from '../../actions/storage/uploadFile';
import Button, { ButtonSize2 } from '../../components/button/Button';
import FileUploader from '../../components/fileUploader/FileUploader';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import Asset from '../../models/artifact/AssetModel';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { artifactEditStyles } from './artifactEdit.styles';

interface ArtifactEditProps {
  portfolio?: Portfolio;
  onDismiss: () => void;
}

const ArtifactEdit = ({ portfolio, onDismiss }: ArtifactEditProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [images, setImages] = useState<FileList>();

  const onSubmit = () => {
    // if (title) {
    //   if (images) {
    //     uploadFileList(images, (assets: List<Asset>) => {
    //       createArtifact({
    //         portfolio,
    //         title,
    //         description,
    //         images: assets,
    //       }).then(() => window.location.reload());
    //     });
    //   } else {
    //     createArtifact({
    //       portfolio,
    //       title,
    //       description,
    //     }).then(() => window.location.reload());
    //   }
    // }
  };

  const onCancel = () => onDismiss();

  return (
    <FlexCol className={artifactEditStyles.container}>
      <Heading.H26>Add a pop to your soda</Heading.H26>
      <Paragraph.P14>
        Pops are artifacts in your portfolio to showcase your work. You can add
        and edit pops in your portfolio at any time.
      </Paragraph.P14>
      <FlexCol className={artifactEditStyles.formBody}>
        <div>
          <TextInput
            label="Title"
            className={artifactEditStyles.input}
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <TextInput
            label="Description"
            isMultiline={true}
            height={200}
            className={artifactEditStyles.input}
            value={description}
            onChange={(value) => {
              setDescription(value);
            }}
          />
          <FileUploader
            onChange={(fileList?: FileList) => setImages(fileList)}
            className={artifactEditStyles.fileUploader}
          />
        </div>
        <FlexRow className={artifactEditStyles.bottomButtons}>
          <Subheading.SH14 onClick={onCancel}>Cancel</Subheading.SH14>
          <Button
            text="Create Artifact"
            ButtonSize2={ButtonSize2.Small}
            onClick={onSubmit}
          />
        </FlexRow>
      </FlexCol>
    </FlexCol>
  );
};

export default ArtifactEdit;
