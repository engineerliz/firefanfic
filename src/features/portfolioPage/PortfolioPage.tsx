import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPortfolioById } from '../../actions/portfolio/getPortfolios';
import { getCurrentUser, getUserById } from '../../actions/user/getUser';
import Button, { ButtonSize } from '../../components/button/Button';
import FloatingFooter from '../../components/floatingFooter/FloatingFooter';
import PortfolioOwnerTile from '../../components/portfolioOwnerTile/PortfolioOwnerTile';
import { Heading, Paragraph } from '../../components/styles/fonts';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { SodaUser } from '../../models/user/UserModel';
import { portfolioPageStyles } from './styles';


const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [portfolioCreator, setPortfolioCreator] = useState<SodaUser>();
  const [currentUser, setCurrentUser] = useState<SodaUser>();

  useEffect(() => {
    portfolioId &&
      getPortfolioById(portfolioId).then(
        (value) => value && setPortfolio(value)
      )
    getCurrentUser()?.then(value => value && setCurrentUser(value))
  }, [])

  useEffect(() => {
    portfolio?.createdBy && getUserById(portfolio?.createdBy).then(value => value && setPortfolioCreator(value))
  }, [portfolio])

  const getRightButtons = () => {
    if (currentUser?.userId == portfolioCreator?.userId) {
      return [
        <Button
          buttonSize={ButtonSize.XSmall}
          text='Edit Soda'
        />,
        <Button
          buttonSize={ButtonSize.XSmall}
          text='Add Pop'
        />
      ];
    }
  }
  return <Page>
    <FlexRow className={portfolioPageStyles.portfolioHeaderContainer}>
      <FlexCol className={portfolioPageStyles.portfolioHeader}>
        <Heading.H26>
          {portfolio ? portfolio.title : 'Portfolio'}
        </Heading.H26>
      </FlexCol>
    </FlexRow>
    <Paragraph.P14>{portfolio && portfolio.description}</Paragraph.P14>
    <FloatingFooter
      left={
        <PortfolioOwnerTile
          portfolioOwnerName={portfolioCreator?.displayName}
          portfolioTitle={portfolio?.title}
          avatarUrl={portfolioCreator?.avatarUrl}
        />
      }
      rightButtons={getRightButtons()}
    />
  </Page>
}

export default PortfolioPage