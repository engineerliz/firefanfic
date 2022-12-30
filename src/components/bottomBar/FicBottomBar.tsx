import { css } from '@emotion/css';
import { Dialog } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../features/App';
import FicModel from '../../models/fics/FicModel';
import { pointerCss } from '../../styles/common.styles';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { gapCss, FlexRow } from '../layout/styles';
import CreateAccountModal from '../modal/CreateAccountModal';
import { FlexCss } from '../styles/flex';
import { Subheading } from '../styles/fonts';
import BottomBar from './BottomBar';

interface FicBottomBarProps {
  fic?: FicModel;
  isSubscribed?: boolean;
  isAuthor?: boolean;
  onSubscribe: () => void;
  onUnsubscribe: () => void;
}
const FicBottomBar = ({
  fic,
  isSubscribed,
  isAuthor,
  onSubscribe,
  onUnsubscribe,
}: FicBottomBarProps) => {
  const { user } = useContext(UserContext);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState<boolean>(false);

  const onSubscribeClick = () => {
    if (user) {
      return isSubscribed ? onUnsubscribe() : onSubscribe();
    }
    return setIsCreateAccountModalOpen(true);
  };

  return (
    <>
      <CreateAccountModal
        open={isCreateAccountModalOpen}
        onClose={() => setIsCreateAccountModalOpen(false)}
      />
      <BottomBar className={FlexCss.spaceBetween}>
        <Link to={`/fic/${fic?.slug}`}>
          <Subheading.SH12 className={pointerCss}>{fic?.title}</Subheading.SH12>
        </Link>
        {isAuthor ? (
          <Link to={`/add-chapter/${fic?.ficId}`}>
            <Button>
              <FlexRow className={css(gapCss(2), FlexCss.alignCenter)}>
                <Icon icon="plus" />
                Add Chapter
              </FlexRow>
            </Button>
          </Link>
        ) : (
          <Button
            size="Medium"
            type={isSubscribed ? 'Secondary' : 'Primary'}
            onClick={onSubscribeClick}
          >
            {isSubscribed ? (
              <FlexRow className={gapCss(4)}>
                <Icon icon="checkCircle" /> Subscribed
              </FlexRow>
            ) : (
              'Subscribe'
            )}
          </Button>
        )}
      </BottomBar>
    </>
  );
};

export default FicBottomBar;
