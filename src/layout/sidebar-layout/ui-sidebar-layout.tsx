import type React from 'react';
import style from './sidebar-layout.module.css';

interface PropsSidebarLayout {
  header: React.ReactNode;
  content: React.ReactNode;
}

export const UiSidebarLayout = ({ content, header }: PropsSidebarLayout): JSX.Element => {
  return (
    <main className={style.layout}>
      <header className={style.header}>{header}</header>
      <div className={style.body}>{content}</div>
    </main>
  );
};
