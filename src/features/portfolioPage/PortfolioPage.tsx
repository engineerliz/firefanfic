import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPortfolioById } from '../../actions/portfolio/getPortfolios';
import { Heading, Paragraph } from '../../components/styles/fonts';
import { Page } from '../../firefly/styles/layout';
import Portfolio from '../../models/portfolio/PortfolioModel';


const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();


  useEffect(() => {
    portfolioId &&
      getPortfolioById(portfolioId).then(
        (value) => value && setPortfolio(value)
      )
  }, [])

  return <Page>
    <Heading.H26>{portfolio ? portfolio.title : 'Portfolio'}</Heading.H26>
    <Paragraph.P14>{portfolio && portfolio.description}</Paragraph.P14>
  </Page>
}

export default PortfolioPage