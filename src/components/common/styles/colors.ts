import { css } from '@emotion/css';

const Branding = {
  Red: '#FF5040',
  Secondary: '#EEC6C2',
  Background: '#FBF5F4',
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
    color: Branding.Secondary,
  }),
  Background: css({
    color: Branding.Background,
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