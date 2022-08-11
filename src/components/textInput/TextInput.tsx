import { css } from '@emotion/css';
import React, { ChangeEvent } from 'react'
import { FlexCol } from '../../firefly/styles/layout';
import { Subheading } from '../styles/fonts';
import { textInputStyles } from './styles';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  isMultiline?: boolean;
  height?: number | string;
  className?: string;
  onChange?: (value: string) => void;
}

const TextInput = ({
  label,
  isMultiline = false,
  height,
  onChange,
  className,
  value,
}: TextInputProps) => {
  return <FlexCol className={className}>
    {label &&
      <Subheading.SH14 className={textInputStyles.label}>
        {label}
      </Subheading.SH14>
    }
    {
      isMultiline ?
        <textarea
          className={css(textInputStyles.input, textInputStyles.textArea(height))}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange?.(event.target.value)}
          value={value}
        />
        :
        <input
          type="text"
          className={textInputStyles.input}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value)}
        />
    }
  </FlexCol>
}

export default TextInput