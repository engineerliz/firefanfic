import React, { useContext, useState } from 'react';
import { FlexCol, FlexRow } from '../../components/layout/styles';
import LoveEmoji from '../../assets/illustrations/love-emoji.png';
import { profileCardStyles } from './profileCard.styles';
import { Subheading } from '../styles/fonts';
import { UserContext } from '../../features/App';
import Button from '../button/Button';
import { Navigate, useNavigate } from 'react-router';
import { cx } from '@emotion/css';
import logOut from '../../firefly/actions/logOut';
import SideDrawer from '../sideDrawer/SideDrawer';
import FicEdit from '../../features/ficEdit/FicEdit';

type ProfileCardType = 'default' | 'author';
interface ProfileCardProps {
  profileCardType?: ProfileCardType;
  displayText?: string;
  button?: React.ReactNode;
  className?: string;
}

const ProfileCard = ({
  profileCardType = 'default',
  displayText,
  button,
  className,
}: ProfileCardProps) => {
  const { user } = useContext(UserContext);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSideDrawerDismiss = () => setIsEditOpen(false);
  return (
    <>
      <FlexRow className={cx(profileCardStyles.container, className)}>
        {profileCardType == 'default' && (
          <img
            src={LoveEmoji}
            className={profileCardStyles.emoji}
            onClick={() => navigate('/account')}
          />
        )}
        {profileCardType == 'author' && (
          <Subheading.SH18>{displayText}</Subheading.SH18>
        )}
        {button}
      </FlexRow>
      <SideDrawer
        isOpen={isEditOpen}
        onDismiss={onSideDrawerDismiss}
        content={<FicEdit onDismiss={onSideDrawerDismiss} />}
      />
    </>
  );
};

export default ProfileCard;
