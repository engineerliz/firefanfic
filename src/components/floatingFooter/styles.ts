import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const floatingFooterStyles = {
  container: css({
    justifyContent: 'space-between',
    background: Colors.Transparent.Light.V2,
    padding: '4px 6px',
    borderRadius: 25,
    bottom: 30,
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '88%',
  }),
  rightButton: css({
    marginLeft: 8,
  }),
}