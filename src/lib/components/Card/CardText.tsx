import { Text } from '../Text';
import { CardTextProps } from './Card.types';

export const CardText = ({ children, ...props }: CardTextProps) => {
  return (
    <Text
      as="p"
      className={'text-neutral-7 text-body-3 line-clamp-2'}
      {...props}
    >
      {children}
    </Text>
  );
};
