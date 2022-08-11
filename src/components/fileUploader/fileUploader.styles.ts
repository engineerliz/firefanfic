import { css } from '@emotion/css';
import { Colors } from '../styles/colors';

export const fileUploaderStyles = {
  imageRow: css({
    marginBottom: 20,
    flexWrap: 'wrap',
    height: 'fit-content',
  }),
  imageContainer: (size?: number) => css({
    height: size ?? 200,
    width: size ?? 200,
    background: Colors.White,
    marginRight: 8,
    marginBottom: 8,
  }),
  images: css({
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  })
}