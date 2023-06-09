import React from "react";
import NewItemSlider from "./NewItemSlider";

// import data
import { newInStore } from "../data";

const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:scroll-mb-0.5">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-primary lg:items-center font-medium transition-all"
                href="*"
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          {/* slider */}
          <div className="lg:max-w-[700px] xl:max-w-[890px] lg:absolute lg:-right-1">
            <NewItemSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
