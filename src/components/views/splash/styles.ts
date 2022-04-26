import { css } from '@emotion/css';
import { Shadows } from '../../common/styles/colors';
import { FlexCss } from '../../common/styles/flex';

export const demoImgCss = css({
  boxShadow: Shadows.V2,
  borderRadius: 50,
  marginRight: 100,
});

export const contentContainerCss = css(FlexCss.alignCenter, FlexCss.justifyContentCenter, {
  marginTop: 50,
});
