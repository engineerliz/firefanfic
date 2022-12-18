import styled from 'styled-components';
import BreakPoints from '../styles/breakpoints';
import { Colors } from '../../components/styles/colors'
import { css } from '@emotion/css';

export const layoutStyles = {
  body: styled.div`
    z-index: 1;
    padding: 20px 50px;
    ${BreakPoints.sm} {
      padding: 14px;
    }
  `,
}

export const View = styled.div`
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 50px;
  max-width: 700px;
  width: 100%;
`;

const HeaderFooterWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
`
const Header = styled.div`
  // padding: 2rem;
  // width: 100%;
  // background: ${Colors.Branding.Red}; 
  // border-radius: 0 0 240px 50%/60px;
  position: relative;
  height: 70px;
  width: 600px;
  background: #e0efe3;
  :before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 340px;
    height: 80px;
    background-color: #e0efe3;
    right: -5px;
    top: 40px;
    
  }
  :after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 300px;
    height: 70px;
    // background-color: #FBF5F4;
    left: 0;
    top: 27px;
  }
`
const Page = styled.div`
  padding: 20px;
  padding-bottom: 100px;
`
const Footer = styled.div`
  padding: 1rem;
  text-align: center;
  opacity: .3;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const gapCss = (gap: number) => css({
  gap,
});

export const flexGrowCss = (grow: number) => css({
  flexGrow: grow,
});

export const heightCss = (height: number | string) => css({
  height,
});

export {
  HeaderFooterWrapper,
  Header,
  Page,
  Footer,
  FlexRow,
  FlexCol,
}
