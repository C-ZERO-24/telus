import { QueryClient, QueryClientProvider as QCP } from '@tanstack/react-query';

const defaultQueryConfig = { staleTime: 60000 };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: defaultQueryConfig,
  },
});

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <QCP client={queryClient}>{children}</QCP>;
};
