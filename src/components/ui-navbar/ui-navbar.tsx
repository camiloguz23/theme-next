import style from './ui-navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type LinksModel } from '@/types';
import { Icons } from '..';

interface Props {
  isCollapse?: boolean;
}

function UiNavbar({ isCollapse }: Props): JSX.Element {
  const ROUTES: LinksModel[] = [
    {
      title: 'Home',
      icons: <Icons.Home></Icons.Home>,
      path: '/'
    },
    {
      title: 'about',
      icons: <Icons.AboutMe></Icons.AboutMe>,
      path: '/about'
    },
    {
      title: 'store',
      icons: <Icons.Store></Icons.Store>,
      path: '/store'
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
