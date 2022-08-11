import styled from 'styled-components'
import { Colors } from '../../components/styles/colors'

const HeaderFooterWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
  background: ${Colors.Branding.Background};
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
  padding: 1rem;
  padding-bottom: 100px;
`
const Footer = styled.div`
  padding: 1rem;
  text-align: center;
  opacity: .3;
  border-top: 1px solid ${Colors.Branding.Highlight};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export {
  HeaderFooterWrapper,
  Header,
  Page,
  Footer,
  FlexRow,
  FlexCol,
}
