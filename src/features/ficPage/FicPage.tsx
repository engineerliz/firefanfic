import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFicById, getFicBySlug } from '../../actions/fics/getFics';
import { getUserById } from '../../actions/user/getUser';
import { FlexCol, View } from '../../components/layout/styles';
import FicModel from '../../models/fics/FicModel';
import { SodaUser } from '../../models/user/UserModel';
import { UserContext } from '../App';
import FicHeader from './FicHeader';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import ChapterModel from '../../models/chapters/ChapterModel';
import { List } from 'immutable';
import { getChaptersByFicId } from '../../actions/chapters/chapterActions';

const FicPage = () => {
  const { ficId } = useParams();
  const { user } = useContext(UserContext);
  const [fic, setFic] = useState<FicModel>();
  const [isAuthor, setIsAuthor] = useState<boolean>();
  const [chapters, setChapters] = useState<List<void | ChapterModel>>();
  const navigate = useNavigate();

  useEffect(() => {
    ficId && getFicBySlug(ficId).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    setIsAuthor(user.userId === fic?.createdBy);
    getChaptersByFicId(ficId).then(
      (chapters) => chapters && setChapters(chapters),
    );
  }, [fic]);

  console.log('user', user);
  if (fic) {
    return (
      <>
        <FicHeader fic={fic} />
        <View></View>
        <BottomBar>
          {isAuthor ? (
            <Button
              size="Medium"
              onClick={() => navigate(`/add-chapter/${ficId}`)}
            >
              Add Chapter
            </Button>
          ) : (
            <Button size="Medium">Subscribe</Button>
          )}
        </BottomBar>
      </>
    );
  }
  return <FlexCol></FlexCol>;
};

export default FicPage;
