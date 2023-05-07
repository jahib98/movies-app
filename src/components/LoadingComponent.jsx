import React from 'react';

/**
 * LoadingComponent is a reusable component that displays a loading spinner.
 * It should be used when waiting for data to load or a long-running process to complete.
 */

const LoadingComponent = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-100"></div>
    </div>
  );
};

export default LoadingComponent;
