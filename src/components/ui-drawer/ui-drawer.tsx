'use client';

import style from './ui-drawer.module.css';

interface PropsDrawer {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean | null;
}

export const UiDrawer = ({ children, onClose, open }: PropsDrawer): JSX.Element => {
  return (
    <>
      <div
        className={`${style.contentDrawer} ${open !== null ? style[open ? 'drawer-open' : 'drawer-closed'] : style.init}`}
        onClick={(e) => {
          const element = e.target as HTMLDivElement;
          const className = element.classList.value;
          className.includes('contentDrawer') && onClose();
        }}
      >
        <div className={style.drawer}>{children}</div>
      </div>
    </>
  );
};
