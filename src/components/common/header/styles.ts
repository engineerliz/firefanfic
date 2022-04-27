import { css } from '@emotion/css';
import { FlexCss } from '../styles/flex';

export const containerCss = css({
  position: 'sticky',
  width: '100%',
  height: 110,
  top: 0,
});

export const waveCss = css({
  width: '100%',
  height: '100%',
  position: 'absolute',

});

export const contentContainerCss = css(FlexCss.alignCenter, {
  position: 'relative',
  height: '70%',
  padding: '0 30px',
});