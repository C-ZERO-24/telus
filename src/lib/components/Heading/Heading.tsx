import { HeadingProps, HeadingElements } from './Heading.types';

export type { HeadingProps, HeadingElements };

export const Heading = ({
  as,
  className,
  children,
  ...props
}: HeadingProps) => {
  const Element = as ?? 'h1';

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};
