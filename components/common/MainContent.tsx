import { ReactNode } from 'react';

type Props = {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

export const MainContent = ({ title, subTitle, children }: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10'>
      <div className='flex'>
        <span className='font-bold text-gray-800 text-h1'>{title}</span>
        {!!subTitle && <h3 className='ml-5 text-gray-600'>{subTitle}</h3>}
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
};
