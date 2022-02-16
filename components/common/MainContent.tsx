import { ReactNode } from 'react';

type Props = {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

export const MainContent = ({ title, subTitle, children }: Props) => {
  return (
    <div className='flex flex-col flex-1 p-10'>
      <div className='flex mb-10'>
        <h1 className='text-gray-800'>{title}</h1>
        {!!subTitle && <h3 className='flex items-center ml-5 text-gray-600'>{subTitle}</h3>}
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  );
};
