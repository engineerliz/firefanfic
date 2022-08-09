import { css } from '@emotion/css';
import { FlexCss } from '../styles/flex';

export const headerStyles = {
  containerCss: css({
    position: 'sticky',
    width: '100vw',
    top: 0,
    zIndex: 10,
  }),
  waveCss: css({
    width: '100%',
    height: '100%',
    position: 'absolute',
  }),
  contentContainerCss: css(FlexCss.alignCenter, FlexCss.spaceBetween, {
    position: 'relative',
    height: 'fit-content',
    padding: '20px 30px',
  }),
  userPicCss: css({
    borderRadius: '50%',
    marginRight: 12,
  }),
  logoContainer: css(FlexCss.alignCenter, FlexCss.justifyContentCenter, {
    cursor: 'pointer',
  }),
  sodaCan: css({
    width: 30,
    height: 30,
    marginRight: 4,
  }),
  logoText: css({
    marginTop: 4,
  }),
}
