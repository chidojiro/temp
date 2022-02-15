import { ChevronRightIcon } from '@heroicons/react/outline';
import { Button } from '../common';
import { Icon } from '../icons';

export const Item = () => {
  return (
    <div>
      <div className='flex mb-4 text-secondary'>
        <div className='font-bold'>おすすめ度 1位</div>
      </div>
      <div className='border rounded border-gray'>
        <div className='flex items-center justify-between h-10 px-5 py-2 text-white rounded-t bg-secondary'>
          <div className='flex items-center font-semibold text-medium'>
            <Icon name='repeat' className='w-4 h-4' />
            <span className='mx-2 '>ただいま実施中: </span>
            <span>12/15(水) 12:00 ~ 12/25(土) 12:00</span>
          </div>
          <div className='flex items-center text-medium'>
            <span>詳細を見る</span>
            <ChevronRightIcon className='w-4 h-4 ml-1' />
          </div>
        </div>
        <div className='p-10'>
          <div className='flex items-center'>
            <Icon name='cart' className='w-14 h-14' />
            <h3 className='font-bold ml-7 text-gray-dark'>カゴ落ち通知</h3>
          </div>
          <div className='flex justify-between mt-7'>
            <div className='flex-1'>
              <div className='whitespace-pre-line text-gray-dark'>
                カゴ落ち（カート落ち）率の平均は、69.2%と言われています。カゴ落ち顧客は「サイト流入・サイト回遊・検討・カートへ追加」という購入ステップを実施しており、この顧客は購入の見込みは非常に高いと考えられます。そのため、集客を増やす施策を行うよりも、カゴ落ち顧客へ通知を送信する方が、売上アップへの工数対効果が高まります。
              </div>
              <div className='mt-8'>
                <div className='mr-7'>
                  <span className='font-bold text-secondary'>優先度</span>
                  <span className='px-2 py-1 ml-3 font-semibold text-gray-600 bg-gray-200 rounded-full text-medium-sm'>
                    LINE・メール
                  </span>
                </div>
              </div>
              <div className='mt-4'>
                <span className='font-bold text-secondary'>おすすめ顧客</span>
                <span className='px-2 py-1 ml-3 font-semibold text-gray-600 bg-gray-200 rounded-full text-medium-sm'>
                  F0(会員)
                </span>
              </div>
              <div className='mt-4'>
                <div className='font-bold text-secondary mb-3.5'>施策フロー</div>
                <div className='p-10 rounded bg-gray-light'>
                  <div>Diagram</div>
                  <div className='mt-10'>
                    <div className='flex text-regular-sm'>
                      <div className='bg-primary w-5 h-5 flex font-bold text-white justify-center items-center rounded-full text-medium-sm mr-2.5'>
                        1
                      </div>
                      LINE有無判定。LINEありの場合はLINEで配信、なしの場合メールで配信
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='ml-10 bg-secondary w-60 h-60 opacity-10'></div>
          </div>
          <div className='flex justify-center w-full mt-7'>
            <Button className='font-semibold w-[350px]'>この施策を実行する</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
