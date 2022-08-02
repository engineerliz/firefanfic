// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'

import logIn from '../../actions/logIn'
import FirebaseAuth from '../misc/FirebaseAuth'
import {
  HeaderFooterWrapper,
  Footer,
} from '../../styles/layout'
import {
  HeaderLink,
} from '../../styles/links'
// import { BrandingFont } from '../../../components/styles/fonts'
import Header from '../../../components/header/Header'

const Layout = ({children}) => (
  <HeaderFooterWrapper>
    <Header />
    {/* <Header>
      <HeaderLink to="/"><BrandingFont.H4>Ary</BrandingFont.H4></HeaderLink>
      <div style={{float: 'right'}}>
        <HeaderLink to="/search">
          <span role="img" aria-label="search">🔎</span>
        </HeaderLink>
        {' '}
        <FirebaseAuth>
          { ({isLoading, error, auth}) => {
            if (isLoading) {
              return '...'
            }
            if (error) {
              return '⚠️ login error'
            }
            if (auth) {
              return <HeaderLink to={`/account`}>
                <span role="img" aria-label="account">👤</span>
              </HeaderLink>
            } else {
              return <button onClick={logIn}>log in</button>
            }
          }}
        </FirebaseAuth>
      </div>
    </Header> */}

    {children}

    <Footer>
      © {(new Date()).getFullYear()}
    </Footer>

  </HeaderFooterWrapper>
)

export default Layout
