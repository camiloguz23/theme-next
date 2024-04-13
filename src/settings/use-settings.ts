'use client';

import { type RootState } from '@/store';
import { setTheme } from '@/store/slice/themeSettings';
import { useDispatch, useSelector } from 'react-redux';
import { type ThemesType } from '@/types/types';

interface ReturnData {
  valueMode: ThemesType;
  setModeTheme: (theme: ThemesType) => void;
  themeList: ThemesType[];
}

export const useSettings = (): ReturnData => {
  const { theme } = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();

  const setModeTheme = (value: ThemesType): void => {
    dispatch(setTheme(value));
  };
  const themeList: ThemesType[] = ['dark', 'light'];

  return {
    valueMode: theme,
    setModeTheme,
    themeList
  };
};
