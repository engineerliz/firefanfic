import { Dialog } from '@mui/material';
import React from 'react';
import { styledModalStyles } from './styledModal.styles';

export interface StyledModalProps {
  children?: any;
  open?: boolean;
  onClose: () => void;
}

const StyledModal = ({ children, open = false, onClose }: StyledModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className={styledModalStyles.modal}>
      {children}
    </Dialog>
  );
};

export default StyledModal;
