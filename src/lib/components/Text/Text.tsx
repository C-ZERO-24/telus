import { TextProps } from './Text.types';

export type { TextProps };

export const Text = ({ as, className, children, ...props }: TextProps) => {
  const Element = as ?? 'span';

  return (
    <Element className={className} {...props}>
      {children}
    </Element>
  );
};
