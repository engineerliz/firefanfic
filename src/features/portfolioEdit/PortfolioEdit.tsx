import React, { useState } from 'react'
import { Page } from '../../firefly/styles/layout';
import {
  FormRow,
  FormLabel,
  TextArea,
} from '../../firefly/styles/forms'
import { Heading } from '../../components/styles/fonts';
import TextInput from '../../components/textInput/TextInput';
import { portfolioEditStyles } from './styles';
import Button, { ButtonSize } from '../../components/button/Button';
import createPortfolio from '../../actions/portfolio/createPortfolio';

interface PortfolioEditProps {
  portfolioId?: string;

}

const PortfolioEdit = ({
  portfolioId,
  ...props
}: PortfolioEditProps) => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const onSubmit = () => {
    if (title) {
      createPortfolio({
        title,
        description,
      });
    }
  }

  return <Page>
    <Heading.H26 className={portfolioEditStyles.title}>{portfolioId ? 'PortfolioName' : 'New Portfolio'}</Heading.H26>
    <div>
      {/* <form> */}
      {/* <FormRow> */}
      {/* <FormLabel htmlFor='title'>Title</FormLabel> */}
      {/* <TextInput type='text' name='title' defaultValue={''} required /> */}
      <TextInput
        label='Title'
        className={portfolioEditStyles.input}
        value={title}
        onChange={(value) => { setTitle(value) }}
      />
      <TextInput
        label='Description'
        isMultiline={true}
        height={200}
        className={portfolioEditStyles.input}
        value={description}
        onChange={(value) => { setDescription(value) }}
      />
      <Button
        text='Create Portfolio'
        buttonSize={ButtonSize.Small}
        onClick={onSubmit}
      />
      {/* </form> */}
    </div>
  </Page>
}

export default PortfolioEdit