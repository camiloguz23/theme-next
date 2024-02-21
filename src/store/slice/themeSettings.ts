import { type ThemesType } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface ThemeSettings {
  theme: ThemesType;
}

const defaultSettings: ThemeSettings = {
  theme: 'light'
};

export const themeSlice = createSlice({
  initialState: defaultSettings,
  name: 'theme',
  reducers: {
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    }
  }
});

export const { setTheme } = themeSlice.actions;
