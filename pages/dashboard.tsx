import { Layout } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


function Dashboard() {
  return (
    <Layout title='menuDashboard'>
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
