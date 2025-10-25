import React from "react";

const allowishuses = [
  {
    id: "1",
    title: "Our Catering",
    text: "Alowishus Catering, delicious drop off Catering",
    img: "images/food.webp",
    button: "Order cathering",
  },

  {
    id: "2",
    title: "The Food",
    text: "Our entire menu is available as dine in or takeaway.",
    img: "images/fast-food.webp",
    button: "food menu",
  },

  {
    id: "3",
    title: "The Gelato",
    text: "Life is like GELATO, enjoy it before it melts.",
    img: "images/ice-cream.webp",
    button: "Discover more",
  },
];

function Alowishus({ handleNotAvailable }) {
  return (
    <>
      <section
        id="alowishus"
        className="relative mt-12 pt-12 px-4 lg:pt-28 bg-gradient-to-t to-neutral-ultraLightGray from-neutral-veryLightGray rounded-e-[4rem]
        md:rounded-e-[7rem] lg:rounded-e-[10rem] text-center md:text-left 2xl:max-w-[96rem] 2xl:mx-auto scroll-mt-20"
      >
        <img
          src="images\8a4bc2a677e8dad6745d815c474ea85749d69062.webp"
          alt=""
          className="w-24 sm:w-32 -right-6 sm:-right-8 md:w-38 lg:w-52 h-auto absolute -top-4"
        />

        <img
          src="images/2bfd2f572d76b2164731d5885831e1dc2c6217a8.webp"
          alt=""
          className="-scale-x-[1] absolute w-28 -left-16 top-0 sm:w-48 sm:-left-24 sm:top-6 md:w-56 md:-left-28 lg:w-72 lg:-left-40 xl:w-96 xl:-left-48"
        />

        <div className="text-center sm:max-w-[45rem] mx-auto space-y-3">
          <h2 className="text-[1.6rem] md:text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-neutral-veryDarkGray">
            Explore Our Alowishus
          </h2>
          <p className="sm:text-lg lg:text-[1.3rem] xl:text-2xl text-neutral-dimGray sm:px-10">
            Enjoy a refreshing cup from our signature cold brew collection OR
            try one of our expertly crafted espresso drinks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 mt-12 md:mt-14 xl:mt-24">
          {allowishuses.map((allowishus, id) => (
            <div
              key={id}
              className="bg-neutral-white py-7 px-5 md:px-8 md:py-10 rounded-2xl"
            >
              <div className="space-y-2 md:space-y-5">
                <h3 className="text-[1.3rem] md:text-2xl lg:text-[1.8rem] xl:text-[2.25rem] font-semibold text-neutral-veryDarkGray">
                  {allowishus.title}
                </h3>
                <p className="text-[1.1rem] lg:text-xl xl:text-2xl text-neutral-dimGray">
                  {allowishus.text}
                </p>
              </div>

              <div className="flex flex-col items-center mt-10 gap-10 md:gap-14">
                <img
                  src={allowishus.img}
                  alt={allowishus.title}
                  className="max-w-[7.5rem] md:max-w-[8.4375rem] xl:max-w-[9.375rem]"
                />
                <button
                  onClick={handleNotAvailable}
                  className="uppercase py-4 lg:px-6 xl:px-7 rounded-[2.5rem] max-w-64 md:max-w-44 lg:max-w-52 xl:max-w-56 w-full 
                text-neutral-white mx-auto sm:mx-0 font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
                  lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
                >
                  {allowishus.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Alowishus;
