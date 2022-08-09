import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const sideDrawerStyles = {
  overlay: (isOpen?: boolean) => css({
    background: Colors.Transparent.Dark.V3,
    height: '100%',
    width: '100%',
    display: isOpen ? 'default' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
  }),
  container: (isOpen?: boolean) => css({
    // width: isOpen ? '50vw' : 0,
    width: '50vw',
    minWidth: 800,
    height: '100%',
    background: Colors.Branding.BackgroundGradient,
    position: 'fixed',
    right: isOpen ? 0 : '-100%',
    top: 0,
    zIndex: 1,
    padding: '6% 42px 34px',
    transition: 'all 0.8s ease',
  })
}