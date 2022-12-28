import { css } from '@emotion/css';
import React from 'react';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;

  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={css(className)}>
      {children}
    </button>
  );
};

export default Button;
