"use client";

import { SnackbarProvider } from "notistack";
import { useSettings } from "./use-settings";

interface Prop {
  children: React.ReactNode;
}

function ProviderSetting({ children }: Prop) {
  const { valueMode } = useSettings();
  return (
    <SnackbarProvider>
      <main data-theme={valueMode}>{children}</main>;
    </SnackbarProvider>
  );
}

export default ProviderSetting;
