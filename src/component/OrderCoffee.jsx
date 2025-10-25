import React from "react";

function OrderCoffee({ handleNotAvailable }) {
  return (
    <>
      <section
        className="flex flex-col-reverse md:flex-row items-center mt-10 pt-10 px-4 gap-6 bg-gradient-to-t to-neutral-ultraLightGray 
        from-neutral-veryLightGray rounded-3xl md:rounded-[3rem] lg:rounded-[6rem] 2xl:max-w-[96rem] 2xl:mx-auto"
      >
        <div className="">
          <img
            src="images/group-21.webp"
            alt="three-bottles-of-coffee"
            className=""
          />
        </div>

        <div className="max-w-[31.25rem] md:max-w-[21.875rem] lg:max-w-[28.125rem] xl:max-w-[32rem] text-center md:text-left space-y-4 md:space-y-6">
          <h2 className="text-[1.6rem] md:text-[clamp(1.8rem,4vw,4rem)] font-extrabold leading-[1.1]">
            Order Your Favourite Coffee
          </h2>

          <p className="text-[1.125rem] md:text-lg xl:text-2xl text-neutral-dimGray pb-5 md:pb-0 lg:pb-4">
            Freshly brewed aroma sits gently on your senses. Smooth textures
            blend with bold flavor to craft an experience beyond ordinary taste.
            Velvety warmth pours softly into each moment. Satisfaction rises
            slowly, like steam from the first morning cup.
          </p>

          <button
            onClick={handleNotAvailable}
            className="uppercase py-4 lg:px-6 xl:px-7 rounded-[2.5rem] max-w-64 md:max-w-44 w-full 
              text-neutral-white mx-auto sm:mx-0 font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
              lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
          >
            Order Now
          </button>
        </div>
      </section>
    </>
  );
}

export default OrderCoffee;
