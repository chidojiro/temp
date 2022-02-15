import { LoginForm } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Login = () => {
  return (
    <div className='grid h-full grid-cols-2'>
      <div className='flex items-center justify-center'>
        <div className='font-bold text-h1 text-secondary'>MARKETING PLATFORM</div>
      </div>
      <div className='flex items-center justify-center bg-gray-light'>
        <LoginForm />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'login'])),
  },
});

export default Login;
