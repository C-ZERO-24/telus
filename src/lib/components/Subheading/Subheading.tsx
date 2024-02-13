import { cn } from '~/utils';
import { SubheadingProps } from './Subheading.types';
import { subheadingVariants } from './Subheading.variants';

export type { SubheadingProps };

export const Subheading = ({
  as,
  size,
  className,
  children,
  ...props
}: SubheadingProps) => {
  const Element = as ?? 'span';

  const classes = cn(subheadingVariants({ size }), className);

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};
