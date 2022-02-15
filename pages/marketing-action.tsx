import { Layout } from '@/components';
import { useTranslation } from 'next-i18next';

const MarketingAction = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('MarketingAction')}>
      <div className='flex'>MA</div>
    </Layout>
  );
};

export default MarketingAction;
