import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const tabStyles = {
  container: (isActive: boolean) => css({
    background: isActive ? Colors.White : 'transparent',
    padding: '8px 20px',
    borderRadius: 30,
    transition: 'all 0.3s ease',
  }),
  label: (isActive: boolean) => css({
    color: isActive ? Colors.Black : Colors.Gray.V2,
    transition: 'all 0.3s ease',
  }),
}