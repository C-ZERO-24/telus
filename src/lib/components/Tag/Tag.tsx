import { cn } from '~/utils';
import { TagProps } from './Tag.types';
import { tagVariants } from './Tag.variants';

export const Tag = ({
  children,
  className,
  size,
  variant,
  ...props
}: TagProps) => {
  return (
    <span className={cn(tagVariants({ size, variant }), className)} {...props}>
      {children}
    </span>
  );
};
