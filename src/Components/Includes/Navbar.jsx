import * as React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


function Navbar() {

  function scrollToAboutUs() {
    const aboutSection = document.getElementById("aboutus");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToContactUs() {
    const contactSection = document.getElementById("contactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  let accessCookie = (name)=>{
    let cookie = `${document.cookie}`;
    console.log(cookie.split("=")[1]);
    return(cookie.split("=")[1]);
  }
  
  const isLoggedIn = accessCookie("Techmate-Token");

  const handleLogout = () => {
    Cookies.remove("Token");
    window.location.reload(); 
  };
  
  return (
    <>
      <div className="navbar bg-base-100 shadow-md md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow text-sm"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <Link
                to="#aboutus"
                className="mt-2 mx-3 hover:font-bold"
                onClick={() => scrollToAboutUs()}
              >
                About us
              </Link>
              <li>
                <a className="mt-2">Services</a>
                <ul className="p-2">
                  <li>
                    <Link to="/graphic">Graphic Designing</Link>
                  </li>
                  <li>
                    <Link to="/electronics">Electronics</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#contactUs"
                  className="mt-2 hover:font-bold"
                  onClick={() => scrollToContactUs()}
                >
                  Contact us
                </Link>
              </li>
              <Link to="/search-shops" className="mt-2 mx-3 hover:font-bold">
                Search shops
              </Link>
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="btn btn-outline btn-primary bg-white border border-none font-bold mr-5 cursor-pointer"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="btn bg-blue-700 hover:text-blue-700 hover:bg-white text-white text-base"
                  >
                    Sign up
                  </Link>
                </>
              ) : (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="btn bg-blue-700 hover:text-blue-700 hover:bg-white text-white text-base"
                >
                  Logout
                </Link>
              )}
            </ul>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <Link to="/" className="font-semibold text-lg md:text-xl">
              Techmate
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <Link
              to="#aboutus"
              className="mt-2 mx-2 hover:font-bold"
              onClick={() => scrollToAboutUs()}
            >
              About us
            </Link>
            <li>
              <details className="z-100">
                <summary>Services</summary>
                <ul className="p-2 z-[1]">
                  <li>
                    <Link to="/graphic">Graphic Designing</Link>
                  </li>
                  <li>
                    <Link to="/electronics">Electronics</Link>
                  </li>
                </ul>
              </details>
            </li>
            <Link
              to="#contactUs"
              className="mt-2 mx-2 hover:font-bold"
              onClick={() => scrollToContactUs()}
            >
              Contact us
            </Link>
          </ul>
        </div>
        <div className="navbar-end hidden md:flex">
          <Link
            to="/search-shops"
            className="text-purple-600 font-semibold mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#050505"
                d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
              />
            </svg>
          </Link>
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-primary bg-white border border-none font-bold mr-5 cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn bg-blue-700 hover:text-blue-700 hover:bg-white text-white text-base"
              >
                Sign up
              </Link>
            </>
          ) : (
            <Link
              to="/"
              onClick={handleLogout}
              className="btn bg-blue-700 hover:text-blue-700 hover:bg-white text-white text-base"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
