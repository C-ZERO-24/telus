import { ImageProps } from './Image.types';

export type { ImageProps };

export const Image = ({ src, alt, className, ...props }: ImageProps) => {
  return <img className={className} src={src} alt={alt} {...props} />;
};
