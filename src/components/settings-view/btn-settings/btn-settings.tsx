'use client';

import style from './btn-settiings.module.css';
import { Icons } from '@/components';
import { useBoolean } from '@/hook';
import { UiDrawer } from '@/components/ui-drawer';
import { UiViewContentSettings } from '@/components/settings-view/view-content';

export const BtnSettings = (): JSX.Element => {
  const openPopover = useBoolean();
  return (
    <>
      <button type='button' onClick={openPopover.onTrue} className={style.btnPopover}>
        <Icons.Settings className={style.btnSetting} />
      </button>
      <UiDrawer open={openPopover.value} onClose={openPopover.onFalse}>
        <UiViewContentSettings />
      </UiDrawer>
    </>
  );
};
