import { Link as RRLink, LinkProps } from 'react-router-dom';

export const Link = ({ children, ...props }: LinkProps) => {
  return <RRLink {...props}>{children}</RRLink>;
};
