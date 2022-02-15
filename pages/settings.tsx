import { Layout } from '@/components';
import { useTranslation } from 'next-i18next';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('Settings')}>
      <div className='flex'>settings</div>
    </Layout>
  );
};

export default Settings;
