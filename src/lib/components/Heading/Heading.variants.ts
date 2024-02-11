import { cva } from 'class-variance-authority';
import { box } from '../Box';
import { HeadingElementAttributes, HeadingProps } from './Heading.types';
import { cn } from '~/utils';

export const headingBase = cva('', {
  variants: {
    size: {
      '1': 'text-4xl',
      '2': 'text-3xl',
      '3': 'text-2xl',
      '4': 'text-xl',
      '5': 'text-lg',
      '6': 'text-sm',
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export const heading = ({
  size,
  m,
  mx,
  my,
  p,
  py,
  px,
  display,
  color,
  className,
  ...otherProps
}: Partial<HeadingProps>): [string, HeadingElementAttributes] => {
  return [
    cn(
      headingBase({ size }),
      box({ m, mx, my, p, py, px, display, color }),
      className,
    ),
    otherProps,
  ];
};
