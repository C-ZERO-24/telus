import { Heading, Subheading, Tag, Text, SVGLocation } from '~/lib/components';

export const ProviderBrowse = () => {
  return (
    <header className="flex flex-col w-fit min-w-[575px] mx-auto gap-5">
      <div>
        <Heading className="text-subheading-3 mb-[10px]">
          Browse our Providers
        </Heading>
        <Subheading as="p" className="text-neutral-7 text-input-3">
          Mental Wellness
        </Subheading>
      </div>

      <Tag size={'3'} variant={'outline'}>
        <SVGLocation className="text-secondary-5 inline-block" />
        <Text as="span" className="text-label-3">
          ON
        </Text>
      </Tag>
    </header>
  );
};
