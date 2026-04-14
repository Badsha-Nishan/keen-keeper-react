import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-base-200 px-4">
      
      <h1 className="text-6xl font-bold text-error">Oops!</h1>

      <p className="text-xl mt-2">Something went wrong</p>

      <p className="text-gray-500 mt-1">
        {error?.statusText || error?.message || "Unknown error"}
      </p>

      <Link to="/" className="btn btn-primary mt-6">
        Go Back Home
      </Link>

    </div>
  );
};

export default ErrorPage;