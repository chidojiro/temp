import { ReactNode } from 'react';

type Props = {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

export const MainContent = ({ title, subTitle, children }: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10 text-gray-800'>
      <div className='flex items-center mb-8'>
        <h1 className='font-bold'>{title}</h1>
        {!!subTitle && <h3 className='ml-5 text-gray-600'>{subTitle}</h3>}
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
};
