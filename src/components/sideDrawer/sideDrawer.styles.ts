import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const sideDrawerStyles = {
  overlay: (isOpen?: boolean) => css({
    background: Colors.Gray.V9,
    opacity: 0.6,
    height: '100%',
    width: '100%',
    display: isOpen ? 'default' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
  }),
  container: (isOpen?: boolean) => css({
    // width: isOpen ? '50vw' : 0,
    width: '50%',
    minWidth: 800,
    height: '100%',
    background: Colors.Gray.V8,
    position: 'fixed',
    right: 0,
    transform: isOpen ? 'none' : 'translate(100%, 0)',
    top: 0,
    zIndex: 1,
    padding: '6% 42px 34px',
    transition: 'all 0.6s ease',
  })
}