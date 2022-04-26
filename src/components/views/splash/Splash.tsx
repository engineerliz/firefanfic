import React from 'react';
import { FlexCol, FlexRow, Page } from '../../../firefly/styles/layout';
import { BrandingFont, Heading } from '../../common/styles/fonts';
import SplashDemoImg from '../../../assets/splashDemo.png';
import { contentContainerCss, demoImgCss } from './styles';
import { ColorStyles } from '../../common/styles/colors';

const Splash = () => (
    <Page>
      <FlexRow className={contentContainerCss}>
        <img src={SplashDemoImg} className={demoImgCss} />
        <FlexCol>
          <FlexRow>
            <BrandingFont.H3 className={ColorStyles.Secondary}>Itiner</BrandingFont.H3>
            <BrandingFont.H3 className={ColorStyles.Red}>ary</BrandingFont.H3>
          </FlexRow>
          <Heading.H1>The new way to</Heading.H1>
          <Heading.Super1 className={ColorStyles.Red}>plan, share, inspire</Heading.Super1>
          <Heading.H1>travel.</Heading.H1>
        </FlexCol>
      </FlexRow>
    </Page>
  )


export default Splash;