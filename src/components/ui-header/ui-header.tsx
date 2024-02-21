'use client';

import { useBoolean } from '@/hook';
import { IconsEnum } from '@/types/enum';
import UiNavbar from '../ui-navbar/ui-navbar';
import { ROUTES } from '@/constants';
import style from './header.module.css';

export const UiHeader = (): JSX.Element => {
  const navBar = useBoolean();
  return (
    <div className={`${style.header} ${navBar.value ? style.collapse : style.expand}`}>
      <span className={`material-symbols-outlined ${style.icon}`} onClick={navBar.onToggle}>
        {navBar.value ? IconsEnum.arrowOpen : IconsEnum.arrowBack}
      </span>

      <UiNavbar links={ROUTES} isCollapse={navBar.value} />
    </div>
  );
};
