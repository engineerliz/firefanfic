import styled from 'styled-components'
import { Colors } from './colors';

export const brandingFont = '\'Pacifico\', cursive';

const BrandingFont = {
  H1: styled.div`
    font-family: ${brandingFont};
    letter-spacing: 3%;
    font-size: 66px;
    color: ${Colors.White};
  `,
  H2: styled.div`
    font-family: ${brandingFont};
    letter-spacing: 3%;
    font-size: 54px;
    color: ${Colors.White};
  `,
  H3: styled.div`
    font-family: ${brandingFont};
    letter-spacing: 3%;
    font-size: 42px;
    color: ${Colors.White};
  `,
  H4: styled.div`
    font-family: ${brandingFont};
    letter-spacing: 3%;
    font-size: 32px;
    color: ${Colors.White};
  `,
  H5: styled.div`
    font-family: ${brandingFont};
    letter-spacing: 3%;
    font-size: 26px;
    color: ${Colors.White};
  `,
}

const headingFontWeight = 'font-weight: 900';

const Heading = {
  H1: styled.div`
    ${headingFontWeight};
    font-size: 56px;
  `,
  H2: styled.div`
    ${headingFontWeight};
    font-size: 48px;
  `,
  H3: styled.div`
    ${headingFontWeight};
    font-size: 40px;
  `,
  H4: styled.div`
    ${headingFontWeight};
    font-size: 34px;
  `,
  H5: styled.div`
    ${headingFontWeight};
    font-size: 30px;
  `,
  H6: styled.div`
    ${headingFontWeight};
    font-size: 26px;
  `,
  H7: styled.div`
    ${headingFontWeight};
    font-size: 22px;
  `,
  H8: styled.div`
    ${headingFontWeight};
    font-size: 18px;
  `,
  Super1: styled.div`
    ${headingFontWeight};
    font-size: 76px;
  `,
}

const subheadingFontWeight = 'font-weight: 700';

const Subeading = {
  SH1: styled.div`
    ${subheadingFontWeight};
    font-size: 56px;
  `,
  SH2: styled.div`
    ${subheadingFontWeight};
    font-size: 48px;
  `,
  SH3: styled.div`
    ${subheadingFontWeight};
    font-size: 42px;
  `,
  SH4: styled.div`
    ${subheadingFontWeight};
    font-size: 34px;
  `,
  SH5: styled.div`
    ${subheadingFontWeight};
    font-size: 28px;
  `,
  SH6: styled.div`
    ${subheadingFontWeight};
    font-size: 22px;
  `,
  SH7: styled.div`
    ${subheadingFontWeight};
    font-size: 18px;
  `,
  SH8: styled.div`
    ${subheadingFontWeight};
    font-size: 14px;
  `,
  SH9: styled.div`
    ${subheadingFontWeight};
    font-size: 12px;
  `,
}

const paragraphFontWeight = 'font-weight: 400';

const Paragraph = {
  P1: styled.div`
    ${paragraphFontWeight};
    font-size: 38px;
  `,
  P2: styled.div`
    ${paragraphFontWeight};
    font-size: 32px;
  `,
  P3: styled.div`
    ${paragraphFontWeight};
    font-size: 26px;
  `,
  P4: styled.div`
    ${paragraphFontWeight};
    font-size: 22px;
  `,
  P5: styled.div`
    ${paragraphFontWeight};
    font-size: 18px;
  `,
  P6: styled.div`
    ${paragraphFontWeight};
    font-size: 16px;
  `,
  P7: styled.div`
    ${paragraphFontWeight};
    font-size: 14px;
  `,
  P8: styled.div`
    ${paragraphFontWeight};
    font-size: 12px;
  `,
}


export { 
  BrandingFont,
  Heading,
  Subeading,
  Paragraph,
};