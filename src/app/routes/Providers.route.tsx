import { Container } from '~/lib/components';
import { ProviderList } from '../components';
import { ProviderBrowse } from '../components/ProviderBrowse';
import { useDocumentTitle } from '~/lib/hooks';

export default function Providers() {
  useDocumentTitle('Providers');

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
