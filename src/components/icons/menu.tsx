/* eslint-disable multiline-ternary */
interface Prop {
  className?: string;
  size?: string;
  onClick?: () => void;
  open: boolean;
}

export const Menu = ({ className, onClick, size, open }: Prop): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size ?? '24px'}
      height={size ?? '24px'}
      onClick={() => onClick?.()}
      className={className}
      viewBox='0 0 24 24'
    >
      {open ? (
        <path
          fill='currentColor'
          d='M3 6h10v2H3zm0 10h10v2H3zm0-5h12v2H3zm13-4l-1.42 1.39L18.14 12l-3.56 3.61L16 17l5-5z'
        />
      ) : (
        <path
          fill='currentColor'
          d='M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12L21 8.41L19.59 7l-5 5l5 5z'
        />
      )}
    </svg>
  );
};
