import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

type Props = {
  title: string;
  subTitle?: string;
  children?: ReactNode;
};

export const MainContent = ({ title, subTitle, children }: Props) => {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col flex-1 p-10'>
      <div className='flex'>
        <span className='font-bold text-gray-800 text-h1'>{t(title)}</span>
        {!!subTitle && <span>{t(subTitle)}</span>}
      </div>
      <div className='flex-1 m-4'>{children}</div>
    </div>
  );
};
