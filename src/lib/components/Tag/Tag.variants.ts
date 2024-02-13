import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'inline-flex justify-center w-fit min-w-[85px]',
  {
    variants: {
      size: {
        '1': 'py-[6px] px-[12px] rounded-[200px]',
        '2': '',
        '3': 'gap-[5px] p-[10px] rounded-[94px]',
      },
      variant: {
        ghost: 'bg-secondary-2 text-badge-2',
        outline: 'border border-neutral-3',
      },
    },
    defaultVariants: {
      size: '2',
      variant: 'outline',
    },
  },
);
