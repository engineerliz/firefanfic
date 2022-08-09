import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPortfolioById } from '../../actions/portfolio/getPortfolios';
import { getUserById } from '../../actions/user/getUser';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import { FlexCol, Page } from '../../firefly/styles/layout';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { SodaUser } from '../../models/user/UserModel';
import { portfolioPageStyles } from './styles';


const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [user, setUser] = useState<SodaUser>();


  useEffect(() => {
    portfolioId &&
      getPortfolioById(portfolioId).then(
        (value) => value && setPortfolio(value)
      )
  }, [])

  useEffect(() => {
    portfolio?.createdBy && getUserById(portfolio?.createdBy).then(value => value && setUser(value))
  }, [portfolio])

  return <Page>
    <FlexCol className={portfolioPageStyles.portfolioHeader}>
      <Heading.H26>{portfolio ? portfolio.title : 'Portfolio'}</Heading.H26>
      <Subheading.SH14>Soda By {user?.displayName}</Subheading.SH14>
    </FlexCol>
    <Paragraph.P14>{portfolio && portfolio.description}</Paragraph.P14>
  </Page>
}

export default PortfolioPage