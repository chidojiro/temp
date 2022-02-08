import { ReactNode } from 'react';
import { Sidebar } from '../Sidebar';
import Header from './Header';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
          <main className='flex-1 m-4'>{children}</main>
        </div>
      </div>
    </div>
  );
};
