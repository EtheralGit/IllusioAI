import React from "react";

const Pricing = () => {
  const starterList = [
    { list: "Ideal for individuals and small businesses" },
    { list: "Basic features included" },
    { list: "Limited to 50 images / month" },
    { list: "Priority Support" },
  ];

  const professionalList = [
    { list: "Ideal for individuals and small businesses" },
    { list: "Basic features included" },
    { list: "Limited to 50 images / month" },
    { list: "Priority Support" },
    { list: "Customization Options" },
    { list: "Dedicated Account Manager" },
  ];

  const enterpriseList = [
    { list: "Ideal for individuals and small businesses" },
    { list: "Basic features included" },
    { list: "Limited to 50 images / month" },
    { list: "Priority Support" },
    { list: "Customization Options" },
    { list: "Dedicated Account Manager" },
    { list: "API Access" },
    { list: "Advanced Analytics" },
  ];

  return (
    <section className="section" id="pricing">
      <div className="text-white text-center">
        <h1 className="title_page">Pricing </h1>
        <p className="title_info">
          Check out our variety of competitive pricing plans now available
        </p>
      </div>
      <div className="absolute z-[1] right-0 left-0 bottom-0 w-[100%] h-[15%] rounded-full green_gradient"></div>
      <div className="flex flex-row justify-center items-center">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="relative lg:max-w-[350px] h-[580px] p-8 border-2 border-primary rounded-lg text-center z-[10]">
            <h1 className="text-tertiary text-xl font-semibold">
              Starter Plan
            </h1>
            <h3 className="text-white xl:text-4xl lg:text-3xl text-4xl font-bold mt-6">
              <span className="text-primary">$29</span> / month
            </h3>
            <div className="flex flex-col space-y-2 mt-12 text-start">
              {starterList.map(({ list }) => (
                <div className="flex justify-start items-center">
                  <div className="price_dots mr-4"></div>
                  <p className="text-white xl:text-lg lg:text-md opacity-90">
                    {list}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-0 left-0">
              <button className="pricing_btn">Get Started</button>
            </div>
          </div>

          <div
            className="relative lg:max-w-[350px] lg:h-[650px] h-[600px] p-8 border-2 border-primary 
          rounded-lg text-center lg:scale-105 z-[10]"
          >
            <h1 className="text-tertiary xl:text-xl text-lg font-semibold">
              Enterprise Plan
            </h1>
            <h3 className="text-white xl:text-4xl lg:text-3xl text-4xl  font-bold mt-6">
              <span className="text-primary">$79</span> / month
            </h3>
            <div className="flex flex-col space-y-2 mt-12 text-start">
              {enterpriseList.map(({ list }) => (
                <div className="flex justify-start items-center">
                  <div className="price_dots mr-4"></div>
                  <p className="text-white xl:text-lg lg:text-md opacity-90 ">
                    {list}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-0 left-0">
              <button className="pricing_btn">Get Started</button>
            </div>
          </div>

          <div className="relative lg:max-w-[350px] h-[580px] p-8 border-2 border-primary rounded-lg text-center z-[10]">
            <h1 className="text-tertiary xl:text-xl text-lg font-semibold">
              Professional Plan
            </h1>
            <h3 className="text-white xl:text-4xl lg:text-3xl text-4xl font-bold mt-6">
              <span className="text-primary">$49</span> / month
            </h3>
            <div className="flex flex-col space-y-2 mt-12 text-start">
              {professionalList.map(({ list }) => (
                <div className="flex justify-start items-center">
                  <div className="price_dots mr-4"></div>
                  <p className="text-white xl:text-lg lg:text-md opacity-90">
                    {list}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 right-0 left-0">
              <button className="pricing_btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
