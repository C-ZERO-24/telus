import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    size: {
      '6': 'text-body-6',
      '5': 'text-body-5',
      '4': 'text-body-4',
      '3': 'text-body-3',
      '2': 'text-body-2',
      '1': 'text-body-1',
    },
  },
  defaultVariants: {
    size: '1',
  },
});
