import { css } from '@emotion/css';
import React, { useState } from 'react'
import { FlexCol } from '../../firefly/styles/layout';
import { Heading, Subheading } from '../styles/fonts';
import { assetTileStyles } from './assetTile.styles';
import EmptyImg from '../../assets/illustrations/empty.png';

interface AssetTileProps {
  imgUrl?: string;
  title: string;
  subtitle?: string;
  size?: number | string;
  onClick?: () => void;
  className?: string;
}

const AssetTile = ({
  imgUrl,
  title,
  subtitle,
  size,
  onClick,
  className
}: AssetTileProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className={css(assetTileStyles.container(size), className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <img src={imgUrl ?? EmptyImg} className={assetTileStyles.backgroundImg} />
      <FlexCol className={assetTileStyles.textContainer(isHovering)}>
        <Heading.H18 className={assetTileStyles.text}>
          {title}
        </Heading.H18>
        <Subheading.SH14 className={assetTileStyles.text}>
          {subtitle}
        </Subheading.SH14>
      </FlexCol>
      <div className={assetTileStyles.overlay(isHovering)} />
    </div>
  )
}

export default AssetTile