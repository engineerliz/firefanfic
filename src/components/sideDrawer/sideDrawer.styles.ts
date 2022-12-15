import { css } from '@emotion/css';
import styled from 'styled-components';
import BreakPoints from '../styles/breakpoints';
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
    width: '50%',
    minWidth: 800,
    height: '100%',
    background: Colors.Gray.V9,
    position: 'fixed',
    right: 0,
    transform: isOpen ? 'none' : 'translate(100%, 0)',
    top: 0,
    zIndex: 1,
    transition: 'all 0.6s ease',
  }),
  drawer: styled.div`
    padding: 80px 42px 42px 42px;
    ${BreakPoints.md} {
      min-width: unset;
      width: 100%;
    }  
    ${BreakPoints.sm} {
      padding: 80px 20px 20px 20px;
    }  
  `
}