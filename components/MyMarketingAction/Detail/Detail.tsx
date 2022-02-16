import React from 'react';
import { MarketingAction } from './MarketingAction';
import { SideMenu } from './SideMenu';

// example
const listMenu = [
  {
    id: 1,
    name: 'カゴ落ち通知',
  },
  {
    id: 2,
    name: '購入後ステップ配信',
  },
  {
    id: 3,
    name: 'レコメンド診断ボット（静的）',
  },
];

type Props = {
  children?: React.ReactNode;
};

export const Detail = ({ children }: Props) => {
  return (
    <div className='flex w-full h-full mt-7'>
      <SideMenu menu={listMenu} />
      <MarketingAction>{children}</MarketingAction>
    </div>
  );
};
