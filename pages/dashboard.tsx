import { Layout } from '@/components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Dashboard() {
  const { t } = useTranslation();

  return (
    <Layout title={t('menuDashboard')}>
      <div className='flex'>dashboard</div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Dashboard;
