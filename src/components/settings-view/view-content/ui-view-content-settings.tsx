'use client';

import { IconsEnum, type ThemesType } from '@/types';
import style from './view-content-settings.module.css';
import { type ThemeListInterface } from '@/types/interfaces/theme-list.interface';
import UIcon from '@/components/ui-icons/ui-icon';

interface Prop {
  onSelectTheme: (theme: ThemesType) => void;
  theme: ThemesType;
}

const themesList: ThemeListInterface[] = [
  {
    themeName: 'light',
    iconTheme: IconsEnum.lightMode
  },
  {
    themeName: 'dark',
    iconTheme: IconsEnum.darkMode
  }
];

export const UiViewContentSettings = ({ onSelectTheme, theme }: Prop): JSX.Element => {
  return (
    <div className={style.contentSetting}>
      <h3>Modo</h3>
      <div className={style.contentModeTheme}>
        {themesList.map((item) => (
          <UIcon
            key={item.themeName}
            nameIcon={item.iconTheme}
            onClick={() => {
              onSelectTheme(item.themeName);
            }}
            className={`${style.iconMode} ${item.themeName === theme && style.active}`}
          />
        ))}
      </div>
    </div>
  );
};
