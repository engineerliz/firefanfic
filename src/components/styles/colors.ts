import { css } from '@emotion/css';

const Branding = {
  Red: '#FF5040',
  Highlight: '#C0EBF4',
  Darklight: '#213361',
  BackgroundGradient: 'linear-gradient(142.91deg, #132248 0%, #050C1D 100%)',
}

const Colors = {
  Branding,
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

export {
  Colors,
  Shadows,
  ColorStyles
}