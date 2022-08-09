import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getArtifactsByPortfolioId } from '../../actions/artifacts/getArtifacts';
import { getPortfolioById } from '../../actions/portfolio/getPortfolios';
import { getCurrentUser, getCurrentUserId, getUserById } from '../../actions/user/getUser';
import Button, { ButtonSize } from '../../components/button/Button';
import FloatingFooter from '../../components/floatingFooter/FloatingFooter';
import PortfolioOwnerTile from '../../components/portfolioOwnerTile/PortfolioOwnerTile';
import SideDrawer from '../../components/sideDrawer/SideDrawer';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import Artifact from '../../models/artifact/ArtifactModel';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { SodaUser } from '../../models/user/UserModel';
import ArtifactEdit from '../artifactEdit/ArtifactEdit';
import { portfolioPageStyles } from './styles';


const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [portfolioCreator, setPortfolioCreator] = useState<SodaUser>();
  const [currentUser, setCurrentUser] = useState<SodaUser>();
  const [isArtifactDrawerOpen, setIsArtifactDrawerOpen] = useState<boolean>(false);
  const [artifacts, setArtifacts] = useState<Artifact[]>();

  useEffect(() => {
    portfolioId &&
      getPortfolioById(portfolioId).then(
        (value) => value && setPortfolio(value)
      );
    portfolioId &&
      getArtifactsByPortfolioId(portfolioId).then(
        (value) => value && setArtifacts(value)
      );
  }, [])

  useEffect(() => {
    console.log('setCurrentUser')
    getCurrentUser()?.then(value => value && setCurrentUser(value));
  }, [getCurrentUserId()])

  useEffect(() => {
    portfolio?.createdBy && getUserById(portfolio?.createdBy).then(value => value && setPortfolioCreator(value))
  }, [portfolio])

  const getRightButtons = () => {
    console.log('currentUser?.userId', currentUser?.userId, 'portfolioCreator?.userId', portfolioCreator?.userId)
    if (currentUser?.userId == portfolioCreator?.userId) {
      return [
        <Button
          buttonSize={ButtonSize.XSmall}
          text='Edit Soda'
        />,
        <Button
          buttonSize={ButtonSize.XSmall}
          text='Add Pop'
          onClick={() => setIsArtifactDrawerOpen(true)}
        />
      ];
    }
  }
  const onSideDrawerDismiss = () => setIsArtifactDrawerOpen(false);

  return (
    <>
      <Page>
        <FlexRow className={portfolioPageStyles.portfolioHeaderContainer}>
          <FlexCol className={portfolioPageStyles.portfolioHeader}>
            <Heading.H26>
              {portfolio ? portfolio.title : 'Portfolio'}
            </Heading.H26>
          </FlexCol>
        </FlexRow>
        <Paragraph.P14>{portfolio && portfolio.description}</Paragraph.P14>
        <div>
          {artifacts?.map(
            artifact => (
              <div>
                <Subheading.SH18>{artifact.title}</Subheading.SH18>
                {artifact.images && <img src={artifact.images[0].url} width={100} height={100} />}
              </div>
            )
          )}
        </div>
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
      <SideDrawer
        // isOpen={true}
        isOpen={isArtifactDrawerOpen}
        onDismiss={onSideDrawerDismiss}
        content={
          <ArtifactEdit
            onDismiss={onSideDrawerDismiss}
            portfolio={portfolio}
          />
        }
      />
    </>
  )
}

export default PortfolioPage