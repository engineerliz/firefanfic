import React, { useEffect, useState } from 'react';
import { Page } from '../../firefly/styles/layout';
import SplashImg from '../../assets/illustrations/splash.png';
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
    <PortfolioTab portfolios={portfolios} />
  </Page>
}


export default Splash;