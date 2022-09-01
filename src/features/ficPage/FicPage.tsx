import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFicById } from '../../actions/fics/getFics';
import FicRow from '../../components/ficRow/FicRow';
import { FlexCol } from '../../firefly/styles/layout';
import Fic from '../../models/fics/FicModel';

const FicPage = () => {
  const { ficId } = useParams();
  const [fic, setFic] = useState<Fic>();

  useEffect(() => {
    ficId && getFicById(ficId).then((value) => value && setFic(value));
  }, []);

  if (fic) {
    return <FicRow fic={fic} withButton={false} />;
  }
  return <FlexCol></FlexCol>;
};

export default FicPage;
