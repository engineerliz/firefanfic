import { css } from "@emotion/css";

export const chapterRowStyles = {
  container: css({
    cursor: 'pointer',
  }),
  content: css({
    overflow: 'hidden',
    lineClamp: 3,
    WebkitLineClamp: 3,
    whiteSpace: 'normal',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    width: '100%',
    textOverflow: 'ellipsis',
  })
}