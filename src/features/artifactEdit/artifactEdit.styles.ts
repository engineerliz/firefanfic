import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';

export const artifactEditStyles = {
  container: css({
    height: '100%',
  }),
  formBody: css(FlexCss.spaceBetween, {
    flexGrow: 1,
    marginTop: 22,
  }),
  input: css({
    marginBottom: 12,
  })
}