import { useRouteError } from 'react-router-dom';

type AppError = {
  statusText: string;
  message: string;
};

function IsAppError(error: unknown): error is AppError {
  return error instanceof Error;
}

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (!IsAppError(error)) {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>An unknown error has occurred</p>
      </div>
    );
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
