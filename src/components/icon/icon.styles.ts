import { css } from "@emotion/css";
import { IconSize } from "./Icon";

const getIconSize = (size: IconSize) => {
  switch (size) {
    case 'xSmall': 
      return 15;
    case 'small':
      return 20;
    case 'medium': 
      return 25;
    case 'large': 
      return 30;
  }
}

export const iconStyles = {
  icon: (color: string, size: IconSize) => css({
    color,
    height: getIconSize(size),
    width: getIconSize(size),
    'svg': {
      height: '100%',
      width: '100%',
      color: color,
    }
  })
}