import React from "react";

function Hero({ handleNotAvailable }) {
  return (
    <>
      <section
        id="home"
        className="flex flex-col justify-between md:flex-row md:items-center text-center md:text-start pt-20 sm:pt-24 lg:pt-28 gap-16 
        2xl:max-w-[100rem] 2xl:mx-auto 2xl:justify-center scroll-mt-20"
      >
        <div className="max-w-[30rem] sm:max-w-[35rem] md:max-w-[32rem] mx-auto leading-tight 2xl:max-w-[40rem]">
          <h1 className="text-[clamp(2.4rem,8vw,4rem)] md:text-[clamp(2.5rem,7vw,7.75rem)] font-extrabold leading-[1.2]">
            Alowishus Delicious Coffee
          </h1>

          <p className="sm:text-[1.125rem] lg:text-2xl text-neutral-dimGray mt-4">
            A drink from the ‘My Alowishus’ bottled brews range OR grab one of
            our delicious coffee’s.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center items-center md:items-center lg:flex-row md:justify-start gap-4 mt-6 
            lg:gap-8 md:mt-8 lg:mt-10 xl:mt-16"
          >
            <button
              onClick={handleNotAvailable}
              className="py-3 lg:py-4 lg:px-6 xl:py-5 xl:px-8 rounded-[2.5rem] max-w-64 md:max-w-44 lg:max-w-52 xl:max-w-56 w-full 
              text-neutral-white mx-auto sm:mx-0 uppercase font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
                lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
            >
              Download App
            </button>

            <a
              onClick={handleNotAvailable}
              href="#"
              className="uppercase font-medium text-neutral-veryDarkGray border-b-2 border-b-neutral-dimGray lg:text-lg hover:text-neutral-dimGray
              transition-colors duration-300"
            >
              Shop Coffee
            </a>
          </div>
        </div>

        <div className="">
          <img
            src="images/hero_img.webp"
            alt="coffee"
            width={700}
            height={712}
            className="max-w-[32.25rem] w-full mx-auto md:max-w-full md:mx-0"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
