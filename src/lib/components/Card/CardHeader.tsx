import { cn } from '~/utils';
import { CardHeaderProps } from './Card.types';

export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  return (
    <header
      className={cn('grid grid-rows-2 grid-cols-[min-content_1fr]', className)}
      {...props}
    >
      {children}
    </header>
  );
};
