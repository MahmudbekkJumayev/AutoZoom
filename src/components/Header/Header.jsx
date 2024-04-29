import React from "react";
import img1 from "../../assets/images/header2.png";
import img2 from "../../assets/images/header3.png";
import img3 from "../../assets/images/header4.png";
import img4 from "../../assets/images/header5.png";
import { Carousel, initTWE } from "tw-elements";

const Header = () => {
  initTWE({ Carousel });
  return (
    <div>
      <div>
        <h3 className="lg:text-[35px] text-gray-100 lg:font-semibold text-center">
          TOP LUXURY CAR
        </h3>
        <h3 className="lg:text-[35px] text-gray-100 lg:font-semibold text-center">
          RENTAL DUBAI
        </h3>
        <p className="lg:text-[15px] text-gray-100 lg:font-normal text-center">
          Best sports car & supercar rental Dubai, Exclusive offers on luxury
          car rental Dubai Cheap price
        </p>
      </div>
      {/* header carousel */}
      <div className="container mx-auto my-20">
        <div
          id="carouselExampleControls"
          class="relative"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
              class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
              data-twe-carousel-active
            >
              <img
                src={img1}
                class="object-cover m-auto"
                alt="Wild Landscape"
              />
            </div>

            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
            >
              <img src={img2} class="object-cover m-auto" alt="Camera" />
            </div>

            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
            >
              <img src={img3} class="object-cover m-auto" alt="Exotic Fruits" />
            </div>
            <div
              class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
            >
              <img src={img4} class="object-cover m-auto" alt="Exotic Fruits" />
            </div>
          </div>
        </div>
        {}
        <div className="flex justify-center items-center gap-96">
          <button
            class=" bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-twe-target="#carouselExampleControls"
            data-twe-slide="prev"
          >
            <span class="inline-block h-8 w-8">
              <svg
                width="92"
                height="17"
                viewBox="0 0 92 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M91.5 16H2L17 1" stroke="white" />
              </svg>
            </span>
          </button>
          <button
            class=" bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-twe-target="#carouselExampleControls"
            data-twe-slide="next"
          >
            <span class="inline-block h-8 w-8">
              <svg
                width="91"
                height="17"
                viewBox="0 0 91 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16H89.5L74.5 1" stroke="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
