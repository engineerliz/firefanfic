import { css } from "@emotion/css"

const Branding = {
  Gradient: 'linear-gradient(105.95deg, #7BFFFF 5.23%, #00D1FF 29.78%, #9D50FF 61.1%, #FF5F5F 93.49%)',
  LightBlue: '#7BFFFF',
  DarkBlue: '#00D1FF',
  Purple: '#9D50FF',
  Red: '#FF5F5F',
}

const Gray = {
  V1: '#EDEDED',
  V3: '#C6C6C6',
  V5: '#898989',
  V7: '#4D4D4D',
  V9: '#1B1B1B',
  V10: '#131313',
  Background: '#0E0E0E',
}

const Transparent = {
  V1: 'rgba(27, 27, 27, 0.1)',
  V3: 'rgba(27, 27, 27, 0.3)',
  V5: 'rgba(27, 27, 27, 0.5)',
  V7: 'rgba(27, 27, 27, 0.7)',
  V9: 'rgba(27, 27, 27, 0.9)',
}

const Colors = {
  Branding,
  Gray,
  White: '#FFFFFF',
  Black: '#000000',
  Transparent,
}

const Shadows = {
  V3: '4px 4px 15px rgba(0, 0, 0, 0.5)',
  V4: '4px 4px 15px rgba(0, 0, 0, 0.7)',
  V5: '4px 4px 15px rgba(0, 0, 0, 0.9)',
}

const colorCss = (color: string) => css({ color: `${color} !important`, });
const backgroundCss = (color: string) => css({ background: `${color}`, });

export {
  Colors,
  Shadows,
  colorCss,
  backgroundCss,
}