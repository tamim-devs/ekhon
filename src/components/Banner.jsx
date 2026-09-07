
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full px-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px] sm:rounded-[32px]">
        
        {/* Main Banner Image */}
<Image
  src="/Website-12.png"
  alt="Trusted Home Service"
  width={1920}
  height={800}
  priority
  className="block h-auto w-full translate-y-10"
/>

        {/* Banner Content */}
        <div className="absolute inset-0">

          {/* Heading */}
          <div className="absolute left-1/2 top-[5%] z-20 w-full -translate-x-1/2 text-center">
            <h1 className="text-[18px] font-semibold leading-tight text-[#073e6c] sm:text-4xl lg:text-6xl">
              Your home needs it
              <br />

              <span className="inline-flex items-center justify-center gap-1 sm:gap-3">
       

                <span>gets it done</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-1 px-2 text-[9px] leading-tight text-gray-600 sm:mt-3 sm:text-base lg:text-base">
              Find trusted professionals for your home,
              <br />
              whenever you need them.
            </p>
          </div>

          {/* Banner Item Image */}
          <Image
            src="/Website-09.png"
            alt="Home service"
            width={150}
            height={150}
            className="
              absolute
              left-1/2
              top-[34%]
              z-10
              w-[70px]
              -translate-x-1/2

              sm:w-[160px]

              lg:w-[150px]
            "
          />

          {/* Application Image */}
          <Image
            src="/Website-11.png"
            alt="Application"
            width={900}
            height={900}
            className="
              absolute
              left-1/2
              top-[47.5%]
              z-10
              h-auto
               w-[65%] 
              -translate-x-1/2
            "
          />

          {/* Button */}
          <button
            className="
              group
              absolute
              left-[23%]
              top-[31%]
              z-20
              flex
              items-center
              rounded-r-full
              bg-linear-to-r
              from-transparent
              to-white
              p-0
              text-[8px]
              font-medium
              text-[#073e6c]
              outline-none
              transition-transform
              duration-300
              cursor-pointer
              hover:scale-105

              sm:text-sm
              lg:text-md
            "
          >
            <span>Get Started Free</span>

            <span
              className="
                ml-1
                flex
                h-5
                w-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#073e6c]
                text-[10px]
                text-white

                sm:ml-2
                sm:h-10
                sm:w-10
                sm:text-xl
              "
            >
              →
            </span>
          </button>

          {/* Website-03 */}
          <Image
            src="/Website-03.png"
            alt="Website-03"
            width={100}
            height={100}
            className="
              absolute
              left-[10%]
              top-[40%]
              z-20
              w-[7%]
            "
          />

          {/* Website-08 */}
          <Image
            src="/Website-08.png"
            alt="Website-08"
            width={100}
            height={100}
            className="
              absolute
              right-[10%]
              top-[47.5%]
              z-20
              w-[7%]
            "
          />

          {/* Website-04 */}
          <Image
            src="/Website-04.png"
            alt="Website-04"
            width={120}
            height={120}
            className="
              absolute
              left-[25%]
              top-[55%]
              z-20
              w-[8.5%]
            "
          />

          {/* Website-05 */}
          <Image
            src="/Website-05.png"
            alt="Website-05"
            width={120}
            height={120}
            className="
              absolute
              left-[33%]
              top-[40%]
              z-20
              w-[8.5%]
            "
          />

          {/* Website-06 */}
          <Image
            src="/Website-06.png"
            alt="Website-06"
            width={120}
            height={120}
            className="
              absolute
              right-[33%]
              top-[40%]
              z-20
              w-[8.5%]
            "
          />

          {/* Website-07 */}
          <Image
            src="/Website-07.png"
            alt="Website-07"
            width={120}
            height={120}
            className="
              absolute
              right-[25%]
              top-[55%]
              z-20
              w-[8.5%]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

