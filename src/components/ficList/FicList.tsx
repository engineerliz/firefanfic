import { List } from 'immutable';
import React from 'react';
import FicModel from '../../models/fics/FicModel';
import FicRow from '../ficRow/FicRow';
import { FlexCol, gapCss } from '../../components/layout/styles';

interface FicListProps {
  fics?: List<FicModel>;
}

const FicList = ({ fics }: FicListProps) => {
  return (
    <FlexCol className={gapCss(40)}>
      {fics?.map((fic) => (
        <FicRow fic={fic} key={fic.ficId} />
      ))}
    </FlexCol>
  );
};

export default FicList;
