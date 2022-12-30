import { css } from '@emotion/css';
import {
  ColumnsHorizontalIcon,
  EmojiHappyIcon,
  FolderIcon,
  GlobeIcon,
  SunIcon,
  UserIcon,
  PlusIcon,
  HomeIcon,
  CheckCircleIcon,
  StarIcon,
  RowsIcon,
} from '@iconicicons/react';
import { iconStyles } from './icon.styles';
import React from 'react';
import { Colors } from '../styles/colors';

export type IconSize = 'xSmall' | 'small' | 'medium' | 'large';
export type IconName =
  | 'sun'
  | 'happyEmoji'
  | 'columnsHorizontal'
  | 'folder'
  | 'globe'
  | 'user'
  | 'plus'
  | 'home'
  | 'checkCircle'
  | 'star'
  | 'rows';

const getIcon = (icon: IconName) => {
  switch (icon) {
    case 'sun':
      return <SunIcon />;
    case 'happyEmoji':
      return <EmojiHappyIcon />;
    case 'columnsHorizontal':
      return <ColumnsHorizontalIcon />;
    case 'folder':
      return <FolderIcon />;
    case 'globe':
      return <GlobeIcon />;
    case 'user':
      return <UserIcon />;
    case 'plus':
      return <PlusIcon />;
    case 'home':
      return <HomeIcon />;
    case 'checkCircle':
      return <CheckCircleIcon />;
    case 'star':
      return <StarIcon />;
    case 'rows':
      return <RowsIcon />;
  }
};

export interface IconProps {
  icon: IconName;
  color?: string;
  size?: IconSize;
  className?: string;
}

const Icon = ({
  icon,
  color = Colors.Gray.V1,
  size = 'small',
  className,
}: IconProps) => {
  return (
    <div className={css(iconStyles.icon(color, size), className)}>
      {getIcon(icon)}
    </div>
  );
};

export default Icon;
