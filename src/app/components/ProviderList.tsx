import { useProviders } from '~/api';
import { Card, Container, Heading, Spinner, Tag, Text } from '~/lib/components';

export const ProviderList = () => {
  const { data: providers, isLoading } = useProviders();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container
      as="main"
      className="gap-2 repeat(auto-fill, auto) overflow-y-auto w-fit mx-auto"
    >
      <Heading as="h2" className="my-3 text-input-1 text-neutral-8">
        <Text as="span" className="text-label-3">
          {providers?.length}
        </Text>{' '}
        providers in Ontario
      </Heading>

      {providers?.map(provider => {
        return (
          <Card
            href={`/provider/${provider.slug}`}
            key={provider.id}
            className="gap-3"
          >
            <Card.Header>
              <Card.Image
                src={provider.profileImgSrc}
                width="56px"
                height="56px"
              />
              <Card.Heading as="h3" className="text-subheading-1">
                {provider.name}
              </Card.Heading>
              <Card.Subheading className="text-input-1 -mt-1">
                {provider.occupation}
              </Card.Subheading>
            </Card.Header>
            <Card.Text className="line-clamp-2">{provider.bio}</Card.Text>
            <Tag variant={'ghost'} size={'1'}>
              {provider.status}
            </Tag>
          </Card>
        );
      })}
    </Container>
  );
};
