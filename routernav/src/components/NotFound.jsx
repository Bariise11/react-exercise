import { useRouteError } from 'react-router-dom';

const NotFound = () => {
  const error = useRouteError();
  const message =
    error?.statusText ||
    error?.message ||
    (typeof error === 'string' ? error : String(error)) ||
    'Sorry, this page does not exist.';

  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
      <p>Sorry, this page does not exist.</p>
    </div>
  );
};

export default NotFound;