import { css } from '@emotion/css';
import React from 'react'
import { buttonStyles } from './button.style';

export enum ButtonSize {
  XSmall,
  Small,
  Medium,
}

interface ButtonProps {
  text?: string;
  buttonSize?: ButtonSize;
  width?: number | string;
  frontColor?: string;
  backColor?: string;
  className?: string;
  children?: React.ReactNode;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  frontColor,
  backColor,
  className,
  children,
}: ButtonProps) => {

  return (
    <button onClick={onClick} className={css(className)}>
        {children}
    </button>
  )
}

export default Button