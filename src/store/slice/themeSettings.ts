import { TypeMode } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeSettings {
  theme: TypeMode;
}

const defaultSettings: ThemeSettings = {
  theme: "primary",
};

export const themeSlice = createSlice({
  initialState: defaultSettings,
  name: "theme",
  reducers: {
    setTheme: (state, action) => {
      return { ...state, theme: action.payload };
    },
  },
});

export const { setTheme } = themeSlice.actions;
