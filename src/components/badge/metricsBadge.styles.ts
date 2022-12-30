import { css } from "@emotion/css";
import { Colors } from "../styles/colors";
import { FlexCss } from "../styles/flex";

export const metricsBadgeStyles = {
  badge: css(FlexCss.alignCenter, { 
    background: Colors.Gray.V9,
    borderRadius: 6,
    padding: '2px 6px',
    gap: 4,
  })
}