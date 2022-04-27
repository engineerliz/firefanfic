import React from 'react';
import { FlexCol, FlexRow, Page } from '../../../firefly/styles/layout';
import { BrandingFont, Heading } from '../../common/styles/fonts';
import SplashDemoImg from '../../../assets/splashDemo.png';
import { brandingTextCss, contentContainerCss, demoImgCss, headingH1TextCss, headingSuperTextCss, itineraryTextCss } from './styles';
import { ColorStyles } from '../../common/styles/colors';
import { css } from '@emotion/css';

const Splash = () => (
    <Page>
      <FlexRow className={contentContainerCss}>
        <img src={SplashDemoImg} className={demoImgCss} />
        <FlexCol>
          <FlexRow className={itineraryTextCss}>
            <BrandingFont.H3 className={css(ColorStyles.Secondary, brandingTextCss)}>Itiner</BrandingFont.H3>
            <BrandingFont.H3 className={css(ColorStyles.Red, brandingTextCss)}>ary</BrandingFont.H3>
          </FlexRow>
          <Heading.H1 className={headingH1TextCss}>The new way to</Heading.H1>
          <Heading.Super1 className={css(ColorStyles.Red, headingSuperTextCss)}>plan, share, inspire</Heading.Super1>
          <Heading.H1 className={headingH1TextCss}>travel.</Heading.H1>
        </FlexCol>
      </FlexRow>
    </Page>
  )


export default Splash;