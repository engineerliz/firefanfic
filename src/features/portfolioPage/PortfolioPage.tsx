import { List } from 'immutable';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getCurrentUser,
  getCurrentUserId,
  getUserById,
} from '../../actions/user/getUser';
import AssetTile from '../../components/assetTile/AssetTile';
import Button, { ButtonSize2 } from '../../components/button/Button';
import FloatingFooter from '../../components/floatingFooter/FloatingFooter';
import PortfolioOwnerTile from '../../components/portfolioOwnerTile/PortfolioOwnerTile';
import SideDrawer from '../../components/sideDrawer/SideDrawer';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import { FlexCol, FlexRow, Page } from '../../firefly/styles/layout';
import Artifact from '../../models/artifact/ArtifactModel';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { SodaUser } from '../../models/user/UserModel';
import { UserContext } from '../App';
import ArtifactEdit from '../artifactEdit/ArtifactEdit';
import { portfolioPageStyles } from './portfolioPage.styles';

const PortfolioPage = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio>();
  const [portfolioCreator, setPortfolioCreator] = useState<SodaUser>();
  const userContext = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState<SodaUser>();
  const [isArtifactDrawerOpen, setIsArtifactDrawerOpen] =
    useState<boolean>(false);
  const [artifacts, setArtifacts] = useState<List<Artifact>>();

  // useEffect(() => {
  //   portfolioId &&
  //     getPortfolioById(portfolioId).then(
  //       (value) => value && setPortfolio(value),
  //     );
  //   portfolioId &&
  //     getArtifactsByPortfolioId(portfolioId).then(
  //       (value) => value && setArtifacts(value),
  //     );
  // }, []);

  useEffect(() => {
    console.log('setCurrentUser');
    getCurrentUser()?.then((value) => value && setCurrentUser(value));
  }, [getCurrentUserId()]);

  useEffect(() => {
    portfolio?.createdBy &&
      getUserById(portfolio?.createdBy).then(
        (value) => value && setPortfolioCreator(value),
      );
  }, [portfolio]);

  const getRightButtons = () => {
    if (userContext.user?.userId == portfolioCreator?.userId) {
      return [
        <Button ButtonSize2={ButtonSize2.XSmall} text="Edit Soda" />,
        <Button
          ButtonSize2={ButtonSize2.XSmall}
          text="Add Pop"
          onClick={() => setIsArtifactDrawerOpen(true)}
        />,
      ];
    }
  };
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
        <FlexRow className={portfolioPageStyles.artifactsRow}>
          {artifacts?.map((artifact) =>
            artifact.images?.map((image) => (
              <AssetTile
                key={image.id}
                title={artifact.title}
                subtitle={artifact.description}
                imgUrl={image.url}
                size="25%"
              />
              // <img src={image.url} width={100} height={100} />
            )),
          )}
        </FlexRow>
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
          <ArtifactEdit onDismiss={onSideDrawerDismiss} portfolio={portfolio} />
        }
      />
    </>
  );
};

export default PortfolioPage;
