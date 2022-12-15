import React from 'react'
import { sideDrawerStyles } from './sideDrawer.styles';

interface SideDrawerProps {
  content?: React.ReactNode;
  isOpen?: boolean;
  onDismiss?: () => void;
}

const SideDrawer = ({
  content,
  isOpen,
  onDismiss,
}: SideDrawerProps) => {
  return (
    <>
      <div className={sideDrawerStyles.overlay(isOpen)} onClick={onDismiss} />
      <sideDrawerStyles.drawer className={sideDrawerStyles.container(isOpen)}>
        {content}
      </sideDrawerStyles.drawer>
    </>
  );
}

export default SideDrawer