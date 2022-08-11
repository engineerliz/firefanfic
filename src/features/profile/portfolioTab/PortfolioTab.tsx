import React from 'react'
import { FlexCol, FlexRow } from '../../../firefly/styles/layout';
import StoplightImg from '../../../assets/illustrations/stoplight.png';
import { portfolioTabStyles } from './styles';
import { Heading, Paragraph } from '../../../components/styles/fonts';
import Button, { ButtonSize } from '../../../components/button/Button';
import Portfolio from '../../../models/portfolio/PortfolioModel';
import { Link, useNavigate } from 'react-router-dom';
import AssetTile from '../../../components/assetTile/AssetTile';

interface PortfolioTabProps {
  portfolios?: Portfolio[];
}

const PortfolioTab = ({
  portfolios
}: PortfolioTabProps) => {
  const navigate = useNavigate();
  if (portfolios) {
    return (
      <FlexCol>
        <Link to="/edit-portfolio">
          <Button
            buttonSize={ButtonSize.XSmall}
            text="Create New"
          />
        </Link>
        <Heading.H26>Portfolios</Heading.H26>
        {portfolios.map(portfolio =>
          <div key={portfolio.portfolioId}>
            {/* <Heading.H18>{portfolio.title}</Heading.H18> */}
            <AssetTile
              title={portfolio.title}
              subtitle={portfolio.description}
              size={300}
              onClick={() => navigate(`/portfolio/${portfolio.portfolioId}`)}
            />
            <Paragraph.P14>{portfolio.portfolioId}</Paragraph.P14>

          </div>
        )}
      </FlexCol>
    )
  }

  return (
    <FlexRow>
      <img src={StoplightImg} alt="Stoplight" className={portfolioTabStyles.image} />
      <FlexCol className={portfolioTabStyles.textContainer}>
        <Heading.H34>
          Get started by creating a portfolio
        </Heading.H34>
        <Paragraph.P22>
          A few simple steps to showcase your work.
        </Paragraph.P22>
        <Link to="/edit-portfolio">
          <Button
            text="Create your portfolio"
            className={portfolioTabStyles.ctaButton}
          />
        </Link>
      </FlexCol>
    </FlexRow>
  )
}

export default PortfolioTab
