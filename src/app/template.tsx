import { TransitionPage } from '@/shared';
import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Template({ children }: Props): JSX.Element {
  return <TransitionPage>{children}</TransitionPage>;
}
