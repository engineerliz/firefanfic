import { css } from '@emotion/css';
import React from 'react';
import { colorCss, Colors } from '../styles/colors';
import { Subheading } from '../styles/fonts';
import { buttonStyles } from './button.style';

export enum ButtonSize2 {
  XSmall,
  Small,
  Medium,
}

type ButtonType = 'Primary' | 'Secondary';
type ButtonSize = 'Small' | 'Medium' | 'Large';

interface ButtonProps {
  text?: string;
  ButtonSize2?: ButtonSize2;
  width?: number | string;
  frontColor?: string;
  backColor?: string;

  type?: ButtonType;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  size,
  className,
  children,
}: ButtonProps) => {
  const getTextColor = () => {
    if (type === 'Primary') {
      return colorCss(Colors.Black);
    }
    return colorCss(Colors.White);
  };

  const getText = () => {
    if (size === 'Large') {
      return (
        <Subheading.SH22
          className={css(getTextColor(), buttonStyles.large.padding)}
        >
          {children}
        </Subheading.SH22>
      );
    }
    if (size === 'Medium') {
      return (
        <Subheading.SH18
          className={css(getTextColor(), buttonStyles.medium.padding)}
        >
          {children}
        </Subheading.SH18>
      );
    }
    return (
      <Subheading.SH12
        className={css(getTextColor(), buttonStyles.small.padding)}
      >
        {children}
      </Subheading.SH12>
    );
  };

  const getContainerClassName = () => {
    if (type === 'Primary') {
      return buttonStyles.primary.container;
    }
    return buttonStyles.secondary.container;
  };
  return (
    <button
      onClick={onClick}
      className={css(getContainerClassName(), className)}
    >
      {getText()}
    </button>
  );
};

export default Button;
