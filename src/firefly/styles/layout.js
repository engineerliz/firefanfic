import styled from 'styled-components'
import { Colors } from '../../components/common/styles/colors'

const HeaderFooterWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
  background: ${Colors.Branding.Background};
`
const Header = styled.div`
  padding: 2rem 1rem 1rem;
  width: 100%;
  background: ${Colors.Branding.Red}; 
`
const Page = styled.div`
  padding: 1rem;
`
const Footer = styled.div`
  padding: 1rem;
  text-align: center;
  opacity: .3;
  border-top: 1px solid ${Colors.Branding.Red};
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
