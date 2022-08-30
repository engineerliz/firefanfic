import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const profileCardStyles = {
  container: css({
    width: '25%',
    maxWidth: 400,
    background: Colors.Gray.V8,
    padding: 30,
    borderRadius: 20,
    height: '100%',
    minHeight: '80vh'
  }),
  emoji: css({
    width: '40%', 
    maxWidth: 100,
    marginBottom: 20,
  }),
}