'use client';

import style from './btn-settiings.module.css';
import { UiIcon } from '@/components';
import { IconsEnum } from '@/types/enum';
import { useBoolean } from '@/hook';
import { useSettings } from '@/settings';
import { UiDrawer } from '@/components/ui-drawer';

export const BtnSettings = (): JSX.Element => {
  const { getModeList, setModeUi } = useSettings();

  const openPopover = useBoolean();
  return (
    <>
      <button type='button' onClick={openPopover.onTrue} className={style.btnPopover}>
        <UiIcon nameIcon={IconsEnum.settings} />
      </button>
      <UiDrawer open={openPopover.value} onClose={openPopover.onFalse}>
        <p>ejemplo</p>
      </UiDrawer>
    </>
  );
};
