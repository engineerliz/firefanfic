import React, { useEffect, useState } from 'react';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import { Heading, Paragraph } from '../../components/styles/fonts';
import SplashImg from '../../assets/illustrations/splash.png';
import { splashStyles } from './styles';
import Button from '../../components/button/Button';
import { HeaderLink } from '../../firefly/styles/links';
import PortfolioTab from '../profile/portfolioTab/PortfolioTab';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { getAllPortfolios } from '../../actions/portfolio/getPortfolios';
import AssetBanner from '../../components/assetBanner/AssetBanner';

const Splash = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();
  useEffect(() => {
    getAllPortfolios().then(value => value && setPortfolios(value));
  })

  return <Page>
    <AssetBanner
      imageSrc={SplashImg}
      title='Monetize your portfolio'
      subtitle='Portfolios in 2022 look different. Showcase your work, sell your creations, and get hired.'
      linkTo='/edit-portfolio'
      buttonText='Get Started'
    />
    {/* <FlexRow className={splashStyles.contentContainerCss}>
      <img src={SplashImg} alt="Splash" className={splashStyles.demoImgCss} />
      <FlexCol className={splashStyles.splashTextContainerCss}>
        <Heading.H52 className={splashStyles.headingSuperTextCss}>
          Monetize your portfolio
        </Heading.H52>
        <Paragraph.P22 className={splashStyles.headingH1TextCss}>
          Portfolios in 2022 look different. Showcase your work, sell your creations, and get hired.
        </Paragraph.P22>
        <HeaderLink to="/edit-portfolio">
          <Button
            text="Get Started"
            className={splashStyles.ctaButton}
          />
        </HeaderLink>
      </FlexCol>
    </FlexRow> */}
    <PortfolioTab portfolios={portfolios} />
  </Page>
}


export default Splash;