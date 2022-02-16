import { MyMarketingAction } from '@/components/MyMarketingAction';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function MyMarketingActionPage() {
  return <MyMarketingAction />;
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default MyMarketingActionPage;
