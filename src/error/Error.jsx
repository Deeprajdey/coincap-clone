import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { data, status } = useRouteError();
  console.log(data);
  return (
    <div className="bg-white h-100vh flex flex-col align-center flex-center">
      <h1 className="font-50">{status}</h1>
      <p className="color-red font-3">{data}</p>
      <Link to={`/`} className="route-link">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
