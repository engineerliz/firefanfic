import { css } from "@emotion/css";
import { Colors } from "../styles/colors";

export const styledModalStyles = {
  modal: css({
    'div > div': {
      background: Colors.Gray.V9,
      padding: '10px 15px',
      borderRadius: 10,
    }
  })
}