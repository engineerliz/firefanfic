import React from 'react';
import Icon, { IconName } from '../icon/Icon';
import { FlexRow } from '../layout/styles';
import { Subheading } from '../styles/fonts';
import { metricsBadgeStyles } from './metricsBadge.styles';

interface MetricsBadgeProps {
  icon: IconName;
  label: string;
}

const MetricsBadge = ({ icon, label }: MetricsBadgeProps) => {
  return (
    <FlexRow className={metricsBadgeStyles.badge}>
      <Icon icon={icon} />
      <Subheading.SH12>{label}</Subheading.SH12>
    </FlexRow>
  );
};

export default MetricsBadge;
