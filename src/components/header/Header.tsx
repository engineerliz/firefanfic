import React from 'react';
import { FlexCol } from '../../components/layout/styles';
import { headerStyles } from './styles';
import HeaderContent from './HeaderContent';

interface HeaderProps {
  rightButton?: React.ReactNode;
  children?: React.ReactNode;
}
const Header = ({ rightButton, children }: HeaderProps) => {
  return (
    <FlexCol className={headerStyles.container}>
      <HeaderContent rightButton={rightButton} />
      {children && <div className={headerStyles.children}>{children}</div>}
    </FlexCol>
  );
};

export default Header;
