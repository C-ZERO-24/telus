import { cva } from 'class-variance-authority';

export const subheadingVariants = cva('', {
  variants: {
    size: {
      '5': 'text-subheading-5',
      '4': 'text-subheading-4',
      '3': 'text-subheading-3',
      '2': 'text-subheading-2',
      '1': 'text-subheading-1',
    },
  },
  defaultVariants: {
    size: '1',
  },
});
