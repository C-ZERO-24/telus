import { SVGEducation, SVGGlobe, SVGLocationMap } from '~/lib/components';

type DesriptionItemProps = {
  title: string;
  content: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const DescriptionItem = ({ title, content, Icon }: DesriptionItemProps) => (
  <div className="grid grid-rows-2 gap-x-2 grid-cols-[32px_1fr] items-center">
    <Icon className="row-start-1 row-span-full" aria-hidden={true} />
    <dt className="col-start-2 row-start-1 text-neutral-7 whitespace-pre-wrap text-input-1">
      {title}
    </dt>
    <dl className="col-start-2 row-start-2 text-neutral-8 text-label-3">
      {content}
    </dl>
  </div>
);

export const ProviderDetails = () => {
  return (
    <dl className="flex flex-col gap-6">
      <DescriptionItem
        title="Location"
        content="Toronto, Ontario"
        Icon={SVGLocationMap}
      />
      <DescriptionItem
        title="Education"
        content="University of Toronto"
        Icon={SVGEducation}
      />
      <DescriptionItem
        title="Language"
        content="English, French"
        Icon={SVGGlobe}
      />
    </dl>
  );
};
