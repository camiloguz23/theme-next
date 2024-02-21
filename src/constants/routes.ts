import { type LinksModel } from '@/types';
import { IconsEnum } from '@/types/enum';

export const ROUTES: LinksModel[] = [
  {
    title: 'Home',
    icons: IconsEnum.home,
    path: '/'
  },
  {
    title: 'about',
    icons: IconsEnum.about,
    path: '/about'
  },
  {
    title: 'store',
    icons: IconsEnum.store,
    path: '/store'
  }
];
