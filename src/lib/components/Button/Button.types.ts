import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './Button.variants';

export type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.HTMLAttributes<HTMLButtonElement>;
