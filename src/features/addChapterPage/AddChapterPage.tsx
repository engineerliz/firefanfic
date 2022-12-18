import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createChapter,
  getNextChapterIndex,
} from '../../actions/chapters/chapterActions';
import { getFicById } from '../../actions/fics/getFics';
import { trackPageView } from '../../analytics/analytics';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import {
  FlexCol,
  flexGrowCss,
  heightCss,
  View,
} from '../../components/layout/styles';
import { colorCss, Colors } from '../../components/styles/colors';
import { FlexCss } from '../../components/styles/flex';
import { Heading, Subheading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import FicModel from '../../models/fics/FicModel';

const AddChapterPage = () => {
  const { ficId } = useParams();
  const [fic, setFic] = useState<FicModel>();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [nextIndex, setNextIndex] = useState<number>();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('Add Chapter');

    ficId && getFicById(ficId).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    ficId &&
      getNextChapterIndex(ficId).then((index) => index && setNextIndex(index));
  }, [ficId]);

  return (
    <>
      <Header>
        <Heading.H18>Add New Chapter</Heading.H18>
        <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
          {fic?.title}
        </Subheading.SH12>
      </Header>
      <View className={FlexCss.flex}>
        <FlexCol className={flexGrowCss(1)}>
          <TextInput
            label="Title"
            value={title}
            className={flexGrowCss(1)}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <TextInput
            isMultiline
            label="Chapter"
            height="100%"
            value={content}
            className={css(flexGrowCss(2), heightCss('100%'))}
            onChange={(value) => {
              setContent(value);
            }}
          />
        </FlexCol>
      </View>
      <BottomBar>
        <Button
          size="Medium"
          onClick={() => {
            if (ficId && title && content) {
              createChapter({
                ficId,
                title,
                // content: new Blob([`${content}`], { type: 'text/html' }),
                content,
              });
              navigate(`/fic/${fic?.slug}/${nextIndex}`);
            }
          }}
        >
          Save
        </Button>
      </BottomBar>
    </>
  );
};

export default AddChapterPage;
