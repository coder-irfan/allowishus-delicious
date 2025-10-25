import React, { useState, useEffect } from "react";

function Header({ handleNotAvailable }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className="flex justify-between items-center gap-4 overflow-hidden 2xl:max-w-[100rem] 2xl:mx-auto fixed z-50 right-0 left-0 top-0 
        p-4 sm:px-10 lg:px-16 xl:px-24 bg-neutral-ultraLightGray shadow-md"
      >
        <div className="">
          <img
            src="images/alowishus-logo.webp"
            alt="alowishus-logo"
            className="w-28 lg:w-32"
            width={126}
            height={50}
          />
        </div>

        <div
          className={`md:hidden fixed top-0 bottom-0 left-0 right-0 h-screen w-screen bg-neutral-veryDarkGray transition-opacity duration-1000 z-10
          ${
            isOpen
              ? "opacity-80 pointer-events-none"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {!isOpen && (
          <div className="absolute top-6 right-6 sm:right-10 text-2xl md:hidden">
            <i
              className="fa-solid fa-bars-staggered cursor-pointer"
              onClick={() => setIsOpen(true)}
            ></i>
          </div>
        )}

        <nav
          className={`md:relative flex flex-col md:flex-row md:items-center gap-8 xl:gap-10 bg-neutral-veryLightGray md:bg-transparent pt-24 
          p-8 md:p-0 top-0 fixed right-0 h-full w-3/4 md:w-auto md:h-auto md:right-0 shadow-lg shadow-neutral-ultraLightGray md:shadow-none transition-all duration-700 
          z-20 md:z-0 text-[1.125rem] md:text-base lg:text-lg font-medium text-neutral-veryDarkGray ${
            isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 xl:gap-10">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#alowishus" className="hover:underline">
                Alowishus
              </a>
            </li>
            <li>
              <a href="#customers" className="hover:underline">
                Customers
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>

          <hr className="md:hidden bg-neutral-dimGray h-0.5" />

          <div className="flex flex-col md:flex-row gap-6 lg:gap-4 items-center">
            <div className="cursor-pointer" onClick={handleNotAvailable}>
              <i className="fa-solid fa-basket-shopping p-4 bg-neutral-white rounded-full"></i>
            </div>

            <button
              onClick={handleNotAvailable}
              className="text-center max-w-96 w-full lg:w-auto lg:text-left px-7 py-2 rounded-[2.5rem] text-neutral-white uppercase
              md:text-[0.9375rem] md:hidden lg:bloc bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
              lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
            >
              Buy gift vouchers
            </button>
          </div>

          {isOpen && (
            <div
              className="absolute top-6 right-6 sm:right-10 text-3xl md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa-solid fa-xmark cursor-pointer"></i>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
