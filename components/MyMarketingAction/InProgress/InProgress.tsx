import { Icon } from '@/components/icons';
import React from 'react';
import { Detail } from '../Detail';

export const InProgress = () => {
  return (
    <Detail>
      <div className='flex items-center'>
        <Icon name='cart' className='w-14 h-14' />
        <h3 className='font-bold ml-7 text-gray-dark'>カゴ落ち通知</h3>
      </div>
      <div className='mt-4'>
        <span className='font-bold text-secondary'>ターゲット顧客</span>
        <span className='px-2 py-1 ml-3 font-semibold text-gray-600 bg-gray-200 rounded-full text-medium-sm'>
          F0(会員)
        </span>
      </div>
    </Detail>
  );
};
