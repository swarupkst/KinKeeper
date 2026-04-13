import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex items-center justify-center bg-white text-black px-4 py-20">
      <div className="text-center max-w-lg">
        
        <h1 className="text-8xl font-extrabold text-red-500 mb-4 animate-pulse">
          404
        </h1>

        <h2 className="text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>

        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full text-lg font-medium transition duration-300 shadow-lg"
        >
          Go Back Home
        </Link>

        <div className="mt-10 opacity-70">
          <span className="text-6xl">🚧</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;