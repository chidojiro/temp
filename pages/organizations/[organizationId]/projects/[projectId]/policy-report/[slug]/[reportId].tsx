import { ReportDetails } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Report = () => {
  return <ReportDetails />;
};

console.log('he');

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'report'])),
  },
});

export default Report;
