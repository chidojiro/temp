import { useRouter } from 'next/router';
import React from 'react';

export const useScrollToTop = (deps: any[]) => {
  const { pathname } = useRouter();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || [pathname]);
};
