import { css } from '@emotion/css';
import { gapCss } from '../layout/styles';

export const ficRowStyles = {
  container: css(gapCss(2), {
    cursor: 'pointer',
  }),
  readNow: css({
    width: 'fit-content',
    marginTop: 12,
  })
}