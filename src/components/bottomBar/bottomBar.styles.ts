import { css } from "@emotion/css";
import { FlexCss } from "../styles/flex";

export const bottomBarStyles = {
  container: css(FlexCss.alignCenter, {
    background: 'rgba(70, 70, 70, 0.1)',
    backdropFilter: 'blur(5px)',
    height: 52,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
    padding: '10px 20px',
    gap: 6,
    justifyContent: 'end',
  })
}