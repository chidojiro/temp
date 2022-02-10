import { Login } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LoginPage = () => {
  return <Login />;
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default LoginPage;
