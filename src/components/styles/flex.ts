import { css } from '@emotion/css';

export const FlexCss = {
  flex: css({
    display: 'flex',
  }),
  grow: (grow?: number) => css({
    flexGrow: grow,
  }),
  alignCenter: css({
    alignItems: 'center',
  }),
  alignStart: css({
    alignItems: 'start',
  }),
  justifyStart: css({
    justifyContent: 'start',
  }),
  justifyContentCenter: css({
    justifyContent: 'center',
  }),
  spaceBetween: css({
  justifyContent: 'space-between',
  }),
}