import React from "react";
import style from "./ui-navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinksModel } from "@/types";
import { UiIcon } from "..";

interface Props {
  links: LinksModel[];
  isCollapse?: boolean;
}

function UiNavbar({ links, isCollapse }: Props) {
  const pathname = usePathname();
  return (
    <nav className={style.navbar}>
      {links.map((item) => (
        <Link
          key={item.title}
          className={`${style.item} ${pathname === item.path && style.active}`}
          href={item.path}
        >
          <UiIcon nameIcon={item.icons} /> {isCollapse || item.title}
        </Link>
      ))}
    </nav>
  );
}

export default UiNavbar;
