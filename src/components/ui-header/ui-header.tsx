/* eslint-disable multiline-ternary */
'use client';

import { useBoolean } from '@/hook';
import UiNavbar from '../ui-navbar/ui-navbar';
import style from './header.module.css';
import { Icons } from '..';
import { type DictionaryType } from '@/types';

interface Props {
  lang: DictionaryType;
}

export const UiHeader = ({ lang }: Props): JSX.Element => {
  const navBar = useBoolean();
  return (
    <div className={`${style.header} ${navBar.value === true ? style.collapse : style.expand}`}>
      <div className={style.icon}>
        <button onClick={navBar.onToggle}>
          <Icons.Menu
            className={navBar.value !== null ? style[navBar.value ? 'animation-open' : 'animation-close'] : ''}
            open={navBar.value === true}
          />
        </button>
      </div>

      <UiNavbar isCollapse={navBar.value ?? false} lang={lang} />
    </div>
  );
};
