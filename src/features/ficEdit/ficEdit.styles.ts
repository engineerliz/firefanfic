import { css } from '@emotion/css';
import { FlexCss } from '../../components/styles/flex';

export const ficEditStyles = {
  container: css({
    height: '100%',
    overflow: 'scroll',
  }),
  formBody: css(FlexCss.spaceBetween, {
    flexGrow: 1,
    marginTop: 22,
  }),
  input: css({
    marginBottom: 12,
  }),
  bottomButtons: css(FlexCss.alignCenter, FlexCss.spaceBetween, {
    position: 'sticky',
    bottom: 30,
  }),
  fileUploader: css({
    marginBottom: 100,
  })
}