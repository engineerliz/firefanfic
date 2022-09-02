import { css } from '@emotion/css';
import styled from 'styled-components';
import BreakPoints from '../styles/breakpoints';
import { Colors } from '../styles/colors';

export const tabStyles = {
  tab: styled.div`
    padding: 8px 20px;
    ${BreakPoints.sm} {
      padding: 6px 12px;
    }
  `,
  container: (isActive: boolean) => css({
    background: isActive ? Colors.White : 'transparent',
    padding: '8px 20px',
    borderRadius: 30,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  }),
  label: (isActive: boolean) => css({
    color: isActive ? Colors.Black : Colors.Gray.V2,
    transition: 'all 0.3s ease',
  }),
}