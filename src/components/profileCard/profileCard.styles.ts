import { css } from '@emotion/css';
import { Colors } from '../styles/colors';
import { FlexCss } from '../styles/flex';

export const profileCardStyles = {
  container: css({
    width: '25%',
    maxWidth: 300,
    minWidth: 200,
    background: Colors.Gray.V8,
    padding: '40px 26px',
    borderRadius: 20,
    height: '100%',
    minHeight: '80vh',
    position: 'sticky',
    top: 0,
    marginRight: 40,
  }),
  emoji: css({
    width: '40%', 
    maxWidth: 100,
    marginBottom: 20,
  }),
  body: css(FlexCss.spaceBetween, {
    flexGrow: 1,
  }),
  createButton: css({
    marginBottom: 10,
  })
}