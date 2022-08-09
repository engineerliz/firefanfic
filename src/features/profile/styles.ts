import { css } from '@emotion/css';
import { Colors } from '../../components/styles/colors';

export const profileStyles = {
  profileContainer: css({
    marginBottom: 60,
  }),
  profilePic: css({
    borderRadius: '50%',
    marginRight: 20,
  }),
  logoutButton: css({
    width: 'fit-content',
    background: 'none',
    marginTop: 12,
    marginRight: 12,
    border: `1px solid ${Colors.White}`,
    color: Colors.White,
  })
}