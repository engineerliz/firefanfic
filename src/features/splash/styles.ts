import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';

export const splashStyles = {
  demoImgCss: css({
    width: '60%',
    position: 'fixed',
    left: 0,
    top: '10%',
    maxWidth: 700,
    minWidth: 190,
    '@media (max-width: 800px)': {
      marginRight: 20,
    }
  }),
  contentContainerCss: css(FlexCss.alignCenter, FlexCss.justifyContentCenter, {
    marginTop: '30%',
    justifyContent: 'end',
    alignItems: 'end',
    '@media (max-width: 800px)': {
      flexDirection: 'column',
    }
  }),
  splashTextContainerCss: css({
    zIndex: 1,
    width: '60%',
    position: 'fixed',
    bottom: '25%',
    right: '2%',
  }),
  itineraryTextCss: css({
    marginBottom: 26,
    '@media (max-width: 500px)': {
      marginBottom: 10,
    }
  }),
  brandingTextCss: css({
    '@media (max-width: 1080px)': {
      fontSize: 32,
    },
    '@media (max-width: 800px)': {
      fontSize: 26,
    },
    '@media (max-width: 500px)': {
      fontSize: 22,
    }
  }),
  headingH1TextCss: css({
    // '@media (max-width: 1080px)': {
    //   fontSize: 48,
    // },
    // '@media (max-width: 800px)': {
    //   fontSize: 34,
    // },
    '@media (max-width: 500px)': {
      fontSize: 26,
    }
  }),
  headingSuperTextCss: css({
    // '@media (max-width: 1080px)': {
    //   fontSize: 60,
    // },
    // '@media (max-width: 800px)': {
    //   fontSize: 48,
    // },
    '@media (max-width: 500px)': {
      fontSize: 32,
    }
  }),
  ctaButton: css({
    width: 'fit-content',
    marginTop: 20,
  })
}