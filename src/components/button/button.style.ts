import { css } from '@emotion/css';
import { Colors, Shadows } from '../styles/colors';

const defaultButtonCss = css({
  background: Colors.White,
  borderRadius: '100px',
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
  xSmallButtonCss: (width?: number | string) => css(defaultButtonCss, {
    width,
    padding: '2px 20px',
  }),
  smallButtonCss: (width?: number | string) => css(defaultButtonCss, {
    width,
    padding: '8px 20px',
  }),
  mediumButtonCss: (width?: number | string) => css(defaultButtonCss, {
    width,
    padding: '10px 24px',
  }),
  buttonText: (color?: string) => css({
    color: color || Colors.Black,
  })
}