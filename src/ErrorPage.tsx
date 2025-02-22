import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg">Sorry, you just entered an invalid url</p>
      <div className="py-4 flex justify-center">
        <Link
          to="/"
          className="text-sm mt-2 bg-gray-600 rounded-md py-2 px-4 text-white"
        >
          Go back to home
        </Link>
      </div>
      {error && (
        <>
          <p className="text-sm mt-2 text-red-500">
            <i>{error.statusText || error.message}</i>
          </p>
        </>
      )}
    </div>
  );
};

export default ErrorPage;
