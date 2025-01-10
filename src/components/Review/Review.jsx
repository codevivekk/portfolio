import Image from "next/image";
import React from "react";
import { ainomarketing, aion, luisdelmoralj, om, Prity, Shreeya } from "../../../public/assets/review";

const Review = () => {
    const reviews = [ainomarketing , aion , luisdelmoralj, om, Shreeya , Prity]
  return (
    <div className="project-wrapper px-5 lg:px-20 py-10">
      <h2 className="text-center text-4xl  my-5 lg:mb-10">Testimonials</h2>
      <div className="card-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {reviews?.map((ele, i) => {
          return (
            <div
              key={i}
              className="card hover-scale-on"
            >
              <div className="relative w-full">
                <Image
                  src={ele}
                  alt="three js"
                  className="bg-white w-full "
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
