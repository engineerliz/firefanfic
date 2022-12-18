import { css } from '@emotion/css';
import { gapCss } from '../layout/styles';

export const ficRowStyles = {
  container: css(gapCss(2), {
    cursor: 'pointer',
  }),
  readNow: css({
    width: 'fit-content',
    marginTop: 12,
  }),
  content: css({
    whiteSpace: 'pre-line',
    overflow: 'hidden',
    lineClamp: 5,
    WebkitLineClamp: 5,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    width: '100%',
    textOverflow: 'ellipsis',
  })
}