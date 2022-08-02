import React from 'react'
import { Route } from 'react-router-dom';
import { FlexCol, FlexRow } from '../../../firefly/styles/layout';
import StoplightImg from '../../../assets/illustrations/stoplight.png';
import { portfolioTabStyles } from './styles';
import { Heading, Paragraph } from '../../../components/styles/fonts';
import Button from '../../../components/button/Button';

const PortfolioTab = () => {
  return <FlexRow>
    <img src={StoplightImg} className={portfolioTabStyles.image} />
    <FlexCol className={portfolioTabStyles.textContainer}>
      <Heading.H34>
        Get started by creating a portfolio
      </Heading.H34>
      <Paragraph.P22>
        A few simple steps to showcase your work.
      </Paragraph.P22>
      <Button
        text="Create your portfolio"
        className={portfolioTabStyles.ctaButton}
      />
    </FlexCol>
  </FlexRow>
}

export default PortfolioTab
