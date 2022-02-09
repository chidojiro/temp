import LoginForm from '@/components/LoginForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const handleSubmit = (data: any) => {
    if (data.password && data.email) {
      router.push('/dashboard');
    }
  };

  return (
    <div className='grid h-full grid-cols-2'>
      <div className='flex items-center justify-center'>
        <div className='font-bold text-h1 text-secondary'>MARKETING PLATFORM</div>
      </div>
      <div className='flex items-center justify-center bg-light-gray'>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Login;
