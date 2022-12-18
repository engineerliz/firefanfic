import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const textInputStyles = {
  label: css({
    marginBottom: 6,
  }),
  input: css({
    background: 'rgba(0, 0, 0, 0.5)',
    border: '0px',
    borderRadius: 12,
    height: 52,
    fontSize: 14,
    fontWeight: 300,
    padding: '18px 18px',
    color: Colors.White,
    outline: 'none',
    transition: 'all .3s ease',
    ':focus': {
      border: 'none',
    },
    ':active': {
      border: 'none',
    }
  }),
  textArea: (height?: number | string) => css({
    height: `${height ?? 300}`,
  }),
}