import React, { useEffect, useState } from 'react'
import { FlexCol, FlexRow } from '../../../firefly/styles/layout';
import StoplightImg from '../../../assets/illustrations/stoplight.png';
import { portfolioTabStyles } from './styles';
import { Heading, Paragraph } from '../../../components/styles/fonts';
import Button, { ButtonSize } from '../../../components/button/Button';
import Portfolio from '../../../models/portfolio/PortfolioModel';
import { getAllPortfolios } from '../../../actions/portfolio/getPortfolios';
import { Link } from 'react-router-dom';

const PortfolioTab = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    getAllPortfolios().then((value) => value && setPortfolios(value))

  }, [])

  if (portfolios) {
    return <FlexCol>
      <Link to="/new-portfolio">
        <Button
          buttonSize={ButtonSize.XSmall}
          text="Create New"
        />
      </Link>
      <Heading.H26>Portfolios</Heading.H26>
      {portfolios.map(portfolio =>
        <>
          <Link to={`/portfolio/${portfolio.portfolioId}`}>
            <Heading.H18>{portfolio.title}</Heading.H18>
          </Link>
          <Paragraph.P14>{portfolio.portfolioId}</Paragraph.P14>

        </>
      )}
    </FlexCol>
  }

  return <FlexRow>
    <>
      <img src={StoplightImg} alt="Stoplight" className={portfolioTabStyles.image} />
      <FlexCol className={portfolioTabStyles.textContainer}>
        <Heading.H34>
          Get started by creating a portfolio
        </Heading.H34>
        <Paragraph.P22>
          A few simple steps to showcase your work.
        </Paragraph.P22>
        <Link to="/new-portfolio">
          <Button
            text="Create your portfolio"
            className={portfolioTabStyles.ctaButton}
          />
        </Link>
      </FlexCol>
    </>
  </FlexRow>
}

export default PortfolioTab
