import { VariantProps } from 'class-variance-authority';
import { tagVariants } from './Tag.variants';

type TagVariants = VariantProps<typeof tagVariants>;

export type TagProps = {
  children: React.ReactNode;
} & TagVariants &
  React.HTMLAttributes<HTMLSpanElement>;

export type TagIcon = React.HTMLAttributes<HTMLSpanElement>;
export type TagLabel = React.HTMLAttributes<HTMLSpanElement>;
