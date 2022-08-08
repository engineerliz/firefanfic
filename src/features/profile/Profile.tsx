import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import logOut from '../../firefly/actions/logOut'
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import { Heading, Subheading } from '../../components/styles/fonts';
import { profileStyles } from './styles';
import Button, { ButtonSize } from '../../components/button/Button';
import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';
import PortfolioTab from './portfolioTab/PortfolioTab';
import { Colors } from '../../components/styles/colors';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { getPortfoliosByUserId } from '../../actions/portfolio/getPortfolios';
import { SodaUser } from '../../models/user/UserModel';

interface ProfileProps {
  user: SodaUser;
}

const Profile = ({
  user
}: ProfileProps) => {
  const navigate = useNavigate();
  const [userPortfolios, setUserPortfolios] = useState<Portfolio[]>();

  useEffect(() => {
    getPortfoliosByUserId(user.userId).then((value) => value && setUserPortfolios(value))
  }, [])

  return <FlexCol>
    <FlexRow className={css(profileStyles.profileContainer, FlexCss.alignCenter)}>
      {user.avatarUrl && <img
        src={user.avatarUrl}
        alt={user.avatarUrl}
        width="100"
        height="100"
        className={profileStyles.profilePic}
      />}
      <FlexCol>
        <Heading.H26>{user.displayName}</Heading.H26>
        <Subheading.SH14>{user.email}</Subheading.SH14>
        <FlexRow>
          <Button
            text="Edit Profile"
            buttonSize={ButtonSize.XSmall}
            className={profileStyles.logoutButton}
            textColor={Colors.White}
            onClick={() => navigate(`/edit-profile`, {
              state: {
                user,
              }
            })}
          />
          <Button
            text="Log Out"
            buttonSize={ButtonSize.XSmall}
            className={profileStyles.logoutButton}
            textColor={Colors.White}
            onClick={() => logOut().then(() => navigate(`/`))}
          />
        </FlexRow>
      </FlexCol>
    </FlexRow>
    <PortfolioTab portfolios={userPortfolios} />
  </FlexCol>
}

export default Profile
