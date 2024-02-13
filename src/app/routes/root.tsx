import { Container } from '~/lib/components';
import { ProviderList } from '../components';
import { ProviderBrowse } from '../components/ProviderBrowse';

export default function Root() {
  return (
    <div className="h-full grid grid-rows-[200px_1fr]">
      <Container center className="bg-neutral-0 border-b border-[#EAEBEB]">
        <ProviderBrowse />
      </Container>
      <div className="bg-neutral-2 overflow-y-auto">
        <ProviderList />
      </div>
    </div>
  );
}
