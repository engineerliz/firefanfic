import { css } from '@emotion/css';
import React from 'react';
import { FlexRow } from '../layout/styles';
import { bottomBarStyles } from './bottomBar.styles';

interface BottomBarProps {
  children?: React.ReactNode;
  className?: string;
}

const BottomBar = ({ children, className }: BottomBarProps) => {
  return (
    <FlexRow className={css(bottomBarStyles.container, className)}>
      {children}
    </FlexRow>
  );
};

export default BottomBar;
``;
