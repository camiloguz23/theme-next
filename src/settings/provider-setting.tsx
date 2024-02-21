'use client';

import { SnackbarProvider } from 'notistack';
import { useSettings } from './use-settings';
import style from './setting.module.css';

interface Prop {
  children: React.ReactNode;
}

function ProviderSetting({ children }: Prop): JSX.Element {
  const { valueMode } = useSettings();
  return (
    <SnackbarProvider>
      <main className={style.main} data-theme={valueMode}>
        {children}
      </main>
      ;
    </SnackbarProvider>
  );
}

export default ProviderSetting;
