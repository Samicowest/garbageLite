import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      {error && (
        <p className="text-sm mt-2 text-red-500">
          <i>{error.statusText || error.message}</i>
        </p>
      )}
    </div>
  );
};

export default ErrorPage;
