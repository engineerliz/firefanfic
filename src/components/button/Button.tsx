import { css } from '@emotion/css';
import React from 'react'
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
  textColor?: string;
  className?: string;
  children?: JSX.Element;
  
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  width,
  className,
  buttonSize, 
  textColor,
  text,
}: ButtonProps) => {
  const buttonClassName = () => {
    switch (buttonSize) {
      case ButtonSize.XSmall:
        return buttonStyles.xSmallButtonCss(width)
      case ButtonSize.Small:
        return buttonStyles.smallButtonCss(width)
      case ButtonSize.Medium:
      default: 
        return buttonStyles.mediumButtonCss(width)
    }
  }

  const buttonText = () => {
    switch (buttonSize) {
      case ButtonSize.XSmall:
        return <Subheading.SH14 className={buttonStyles.buttonText(textColor)}>
          {text}
        </Subheading.SH14>
      case ButtonSize.Small:
        return <Subheading.SH18 className={buttonStyles.buttonText(textColor)}>
          {text}
        </Subheading.SH18>
      case ButtonSize.Medium:
      default:
        return <Subheading.SH22 className={buttonStyles.buttonText(textColor)}>
          {text}
        </Subheading.SH22>
    }
  }
  return (
    <button onClick={onClick} className={css(buttonClassName(), className)}>
      {buttonText()}
    </button>
  )
}

export default Button