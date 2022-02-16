import { HeaderTab } from '@/constants';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Tabs } from '../common';
import { Editting } from './Editting';
import { End } from './End';
import { InProgress } from './InProgress';

export const MyMarketingAction = () => {
  const { t } = useTranslation('myMarketingAction');

  const tabs = [
    {
      value: HeaderTab.InProgress,
      label: t('inProgressTab'),
      content: <InProgress />,
    },
    {
      value: HeaderTab.Ended,
      label: t('endTab'),
      content: <End />,
    },
    {
      value: HeaderTab.Editting,
      label: t('edittingTab'),
      content: <Editting />,
    },
  ];
  return (
    <div className='flex h-full'>
      <Tabs className='w-full h-full' items={tabs} />
    </div>
  );
};
