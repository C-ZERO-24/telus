import { render, waitFor } from '~/utils';
import { HttpResponse, delay, http } from 'msw';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { server } from '~/api/msw';
import { routes } from '~/app/routes';

jest.spyOn(console, 'error').mockImplementation(() => {});

describe('root', () => {
  it('renders blog post links to be displayed', async () => {
    const router = createMemoryRouter(routes);

    const { getByText } = render(<RouterProvider router={router} />);

    await waitFor(() => getByText(/hello world/i), {
      timeout: 4000,
    });

    expect(getByText(/hello world/i)).toBeInTheDocument();
  });
  it('displays error page with expected error message', async () => {
    server.use(
      http.get('/example', async () => {
        await delay();
        return new HttpResponse(null, {
          status: 500,
          statusText: 'There was a problem retrieving data.',
        });
      }),
    );

    const router = createMemoryRouter(routes);

    const { getByText } = render(<RouterProvider router={router} />);

    await waitFor(() => getByText('There was a problem retrieving data.'), {
      timeout: 4000,
    });
  });
});
