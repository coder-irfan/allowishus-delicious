import React from "react";

function DownloadApp({ handleNotAvailable }) {
  return (
    <>
      <section
        className="relative flex flex-col-reverse md:flex-row items-center mt-10 pt-4 px-4 md:gap-6 bg-gradient-to-t to-neutral-ultraLightGray 
        from-neutral-veryLightGray rounded-3xl md:rounded-[3rem] lg:rounded-[6rem] 2xl:max-w-[96rem] 2xl:mx-auto"
      >
        <img
          src="images/8a4bc2a677e8dad6745d815c474ea85749d69062.webp"
          alt=""
          className="absolute max-w-[28rem] -left-[20rem] top-36 sm:max-w-full sm:w-[35rem] sm:-left-[25rem] md:w-[25rem] sm:-top-0 md:-top-10 lg:w-[30rem] xl:w-[35rem]
          transform rotate-[18deg] lg:-top-20 xl:-top-10 md:-left-[21.5rem] lg:-left-[24rem] xl:-left-[29rem]"
        />

        <div className="max-w-[31.25rem] md:max-w-[21.875rem] lg:max-w-[28.125rem] xl:max-w-[32rem] text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-[1.6rem] md:text-[clamp(1.8rem,4vw,4rem)] font-extrabold leading-[1.1]">
            Instant Coffee At Your Home
          </h2>

          <p className="text-[1.125rem] md:text-lg xl:text-2xl text-neutral-dimGray pb-5 md:pb-0 lg:pb-4">
            Instant coffee at home has never been this easy or satisfying. Just
            add hot water, stir, and enjoy bold, café-style flavor in seconds.
            Whether it's your morning ritual or a midday boost, great coffee is
            always within reach.
          </p>

          <button
            onClick={handleNotAvailable}
            className="py-3 lg:py-4 lg:px-6 xl:py-5 xl:px-8 rounded-[2.5rem] max-w-64 w-full 
            text-neutral-white mx-auto sm:mx-0 uppercase font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
            lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
          >
            Download Our App
          </button>
        </div>

        <div className="">
          <img
            src="images/group-33.webp"
            alt="image-of-page"
            width={937}
            height={718}
            className="w-96 md:w-auto"
          />
        </div>
      </section>
    </>
  );
}

export default DownloadApp;
