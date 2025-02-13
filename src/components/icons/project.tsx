interface Prop {
  size?: string;
}

export const Project = ({ size }: Prop): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size ?? '24px'} height={size ?? '24px'} viewBox='0 0 24 24'>
    <path
      fill='currentColor'
      d='M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z'
    />
  </svg>
);
