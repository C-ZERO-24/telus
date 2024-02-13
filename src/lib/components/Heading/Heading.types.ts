import { VariantProps } from 'class-variance-authority';
import { headingVariants } from './Heading.variants';

export type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingElementAttributes = React.HTMLAttributes<HTMLHeadingElement>;

export type HeadingVariants = VariantProps<typeof headingVariants>;

export type HeadingProps = {
  children: React.ReactNode;
  as?: HeadingElements;
} & HeadingElementAttributes &
  HeadingVariants;
