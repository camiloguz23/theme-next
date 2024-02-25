import style from './animation.module.css';

interface Props {
  children: React.ReactNode;
}

export const TransitionPage = ({ children }: Props): JSX.Element => (
  <div className={style['animate-from-top']}>{children}</div>
);
