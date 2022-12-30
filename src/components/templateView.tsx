import React from 'react';
import Header from './header/Header';
import { View } from './layout/styles';

interface ViewComponentProps {
  fic: number;
}

const ViewComponent = ({ fic }: ViewComponentProps) => {
  return (
    <>
      <Header />
      <View></View>
    </>
  );
};

export default ViewComponent;
