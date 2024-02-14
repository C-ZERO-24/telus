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
        'flex flex-col',
        centerX && 'justify-center',
        centerY && 'items-center',
        center && 'justify-center items-center',
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};
