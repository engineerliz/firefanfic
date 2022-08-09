import React from 'react'
import { FlexRow } from '../../firefly/styles/layout';
import { Subheading } from '../styles/fonts';
import { portfolioOwnerTileStyles } from './styles';

interface PortfolioOwnerTileProps {
  avatarUrl?: string;
  portfolioTitle?: string;
  portfolioOwnerName?: string;
}

const PortfolioOwnerTile = ({
  avatarUrl,
  portfolioTitle,
  portfolioOwnerName,
}: PortfolioOwnerTileProps) => {
  return (
    <FlexRow className={portfolioOwnerTileStyles.container}>
      <img src={avatarUrl} className={portfolioOwnerTileStyles.image} />
      <FlexRow>
        <Subheading.SH14 className={portfolioOwnerTileStyles.title}>
          {portfolioTitle}
        </Subheading.SH14>
        <Subheading.SH14 className={portfolioOwnerTileStyles.name}>
          by {portfolioOwnerName}
        </Subheading.SH14>
      </FlexRow>
    </FlexRow>
  )
}

export default PortfolioOwnerTile