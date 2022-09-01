import { List } from 'immutable';
import React, { useEffect, useState } from 'react';
import createFic from '../../actions/fics/createFic';
import { uploadFileList } from '../../actions/storage/uploadFile';
import Button, { ButtonSize2 } from '../../components/button/Button';
import FileUploader from '../../components/fileUploader/FileUploader';
import { Colors } from '../../components/styles/colors';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import Asset from '../../models/artifact/AssetModel';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { ficEditStyles } from './ficEdit.styles';

interface FicEditProps {
  portfolio?: Portfolio;
  onDismiss: () => void;
}

const FicEdit = ({ portfolio, onDismiss }: FicEditProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = () => {
    if (title) {
      createFic({
        title,
        description,
      }).then(() => window.location.reload());
    }
    if (!title) {
      setErrorMessage('Please add a title.');
    }
  };

  const onCancel = () => onDismiss();

  return (
    <FlexCol className={ficEditStyles.container}>
      <Heading.H26>Create a New Fic</Heading.H26>
      <FlexCol className={ficEditStyles.formBody}>
        <div>
          <TextInput
            label="Title"
            className={ficEditStyles.input}
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <TextInput
            label="Description"
            isMultiline={true}
            height={200}
            className={ficEditStyles.input}
            value={description}
            onChange={(value) => {
              setDescription(value);
            }}
          />
          {/* <FileUploader
            onChange={(fileList?: FileList) => setImages(fileList)}
            className={ficEditStyles.fileUploader}
          /> */}
        </div>
        <Paragraph.P14 color={Colors.Branding.Red}>
          {errorMessage}
        </Paragraph.P14>
        <FlexRow className={ficEditStyles.bottomButtons}>
          <Subheading.SH14 onClick={onCancel}>Cancel</Subheading.SH14>
          <Button
            text="Create Artifact"
            size="Medium"
            type="Primary"
            onClick={onSubmit}
          >
            Save
          </Button>
        </FlexRow>
      </FlexCol>
    </FlexCol>
  );
};

export default FicEdit;
