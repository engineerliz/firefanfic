import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';

export const demoImgCss = css({
  // borderRadius: '5%',
  // marginRight: 80,
  width: '60%',
  position: 'fixed',
  left: 0,
  top: '10%',
  maxWidth: 700,
  minWidth: 190,
  '@media (max-width: 800px)': {
    marginRight: 20,
  }
});

export const contentContainerCss = css(FlexCss.alignCenter, FlexCss.justifyContentCenter, {
  marginTop: '30%',
  justifyContent: 'end',
  alignItems: 'end',
  '@media (max-width: 800px)': {
    flexDirection: 'column',
  }
});

export const splashTextContainerCss = css({
  zIndex: 1,
  width: '70%',
  position: 'fixed',
  bottom: '30%',
})

export const itineraryTextCss = css({
  marginBottom: 26,
  '@media (max-width: 500px)': {
    marginBottom: 10,
  }
});

export const brandingTextCss = css({
  '@media (max-width: 1080px)': {
    fontSize: 32,
  },
  '@media (max-width: 800px)': {
    fontSize: 26,
  },
  '@media (max-width: 500px)': {
    fontSize: 22,
  }
});

export const headingH1TextCss = css({
  '@media (max-width: 1080px)': {
    fontSize: 48,
  },
  '@media (max-width: 800px)': {
    fontSize: 34,
  },
  '@media (max-width: 500px)': {
    fontSize: 26,
  }
});

export const headingSuperTextCss = css({
  '@media (max-width: 1080px)': {
    fontSize: 60,
  },
  '@media (max-width: 800px)': {
    fontSize: 48,
  },
  '@media (max-width: 500px)': {
    fontSize: 32,
  }
});
