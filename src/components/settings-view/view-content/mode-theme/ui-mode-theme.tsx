import { useSettings } from '@/settings';
import style from './mode-theme.module.css';
import UIcon from '@/components/ui-icons/ui-icon';
import { type ThemeListInterface } from '@/types/interfaces/theme-list.interface';
import { IconsEnum } from '@/types';

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

export const UiModeTheme = (): JSX.Element => {
  const { valueMode, setModeTheme } = useSettings();

  return (
    <div className={style.contentModeTheme}>
      {themesList.map((item) => (
        <UIcon
          key={item.themeName}
          nameIcon={item.iconTheme}
          onClick={() => {
            setModeTheme(item.themeName);
          }}
          className={`${style.iconMode} ${item.themeName === valueMode && style.active}`}
        />
      ))}
    </div>
  );
};
