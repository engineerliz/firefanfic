import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '../../components/layout/styles';
import { Heading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import { portfolioEditStyles } from './styles';
import Button, { ButtonSize2 } from '../../components/button/Button';

interface PortfolioEditProps {
  portfolioId?: string;
}

const PortfolioEdit = ({ portfolioId }: PortfolioEditProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const onSubmit = () => {
    // if (title) {
    //   createPortfolio({
    //     title,
    //     description,
    //   }).then((value) => { value?.portfolioId && navigate(`/portfolio/${value.portfolioId}`) }
    //   );
    // }
  };

  return (
    <Page>
      <Heading.H26 className={portfolioEditStyles.title}>
        {portfolioId ? 'PortfolioName' : 'New Portfolio'}
      </Heading.H26>
      <div>
        <TextInput
          label="Title"
          className={portfolioEditStyles.input}
          value={title}
          onChange={(value) => {
            setTitle(value);
          }}
        />
        <TextInput
          label="Description"
          isMultiline={true}
          height={200}
          className={portfolioEditStyles.input}
          value={description}
          onChange={(value) => {
            setDescription(value);
          }}
        />
        <Button
          text="Create Portfolio"
          ButtonSize2={ButtonSize2.Small}
          onClick={onSubmit}
        />
      </div>
    </Page>
  );
};

export default PortfolioEdit;
