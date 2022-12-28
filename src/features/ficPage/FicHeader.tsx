import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getUserById } from '../../actions/user/getUser';
import Header from '../../components/header/Header';
import { FlexCol, gapCss } from '../../components/layout/styles';
import { colorCss, Colors } from '../../components/styles/colors';
import { Subheading, Title } from '../../components/styles/fonts';
import FicModel from '../../models/fics/FicModel';
import { SodaUser } from '../../models/user/UserModel';
import { pointerCss } from '../../styles/common.styles';

interface FicHeaderProps {
  fic: FicModel;
}

const FicHeader = ({ fic }: FicHeaderProps) => {
  const [user, setUser] = useState<SodaUser>();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById(fic.createdBy).then((value) => value && setUser(value));
  }, []);

  return (
    <Header>
      <FlexCol className={gapCss(2)}>
        <Title.T18>{fic.title}</Title.T18>
        <Subheading.SH12
          className={css(colorCss(Colors.Gray.V3), pointerCss)}
          onClick={() => navigate(`/profile/${user?.username}`)}
        >
          By {user?.username}
        </Subheading.SH12>
      </FlexCol>
    </Header>
  );
};

export default FicHeader;
