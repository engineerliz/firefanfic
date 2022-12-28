import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const textInputStyles = {
  label: css({
    marginBottom: 2,
  }),
  input: css({
    background: Colors.Gray.V10,
      border: `1px solid ${Colors.Gray.V10}`,
    borderRadius: 12,
    height: 52,
    fontSize: 14,
    fontWeight: 300,
    padding: '18px 18px',
    color: Colors.White,
    outline: 'none',
    transition: 'all .3s ease',
    ':focus': {
      border: `1px solid ${Colors.Gray.V7}`,
    },
    ':active': {
      border: `1px solid ${Colors.Gray.V7}`,
    }
  }),
  textArea: (height?: number | string) => css({
    height: `${height ?? 300}`,
  }),
}