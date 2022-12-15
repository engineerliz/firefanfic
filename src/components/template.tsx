import React from 'react';

interface FicHeaderProps {
  fic: number;
}

const FicHeader = ({ fic }: FicHeaderProps) => {
  return <div>{fic}</div>;
};

export default FicHeader;
