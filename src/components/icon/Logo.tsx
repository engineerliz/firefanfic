import { css } from '@emotion/css';
import React from 'react';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import { widthCss } from '../layout/styles';

interface LogoProps {
  size?: number;
}

const Logo = ({ size = 20 }: LogoProps) => {
  return <img src={LoveEmoji} className={css(widthCss(size))} />;
};

export default Logo;
