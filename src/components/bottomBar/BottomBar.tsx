import React from 'react';
import { FlexRow } from '../layout/styles';
import { bottomBarStyles } from './bottomBar.styles';

interface BottomBarProps {
  children?: React.ReactNode;
}

const BottomBar = ({ children }: BottomBarProps) => {
  return <FlexRow className={bottomBarStyles.container}>{children}</FlexRow>;
};

export default BottomBar;
``;
