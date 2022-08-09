import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { editUser } from '../../../actions/user/editUser';
import Button, { ButtonSize } from '../../../components/button/Button';
import { Heading } from '../../../components/styles/fonts';
import TextInput from '../../../components/textInput/TextInput';
import { FlexCol, FlexRow, Page } from '../../../firefly/styles/layout';
import { SodaUser } from '../../../models/user/UserModel';

const EditProfile = () => {
  const location: any = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState<SodaUser>();
  const [nameInput, setNameInput] = useState<string | undefined>();
  const [usernameInput, setUsernameInput] = useState<string | undefined>();
  const [bioInput, setBioInput] = useState<string | undefined>();
  const [avatarUrlInput, setAvatarUrlInput] = useState<string | undefined>();

  useEffect(() => {
    setUser(location.state.user)
  }, [])

  useEffect(() => {
    setNameInput(user?.displayName)
    setUsernameInput(user?.username)
    setBioInput(user?.bio)
  }, [user])

  console.log('edit user', user)
  return <Page>
    <Heading.H34>Edit Profile</Heading.H34>
    <TextInput
      label='Name'
      value={nameInput}
      onChange={(value) => setNameInput(value)}
    />
    <TextInput
      label='Username'
      value={usernameInput}
      onChange={(value) => setUsernameInput(value)}
    />
    <TextInput
      label='Bio'
      value={bioInput}
      height={150}
      onChange={(value) => setBioInput(value)}
      isMultiline={true}
    />
    <Button
      buttonSize={ButtonSize.Small}
      text='Save'
      onClick={() => {
        user && editUser(user, {
          displayName: nameInput ?? '',
          username: usernameInput ?? '',
          bio: bioInput ?? '',
          // avatarUrl: avatarUrlInput,
        }).then(() => navigate('/account'))
      }}
    />
  </Page>
}

export default EditProfile