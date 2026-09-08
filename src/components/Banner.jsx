"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden px-2 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[20px]
          sm:rounded-[32px]
        "
      >
        {/* =========================
            Main Banner Image
        ========================== */}
        <Image
          src="/BG-12.svg"
          alt="Trusted Home Service"
          width={1920}
          height={800}
          priority
          className="
            block
            h-auto
            w-full
            -mt-2
            translate-x-0

            sm:-mt-4
            sm:w-[95%]
            sm:translate-x-0

            md:-mt-6
            md:w-[95%]
            md:translate-x-0

            lg:-mt-60
            lg:w-[80%]
            lg:translate-x-[80px]

            xl:-mt-20
          "
        />

        {/* =========================
            Banner Content
        ========================== */}
        <div className="absolute inset-0">
          {/* =========================
              Heading + Description
          ========================== */}
          <div
            className="
              absolute
              left-1/2
              top-[5%]
              z-20
              w-full
              -translate-x-1/2
              px-2
              text-center

              sm:top-[5%]
              sm:px-0
            "
          >
            <h1
              style={{ fontFamily: "Amplesoft, sans-serif" }}
              className="
                text-[18px]
                font-semibold
                leading-[1.05]
                text-black

                min-[400px]:text-[22px]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              your home needs it

              <br />

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-1

                  sm:gap-2
                  md:gap-3
                "
              >
                <Image
                  src="/Logo-10.svg"
                  alt="Logo"
                  width={100}
                  height={45}
                  className="
                    h-auto
                    w-[55px]

                    min-[400px]:w-[65px]

                    sm:w-[70px]
                    md:w-[85px]
                    lg:w-[100px]
                  "
                />

                <span>gets it done</span>
              </span>
            </h1>

            {/* Description */}
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-1
                px-2
                text-[8px]
                leading-[1.3]
                text-gray-600

                min-[400px]:text-[9px]

                sm:mt-2
                sm:text-sm

                md:mt-3
                md:text-base

                lg:text-base
              "
            >
              Find trusted professionals for your home,
              <br />
              whenever you need them.
            </p>
          </div>

          {/* =========================
              Main Center Item
          ========================== */}
        <Image
  src="/Website-09.png"
  alt="Home service"
  width={200}
  height={200}
  className="
    absolute
    left-1/2
    top-[37%]
    z-10
    w-[14%]
    min-w-[40px]
    max-w-[150px]
    -translate-x-1/2
    object-cover

    sm:top-[38%]
    sm:w-[16vw]
    sm:min-w-[55px]

    md:w-[17vw]

    lg:w-[22vw]
    lg:max-w-[150px]
  "
/>

          {/* =========================
              Application Image
          ========================== */}
          <Image
            src="/Website-11.png"
            alt="Application"
            width={950}
            height={950}
            className="
              absolute
              left-1/2
              top-[46%]
              z-10
              h-auto
              w-[72%]
              -translate-x-1/2

              min-[400px]:w-[68%]

              sm:top-[47.5%]
              sm:w-[63%]

              md:w-[64%]

              lg:w-[65%]
            "
          />

          {/* =========================
              Get Started Button
          ========================== */}
          <button
            className="
              group
              absolute
              left-[20%]
              top-[30%]
              z-20
              flex
              items-center
              rounded-r-full
              bg-linear-to-r
              from-transparent
              to-white
              p-0
              text-[7px]
              font-medium
              text-[#073e6c]
              outline-none
              transition-transform
              duration-300
              hover:scale-105
              cursor-pointer

              min-[400px]:left-[21%]
              min-[400px]:text-[8px]

              sm:left-[23%]
              sm:text-sm

              md:left-[23%]
              md:text-sm

              lg:text-md
            "
          >
            <span
              style={{ fontFamily: "Inter, sans-serif" }}
              className="whitespace-nowrap"
            >
              Get Started Free
            </span>

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
                sm:h-8
                sm:w-8
                sm:text-base

                md:h-9
                md:w-9

                lg:h-10
                lg:w-10
                lg:text-xl
              "
            >
              →
            </span>
          </button>

          {/* =========================
              Website-03
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[7%]
              top-[40%]
              z-20
              w-[8%]

              sm:left-[10%]
              sm:w-[7%]
            "
          >
            <Image
              src="/Website-03.png"
              alt="Website-03"
              width={100}
              height={100}
              className="h-auto w-full"
            />
          </motion.div>

          {/* =========================
              Website-08
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-[47%]
              z-10
              w-[72%]
              -translate-x-1/2

              sm:top-[47.5%]
              sm:w-[65%]
            "
          >
            <Image
              src="/Website-08.png"
              alt="Website-08"
              width={100}
              height={100}
              className="
                absolute
                right-[8%]
                top-0
                z-20
                h-auto
                w-[8%]

                sm:right-[9%]
                sm:w-[7%]
              "
            />
          </motion.div>

          {/* =========================
              Website-04
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[21%]
              top-[55%]
              z-20
              w-[9%]

              sm:left-[23%]
              sm:w-[8.5%]
            "
          >
            <Image
              src="/Website-04.png"
              alt="Website-04"
              width={120}
              height={120}
              className="h-auto w-full"
            />
          </motion.div>

          {/* =========================
              Website-05
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[29%]
              top-[40%]
              z-20
              w-[9%]

              sm:left-[33%]
              sm:w-[8.5%]
            "
          >
            <Image
              src="/Website-05.png"
              alt="Website-05"
              width={120}
              height={120}
              className="h-auto w-full"
            />
          </motion.div>

          {/* =========================
              Website-06
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[29%]
              top-[40%]
              z-20
              w-[9%]

              sm:right-[33%]
              sm:w-[8.5%]
            "
          >
            <Image
              src="/Website-06.png"
              alt="Website-06"
              width={120}
              height={120}
              className="h-auto w-full"
            />
          </motion.div>

          {/* =========================
              Website-07
          ========================== */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[21%]
              top-[55%]
              z-20
              w-[9%]

              sm:right-[25%]
              sm:w-[8.5%]
            "
          >
            <Image
              src="/Website-07.png"
              alt="Website-07"
              width={120}
              height={120}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;