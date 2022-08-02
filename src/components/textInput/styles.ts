import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const textInputStyles = {
  label: css({
    marginBottom: 6,
  }),
  input: css({
    background: Colors.Transparent.Dark.V2,
    border: '0px',
    borderRadius: 12,
    height: 52,
    fontSize: 14,
    padding: '18px 18px',
    color: Colors.White,
    outline: 'none',
    transition: 'all .3s ease',
    ':focus': {
      border: `1px solid ${Colors.Branding.Highlight}`
    },
    ':active': {
      border: `1px solid ${Colors.Branding.Highlight}`
    }
  }),
  textArea: (height?: number | string) => css({
    height,
  }),
}