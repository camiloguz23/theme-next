'use client';

import style from './view-content-settings.module.css';
import { UiModeTheme } from '@/components/settings-view/view-content/mode-theme';
import { UiFullScreen } from '@/components/settings-view/view-content/full-screen';
import { type DictionaryType } from '@/types';

interface Props {
  lang: DictionaryType;
}

export const UiViewContentSettings = ({ lang }: Props): JSX.Element => {
  return (
    <div className={style.contentSetting}>
      <h3>{lang.modeTheme}</h3>
      <div className={style.contentItem}>
        <UiModeTheme />
        <UiFullScreen />
      </div>
    </div>
  );
};
