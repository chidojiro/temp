import { User } from '@/models';
import useSWR, { Middleware, SWRHook } from 'swr';
import { UserApi } from '@/apis';

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
  const { data, mutate, error } = useSWR<User>('/userInfo', UserApi.me, {
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
