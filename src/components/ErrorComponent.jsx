import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ErrorComponent is used to display an error message to the user when an error occurs in the app.
 * It receives a `message` prop, which is the error message to be displayed.
 */

const ErrorComponent = ({ message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorComponent;
