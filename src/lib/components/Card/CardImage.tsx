import { CardImageProps } from './Card.types';
import { Image } from '../Image';

export const CardImage = (props: CardImageProps) => {
  return (
    <div className="rounded-full p-1 border border-neutral-3 col-start-1 row-span-full w-[56px]">
      <Image className="object-contain rounded-full w-full h-full" {...props} />
    </div>
  );
};
