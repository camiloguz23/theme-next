"use client";

import React from "react";
import style from "./btn-settiings.module.css";
import { UiIcon } from "@/components";
import { IconsEnum } from "@/types/enum";
import { useBoolean } from "@/hook";
import { useSettings } from "@/settings";
import { UiDrawer } from "@/components/ui-drawer";

export const BtnSettings = () => {
  const { getModeList, setModeUi } = useSettings();

  const openPopover = useBoolean();
  return (
    <div className={style.containerPopover}>
      <button type="button" onClick={openPopover.onTrue}>
        <UiIcon nameIcon={IconsEnum.settings} /> cambiar temas
      </button>
      <UiDrawer open={openPopover.value} onClose={openPopover.onFalse}>
        <p>ejemplo</p>
      </UiDrawer>
      {/* {openPopover.value && (
        <div className={style.popoverMenu}>
          {getModeList.map((item) => (
            <span
              key={item}
              onClick={() => {
                setModeUi(item);
                openPopover.onFalse();
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )} */}
    </div>
  );
};
