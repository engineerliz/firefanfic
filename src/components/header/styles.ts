import { css } from '@emotion/css';
import { Colors, Shadows } from '../styles/colors';
import { FlexCss } from '../styles/flex';

export const headerStyles = {
  container: css({
    width: '100vw',
    top: 0,
    left: 0,
    zIndex: 10,
    backdropFilter: 'blur(6px)',
    background: Colors.Gray.V10,
    shadow: Shadows.V5,
    position: 'sticky',
    height: 'fit-content',
    padding: '12px 20px',
  }),
  content: css(FlexCss.alignCenter, FlexCss.spaceBetween, {
    width: '100%',
    height: 'fit-content',
  }),
  children: css({
    marginTop: 15,
  }),
  emoji: css({
    width: 20,
  }),
  userPicCss: css({
    borderRadius: '50%',
    width: 30,
    cursor: 'pointer',
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
