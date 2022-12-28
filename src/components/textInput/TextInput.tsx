import { css } from '@emotion/css';
import React, { ChangeEvent } from 'react'
import { FlexCol } from '../../components/layout/styles';
import { Subheading } from '../styles/fonts';
import { textInputStyles } from './styles';

interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  isMultiline?: boolean;
  height?: number | string;
  hideText?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const TextInput = ({
  label,
  isMultiline = false,
  height,
  onChange,
  hideText,
  className,
  value,
}: TextInputProps) => {
  return (
    <FlexCol className={className}>
      {label && (
        <Subheading.SH12 className={textInputStyles.label}>
          {label}
        </Subheading.SH12>
      )}
      {isMultiline ? (
        <textarea
          className={css(
            textInputStyles.input,
            textInputStyles.textArea(height),
          )}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            onChange?.(event.target.value)
          }
          value={value}
        />
      ) : (
        <input
          type={hideText ? 'password' : 'text'}
          className={textInputStyles.input}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange?.(event.target.value)
          }
        />
      )}
    </FlexCol>
  );
};

export default TextInput