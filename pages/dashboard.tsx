import { Layout } from '@/components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic'

// const DynamicComponent = dynamic(() => import('@/components/common/Chart/ConversionRateChart'), {
//   ssr: false
// })

function Dashboard() {
  return (
    <Layout title='menuDashboard'>
      <div className='flex'>dashboard</div>
      {/* <DynamicComponent firstColumn={{name:"f1_uu", title: "F1"}} secondColumn={{name:"f2_uu", title: "F2"}}
      lineChart={{name:"f2_conversion_rate", title: "F2 conversion rate"}}/> */}
    </Layout>
  );
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Dashboard;
