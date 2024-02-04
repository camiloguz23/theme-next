"use client";

import { useSettings } from "./use-settings";

interface Prop {
  children: React.ReactNode;
}

function ProviderSetting({ children }: Prop) {
  const { valueMode } = useSettings();
  return <main data-theme={valueMode}>{children}</main>;
}

export default ProviderSetting;
