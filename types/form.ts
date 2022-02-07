import React from 'react';

export type Option<T = any> = {
  value: T;
  label: React.ReactNode;
};
