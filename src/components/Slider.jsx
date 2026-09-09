"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "AC Service",
    description:
      "Installation, repair, and cleaning to keep your AC running smoothly.",
    image: "/services/ac.png",
  },
  {
    title: "Painter",
    description:
      "Refresh your home with professional and reliable painting services.",
    image: "/services/painter.png",
  },
  {
    title: "Carpenter",
    description:
      "Get help with furniture, doors, cabinets, and other woodwork.",
    image: "/services/carpenter.png",
  },
  {
    title: "Plumber",
    description:
      "Reliable plumbing solutions for repairs, installation, and maintenance.",
    image: "/services/plumber.png",
  },
  {
    title: "Electrician",
    description:
      "Professional electrical services for safe and reliable home solutions.",
    image: "/services/electrician.png",
  },
  {
    title: "Cleaning",
    description:
      "Keep your home fresh and clean with trusted cleaning professionals.",
    image: "/services/cleaning.png",
  },
  {
    title: "CCTV & Security",
    description:
      "Professional security and CCTV installation for your home.",
    image: "/services/cctv.png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = services.length;

  const getIndex = (index) => {
    return (index + total) % total;
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const handlePagination = (index) => {
    if (index === currentIndex) return;

    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getService = (offset) => {
    return services[getIndex(currentIndex + offset)];
  };

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[280px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dff6ff] opacity-60 blur-[80px] sm:h-[400px] sm:w-[550px] lg:h-[500px] lg:w-[700px] lg:blur-[100px]" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
            everything your home needs
          </h2>

          <p className="mx-auto mt-3 max-w-md px-2 text-sm leading-6 text-gray-500 sm:mt-4 sm:px-0 sm:text-base">
            From quick repairs to essential home services, find the right
            professional with Ekhon.
          </p>
        </div>

        {/* ================= SLIDER ================= */}
        <div
          className="
            relative
            mx-auto
            flex
            h-[370px]
            max-w-[1100px]
            items-center
            justify-center
            sm:h-[400px]
            md:h-[420px]
            lg:h-[430px]
          "
        >
          <AnimatePresence initial={false} mode="popLayout">
            {/* LEFT SIDE CARD - LARGE SCREEN */}
            <AnimatedSideCard
              key={`left-side-${getService(-2).title}`}
              service={getService(-2)}
              position="left-side"
              direction={direction}
            />

            {/* LEFT CARD - TABLET + */}
            <AnimatedSideCard
              key={`left-${getService(-1).title}`}
              service={getService(-1)}
              position="left"
              direction={direction}
            />

            {/* ================= CENTER CARD ================= */}
            <motion.div
              key={`center-${services[currentIndex].title}`}
              initial={{
                opacity: 0,
                x: direction === 1 ? 80 : -80,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction === 1 ? -80 : 80,
                scale: 0.92,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-20
                w-[270px]
                sm:w-[310px]
                md:w-[330px]
                lg:w-[360px]
              "
            >
              <ServiceCard service={services[currentIndex]} />
            </motion.div>

            {/* RIGHT CARD - TABLET + */}
            <AnimatedSideCard
              key={`right-${getService(1).title}`}
              service={getService(1)}
              position="right"
              direction={direction}
            />

            {/* RIGHT SIDE CARD - LARGE SCREEN */}
            <AnimatedSideCard
              key={`right-side-${getService(2).title}`}
              service={getService(2)}
              position="right-side"
              direction={direction}
            />
          </AnimatePresence>
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="mt-2 flex flex-col items-center gap-4 sm:mt-4 sm:gap-5">
          {/* Navigation */}
          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-full
              bg-white
              p-1.5
              shadow-[0_5px_25px_rgba(0,0,0,0.10)]
              sm:gap-3
              sm:p-2
            "
          >
            {/* Previous */}
            <button
              onClick={handlePrev}
              aria-label="Previous service"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                text-[#073f68]
                transition
                hover:bg-[#f4f9fc]
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>

            {/* Current Service */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={services[currentIndex].title}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 12 : -12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 1 ? -12 : 12,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  flex
                  min-w-[120px]
                  items-center
                  justify-center
                  gap-2
                  px-1
                  sm:min-w-[145px]
                  sm:gap-3
                  sm:px-2
                "
              >
                <div
                  className="
                    relative
                    flex
                    h-8
                    w-8
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    sm:h-10
                    sm:w-10
                  "
                >
                  <Image
                    src={services[currentIndex].image}
                    alt={services[currentIndex].title}
                    fill
                    className="object-contain p-1 sm:p-1.5"
                  />
                </div>

                <span className="max-w-[105px] truncate whitespace-nowrap text-xs font-medium text-[#073f68] sm:max-w-none sm:text-sm">
                  {services[currentIndex].title}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={handleNext}
              aria-label="Next service"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                text-[#073f68]
                transition
                hover:bg-[#f4f9fc]
                active:scale-95
                sm:h-10
                sm:w-10
              "
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </div>

          {/* ================= PAGINATION ================= */}
          <div className="flex max-w-full items-center justify-center gap-1 sm:gap-1.5">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => handlePagination(index)}
                aria-label={`Go to ${service.title}`}
                className="flex h-4 items-center rounded-full px-0.5"
              >
                <motion.div
                  animate={{
                    width: currentIndex === index ? 18 : 5,
                    opacity: currentIndex === index ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-1.5 rounded-full bg-[#0a4b75]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================================================
   ANIMATED SIDE CARD
========================================================= */

const AnimatedSideCard = ({ service, position, direction }) => {
  const positionClasses = {
    "left-side": `
      absolute
      left-[-8%]
      hidden
      w-[210px]
      lg:block
      xl:left-0
      xl:w-[250px]
    `,

    left: `
      absolute
      left-[-6%]
      hidden
      w-[230px]
      md:block
      lg:left-[4%]
      lg:w-[250px]
      xl:left-[14%]
      xl:w-[280px]
    `,

    right: `
      absolute
      right-[-6%]
      hidden
      w-[230px]
      md:block
      lg:right-[4%]
      lg:w-[250px]
      xl:right-[14%]
      xl:w-[280px]
    `,

    "right-side": `
      absolute
      right-[-8%]
      hidden
      w-[210px]
      lg:block
      xl:right-0
      xl:w-[250px]
    `,
  };

  const isNear = position === "left" || position === "right";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === 1 ? 60 : -60,
        scale: 0.85,
      }}
      animate={{
        opacity: isNear ? 0.9 : 0.75,
        x: 0,
        scale: isNear ? 0.94 : 0.88,
      }}
      exit={{
        opacity: 0,
        x: direction === 1 ? -60 : 60,
        scale: 0.85,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={positionClasses[position]}
    >
      <ServiceCard service={service} small />
    </motion.div>
  );
};


/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, small = false }) => {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[18px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        sm:rounded-[24px]
        ${small ? "p-3 sm:p-4" : "p-4 sm:p-5"}
      `}
    >
      {/* Image */}
      <div
        className={`
          relative
          overflow-hidden
          rounded-[14px]
          bg-[#f8fafb]
          sm:rounded-[18px]
          ${
            small
              ? "h-[115px] sm:h-[135px] lg:h-[145px]"
              : "h-[165px] sm:h-[185px] md:h-[200px] lg:h-[210px]"
          }
        `}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-contain p-3 sm:p-4"
          sizes={
            small
              ? "(max-width: 1024px) 230px, 280px"
              : "(max-width: 640px) 270px, (max-width: 1024px) 330px, 360px"
          }
        />
      </div>

      {/* Content */}
      <div className="px-1 pb-1 pt-3 sm:pt-4">
        <h3
          className={`
            font-semibold
            text-[#222]
            ${small ? "text-sm sm:text-base" : "text-lg sm:text-xl"}
          `}
        >
          {service.title}
        </h3>

        <p
          className={`
            mt-1.5
            text-gray-500
            ${
              small
                ? "line-clamp-2 text-[11px] leading-4 sm:text-xs sm:leading-5"
                : "text-xs leading-5 sm:text-sm sm:leading-6"
            }
          `}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Slider;