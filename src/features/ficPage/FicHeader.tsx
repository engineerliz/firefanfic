import React, { useEffect, useState } from 'react';
import { getUserById } from '../../actions/user/getUser';
import Header from '../../components/header/Header';
import { FlexCol } from '../../components/layout/styles';
import { colorCss, Colors } from '../../components/styles/colors';
import { Heading, Subheading } from '../../components/styles/fonts';
import FicModel from '../../models/fics/FicModel';
import { SodaUser } from '../../models/user/UserModel';

interface FicHeaderProps {
  fic: FicModel;
}

const FicHeader = ({ fic }: FicHeaderProps) => {
  const [user, setUser] = useState<SodaUser>();
  useEffect(() => {
    getUserById(fic.createdBy).then((value) => value && setUser(value));
  });

  return (
    <Header>
      <FlexCol>
        <Heading.H18>{fic.title}</Heading.H18>
        <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
          By {user?.username}
        </Subheading.SH12>
      </FlexCol>
    </Header>
  );
};

export default FicHeader;
