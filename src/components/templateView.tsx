import React from 'react';
import Header from './header/Header';
import { View } from './layout/styles';

interface ViewProps {
  fic: number;
}

const ViewComponent = ({ fic }: ViewProps) => {
  return (
    <>
      <Header />
      <View></View>
    </>
  );
};

export default ViewComponent;
