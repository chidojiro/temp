import { useRouter } from 'next/router';
import React from 'react';
import URI from 'urijs';

const Reports = () => {
  const router = useRouter();

  React.useEffect(() => {
    const uri = new URI();
    uri.segment('line-email');

    router.replace(uri.href());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Reports;
