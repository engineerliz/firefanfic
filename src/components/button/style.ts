import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

const defaultButtonCss = css({
  background: Colors.White,
  borderRadius: '100px',
  border: 'none',
});

export const buttonStyles = {
  xSmallButtonCss: (width?: number) => css(defaultButtonCss, {
    width,
    padding: '2px 12px',
  }),  
  smallButtonCss: (width?: number) =>  css(defaultButtonCss, {
    width,
    padding: '8px 20px',
  }),
  mediumButtonCss: (width?: number) =>  css(defaultButtonCss, {
    width,
    padding: '10px 24px',
  }),
}