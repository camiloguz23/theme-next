"use client";

import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

interface PropsProvider {
  children: React.ReactNode;
}

export const ProviderCustom = ({ children }: PropsProvider) => {
  return <Provider store={store}>{children}</Provider>;
};
