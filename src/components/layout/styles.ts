import styled from 'styled-components';
import BreakPoints from '../styles/breakpoints';

export const layoutStyles = {
  body: styled.div`
    z-index: 1;
    padding: 20px 50px;
    ${BreakPoints.sm} {
      padding: 14px;
    }
  `,
}