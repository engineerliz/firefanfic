import React, { useContext } from 'react';
import { FlexCol } from '../../firefly/styles/layout';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import { profileCardStyles } from './profileCard.styles';
import { Subheading } from '../styles/fonts';
import { UserContext } from '../../features/App';
import Button from '../button/Button';
import { useNavigate } from 'react-router';
import { cx } from '@emotion/css';
import logOut from '../../firefly/actions/logOut';

interface ProfileCardProps {
  withLogout?: boolean;
  className?: string;
}

const ProfileCard = ({ withLogout, className }: ProfileCardProps) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <FlexCol
      className={cx(
        profileCardStyles.container,
        profileCardStyles.body,
        className,
      )}
    >
      <img src={LoveEmoji} className={profileCardStyles.emoji} />
      {user ? (
        <FlexCol className={profileCardStyles.body}>
          <FlexCol>
            <Subheading.SH14>Hey,</Subheading.SH14>
            <Subheading.SH18>{user.displayName}</Subheading.SH18>
          </FlexCol>

          <FlexCol>
            <Button
              size="Medium"
              type="Primary"
              className={profileCardStyles.createButton}
            >
              Create New Fic
            </Button>
            {withLogout && (
              <Button
                type="Secondary"
                onClick={() =>
                  logOut().then(() => {
                    navigate(`/`);
                    window.location.reload();
                  })
                }
              >
                Logout
              </Button>
            )}
          </FlexCol>
        </FlexCol>
      ) : (
        <Button
          size="Medium"
          type="Primary"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </Button>
      )}
    </FlexCol>
  );
};

export default ProfileCard;
