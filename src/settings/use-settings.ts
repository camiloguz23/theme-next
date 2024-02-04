"use client";

import { TypeMode } from "@/types";
import { useState } from "react";

export const useSettings = () => {
  const [mode, setModes] = useState<TypeMode>("primary");
  const setModeUi = (value: TypeMode) => setModes(value);
  const getModeList: TypeMode[] = ["primary", "cold", "dark", "secondary"];

  return {
    valueMode: mode === "primary" ? "" : mode,
    setModeUi,
    getModeList,
  };
};
