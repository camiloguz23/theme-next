import { type FlagsType } from '@/types';

interface Prop {
  className?: string;
  size?: string;
  onClick?: () => void;
  flagType: FlagsType;
}

export const FlagEn = ({ flagType, className, onClick, size }: Prop): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size ?? '24px'}
    height={size ?? '24px'}
    onClick={() => onClick?.()}
    className={className}
    viewBox='0 0 36 36'
  >
    {flagType === 'en' && (
      <>
        <path fill='#eee' d='M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4' />
        <path fill='#ce1124' d='M21 5h-6v10H0v6h15v10h6V21h15v-6H21z' />
      </>
    )}
    {flagType === 'es' && (
      <>
        <path fill='#c60a1d' d='M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z' />
        <path fill='#ffc400' d='M0 12h36v12H0z' />
        <path fill='#ea596e' d='M9 17v3a3 3 0 1 0 6 0v-3z' />
        <path fill='#f4a2b2' d='M12 16h3v3h-3z' />
        <path fill='#dd2e44' d='M9 16h3v3H9z' />
        <ellipse cx='12' cy='14.5' fill='#ea596e' rx='3' ry='1.5' />
        <ellipse cx='12' cy='13.75' fill='#ffac33' rx='3' ry='.75' />
        <path fill='#99aab5' d='M7 16h1v7H7zm9 0h1v7h-1z' />
        <path fill='#66757f' d='M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z' />
      </>
    )}
  </svg>
);
