import { css } from '@emotion/css';

export const assetBannerStyles = {
  container: css({
    margin: '4% 0',
    alignItems: 'start',
  }),
  iamgeContainer: css({
    width: '50%',
    justifyContent: 'end',
    position: 'relative',
  }),
  contentContainer: css({
    width: '60%',
    paddingTop: '24%',
    zIndex: 1,
  }),
  image: css({
    width: '140%',
    maxWidth: 750,
    position: 'absolute',
    left: 0,
  })
}