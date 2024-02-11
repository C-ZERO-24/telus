import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

interface SetupResult extends RenderResult {
  user: UserEvent;
}

interface Options extends RenderOptions {
  route?: string;
}

export const AppProvidersWithRouter = ({
  children,
}: {
  children: React.ReactNode;
  initialEntries?: string[];
}) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

// test utils file
export const customRender = (
  jsx: JSX.Element,
  { route = '/', ...otherOptions }: Options = {},
): SetupResult => {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(jsx, { ...otherOptions }),
    user: userEvent.setup(),
  };
};

export * from '@testing-library/react';

// override render method
export { customRender as render };
