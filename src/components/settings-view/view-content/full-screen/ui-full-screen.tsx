'use client';

import style from './full-screen.module.css';
import { useBoolean } from '@/hook';
import { Icons } from '@/components';

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
      <Icons.FullsScreen open={isFullScreen.value ?? false} className={style.icon} />
    </button>
  );
};
