import { css } from '@emotion/css';
import React from 'react'
import { ColorStyles } from '../styles/colors';
import { Subheading } from '../styles/fonts';
import { buttonStyles } from './style';

export enum ButtonSize { 
  XSmall,
  Small,
  Medium,
}

interface ButtonProps {
  text: string;
  buttonSize?: ButtonSize;
  width?: number | string;
  onClick?: () => void;
  className?: string;
  children?: JSX.Element;
}

const ButtonText = ({
  text, 
  buttonSize = ButtonSize.Small, 
  // children,
}: ButtonProps) => {
  switch (buttonSize) {
    case ButtonSize.XSmall:
      return <Subheading.SH14 className={ColorStyles.Black}>
        {text}
      </Subheading.SH14>
    case ButtonSize.Small:
      return <Subheading.SH18 className={ColorStyles.Black}>
        {text}
      </Subheading.SH18>
    case ButtonSize.Small:
      return <Subheading.SH22 className={ColorStyles.Black}>
        {text}
      </Subheading.SH22>
  }
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  width,
  className,
  buttonSize = ButtonSize.Small, 
  ...props
}: ButtonProps) => {
  const buttonClassName = () => {
    switch (buttonSize) {
      case ButtonSize.XSmall:
        return buttonStyles.xSmallButtonCss(width)
      case ButtonSize.Small:
        return buttonStyles.smallButtonCss(width)
      case ButtonSize.Medium:
        return buttonStyles.mediumButtonCss(width)
    }
  }
  return (
    <button onClick={onClick} className={css(buttonClassName(), className)}>
      {ButtonText(props)}
    </button>
  )
}

export default Button