import { Layout } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('@/ui/components/chart'), {
  ssr: false
})

function Dashboard() {
  return (
    <Layout title='menuDashboard'>
      <div className='flex'>dashboard</div>
      <DynamicComponent/>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Dashboard;
