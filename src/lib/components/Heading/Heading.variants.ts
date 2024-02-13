import { cva } from 'class-variance-authority';

export const headingVariants = cva('', {
  variants: {
    size: {
      '5': 'text-heading-5',
      '4': 'text-heading-4',
      '3': 'text-heading-3',
      '2': 'text-heading-2',
      '1': 'text-heading-1',
    },
  },
  defaultVariants: {
    size: '1',
  },
});
