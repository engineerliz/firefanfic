import React from 'react';
import { useNavigate } from 'react-router';
import { FlexCol } from '../../firefly/styles/layout';
import Fic from '../../models/fics/FicModel';
import Button from '../button/Button';
import { Colors } from '../styles/colors';
import { Heading, Paragraph } from '../styles/fonts';
import { ficRowStyles } from './ficRow.styles';

interface FicRowProps {
  fic: Fic;
  withButton?: boolean;
  className?: string;
}
const FicRow = ({ fic, withButton = true, className }: FicRowProps) => {
  const navigate = useNavigate();

  console.log('fic', fic);
  return (
    <FlexCol className={className}>
      <Heading.H18 className={ficRowStyles.title}>{fic.title}</Heading.H18>
      <Paragraph.P14 color={Colors.Gray.V3}>{fic.description}</Paragraph.P14>
      {withButton && (
        <Button
          size="Small"
          className={ficRowStyles.readNow}
          onClick={() => navigate(`/fic/${fic.ficId}`)}
        >
          Read Now
        </Button>
      )}
    </FlexCol>
  );
};

export default FicRow;
