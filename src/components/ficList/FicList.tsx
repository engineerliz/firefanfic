import { List } from 'immutable';
import React from 'react';
import { FlexCol } from '../../firefly/styles/layout';
import Fic from '../../models/fics/FicModel';
import FicRow from '../ficRow/FicRow';
import { Colors } from '../styles/colors';
import { Subheading } from '../styles/fonts';
import { ficListStyles } from './ficList.styles';

interface FicListProps {
  fics?: List<Fic>;
}
const FicList = ({ fics }: FicListProps) => {
  if (!fics) {
    return (
      <FlexCol>
        <Subheading.SH22 color={Colors.Gray.V5}>No fics!</Subheading.SH22>
      </FlexCol>
    );
  }
  return (
    <FlexCol>
      {fics?.map((fic) => (
        <FicRow fic={fic} key={fic.ficId} className={ficListStyles.ficRow} />
      ))}
    </FlexCol>
  );
};

export default FicList;
