import { cn } from '~/utils';
import { ContainerProps } from './Container.types';

export const Container = ({
  children,
  as,
  className,
  centerX,
  centerY,
  center,
  ...props
}: ContainerProps) => {
  const Element = as ?? 'div';

  return (
    <Element
      className={cn(
        'grid',
        centerX && 'justify-items-center',
        centerY && 'items-center',
        center && 'place-items-center',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};
