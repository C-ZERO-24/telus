import { Text } from '../Text';
import { CardTextProps } from './Card.types';

export const CardText = ({ children, className, ...props }: CardTextProps) => {
  return (
    <Text
      as="p"
      className={'text-neutral-7 whitespace-pre-wrap text-body-3 ' + className}
      {...props}
    >
      {children}
    </Text>
  );
};
