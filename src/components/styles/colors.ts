import { css } from '@emotion/css';

const Branding = {
  Red: '#FF5040',
  Highlight: '#C0EBF4',
  Darklight: '#213361',
  BackgroundGradient: 'linear-gradient(142.91deg, #132248 0%, #050C1D 100%)',
  BlueGradient: 'linear-gradient(270deg, #69E5FF 0%, #5489FF 100%)',
  GreenGradient: 'linear-gradient(270deg, #0CFF8A 0%, #07FEEF 100%)',
}

const Gray = {
  V1: '#F3F3F3',
  V2: '#DFDFDF',
  V3: '#C6C6C6',
  V4: '#A8A8A8',
  V5: '#898989',
  V6: '#696969',
  V7: '#4D4D4D',
  V8: '#343434',
  V9: '#1B1B1B',
}

const Transparent = {
  Dark: {
    V2: 'rgba(33, 51, 97, 0.5)',
    V3: 'rgba(18, 28, 53, 0.7)',
  },
  Light: {
    V2: 'rgba(255, 255, 255, 0.3)',
  }
}

const Colors = {
  Branding,
  Gray,
  Transparent,
  White: '#FFFFFF',
  Black: '#000000',
}

const Shadows = {
  V2: '0px 2px 30px 0px rgba(0, 0, 0, 0.2)'
}

const ColorStyles = {
  Red: css({
    color: Branding.Red,
  }),
  Secondary: css({
    color: Branding.Highlight,
  }),
  Background: css({
    color: Branding.Darklight,
  }),
  Black: css({
    color: Colors.Black,
  }),
  White: css({
    color: Colors.White,
  }),
}

const textColorCss = (color: string) => css({ color: `${color} !important`, });

export {
  Colors,
  Shadows,
  ColorStyles,
  textColorCss
}