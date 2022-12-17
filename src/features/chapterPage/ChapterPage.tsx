import { css } from '@emotion/css';
import { List } from 'immutable';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import {
  getChapterByIndex,
  getChaptersByFicId,
} from '../../actions/chapters/chapterActions';
import { getFicBySlug } from '../../actions/fics/getFics';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { FlexCol, FlexRow, gapCss, View } from '../../components/layout/styles';
import { Colors } from '../../components/styles/colors';
import { FlexCss } from '../../components/styles/flex';
import { Heading, Paragraph, Subheading } from '../../components/styles/fonts';
import ChapterModel from '../../models/chapters/ChapterModel';
import FicModel from '../../models/fics/FicModel';
import { pointerCss } from '../../styles/common.styles';
import { chapterPageStyles } from './chapterPage.styles';

const ChapterPage = () => {
  const { slug, chapterIndex } = useParams();
  const [fic, setFic] = useState<FicModel>();
  const [chapter, setChapter] = useState<ChapterModel>();
  const navigate = useNavigate();

  const index = chapterIndex ? parseInt(chapterIndex) : 1;

  useEffect(() => {
    getFicBySlug(slug).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    fic?.ficId &&
      chapterIndex &&
      getChapterByIndex(fic?.ficId, index).then(
        (chapters) => chapters && setChapter(chapters),
      );
  }, [fic]);

  return (
    <>
      <Header />
      <View>
        <FlexCol className={gapCss(15)}>
          <FlexCol className={gapCss(2)}>
            <Subheading.SH12 color={Colors.Gray.V3}>
              Chapter {index}
            </Subheading.SH12>
            <Heading.H18>{chapter?.title}</Heading.H18>
          </FlexCol>
          <Paragraph.P12 className={chapterPageStyles.content}>
            {chapter?.content}
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
