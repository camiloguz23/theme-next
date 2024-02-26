import { type FlagsType } from '@/types';

interface Prop {
  className?: string;
  size?: string;
  flagType: FlagsType;
}

export const Flag = ({ flagType, className, size }: Prop): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size ?? '24px'}
    height={size ?? '24px'}
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
        <path fill='#fbd116' d='M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4' />
        <path fill='#22408c' d='M0 18h36v7H0z' />
        <path fill='#ce2028' d='M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z' />
      </>
    )}
  </svg>
);
