import { HeadingProps, HeadingElements } from './Heading.types';
import { heading } from './Heading.variants';

export type { HeadingProps, HeadingElements };

export const Heading = ({ as, children, ...props }: HeadingProps) => {
  const Component = as ?? 'h1';

  const [variantClasses, elementAttributes] = heading(props);

  return (
    <Component className={variantClasses} {...elementAttributes}>
      {children}
    </Component>
  );
};
