import { RestApi } from './base';
import { LoginData, User } from '@/types';

export const AuthApi = {
  login: async (payload: LoginData): Promise<any> => {
    const formData = new FormData();

    formData.append('username', payload.email);
    formData.append('password', payload.password);

    return await RestApi.post('login', formData);
  },
};
