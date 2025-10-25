import React from "react";

const sellings = [
  {
    id: "1",
    img: "images/group-25.webp",
    label: "#1 Selling",
    title: "Double Espresso",
    text: "Bold crema layered smooth on rich roast beans. Pure energy brewed strong to stir the senses deep. Sip sharp.",
    price: "$59.99",
    button: "Order Now",
  },

  {
    id: "2",
    img: "images/group-24.webp",
    label: "#2 Selling",
    title: "Caramel Frappe",
    text: "Sweet swirls melt through icy smoothness. Creamy delight with caramel charm that lingers long and lovely. Sip sharp.",
    price: "$59.99",
    button: "Order Now",
  },

  {
    id: "3",
    img: "images/group-26.webp",
    label: "#3 Selling",
    title: "Iced Coffee",
    text: "Chilled and bold, brewed to refresh your every sip. Smooth caffeine kicks with cool confidence on repeat. Sip sharp.",
    price: "$59.99",
    button: "Order Now",
  },
];

function SellingCoffee({ handleNotAvailable }) {
  return (
    <>
      <section className="relative mt-12 md:mt-16 2xl:max-w-[96rem] 2xl:mx-auto overflow-clip">
        <img
          src="images/2bfd2f572d76b2164731d5885831e1dc2c6217a8.webp"
          alt=""
          className="absolute w-36 -right-16 sm:w-44 sm:-right-20 md:w-52 lg:w-72 -top-8 blur-sm -z-10"
        />

        <div className="text-center sm:max-w-[45rem] mx-auto space-y-3">
          <h2 className="text-[1.6rem] md:text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-neutral-veryDarkGray">
            Best Selling Coffee
          </h2>

          <p className="sm:text-lg lg:text-[1.3rem] xl:text-2xl text-neutral-dimGray sm:px-10">
            Savor a handcrafted latte made just for you OR pick from our wide
            selection of freshly roasted coffee blends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 mt-8 md:mt-14 lg:mt-32 xl:mt-40">
          {sellings.map((selling, id) => (
            <div
              key={id}
              className="bg-neutral-white py-7 px-5 md:px-6 lg:py-10 rounded-2xl"
            >
              <div className="flex items-center lg:items-start gap-6 sm:gap-2 xl:gap-6">
                <img
                  src={selling.img}
                  alt={selling.title}
                  className="lg:-mt-28 sm:-ml-6 max-w-28 sm:max-w-36 xl:max-w-44"
                />
                <div className="">
                  <span className="text-lg lg:text-[1.25rem] ont-medium text-neutral-dimGray">
                    {selling.label}
                  </span>

                  <h3 className="text-2xl md:text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] text-neutral-veryDarkGray font-semibold">
                    {selling.title}
                  </h3>
                </div>
              </div>

              <div className="mt-2 lg:mt-4 space-y-4 sm:space-y-8">
                <p className="text-lg text-neutral-dimGray">{selling.text}</p>

                <div className="flex items-center justify-between gap-3">
                  <p className="text-xl md:text-2xl lg:text-[1.3rem] xl:text-[1.875rem] font-medium">
                    {selling.price}
                  </p>

                  <button
                    onClick={handleNotAvailable}
                    className="uppercase py-4 lg:py-3 lg:px-2 xl:px-5 xl:py-4 rounded-[2.5rem] max-w-40 md:max-w-44 w-full 
                  text-neutral-white font-medium bg-gradient-to-t from-neutral-dimGray to-neutral-veryDarkGray 
                    lg:text-lg transition-[border-radius] duration-300 hover:rounded-none"
                  >
                    {selling.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SellingCoffee;
