import { VariantProps } from 'class-variance-authority';
import { headingBase } from './Heading.variants';
import { BaseBoxVariants } from '..';

export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingElementAttributes = React.HTMLAttributes<HTMLHeadingElement>;

export type BaseHeadingVariants = VariantProps<typeof headingBase>;

export type HeadingVariants = BaseHeadingVariants & BaseBoxVariants;

export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: HeadingElements;
} & HeadingElementAttributes &
  HeadingVariants;
