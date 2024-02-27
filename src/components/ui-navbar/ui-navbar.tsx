'use client';

import style from './ui-navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type DictionaryType, type LinksModel } from '@/types';
import { Icons } from '..';

interface Props {
  isCollapse?: boolean;
  lang: DictionaryType;
}

function UiNavbar({ isCollapse, lang }: Props): JSX.Element {
  const ROUTES: LinksModel[] = [
    {
      title: lang.home,
      icons: <Icons.Home></Icons.Home>,
      path: '/'
    },
    {
      title: lang.project,
      icons: <Icons.Project />,
      path: '/project'
    }
  ];
  const pathname = usePathname();

  return (
    <nav className={style.navbar}>
      {ROUTES.map((item) => (
        <Link key={item.title} className={`${style.item} ${pathname === item.path && style.active}`} href={item.path}>
          {item.icons} {isCollapse === true || item.title}
        </Link>
      ))}
    </nav>
  );
}

export default UiNavbar;
