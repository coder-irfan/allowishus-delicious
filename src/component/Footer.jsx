import React from "react";

const icons = [
  {
    id: "1",
    img: "images/facebook.webp",
  },

  {
    id: "2",
    img: "images/instagram.webp",
  },

  {
    id: "3",
    img: "images/twitter.webp",
  },

  {
    id: "4",
    img: "images/linkedin.webp",
  },
];

function Footer({ handleNotAvailable }) {
  return (
    <>
      <footer
        id="contact-us"
        className="mt-24 lg:mt-36 2xl:max-w-[96rem] 2xl:mx-auto scroll-mt-28"
      >
        <div className="space-y-16 md:space-y-24 mb-12 lg:mb-24">
          <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-10">
            <div className="max-w-[28.125rem] md:max-w-[21.875rem] lg:max-w-[28.125rem] xl:max-w-[35rem] space-y-4 lg:space-y-8">
              <img
                src="images/alowishus-logo.webp"
                alt=""
                width={307}
                height={122}
                className="max-w-44 md:max-w-52 xl:max-w-64"
              />

              <p className="sm:text-lg lg:text-[1.3rem] xl:text-3xl text-neutral-dimGray">
                We made it our mission to create community everyday and grow
                meaningful, lasting relationships with our staff, our suppliers
                and of course you, our customers.
              </p>
            </div>

            <div className="xl:max-w-[35rem] lg:max-w-[23.125rem] space-y-4 md:space-y-5 xl:space-y-6">
              <h3 className="text-2xl md:text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] font-extrabold text-neutral-veryDarkGray">
                Contact Alowishus!
              </h3>

              <div className="flex gap-3 lg:gap-4 items-center">
                <img
                  src="images/email.webp"
                  alt="email"
                  className="p-1.5 md:p-2.5 bg-neutral-white rounded-full"
                />
                <p className="text-[1.1rem] md:text-[1.3rem] xl:text-[1.675rem] text-neutral-dimGray">
                  alowishus@gmai.com
                </p>
              </div>

              <div className="flex gap-3 lg:gap-4 items-center">
                <img
                  src="images/call.webp"
                  alt="phone"
                  className="p-1 md:p-2 bg-neutral-white rounded-full"
                />
                <p className="text-[1.1rem] md:text-[1.3rem] xl:text-[1.675rem] text-neutral-dimGray">
                  +110 214 214 2451
                </p>
              </div>

              <div className="flex gap-3 xl:gap-5">
                {icons.map((icon, id) => (
                  <img
                    key={id}
                    src={icon.img}
                    alt="icon"
                    className="p-1 md:p-2 bg-neutral-white rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col md:flex-row justify-between gap-14 md:gap-10">
              <div className="max-w-[28.125rem] md:max-w-[21.875rem] lg:max-w-[28.125rem] xl:max-w-[35rem] space-y-3 lg:space-y-8">
                <h3 className="text-2xl md:text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] font-extrabold text-neutral-veryDarkGray">
                  Store Locations
                </h3>

                <p className="sm:text-lg lg:text-[1.3rem] xl:text-3xl text-neutral-dimGray">
                  Find your nearest Alowishus store with opening hours, location
                  and contact details.
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-sm lg:text-lg uppercase font-semibold text-neutral-veryDarkGray hover:underline cursor-pointer">
                    Find my Alowishus
                  </span>

                  <img src="images/arrow.webp" alt="arrow" className="w-6" />
                </div>
              </div>

              <div className="md:max-w-[18.75rem] lg:max-w-[23.125rem] space-y-3 md:space-y-5 xl:space-y-8">
                <h3 className="text-2xl md:text-[clamp(1.5rem,3vw,2.65rem)] leading-[1.1] font-extrabold text-neutral-veryDarkGray">
                  First One’s On Us!
                </h3>

                <div className="flex flex-col gap-4 lg:gap-6">
                  <input
                    type="email"
                    placeholder="E-mail"
                    required
                    className="py-3 lg:py-4 px-6 max-w-80 rounded-[2.5rem] w-full focus:outline-neutral-dimGray focus:outline-none"
                  />

                  <button
                    onClick={handleNotAvailable}
                    type="submit"
                    className="uppercase py-3 lg:py-4 lg:px-6 rounded-[2.5rem] max-w-44 md:max-w-44 w-full 
                    text-neutral-white font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
                    lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-0.5 bg-neutral-dimGray" />

        <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
          <div className="">
            <p className="text-neutral-dimGray sm:text-lg lg:text-[1.35rem]">
              Copyright &copy; 2025
              <span className="ml-2 font-semibold text-neutral-veryDarkGray">
                Alowishus Delicious
              </span>
            </p>
          </div>

          <div className="flex sm:justify-between space-x-3 text-neutral-dimGray sm:text-lg lg:text-[1.35rem]">
            <p className="">Terms of Use</p>

            <p>|</p>

            <p className="">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
