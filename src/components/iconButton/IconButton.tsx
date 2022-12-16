import React from 'react';
import Icon, { IconProps } from '../icon/Icon';
import { Colors } from '../styles/colors';
import { iconButtonStyles } from './iconButton.styles';

interface IconButtonProps extends IconProps {
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = Colors.Gray.V1,
  size = 'small',
  onClick,
}: IconButtonProps) => {
  return (
    <div onClick={onClick} className={iconButtonStyles.container}>
      <Icon icon={icon} size={size} color={color} />
    </div>
  );
};

export default IconButton;
