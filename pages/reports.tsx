import { ReportsPage } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Reports = () => {
  return <ReportsPage />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'report'])),
  },
});

export default Reports;
