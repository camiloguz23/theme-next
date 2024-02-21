import { type IconsEnum } from '@/types/enum';
import { type CSSProperties } from 'react';

interface Props {
  nameIcon: IconsEnum;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

function UIcon({ nameIcon, onClick, style, className }: Props): JSX.Element {
  return (
    <span className={`material-symbols-outlined ${className}`} onClick={onClick} style={style}>
      {nameIcon}
    </span>
  );
}

export default UIcon;
