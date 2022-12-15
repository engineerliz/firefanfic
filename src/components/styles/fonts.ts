
import styled from 'styled-components';
import { Colors } from './colors';

const headingFontWeight = 'font-weight: 700';

const Heading = {
  H26: styled.div`
    ${headingFontWeight};
    font-size: 26px;
    color: ${props => props.color || Colors.White};
  `,
  H22: styled.div`
    ${headingFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.White};
  `,
  H18: styled.div`
    ${headingFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.White};
  `,
  H14: styled.div`
    ${headingFontWeight};
    font-size: 14px;
    color: ${props => props.color || Colors.White};
  `,
}

const labelFontWeight = 'font-weight: 700';

const Label = {
  L14: styled.div`
    ${labelFontWeight};
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${props => props.color || Colors.White};
  `,
  L12: styled.div`
    ${labelFontWeight};
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${props => props.color || Colors.White};
  `,
}


const subheadingFontWeight = 'font-weight: 500';

const Subheading = {
  SH22: styled.div`
    ${subheadingFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.White};
  `,
  SH18: styled.div`
    ${subheadingFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.White};
  `,
  SH14: styled.div`
    ${subheadingFontWeight};
    font-size: 14px;
    color: ${props => props.color || Colors.White};
  `,
    SH12: styled.div`
    ${subheadingFontWeight};
    font-size: 12px;
    color: ${props => props.color || Colors.White};
  `,
  SH10: styled.div`
    ${subheadingFontWeight};
    font-size: 10px;
    color: ${props => props.color || Colors.White};
  `,

}

const paragraphFontWeight = 'font-weight: 300';

const Paragraph = {
  P22: styled.div`
    ${paragraphFontWeight};
    font-size: 22px;
    color: ${props => props.color || Colors.White};
  `,
  P18: styled.div`
    ${paragraphFontWeight};
    font-size: 18px;
    color: ${props => props.color || Colors.White};
  `,
  P14: styled.div`
    ${paragraphFontWeight};
    font-size: 14px;
    color: ${props => props.color || Colors.White};
  `,
    P12: styled.div`
    ${paragraphFontWeight};
    font-size: 12px;
    color: ${props => props.color || Colors.White};
  `,

}


export {
  Heading,
  Subheading,
  Paragraph,
  Label,
};