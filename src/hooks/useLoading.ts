import { Router } from 'next/router';
import React from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setIsLoading(true);
    });

    Router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
    });

    Router.events.on('routeChangeError', () => {
      setIsLoading(false);
    });
  }, []);

  return { isLoading };
};

export default useLoading;
