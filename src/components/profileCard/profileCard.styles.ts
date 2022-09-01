import { css, keyframes } from '@emotion/css';
import { Colors } from '../styles/colors';
import { FlexCss } from '../styles/flex';

const bounce = keyframes`
    from { 
      transform: translate(0, -12px); 
    }
    to { 
      transform: translate(0, -18px); 
    }
  `;

export const profileCardStyles = {
  container: css(FlexCss.spaceBetween, FlexCss.alignCenter, {
    width: '100%',
    height: 80,
    background: Colors.Gray.V8,
    padding: '12px 40px',
    borderRadius: '30px 30px 0 0',
    position: 'fixed',
    bottom: 0,
    left: 0,
  }),
  emoji: css({
    height: '115%',
    transform: 'translate(0, -10px)',
    animation: `${bounce} ease 0.8s infinite alternate`,
    cursor: 'pointer',
  }),
  body: css(FlexCss.spaceBetween, FlexCss.alignCenter, {
    flexGrow: 1,
    marginLeft: 100,
  }),
  createButton: css({
    marginBottom: 10,
  }),
}
