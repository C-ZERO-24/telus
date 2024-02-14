import { cva } from 'class-variance-authority';

export const buttonVariants = cva('inline-flex justify-center', {
  variants: {
    variant: {
      primary:
        'gap-2 bg-primay-5 text-neutral-0 hover:bg-[#613889] disabled:bg-[#B3B9BE] active:bg-[#371E47]',
      secondary: '',
      ghost: '',
      tertiary: '',
    },
    size: {
      xlarge: 'px-[32px] py-[14px] text-button-4 rounded-[2000px]',
      large: '',
      medium: '',
      small: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'xlarge',
  },
});
