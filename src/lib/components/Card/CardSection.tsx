import { CardBodyProps } from './Card.types';

export const CardSection = ({
  children,
  as,
  divider,
  ...props
}: CardBodyProps) => {
  const Element = as ?? 'div';

  return (
    <Element {...props}>
      {divider && <hr className="text-neutral-3 h-[1px] -mx-3" />}
      {children}
    </Element>
  );
};
