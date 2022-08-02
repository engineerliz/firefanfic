import React from 'react';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import { Heading, Paragraph } from '../../components/styles/fonts';
import SplashImg from '../../assets/illustrations/splash.png';
import { brandingTextCss, contentContainerCss, demoImgCss, headingH1TextCss, headingSuperTextCss, itineraryTextCss, splashTextContainerCss } from './styles';
import { ColorStyles } from '../../components/styles/colors';
import { css } from '@emotion/css';

const Splash = () => (
    <Page>
      <FlexRow className={contentContainerCss}>
        <img src={SplashImg} className={demoImgCss} />
        <FlexCol className={splashTextContainerCss}>
          <Heading.H52 className={headingSuperTextCss}>Monetize your portfolio</Heading.H52>
          <Paragraph.P22 className={headingH1TextCss}>
            Portfolios in 2022 look different. Showcase your work, sell your creations, and get hired.
          </Paragraph.P22>
        </FlexCol>
      </FlexRow>
    </Page>
  )


export default Splash;