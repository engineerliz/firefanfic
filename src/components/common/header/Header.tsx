import React from 'react';
import { FlexRow } from '../../../firefly/styles/layout';
import { HeaderLink } from '../../../firefly/styles/links';
import { BrandingFont } from '../styles/fonts';
import { containerCss, contentContainerCss, waveCss } from './styles';
import Wave from '../../../assets/wave.png';

const Header = () => {
  return (
    <div className={containerCss} >
      <img src={Wave} className={waveCss} />
      <FlexRow className={contentContainerCss}>
        <HeaderLink to="/"><BrandingFont.H4>Ary</BrandingFont.H4></HeaderLink>
      </FlexRow>
    </div>
  )
}

export default Header;