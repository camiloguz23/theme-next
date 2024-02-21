'use client';

import { type TypeMode } from '@/types';
import style from './view-content-settings.module.css';

interface Prop {
  theme: TypeMode[];
}

export const UiViewContentSettings = ({ theme }: Prop): JSX.Element => {
  return <div className={style.contentSetting}></div>;
};
