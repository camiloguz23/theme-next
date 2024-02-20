"use client";

import React from "react";
import style from "./ui-drawer.module.css";

interface PropsDrawer {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

export const UiDrawer = ({ children, onClose, open }: PropsDrawer) => {
  return (
    <>
      {open && (
        <div className={style.contentDrawer} onClick={(e) => {
          const element = e.target as HTMLDivElement
          const className = element.classList.value
          className.includes('content') && onClose()
        }}>
          <div className={style.drawer} >{children}</div>
        </div>
      )}
    </>
  );
};
