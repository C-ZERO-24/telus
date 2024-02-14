import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex justify-center rounded-[2000px] gap-[10px] focus:outline focus:outline-[#80BDFF]',
  {
    variants: {
      variant: {
        primary:
          'gap-2 bg-primay-5 text-neutral-0 hover:bg-[#613889] disabled:bg-[#B3B9BE] active:bg-[#371E47]',
        secondary:
          'bg-neutral-0 border-2 border-[#613889] disabled:bg-neutral-3 disabled:text-neutral-5 active:bg-[#D8CBE5]',
        ghost:
          'bg-neutral-0 text-[#613889] hover:bg-[#F2EFF4] disabled:bg-[#B3B9BE] disabled:text-neutral-4 active:bg-[#D8CBE5]',
        tertiary:
          'bg-neutral-0 border-2 border-[#DFE1E6] text-neutral-9 disabled:bg-neutral-3 disabled:text-neutral-5',
      },
      size: {
        xlarge: 'px-[32px] py-[18px] text-button-4',
        large: 'px-[24px] py-[14px] text-button-3',
        medium: 'px-[20px] py-[12px] text-button-2',
        small: 'px-[16px] py-[8px]  text-button-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  },
);
