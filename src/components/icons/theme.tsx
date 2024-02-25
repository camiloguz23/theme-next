/* eslint-disable multiline-ternary */
import { type ThemesType } from '@/types';

interface Prop {
  size?: string;
  typeTheme: ThemesType;
  className?: string;
  onClick?: () => void;
}

export const Theme = ({ size, typeTheme, className, onClick }: Prop): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size ?? '24px'}
      height={size ?? '24px'}
      onClick={() => onClick?.()}
      className={className}
      viewBox='0 0 24 24'
    >
      {typeTheme === 'light' ? (
        <path
          fill='currentColor'
          d='M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z'
        />
      ) : (
        <path
          fill='currentColor'
          d='M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21'
        />
      )}
    </svg>
  );
};
