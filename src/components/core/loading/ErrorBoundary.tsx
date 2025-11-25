import React from 'react';

import LinearProgress from '@mui/material/LinearProgress';

export const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (event: any) => {
      console.log('=====ErrorBoundary========', event?.message);
      if (event.message.includes('Failed to fetch dynamically imported module')) {
        setHasError(true);
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return <LinearProgress color="primary" />;
  }

  return children;
};

export const MemoErrorBoundary = React.memo(ErrorBoundary);
