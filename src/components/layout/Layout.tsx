// this Layout component wraps every page with the app header on top
// check out App.js to see how it's used

import React from 'react'

import { HeaderFooterWrapper } from '../../components/layout/styles';
import Header from '../header/Header';
import { layoutStyles } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => (
  <HeaderFooterWrapper>
    {/* <Header /> */}
    {children}
    {/* <layoutStyles.body>{children}</layoutStyles.body> */}
  </HeaderFooterWrapper>
);

export default Layout
