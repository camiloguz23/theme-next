import type React from 'react';
import style from './sidebar-layout.module.css';
import { Icons } from '@/components';
import { type FlagsType } from '@/types';

interface PropsSidebarLayout {
  header: React.ReactNode;
  content: React.ReactNode;
  lang: FlagsType;
}

export const UiSidebarLayout = ({ content, header, lang }: PropsSidebarLayout): JSX.Element => {
  return (
    <main className={style.layout}>
      <header className={style.header}>{header}</header>
      <div className={style.nav}>
        <Icons.Flag flagType={lang} />
      </div>
      <div className={style.body}>{content}</div>
    </main>
  );
};
