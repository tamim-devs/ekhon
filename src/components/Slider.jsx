"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "AC Service",
    description:
      "Installation, repair, and cleaning to keep your AC running smoothly.",
    image: "/Elements-15.svg",
  },
  {
    title: "Painter",
    description:
      "Refresh your home with professional and reliable painting services.",
    image: "/Elements-17.svg",
  },
  {
    title: "Carpenter",
    description:
      "Get help with furniture, doors, cabinets, and other woodwork.",
    image: "/Elements-15.svg",
  },
  {
    title: "Plumber",
    description:
      "Reliable plumbing solutions for repairs, installation, and maintenance.",
    image: "/Elements-16.svg",
  },
  {
    title: "Electrician",
    description:
      "Professional electrical services for safe and reliable home solutions.",
    image: "/Elements-19.svg",
  },
  {
    title: "Cleaning",
    description:
      "Keep your home fresh and clean with trusted cleaning professionals.",
    image: "/Elements-18.svg",
  },
  {
    title: "CCTV & Security",
    description:
      "Professional security and CCTV installation for your home.",
    image: "/Elements-19.svg",
  },
  {
    title: "Pc & Security",
    description:
      "Professional security and CCTV installation for your home.",
    image: "/Elements-19.svg",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = services.length;

  const getIndex = (index) => {
    return (index + total) % total;
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  const handlePagination = (index) => {
    if (index === currentIndex) return;

    const forward = getIndex(index - currentIndex);
    const backward = getIndex(currentIndex - index);

    setDirection(forward <= backward ? 1 : -1);
    setCurrentIndex(index);
  };

  /* ============================================
     GET RELATIVE POSITION
  ============================================ */

  const getRelativePosition = (index) => {
    let diff = index - currentIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  };

  return (
    <section
     id="services"
    className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* ============================================
          BACKGROUND GLOW
      ============================================ */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[58%]
          -z-10
          h-[320px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dff6ff]
          opacity-70
          blur-[90px]
          sm:h-[420px]
          sm:w-[700px]
          lg:h-[500px]
          lg:w-[900px]
          lg:blur-[110px]
        "
      />

      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        {/* ============================================
            HEADING
        ============================================ */}

        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12">
          <h2 className="text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl md:text-5xl">
            everything your home needs
          </h2>

          <p className="mx-auto mt-3 max-w-md px-2 text-sm leading-6 text-gray-500 sm:mt-4 sm:px-0 sm:text-base">
            From quick repairs to essential home services, find the right
            professional with Ekhon.
          </p>
        </div>

        {/* ============================================
            SLIDER
        ============================================ */}

        <div
          className="
            relative
            mx-auto
            h-[400px]
            w-full
            max-w-[1280px]
            sm:h-[430px]
            md:h-[450px]
            lg:h-[475px]
          "
        >
          {/* ============================================
              DRAG AREA
          ============================================ */}

          <motion.div
            className="absolute inset-0 touch-pan-y"
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.15}
            onDragEnd={(event, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              /* LEFT */

              if (offset < -60 || velocity < -500) {
                handleNext();
                return;
              }

              /* RIGHT */

              if (offset > 60 || velocity > 500) {
                handlePrev();
              }
            }}
          >
            {services.map((service, index) => {
              const position = getRelativePosition(index);

              /*
              7 CARDS VISIBLE

              -3
              -2
              -1
               0
              +1
              +2
              +3
              */

              if (Math.abs(position) > 3) {
                return null;
              }

              return (
                <StackCard
                  key={service.title}
                  service={service}
                  position={position}
                  direction={direction}
                />
              );
            })}
          </motion.div>
        </div>

        {/* ============================================
            CONTROLS
        ============================================ */}

        <div className="mt-2 flex flex-col items-center gap-4 sm:mt-4 sm:gap-5">
          {/* ============================================
              NAVIGATION
          ============================================ */}

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
            {/* PREVIOUS */}

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

            {/* CURRENT */}

            <div
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
                  items-center
                  justify-center
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

              <span
                className="
                  max-w-[105px]
                  truncate
                  whitespace-nowrap
                  text-xs
                  font-medium
                  text-[#073f68]
                  sm:max-w-none
                  sm:text-sm
                "
              >
                {services[currentIndex].title}
              </span>
            </div>

            {/* NEXT */}

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

          {/* ============================================
              PAGINATION
          ============================================ */}

          <div className="flex items-center justify-center gap-1 sm:gap-1.5">
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
   STACK CARD
========================================================= */

const StackCard = ({ service, position }) => {
  const isCenter = position === 0;
  const isLeft = position < 0;
  const isRight = position > 0;

  /* ============================================
     HORIZONTAL POSITION

     Cards are intentionally close together.
     This creates the same compressed look
     as your screenshot.
  ============================================ */

  let x = "-50%";

  /* LEFT */

  if (position === -1) {
    x = "calc(-50% - 175px)";
  }

  if (position === -2) {
    x = "calc(-50% - 320px)";
  }

  if (position === -3) {
    x = "calc(-50% - 445px)";
  }

  /* RIGHT */

  if (position === 1) {
    x = "calc(-50% + 175px)";
  }

  if (position === 2) {
    x = "calc(-50% + 320px)";
  }

  if (position === 3) {
    x = "calc(-50% + 445px)";
  }

  /* ============================================
     SCALE

     Center = BIG
     Near cards = medium
     Outer cards = smaller
  ============================================ */

  let scale = 0.72;

  if (position === -3 || position === 3) {
    scale = 0.72;
  }

  if (position === -2 || position === 2) {
    scale = 0.80;
  }

  if (position === -1 || position === 1) {
    scale = 0.90;
  }

  if (isCenter) {
    scale = 1;
  }

  /* ============================================
     ROTATION
  ============================================ */

  let rotateY = 0;

  if (isLeft) {
    rotateY = 10;
  }

  if (isRight) {
    rotateY = -10;
  }

  /* ============================================
     Z INDEX
  ============================================ */

  let zIndex = 3;

  if (position === -2 || position === 2) {
    zIndex = 5;
  }

  if (position === -1 || position === 1) {
    zIndex = 10;
  }

  if (isCenter) {
    zIndex = 30;
  }

  return (
    <motion.div
      className="
        absolute
        left-1/2
        top-1/2
        w-[270px]
        sm:w-[290px]
        md:w-[305px]
        lg:w-[315px]
      "
      style={{
        zIndex,
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
      initial={false}
      animate={{
        x,
        y: "-50%",
        scale,
        rotateY,
        opacity: 1,
      }}
      transition={{
        duration: 1.15,
   
      }}
    >
      <ServiceCard
        service={service}
        small={!isCenter}
        align={isRight ? "right" : "left"}
      />
    </motion.div>
  );
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  service,
  small = false,
  align = "left",
}) => {
  const isRight = align === "right";

  return (
    <div
      className={`
        overflow-hidden
        rounded-[20px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.20)]
        sm:rounded-[24px]
        ${small ? "p-3 sm:p-4" : "p-4 sm:p-5"}
      `}
    >
      {/* ============================================
          IMAGE
      ============================================ */}

      <div
        className={`
          relative
          overflow-hidden
          rounded-[15px]
         
          sm:rounded-[18px]

          ${
            small
              ? "h-[135px] sm:h-[150px] lg:h-[160px]"
              : "h-[190px] sm:h-[215px] md:h-[230px] lg:h-[240px]"
          }
        `}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          draggable={false}
          className="
            pointer-events-none
            object-contain
            p-3
            sm:p-4
          "
          sizes="
            (max-width: 640px) 270px,
            (max-width: 1024px) 310px,
            330px
          "
        />
      </div>

      {/* ============================================
          CONTENT
      ============================================ */}

      <div
        className={`
          px-1
          pb-1
          pt-3
          sm:pt-4
          ${isRight ? "text-right" : "text-left"}
        `}
      >
        {/* TITLE */}

        <h3
          className={`
            font-semibold
            text-[#222]

            ${
              small
                ? "text-sm sm:text-base"
                : "text-lg sm:text-xl"
            }
          `}
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}

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