import React from 'react'
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { splashStyles } from '../../features/splash/styles';
import { FlexCol, FlexRow } from '../../firefly/styles/layout';
import Button from '../button/Button';
import { Heading, Paragraph } from '../styles/fonts';
import { assetBannerStyles } from './styles';

interface AssetBannerProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  linkTo?: string;
  customRightContent?: React.ReactNode;
  className?: string;
}
const AssetBanner = ({
  imageSrc,
  title,
  subtitle,
  buttonText,
  linkTo,
  customRightContent,
  className,
}: AssetBannerProps) => {
  return (
    <FlexRow className={css(assetBannerStyles.container, className)}>
      <FlexRow className={assetBannerStyles.iamgeContainer}>
        <img src={imageSrc} className={assetBannerStyles.image} />
      </FlexRow>
      {customRightContent ?
        customRightContent :
        <FlexCol className={assetBannerStyles.contentContainer}>
          <Heading.H52 className={splashStyles.headingSuperTextCss}>
            {title}
          </Heading.H52>
          <Paragraph.P22 className={splashStyles.headingH1TextCss}>
            {subtitle}
          </Paragraph.P22>
          {linkTo && <Link to={linkTo}>
            {buttonText && <Button
              text={buttonText}
              className={splashStyles.ctaButton}
            />}
          </Link>}
        </FlexCol>
      }
    </FlexRow>
  )
}

export default AssetBanner