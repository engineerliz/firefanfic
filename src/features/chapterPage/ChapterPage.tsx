import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getChapterByIndex } from '../../actions/chapters/chapterActions';
import { getFicBySlug } from '../../actions/fics/getFics';
import BottomBar from '../../components/bottomBar/BottomBar';
import Header from '../../components/header/Header';
import { FlexCol, gapCss, View } from '../../components/layout/styles';
import { Colors } from '../../components/styles/colors';
import { FlexCss } from '../../components/styles/flex';
import { Paragraph, Subheading, Title } from '../../components/styles/fonts';
import ChapterModel from '../../models/chapters/ChapterModel';
import FicModel from '../../models/fics/FicModel';
import { pointerCss } from '../../styles/common.styles';
import { chapterPageStyles } from './chapterPage.styles';
import 'firebase/compat/storage';
import Firebase from 'firebase/compat/app';
import { getChapterContentId } from '../../actions/chapters/utils';
import { trackPageView } from '../../analytics/analytics';

const ChapterPage = () => {
  const { slug, chapterIndex } = useParams();
  const [fic, setFic] = useState<FicModel>();
  const [chapter, setChapter] = useState<ChapterModel>();
  const [content, setContent] = useState<string>();
  const navigate = useNavigate();

  const index = chapterIndex ? parseInt(chapterIndex) : 1;

  useEffect(() => {
    trackPageView('Chapter Page');
    getFicBySlug(slug).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    fic?.ficId &&
      chapterIndex &&
      getChapterByIndex(fic?.ficId, index).then(
        (chapter) => chapter && setChapter(chapter),
      );
  }, [fic]);

  useEffect(() => {
    if (fic?.ficId && chapter?.id) {
      setTimeout(() => {
        Firebase.storage()
          .ref()
          .child(`/content/${getChapterContentId(fic?.ficId, chapter?.id)}`)
          .getDownloadURL()
          .then((url) => {
            fetch(url).then((r) => {
              r.text().then((data) => setContent(data));
            });
          });
      }, 50);
    }
  }, [chapter]);

  return (
    <>
      <Header />
      <View>
        <FlexCol className={gapCss(15)}>
          <FlexCol className={gapCss(2)}>
            <Subheading.SH12 color={Colors.Gray.V3}>
              Chapter {index}
            </Subheading.SH12>
            <Title.T18>{chapter?.title}</Title.T18>
          </FlexCol>
          <Paragraph.P12 className={chapterPageStyles.content}>
            {content}
          </Paragraph.P12>
        </FlexCol>
      </View>
      <BottomBar className={FlexCss.spaceBetween}>
        <Subheading.SH12
          className={pointerCss}
          onClick={() => navigate(`/fic/${fic?.slug}`)}
        >
          {fic?.title}
        </Subheading.SH12>
      </BottomBar>
    </>
  );
};

export default ChapterPage;
