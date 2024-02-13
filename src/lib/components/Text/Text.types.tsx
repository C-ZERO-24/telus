import { VariantProps } from 'class-variance-authority';
import { textVariants } from './Text.variants';

export type TextElements = 'p' | 'span';

export type TextVariants = VariantProps<typeof textVariants>;

export type TextProps = {
  children?: React.ReactNode;
  as?: TextElements;
} & TextVariants &
  React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;
