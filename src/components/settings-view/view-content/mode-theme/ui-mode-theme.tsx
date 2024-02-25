'use client';

import { useSettings } from '@/settings';
import style from './mode-theme.module.css';
import { type ThemeListInterface } from '@/types/interfaces/theme-list.interface';
import { Icons } from '@/components';

export const UiModeTheme = (): JSX.Element => {
  const { valueMode, setModeTheme } = useSettings();
  const themesList: ThemeListInterface[] = [
    {
      themeName: 'light',
      iconTheme: <Icons.Theme size='45px' typeTheme='light' />
    },
    {
      themeName: 'dark',
      iconTheme: <Icons.Theme size='45px' typeTheme='dark' />
    }
  ];

  return (
    <div className={style.contentModeTheme}>
      {themesList.map((item) => (
        <div
          key={item.themeName}
          className={`${style.iconMode} ${item.themeName === valueMode && style.active}`}
          onClick={() => {
            setModeTheme(item.themeName);
          }}
        >
          {item.iconTheme}
        </div>
      ))}
    </div>
  );
};
