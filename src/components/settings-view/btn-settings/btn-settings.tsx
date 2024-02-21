'use client';

import style from './btn-settiings.module.css';
import { UiIcon } from '@/components';
import { IconsEnum } from '@/types/enum';
import { useBoolean } from '@/hook';
import { useSettings } from '@/settings';
import { UiDrawer } from '@/components/ui-drawer';
import { UiViewContentSettings } from '@/components/settings-view/view-content';

export const BtnSettings = (): JSX.Element => {
  const { setModeTheme, valueMode } = useSettings();

  const openPopover = useBoolean();
  return (
    <>
      <button type='button' onClick={openPopover.onTrue} className={style.btnPopover}>
        <UiIcon nameIcon={IconsEnum.settings} className={style.btnSetting} />
      </button>
      <UiDrawer open={openPopover.value} onClose={openPopover.onFalse}>
        <UiViewContentSettings onSelectTheme={setModeTheme} theme={valueMode} />
      </UiDrawer>
    </>
  );
};
