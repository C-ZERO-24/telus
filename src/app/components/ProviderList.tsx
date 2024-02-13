import { useProviders } from '~/api';
import { Card, Container, Heading, Tag, Text } from '~/lib/components';

export const ProviderList = () => {
  const { data: providers } = useProviders();

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
          <Card href="#" key={provider.id} className="gap-3">
            <Card.Header>
              <Card.Image
                src={provider.profileImgSrc}
                width="56px"
                height="56px"
              />
              <Card.Heading as="h3" className="text-subheading-1">
                {provider.name}
              </Card.Heading>
              <Card.Subheading>{provider.occupation}</Card.Subheading>
            </Card.Header>
            <Card.Text>{provider.bio}</Card.Text>
            <Tag variant={'ghost'} size={'1'}>
              {provider.status}
            </Tag>
          </Card>
        );
      })}
    </Container>
  );
};
