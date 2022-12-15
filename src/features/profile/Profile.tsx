import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logOut from '../../firefly/actions/logOut';
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import { profileStyles } from './styles';
import Button, { ButtonSize2 } from '../../components/button/Button';
import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';
import { Colors } from '../../components/styles/colors';
import Portfolio from '../../models/portfolio/PortfolioModel';
import { SodaUser } from '../../models/user/UserModel';
import Tabs from '../../components/tabs/Tabs';
import { List } from 'immutable';

interface ProfileProps {
  user: SodaUser;
}

const Profile = ({ user }: ProfileProps) => {
  const navigate = useNavigate();
  const [userPortfolios, setUserPortfolios] = useState<Portfolio[]>();
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    // getPortfoliosByUserId(user.userId).then(
    //   (value: any) => value && setUserPortfolios(value),
    // );
  }, []);

  return (
    <FlexCol>
      <FlexRow
        className={css(profileStyles.profileContainer, FlexCss.alignCenter)}
      >
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.avatarUrl}
            width="100"
            height="100"
            className={profileStyles.profilePic}
          />
        )}
        <FlexCol>
          <Heading.H26>{user.displayName}</Heading.H26>
          <Subheading.SH14>{user.email}</Subheading.SH14>
          <Paragraph.P14>{user.bio}</Paragraph.P14>
          <FlexRow>
            <Button
              text="Edit Profile"
              ButtonSize2={ButtonSize2.XSmall}
              className={profileStyles.logoutButton}
              onClick={() =>
                navigate(`/edit-profile`, {
                  state: {
                    user,
                  },
                })
              }
            />
            <Button
              text="Log Out"
              ButtonSize2={ButtonSize2.XSmall}
              className={profileStyles.logoutButton}
              onClick={() =>
                logOut().then(() => {
                  navigate(`/`);
                  window.location.reload();
                })
              }
            />
          </FlexRow>
        </FlexCol>
      </FlexRow>
      <Tabs
        tabLabels={List(['Portfolios', 'Library', 'Account'])}
        onChange={(index) => setActiveTab(index)}
        className={profileStyles.tabs}
      />
      {/* {activeTab == 0 && <PortfolioTab portfolios={userPortfolios} />} */}
    </FlexCol>
  );
};

export default Profile;
