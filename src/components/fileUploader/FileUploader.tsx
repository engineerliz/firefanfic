import React, { ChangeEventHandler } from 'react'
import { useState } from 'react'

interface FileUploaderProps {
  onChange?: (fileList?: FileList) => void;
}

const FileUploader = ({
  onChange
}: FileUploaderProps) => {
  const [file, setFile] = useState<Blob | Uint8Array | ArrayBuffer>();

  const onFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    console.log('input.files', input.files);
    onChange?.(input.files)
  }

  return (
    <input
      type="file"
      onChange={onFilesChange}
      multiple
    />
  )
}

export default FileUploader