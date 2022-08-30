import React, { useEffect, useState } from 'react';
import { Page } from '../../firefly/styles/layout';
import SplashImg from '../../assets/illustrations/splash.png';
import PortfolioTab from '../profile/portfolioTab/PortfolioTab';
import Portfolio from '../../models/portfolio/PortfolioModel';
import AssetBanner from '../../components/assetBanner/AssetBanner';
import ProfileCard from '../../components/profileCard/ProfileCard';

const Splash = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();
  useEffect(() => {
    // getAllPortfolios().then(value => value && setPortfolios(value));
  });

  return (
    <Page>
      <ProfileCard />
    </Page>
  );
};

export default Splash;
