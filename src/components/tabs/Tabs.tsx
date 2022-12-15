import { css } from '@emotion/css';
import { List } from 'immutable';
import React, { useEffect, useState } from 'react';
import { FlexRow } from '../../components/layout/styles';
import Tab, { TabProps } from './Tab';
import { tabsStyles } from './tabs.styles';

interface TabsProps {
  tabLabels: List<string>;
  onChange?: (index: number) => void;
  className?: string;
}
const Tabs = ({ tabLabels, onChange, className }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    onChange?.(activeIndex);
  }, [activeIndex]);
  return (
    <FlexRow className={css(tabsStyles.container, className)}>
      {tabLabels.map((tab, index) => (
        <Tab
          label={tab}
          index={index}
          isActive={index == activeIndex}
          onClick={(index: number) => setActiveIndex(index)}
          key={tab.toString()}
        />
      ))}
    </FlexRow>
  );
};

export default Tabs;
