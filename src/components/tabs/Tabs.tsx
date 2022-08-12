import { List } from 'immutable'
import React, { useEffect, useState } from 'react'
import { FlexRow } from '../../firefly/styles/layout'
import Tab, { TabProps } from './Tab'
import { tabsStyles } from './tabs.styles';

interface TabsProps {
  tabLabels: List<string>;
  onChange?: (index: number) => void;
}
const Tabs = ({
  tabLabels,
  onChange,
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    onChange?.(activeIndex)
  }, [activeIndex])
  return (
    <FlexRow className={tabsStyles.container}>
      {tabLabels.map(
        (tab, index) =>
          <Tab
            label={tab}
            index={index}
            isActive={index == activeIndex}
            onClick={(index: number) => setActiveIndex(index)}
          />
      )}
    </FlexRow>
  )
}

export default Tabs