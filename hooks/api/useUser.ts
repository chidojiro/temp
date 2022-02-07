import { UserApi } from '@/apis';
import { User } from '@/types';
import useSWR from 'swr';

// const swrMiddleware: Middleware = (useSWRNext: SWRHook) => (key, fetcher, config) => {
//     // Add logger to the original fetcher.
//     const extendedFetcher = (...args: any) => {
//         console.log('SWR Request:', key, args)
//         console.log('args:', args)
//         return fetcher(...args)
//     }
//     return useSWRNext(key, extendedFetcher, config)
// }
//
export function useUser(initialValues: User) {
  const { data, mutate, error } = useSWR<User | null>('/userInfo', UserApi.me, {
    fallbackData: initialValues,
    // use: [swrMiddleware],
    suspense: true,
    refreshInterval: 0,
    revalidateOnFocus: false,
  });
  const loading = !data && !error;
  return {
    loading,
    mutate,
    data,
    error,
  };
}
