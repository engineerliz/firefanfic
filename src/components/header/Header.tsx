import React from 'react';
import { FlexCol } from '../../components/layout/styles';
import { headerStyles } from './styles';
import HeaderContent from './HeaderContent';

interface HeaderProps {
  children?: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return (
    <FlexCol className={headerStyles.container}>
      <HeaderContent />
      {children && <div className={headerStyles.children}>{children}</div>}
    </FlexCol>
  );
};

export default Header;
