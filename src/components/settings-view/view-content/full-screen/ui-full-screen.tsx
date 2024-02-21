'use client';

import UIcon from '@/components/ui-icons/ui-icon';
import { IconsEnum } from '@/types';
import style from './full-screen.module.css';
import { useBoolean } from '@/hook';

export const UiFullScreen = (): JSX.Element => {
  const isFullScreen = useBoolean();
  const onFullScreen = (): void => {
    if (document.fullscreenElement == null) {
      void document.documentElement.requestFullscreen();
      isFullScreen.onTrue();
    } else {
      void document.exitFullscreen();
      isFullScreen.onFalse();
    }
  };
  return (
    <button className={style.btnFullScreen} onClick={onFullScreen}>
      <UIcon nameIcon={isFullScreen.value ? IconsEnum.fullScreenExit : IconsEnum.fullScreen} />
    </button>
  );
};
