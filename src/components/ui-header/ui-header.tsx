/* eslint-disable multiline-ternary */
'use client';

import { useBoolean } from '@/hook';
import UiNavbar from '../ui-navbar/ui-navbar';
import style from './header.module.css';
import { Icons } from '..';

export const UiHeader = (): JSX.Element => {
  const navBar = useBoolean();
  return (
    <div className={`${style.header} ${navBar.value === true ? style.collapse : style.expand}`}>
      <span className={style.icon}>
        <Icons.Menu
          onClick={navBar.onToggle}
          className={navBar.value !== null ? style.animation : ''}
          open={navBar.value === true}
        />
      </span>

      <UiNavbar isCollapse={navBar.value ?? false} />
    </div>
  );
};
