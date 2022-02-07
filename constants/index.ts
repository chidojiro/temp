export const APP_STORAGE_PREFIX = 'MP_APP_STORAGE:';
export const AUTH_TOKEN = `${APP_STORAGE_PREFIX}token`;
export const IS_DEV = process.env.NODE_ENV === 'development';
export const API_URI = process.env.NEXT_PUBLIC_API_URI;
