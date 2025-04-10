import * as React from "react";
import Contact from "./Components/Home/Contact";
import About from "./Components/Home/About";
import Banner from "./Components/Home/Banner";
import Services from "./Components/Home/Service";
import Why from "./Components/Home/Why";
import Navbar from "./Components/Includes/Navbar";
import Footer from "./Components/Includes/Footer";
import Testimonial from "./Components/Home/Testimonial";
import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./Components/Electronics/Main";
import Graphiv_Main from "./Components/Graphic/Main";
import PaymentVerification from "./Payment/PaymentVerification";
import Allproduct from "./Template/Product";
import Allcategory from "./Template/allCategories";
import Product from "./Template/Product";
import ShopsTemplate from "./Template/shops_template";
import SearchShops from "./Template/SearchShops";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Banner />
        <Services />
        <Why />
        <About />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
        <Footer />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Navbar />
        <Signup />
        <Footer />
      </div>
    ),
  },
  {
    path: "/electronics",
    element: (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    ),
  },
  {
    path: "/paymentsuccess",
    element: (
      <div>
        <Navbar />
        <PaymentVerification />
        <Footer />
      </div>
    ),
  },
  {
    path: "/allproduct",
    element: (
      <div>
        <Navbar />
        <Allproduct />
        <Footer />
      </div>
    ),
  },
  {
    path: "/graphic",
    element: (
      <div>
        <Navbar />
        <Graphiv_Main />
        <Footer />
      </div>
    ),
  },
  {
    path: "/allcategories",
    element: (
      <>
        <Navbar />
        <Allcategory />
        <Footer />
      </>
    ),
  },
  {
    path: "/shops",
    element: (
      <>
        <Navbar />
        <ShopsTemplate />
        <Footer />
      </>
    ),
  },
  {
    path: "/search-shops",
    element: (
      <>
        <Navbar />
        <SearchShops />
        <Footer />
      </>
    ),
  },
  {
    path: "/category/:category",
    element: (
      <div>
        <Navbar />
        <Product />
        <Footer />
      </div>
    ),
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
