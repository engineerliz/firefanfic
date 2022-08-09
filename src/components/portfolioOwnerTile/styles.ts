import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const portfolioOwnerTileStyles = {
  container: css({
    height: 42,
    alignItems: 'center',
    borderRadius: 25,
    paddingRight: 18,
    background: Colors.Branding.Darklight,
  }),
  image: css({
    height: 42,
    width: 42,
    borderRadius: '50%',
    marginRight: 12,
  }),
  title: css({
    marginRight: 4,
  }),
  name: css({
    color: Colors.Branding.Highlight
  }),
}