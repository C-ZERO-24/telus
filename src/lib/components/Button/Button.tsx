import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import { buttonVariants } from './Button.variants';

export const Button = ({
  children,
  variant,
  className,
  fullWidth,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        buttonVariants({ variant, size }),
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
