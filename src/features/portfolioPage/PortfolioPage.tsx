import React, { useEffect, useState } from 'react'
import { Route, useParams, useSearchParams } from 'react-router-dom';
import { getPortfolioById } from '../../actions/portfolio/getPortfolios';
import { Heading } from '../../components/styles/fonts';
import { Page } from '../../firefly/styles/layout';
import Portfolio from '../../models/portfolio/PortfolioModel';


const PortfolioPage = () => {
  const params = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();


  useEffect(() => {

    params.portfolioId && getPortfolioById(params.portfolioId).then((value) => value && setPortfolio(value))
  }, [])
  console.log('portfolioId', params)
  return <Page>
    <Heading.H26>{portfolio ? portfolio.title : 'Portfolio'}</Heading.H26>
  </Page>
}

export default PortfolioPage