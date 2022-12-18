import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createFic } from '../../actions/fics/createFic';
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
import { FlexCss } from '../../components/styles/flex';
import { Heading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';

const AddFicPage = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setContent] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView('Add Fic');
  }, []);

  return (
    <>
      <Header>
        <Heading.H18>Create New Fic</Heading.H18>
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
            label="Description"
            height="100%"
            value={description}
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
            if (title && description) {
              createFic({
                title,
                description,
              }).then((newFic) => navigate(`/fic/${newFic?.slug}`));
            }
          }}
        >
          Save
        </Button>
      </BottomBar>
    </>
  );
};

export default AddFicPage;
