import React from 'react';
import { FlexCol } from '../../firefly/styles/layout';
import Fic from '../../models/fics/FicModel';
import Button from '../button/Button';
import { Colors } from '../styles/colors';
import { Heading, Paragraph, Subheading } from '../styles/fonts';
import { ficRowStyles } from './ficRow.styles';

interface FicRowProps {
  fic: Fic;
  className?: string;
}
const FicRow = ({ fic, className }: FicRowProps) => {
  return (
    <FlexCol className={className}>
      <Heading.H18 className={ficRowStyles.title}>{fic.title}</Heading.H18>
      <Paragraph.P14 color={Colors.Gray.V3}>{fic.description}</Paragraph.P14>
      <Button size="Small" className={ficRowStyles.readNow}>
        Read Now
      </Button>
    </FlexCol>
  );
};

export default FicRow;
