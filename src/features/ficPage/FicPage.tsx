import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFicById } from '../../actions/fics/getFics';
import { getUserById } from '../../actions/user/getUser';
import FicRow from '../../components/ficRow/FicRow';
import ProfileCard from '../../components/profileCard/ProfileCard';
import { FlexCol, Page } from '../../firefly/styles/layout';
import Fic from '../../models/fics/FicModel';
import { SodaUser } from '../../models/user/UserModel';
import { UserContext } from '../App';
import FicEditButton from '../ficEdit/ficEditButton/FicEditButton';

const FicPage = () => {
  const { ficId } = useParams();
  const { user } = useContext(UserContext);
  const [fic, setFic] = useState<Fic>();
  const [author, setAuthor] = useState<SodaUser>();
  const [isAuthor, setIsAuthor] = useState<boolean>();

  useEffect(() => {
    ficId && getFicById(ficId).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    fic?.createdBy &&
      getUserById(fic?.createdBy).then((value) => value && setAuthor(value));
  }, [fic]);

  useEffect(() => {
    setIsAuthor(user.userId === fic?.createdBy);
  }, [fic]);

  if (fic) {
    return (
      <Page>
        <FicRow fic={fic} withButton={false} />
        <ProfileCard
          profileCardType={isAuthor ? 'default' : 'author'}
          displayText={`By ${author?.username}`}
          button={isAuthor && <FicEditButton type="chapter" />}
        />
      </Page>
    );
  }
  return <FlexCol></FlexCol>;
};

export default FicPage;
