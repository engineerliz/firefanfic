import { List } from 'immutable';
import React from 'react';
// import { FlexCol } from '../../components/layout/styles';
import FicModel from '../../models/fics/FicModel';
import FicRow from '../ficRow/FicRow';
import { FlexCol } from '../../components/layout/styles';
import { Colors } from '../styles/colors';
import { Subheading } from '../styles/fonts';
import { ficListStyles } from './ficList.styles';

interface FicListProps {
  fics?: List<FicModel>;
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
