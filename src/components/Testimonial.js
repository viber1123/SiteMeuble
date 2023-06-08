import React from "react";

import TestimonialSlider from "./TestimonialSlider";

import { testimonial } from "../data";

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section>
      <div className="container mx-auto">
        <div>
          {/* title */}
          <h2>{title}</h2>
          {/* slider */}
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
