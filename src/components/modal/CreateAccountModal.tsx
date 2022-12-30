import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Logo from '../icon/Logo';
import { FlexCol, gapCss } from '../layout/styles';
import { FlexCss } from '../styles/flex';
import { Subheading } from '../styles/fonts';
import StyledModal, { StyledModalProps } from './StyledModal';

const CreateAccountModal = ({ open = false, onClose }: StyledModalProps) => {
  return (
    <StyledModal open={open} onClose={onClose}>
      <FlexCol className={FlexCss.alignCenter}>
        <Logo />
        <Subheading.SH14>Create an account to subscribe</Subheading.SH14>
        <Link to="/signin">
          <Button type="Primary" size="Medium">
            Create account
          </Button>
        </Link>
      </FlexCol>
    </StyledModal>
  );
};

export default CreateAccountModal;
