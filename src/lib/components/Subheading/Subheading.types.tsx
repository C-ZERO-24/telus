import { VariantProps } from 'class-variance-authority';
import { subheadingVariants } from './Subheading.variants';

export type SubheadingElements = 'p' | 'span';

export type SubheadingVariants = VariantProps<typeof subheadingVariants>;

export type SubheadingProps = {
  children?: React.ReactNode;
  as?: SubheadingElements;
} & SubheadingVariants &
  React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;
