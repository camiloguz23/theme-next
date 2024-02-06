"use client";
import { IconsEnum } from "@/types/enum";
import style from "./ui-navbar-vertical.module.css";
import { useBoolean } from "@/hook";
import Link from "next/link";
import { UiNavbar } from "@/components";
import { ROUTES } from "@/constants";

interface Prop {
  children: React.ReactNode;
}

function UiNavbarVertical({ children }: Prop) {
  const navBar = useBoolean();
  return (
    <>
      <header
        className={`${style.header} ${
          navBar.value ? style.collapse : style.expand
        }`}
      >
        <button
          className={`material-symbols-outlined ${style.icon}`}
          onClick={navBar.onToggle}
        >
          {navBar.value ? IconsEnum.arrowOpen : IconsEnum.arrowBack}
        </button>
        <button
          className={`material-symbols-outlined ${style.icon} ${style.mobile}`}
          onClick={navBar.onToggle}
        >
          {navBar.value ? IconsEnum.menu : IconsEnum.close}
        </button>

        <UiNavbar links={ROUTES} isCollapse={navBar.value} />
      </header>
      <div
        className={`${style.content} ${
          navBar.value ? style.collapse : style.expand
        }`}
      >
        {children}
      </div>
    </>
  );
}

export default UiNavbarVertical;
