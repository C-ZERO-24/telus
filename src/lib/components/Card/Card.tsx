import { cn } from '~/utils';
import { CardProps, LinkableCardProps } from './Card.types';
import { CardImage } from './CardImage';
import { CardHeading } from './CardHeading';
import { CardSubheading } from './CardSubheading';
import { CardHeader } from './CardHeader';
import { CardText } from './CardText';
import { Link } from '..';

const LinkableCard = ({ href, children }: LinkableCardProps) => {
  if (!href) {
    return children;
  }

  return <Link to={href}>{children}</Link>;
};

export const Card = ({
  children,
  as,
  className,
  center = true,
  href,
  ...props
}: CardProps) => {
  const Element = as ?? 'article';

  return (
    <LinkableCard href={href}>
      <Element
        className={cn(
          'flex flex-col bg-neutral-0 p-3 w-full max-w-[598px] min-w-[375px]',
          center && 'mx-auto',
          className,
        )}
        {...props}
      >
        {children}
      </Element>
    </LinkableCard>
  );
};

Card.Heading = CardHeading;
Card.Subheading = CardSubheading;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Text = CardText;
