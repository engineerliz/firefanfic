import React from 'react';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import { Heading, Paragraph } from '../../components/styles/fonts';
import SplashImg from '../../assets/illustrations/splash.png';
import { splashStyles } from './styles';
import Button from '../../components/button/Button';

const Splash = () => (
    <Page>
      <FlexRow className={splashStyles.contentContainerCss}>
        <img src={SplashImg} alt="Splash" className={splashStyles.demoImgCss} />
        <FlexCol className={splashStyles.splashTextContainerCss}>
          <Heading.H52 className={splashStyles.headingSuperTextCss}>
            Monetize your portfolio
          </Heading.H52>
          <Paragraph.P22 className={splashStyles.headingH1TextCss}>
            Portfolios in 2022 look different. Showcase your work, sell your creations, and get hired.
          </Paragraph.P22>
          <Button
            text="Get Started"
            className={splashStyles.ctaButton}
          />
        </FlexCol>
      </FlexRow>
    </Page>
  )


export default Splash;