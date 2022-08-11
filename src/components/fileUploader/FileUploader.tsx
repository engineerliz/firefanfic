import { List } from 'immutable';
import React, { useRef } from 'react'
import { useState } from 'react'
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import Button, { ButtonSize } from '../button/Button';
import { turnFileListIntoList } from './fileUploader.helpers';
import { fileUploaderStyles } from './fileUploader.styles';

interface FileUploaderProps {
  imagesSize?: number;
  className?: string;
  onChange?: (fileList?: FileList) => void;
}

const FileUploader = ({
  imagesSize,
  className,
  onChange
}: FileUploaderProps) => {
  const [fileUrls, setFileUrls] = useState<List<string>>();
  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.files ?? undefined)
    const files = event.target.files && turnFileListIntoList(event.target.files);

    setFileUrls(files?.map(file =>
      URL.createObjectURL(file)
    ))
  };
  return (
    <FlexCol className={className}>
      {fileUrls &&
        <FlexRow className={fileUploaderStyles.imageRow}>
          {fileUrls.map(url => (
            <div className={fileUploaderStyles.imageContainer(imagesSize)} key={url}>
              <img
                src={url}
                width={100}
                className={fileUploaderStyles.images}
              />
            </div>
          ))}
        </FlexRow>
      }
      <FlexRow>
        <Button
          onClick={handleClick}
          text='Upload a file'
          buttonSize={ButtonSize.XSmall}
        />
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
          multiple
        />
      </FlexRow>
    </FlexCol>
  );
}

export default FileUploader