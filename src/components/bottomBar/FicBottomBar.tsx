import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import FicModel from '../../models/fics/FicModel';
import { pointerCss } from '../../styles/common.styles';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import { gapCss, FlexRow } from '../layout/styles';
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
  return (
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
          onClick={isSubscribed ? onUnsubscribe : onSubscribe}
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
  );
};

export default FicBottomBar;
