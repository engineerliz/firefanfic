import React from 'react';
import { FlexRow } from '../../firefly/styles/layout';
import { floatingFooterStyles } from './styles';

interface FloatingFooterProps {
  left?: React.ReactNode;
  rightButtons?: React.ReactNode[];
}
const FloatingFooter = ({ left, rightButtons }: FloatingFooterProps) => {
  return (
    <FlexRow className={floatingFooterStyles.container}>
      {left}
      <FlexRow>
        {rightButtons?.map((button) => (
          <FlexRow
            className={floatingFooterStyles.rightButton}
            key={button?.toString()}
          >
            {button}
          </FlexRow>
        ))}
      </FlexRow>
    </FlexRow>
  );
};

export default FloatingFooter;
