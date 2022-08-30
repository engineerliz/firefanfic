import { css } from '@emotion/css';
import { Colors, Shadows } from '../styles/colors';

const defaultButtonCss = css({
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  color: Colors.Black,
  transition: 'all 0.3s ease',
  ':hover': {
    background: Colors.Branding.Highlight,
    boxShadow: Shadows.V2,

  },
});

export const buttonStyles = {
  primary: {
    container: css(defaultButtonCss, {
      background: Colors.White,
    }),
  },
  secondary: {
    container: css(defaultButtonCss, {
      background: Colors.Gray.V8,
    })
  },
  large: {
    padding: css({
      padding: '8px 0'
    })
  },
  medium: {
    padding: css({
      padding: '4px 0'
    })
  },
  small: {
    padding: css({
      padding: '2px 0'
    })
  },
}