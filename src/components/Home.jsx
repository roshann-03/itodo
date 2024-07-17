import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="main bg-[#000000] text-[#EBF5EE] w-full min-h-screen flex flex-col h-screen items-center">
        
        <div className="container flex flex-col justify-center items-center w-1/2 h-1/2 mx-auto">

        <h1 className="text-4xl mb-4">Welcome to Our Website!</h1>
        <p className="text-lg text-center">
          Explore our awesome features and services.
        </p>
        <Link
          to="/about"
          className="mt-4 p-2 px-4 font-semibold bg-yellow-400 text-slate-900 rounded-md"
          >
          Learn More
        </Link>
          </div>
      </div>
    </>
  );
};

export default Home;
