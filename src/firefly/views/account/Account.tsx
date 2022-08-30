import React, { useContext, useState } from 'react'

import {
  FlexCol,
  FlexRow,
  Page,
} from '../../styles/layout'
import { signIn } from '../../../actions/user/signIn'
import { UserContext } from '../../../features/App'
import ProfileCard from '../../../components/profileCard/ProfileCard'
import { accountStyles } from './account.styles'
import { List } from 'immutable'
import Tabs from '../../../components/tabs/Tabs'
import { profileStyles } from '../../../features/profile/styles'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);

  if (userContext.user) {
    return (
      <Page>
        <FlexRow>
          <ProfileCard className={accountStyles.profileCard} withLogout />
          <FlexCol className={accountStyles.body}>
            <Tabs
              tabLabels={List([
                'Your Fics',
                'Bookmarks',
                'Account'
              ])}
              onChange={(index) => setActiveTab(index)}
              className={profileStyles.tabs}
            />
            {/* {activeTab == 0 &&
              <PortfolioTab portfolios={userPortfolios} />
            } */}
          </FlexCol>
        </FlexRow>
      </Page>
    )
  }
  return (
    <Page>
      <div>
        <p>Log in to see your account</p>
        <button onClick={signIn}>Log in</button>
      </div>

    </Page>
  )
}

export default Account
