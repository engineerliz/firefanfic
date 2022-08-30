import React, { useContext } from 'react'
import { FlexCol } from '../../firefly/styles/layout'
import LoveEmoji from "../../assets/illustrations/love-emoji.png";
import { profileCardStyles } from './profileCard.styles';
import { Subheading } from '../styles/fonts';
import { UserContext } from '../../features/App';
import Button from '../button/Button';

const ProfileCard = () => {
  const { user } = useContext(UserContext);
  console.log('user', user)
  return (
    <FlexCol className={profileCardStyles.container}>
      <img src={LoveEmoji} className={profileCardStyles.emoji} />
      {user ?
        <FlexCol>
          <Subheading.SH14>
            Welcome back,
          </Subheading.SH14>
          <Subheading.SH14>
            {user.displayName}
          </Subheading.SH14>
        </FlexCol>
        : <Button>Sign In</Button>
      }
    </FlexCol>
  )
}

export default ProfileCard