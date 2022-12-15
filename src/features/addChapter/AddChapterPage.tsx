import { List } from 'immutable';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createChapter,
  getChaptersByFicId,
} from '../../actions/chapters/chapterActions';
import { getFicById } from '../../actions/fics/getFics';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { FlexCol, View } from '../../components/layout/styles';
import { colorCss, Colors } from '../../components/styles/colors';
import { Heading, Subheading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import ChapterModel from '../../models/chapters/ChapterModel';
import FicModel from '../../models/fics/FicModel';

const AddChapterPage = () => {
  const { ficId } = useParams();
  const [fic, setFic] = useState<FicModel>();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [chapters, setChapters] = useState<List<ChapterModel> | void>();
  const navigate = useNavigate();

  useEffect(() => {
    ficId && getFicById(ficId).then((value) => value && setFic(value));
  }, []);

  useEffect(() => {
    ficId &&
      getChaptersByFicId(ficId).then((chapters) => setChapters(chapters));
  }, [ficId]);

  return (
    <>
      <Header>
        <Heading.H18>Add New Chapter</Heading.H18>
        <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
          {fic?.title}
        </Subheading.SH12>
      </Header>
      <View>
        <FlexCol>
          <TextInput
            label="Title"
            // className={ficEditStyles.input}
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <TextInput
            isMultiline
            label="Chapter"
            height="200"
            // className={ficEditStyles.input}
            value={content}
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
                content,
              });
              navigate(`/fic/${ficId}/chapter-${chapters?.size}`);
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
``;
