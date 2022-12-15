import React from 'react'
import { FlexRow } from '../../components/layout/styles';
import { Colors } from '../styles/colors';
import { Subheading } from '../styles/fonts';
import { tabStyles } from './tab.styles';

export interface TabProps {
  label: string;
  index: number;
  isActive?: boolean;
  onClick?: (index: number) => void;
}

const Tab = ({ label, index, isActive = false, onClick }: TabProps) => {
  return (
    <tabStyles.tab
      className={tabStyles.container(isActive)}
      onClick={() => onClick?.(index)}
    >
      <Subheading.SH18
        className={tabStyles.label(isActive)}
        color={isActive ? Colors.Black : Colors.Gray.V5}
      >
        {label}
      </Subheading.SH18>
    </tabStyles.tab>
  );
};

export default Tab