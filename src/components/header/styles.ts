import { css } from '@emotion/css';
import { FlexCss } from '../styles/flex';

export const headerStyles = {
  containerCss: css({
    position: 'sticky',
    width: '100%',
    height: 110,
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
    height: '70%',
    padding: '0 30px',
  }),
  userPicCss: css({
    borderRadius: '50%',
    marginRight: 12,
  })
}
