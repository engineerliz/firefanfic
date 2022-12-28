import { css } from '@emotion/css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getUserById } from '../../actions/user/getUser';
import { FlexCol } from '../../components/layout/styles';
import FicModel from '../../models/fics/FicModel';
import { SodaUser } from '../../models/user/UserModel';
import Button from '../button/Button';
import { colorCss, Colors } from '../styles/colors';
import { Heading, Paragraph, Subheading } from '../styles/fonts';
import { ficRowStyles } from './ficRow.styles';

interface FicRowProps {
  fic: FicModel;
  withButton?: boolean;
  className?: string;
}
const FicRow = ({ fic, withButton = true, className }: FicRowProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<SodaUser>();
  useEffect(() => {
    getUserById(fic.createdBy).then((value) => value && setUser(value));
  }, []);

  const onClick = () => navigate(`/fic/${fic.slug}`);

  return (
    <Link to={`/fic/${fic.slug}`}>
      <FlexCol
        className={css(ficRowStyles.container, className)}
        onClick={onClick}
      >
        <Heading.H14>{fic.title}</Heading.H14>
        <Subheading.SH12 className={colorCss(Colors.Gray.V3)}>
          By {user?.username}
        </Subheading.SH12>
        <Paragraph.P12 color={Colors.Gray.V3} className={ficRowStyles.content}>
          {fic.description}
        </Paragraph.P12>
        {withButton && (
          <Button
            size="Small"
            className={ficRowStyles.readNow}
            onClick={onClick}
          >
            Read Now
          </Button>
        )}
      </FlexCol>
    </Link>
  );
};

export default FicRow;
