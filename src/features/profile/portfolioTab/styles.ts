import { css } from '@emotion/css';

export const portfolioTabStyles = {
  image: css({
    position: 'fixed',
    width: '40%',
    left: '2%',
    maxWidth: 700,
  }),
  textContainer: css({
    zIndex: 1,
    position: 'fixed',
    width: '55%',
    right: '2%',
    top: '50%',
  }),
  ctaButton: css({
    marginTop: 20,
    width: 'fit-content',
  })
}