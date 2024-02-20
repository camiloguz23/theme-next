"use client";

import { RootState } from "@/store";
import { setTheme } from "@/store/slice/themeSettings";
import { TypeMode } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export const useSettings = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const setModeUi = (value: TypeMode) => {
    dispatch(setTheme(value));
  };
  const getModeList: TypeMode[] = ["primary", "cold", "dark", "secondary"];

  return {
    valueMode: theme,
    setModeUi,
    getModeList,
  };
};
