import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const assetTileStyles = {
  container: (size?: number | string) => css({
    width: size ?? '100%',
    paddingTop: size ?? '100%',
    position: 'relative',
    background: Colors.White,
    cursor: 'pointer',
  }),
  backgroundImg: css({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
  }),
  textContainer: (isHover: boolean) => css({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: isHover ? 1 : 0,
    transition: 'all 0.3s ease',
    zIndex: 1,
    width: '85%',
  }),
  text: css({
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
  overlay: (isHover: boolean) => css({
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    opacity: isHover ? 0.8 : 0,
    background: Colors.Branding.BackgroundGradient,
    transition: 'all 0.3s ease',
  }),
}