import React from 'react';
import { FlexCol, FlexRow, Page } from '../../../firefly/styles/layout';
import { BrandingFont, Heading } from '../../common/styles/fonts';
import SplashDemoImg from '../../../assets/splashDemo.png';
import { demoImgCss } from './styles';

const Splash = () => (
    <Page>
      <FlexRow>
        <img src={SplashDemoImg} className={demoImgCss} />
        <FlexCol>
          <BrandingFont.H3>Itinerary</BrandingFont.H3>
          <Heading.H1>hi</Heading.H1>
        </FlexCol>
      </FlexRow>
    </Page>
  )


export default Splash;