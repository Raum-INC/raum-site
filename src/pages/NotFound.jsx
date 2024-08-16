// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page Not Found</p>
      <Link
        to="/"
        className="mt-5 p-2 px-6 bg-white rounded-full text-[#151419]"
      >
        Click to return to homepage
      </Link>
    </div>
  );
};

export default NotFound;
