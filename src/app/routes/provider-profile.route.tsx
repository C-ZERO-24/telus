import { useLoaderData } from 'react-router-dom';
import { getProvider } from '~/api';
import {
  Breadcrumb,
  Card,
  Image,
  ExpandableText,
  Button,
  SVGChevronRight,
} from '~/lib/components';
import { ProviderDetails } from '../components/ProviderDetails';
import { CardSection } from '~/lib/components/Card/CardSection';

export const loader = async ({ params }: { params: { slug: string } }) => {
  const provider = await getProvider(params.slug);

  return provider;
};

const ProviderProfile = () => {
  const provider = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div className="bg-neutral-2 h-full pt-4">
      <main className="grid grid-rows-[min-content_1fr] grid-cols-[repeat(2,min-content)] gap-3 mx-auto max-w-fit ">
        <Breadcrumb
          className="row-start-1 col-span-full"
          separator={<SVGChevronRight />}
        >
          <Breadcrumb.Item to="/">Mental Wellness</Breadcrumb.Item>
          <Breadcrumb.Item to="#" active>
            {provider.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="w-[290px] h-[290px] row-start-2">
          <Image
            className="object-cover"
            src={'/clinician-profile.png'}
            height={'100%'}
            width={'100%'}
          />
        </div>
        <Card className="gap-6 row-start-2 p-8">
          <Card.Header>
            <Card.Heading as="h1" className="text-subheading-1">
              {provider.name}
            </Card.Heading>
            <Card.Subheading className="text-label-3">
              {provider.occupation}
            </Card.Subheading>
          </Card.Header>
          <CardSection>
            <ExpandableText>
              <Card.Text className="text-label-4">{provider.bio}</Card.Text>
            </ExpandableText>
          </CardSection>
          <Card.Section divider className="flex flex-col gap-4">
            <ProviderDetails />
          </Card.Section>
          <Card.Footer>
            <Button variant={'primary'} size={'medium'} fullWidth>
              Book with us
            </Button>
          </Card.Footer>
        </Card>
      </main>
    </div>
  );
};

export default ProviderProfile;
