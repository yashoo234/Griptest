import { cn } from '@/utils/utils';

interface ArrowDownProps {
  className?: string;
}

const ArrowDown = ({ className }: ArrowDownProps) => {
  return (
    <svg
      className={cn(
        'w-6 h-6 transition-transform duration-300 stroke-2',
        'group-data-[state=open]:rotate-180',
        'group-data-[state=open]:stroke-lp15-primary',
        'group-data-[state=closed]:stroke-[#FFE3DF]',
        className
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <polyline points='6 9 12 15 18 9' />
    </svg>
  );
};

export default ArrowDown;
