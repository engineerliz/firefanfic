import React, { useEffect, useState } from 'react'
import { FlexCol, FlexRow } from '../../../firefly/styles/layout';
import StoplightImg from '../../../assets/illustrations/stoplight.png';
import { portfolioTabStyles } from './styles';
import { Heading, Paragraph } from '../../../components/styles/fonts';
import Button from '../../../components/button/Button';
import { InternalLink } from '../../../firefly/styles/links';
import Portfolio from '../../../models/portfolio/PortfolioModel';
import { getAllPortfolios } from '../../../actions/portfolio/getPortfolios';
import { Link } from 'react-router-dom';

const PortfolioTab = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    getAllPortfolios().then((value) => value && setPortfolios(value))
    // getAllPortfolios().then((value) => setPortfolios(value?.docs)))

  }, [])

  console.log('portfolios', portfolios)
  if (portfolios) {
    return <FlexCol>
      <Heading.H26>Portfolios</Heading.H26>
      {portfolios.map(portfolio =>
        <Link to={`/portfolio/${portfolio.portfolioId}`}>
          <Heading.H18>{portfolio.title}</Heading.H18>
          <Paragraph.P14>{portfolio.portfolioId}</Paragraph.P14>
        </Link>
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
        <Button
          text="Create your portfolio"
          className={portfolioTabStyles.ctaButton}
        // onClick={() => createPortfolio({
        //   title: 'portfolio 1',
        //   description: 'hello hello'
        // })}
        />
      </FlexCol>
    </>
  </FlexRow>
}

export default PortfolioTab
