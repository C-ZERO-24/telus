import { HeadingProps } from '..';
import { ImageProps } from '../Image';
import { SubheadingProps } from '../Subheading';
import { TextProps } from '../Text';

export type CardContainerElements = 'div' | 'article' | 'li' | 'header';

export type CardProps = {
  children: React.ReactNode;
  as?: CardContainerElements;
  href?: string;
  center?: boolean;
} & React.HTMLAttributes<HTMLDivElement | HTMLLIElement>;

export type CardHeadingProps = HeadingProps;

export type CardSubheadingProps = SubheadingProps;

export type CardImageProps = ImageProps;

export type CardHeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export type CardTextProps = TextProps &
  React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;

export type LinkableCardProps = {
  href: CardProps['href'];
  children: CardProps['children'];
};

export type CardBodyProps = {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article';
  divider?: boolean;
} & React.HTMLAttributes<HTMLDivElement | HTMLSelectElement>;

export type CardFooterProps = {
  children: React.ReactNode;
};
