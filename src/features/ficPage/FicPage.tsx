import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFicBySlug } from '../../actions/fics/getFics';
import { FlexCol, FlexRow, gapCss, View } from '../../components/layout/styles';
import FicModel from '../../models/fics/FicModel';
import { UserContext } from '../App';
import FicHeader from './FicHeader';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import ChapterModel from '../../models/chapters/ChapterModel';
import { List } from 'immutable';
import { getChaptersByFicId } from '../../actions/chapters/chapterActions';
import ChapterRow from '../../components/chapterRow/ChapterRow';
import { Paragraph, Subheading } from '../../components/styles/fonts';
import { colorCss, Colors } from '../../components/styles/colors';
import Icon from '../../components/icon/Icon';
import { FlexCss } from '../../components/styles/flex';
import { css } from '@emotion/css';

const FicPage = () => {
  const { slug } = useParams();
  const { user } = useContext(UserContext);
  const [fic, setFic] = useState<FicModel>();
  const [isAuthor, setIsAuthor] = useState<boolean>();
  const [chapters, setChapters] = useState<List<ChapterModel>>();
  const navigate = useNavigate();

  useEffect(() => {
    slug && getFicBySlug(slug).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    setIsAuthor(user?.userId === fic?.createdBy); 
    fic?.ficId &&
      getChaptersByFicId(fic?.ficId).then(
        (chapters) => chapters && setChapters(chapters),
      );
  }, [fic]);

  if (fic) {
    return (
      <>
        <FicHeader fic={fic} />
        <View>
          <FlexCol className={gapCss(30)}>
            <FlexCol className={gapCss(2)}>
              <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
                Description
              </Subheading.SH12>
              <Paragraph.P12>{fic.description}</Paragraph.P12>
            </FlexCol>
            <FlexCol className={gapCss(20)}>
              {chapters?.map((chapter) => {
                return chapter ? (
                  <ChapterRow chapter={chapter} key={chapter.id} fic={fic} />
                ) : (
                  <></>
                );
              })}
            </FlexCol>
          </FlexCol>
        </View>
        <BottomBar>
          {isAuthor ? (
            <Button onClick={() => navigate(`/add-chapter/${fic.ficId}`)}>
              <FlexRow className={css(gapCss(2), FlexCss.alignCenter)}>
                <Icon icon="plus" />
                Add Chapter
              </FlexRow>
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
