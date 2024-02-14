import { useState } from 'react';
import { ShowmoreProps } from './ExpandableText.types';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { SVGChevronUp } from '../icons/SVGChevronUp';
import { SVGChevronDown } from '../icons/SVGChevronDown';

export const ExpandableText = ({
  children,
  expanded: externalExpanded,
  onButtonClick,
  ...props
}: ShowmoreProps) => {
  const [internalExpanded, setInternalExpanded] = useState(false);

  const isControlled = externalExpanded !== undefined;

  const expanded = isControlled ? externalExpanded : internalExpanded;

  const handleShowMoreClick = () => {
    if (!isControlled) {
      setInternalExpanded(!expanded);
      return;
    }
    onButtonClick?.(!expanded);
  };

  return (
    <div>
      <div {...props}>
        <Slot className={clsx(!expanded && `line-clamp-3`)}>{children}</Slot>
      </div>
      <button
        className="mt-5 text-secondary-5 text-label-4"
        onClick={handleShowMoreClick}
      >
        {expanded ? (
          <span>
            Read Less
            <SVGChevronUp className="inline-block ml-1" />
          </span>
        ) : (
          <span>
            Read More
            <SVGChevronDown className="inline-block ml-1" />
          </span>
        )}
      </button>
    </div>
  );
};
