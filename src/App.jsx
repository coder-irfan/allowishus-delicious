import React from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Alowishus from "./component/Alowishus";
import OrderCoffee from "./component/OrderCoffee";
import SellingCoffee from "./component/SellingCoffee";
import DownloadApp from "./component/DownloadApp";
import Testmonial from "./component/Testimonials";
import Footer from "./component/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const handleNotAvailable = () => {
    toast.error("Currently Not Available.");
  };

  return (
    <>
      <Header handleNotAvailable={handleNotAvailable} />
      <Hero handleNotAvailable={handleNotAvailable} />
      <Alowishus handleNotAvailable={handleNotAvailable} />
      <OrderCoffee handleNotAvailable={handleNotAvailable} />
      <SellingCoffee handleNotAvailable={handleNotAvailable} />
      <DownloadApp handleNotAvailable={handleNotAvailable} />
      <Testmonial />
      <Footer handleNotAvailable={handleNotAvailable} />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;
