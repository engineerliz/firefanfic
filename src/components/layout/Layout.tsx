// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'

import {
  HeaderFooterWrapper,
  Footer,
} from '../../firefly/styles/layout'
import Header from '../header/Header'
import Backgroud from '../background/Background'
import { layoutStyles } from './styles'

const Layout = ({children}: any) => (
  <HeaderFooterWrapper>
    <Backgroud />
    <Header />
    <div className={layoutStyles.body}>
      {children}
    </div>

    <Footer>
      © {(new Date()).getFullYear()}
    </Footer>

  </HeaderFooterWrapper>
)

export default Layout
