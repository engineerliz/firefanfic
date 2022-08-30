import styled from 'styled-components'
import { Colors } from './colors';

const headingFontWeight = 'font-weight: 800';

const Heading = {
  H62: styled.div`
    ${headingFontWeight};
    font-size: 62px;
    color: ${Colors.White};
  `,
  H52: styled.div`
    ${headingFontWeight};
    font-size: 52px;
    color: ${Colors.White};
  `,
  H42: styled.div`
    ${headingFontWeight};
    font-size: 42px;
    color: ${Colors.White};
  `,
  H34: styled.div`
    ${headingFontWeight};
    font-size: 34px;
    color: ${Colors.White};
  `,
  H26: styled.div`
    ${headingFontWeight};
    font-size: 26px;
    color: ${Colors.White};
  `,
  H22: styled.div`
    ${headingFontWeight};
    font-size: 22px;
    color: ${Colors.White};
  `,
  H18: styled.div`
    ${headingFontWeight};
    font-size: 18px;
    color: ${Colors.White};
  `,
}

const subheadingFontWeight = 'font-weight: 600';

const Subheading = {
  SH22: styled.div`
    ${subheadingFontWeight};
    font-size: 22px;
    color: ${Colors.White};
  `,
  SH18: styled.div`
    ${subheadingFontWeight};
    font-size: 18px;
    color: ${Colors.White};
  `,
  SH14: styled.div`
    ${subheadingFontWeight};
    font-size: 14px;
    color: ${Colors.White};
  `,
  SH12: styled.div`
    ${subheadingFontWeight};
    font-size: 12px;
    color: ${Colors.White};
  `,
}

const paragraphFontWeight = 'font-weight: 400';

const Paragraph = {
  P22: styled.div`
    ${paragraphFontWeight};
    font-size: 22px;
    color: ${Colors.White};
  `,
  P18: styled.div`
    ${paragraphFontWeight};
    font-size: 18px;
    color: ${Colors.White};
  `,
  P14: styled.div`
    ${paragraphFontWeight};
    font-size: 14px;
    color: ${Colors.White};
  `,
}


export {
  Heading,
  Subheading,
  Paragraph,
};