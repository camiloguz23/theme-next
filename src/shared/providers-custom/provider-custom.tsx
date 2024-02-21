'use client';

import { store } from '@/store';
import type React from 'react';
import { Provider } from 'react-redux';

interface PropsProvider {
  children: React.ReactNode;
}

export const ProviderCustom = ({ children }: PropsProvider): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};
