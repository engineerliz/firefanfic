import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createFic } from '../../actions/fics/createFic';
import { trackPageView } from '../../analytics/analytics';
import BottomBar from '../../components/bottomBar/BottomBar';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { FlexCol, View } from '../../components/layout/styles';
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
      <View>
        <FlexCol>
          <TextInput
            label="Title"
            value={title}
            onChange={(value) => {
              setTitle(value);
            }}
          />
          <TextInput
            isMultiline
            label="Description"
            height="200"
            value={description}
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
