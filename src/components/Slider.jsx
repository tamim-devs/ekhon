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

  /*
  ============================================
  GET POSITION
  ============================================
  */

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
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[280px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#dff6ff]
          opacity-60
          blur-[80px]
          sm:h-[400px]
          sm:w-[550px]
          lg:h-[500px]
          lg:w-[700px]
          lg:blur-[100px]
        "
      />

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
            h-[390px]
            max-w-[900px]
            sm:h-[420px]
            md:h-[440px]
            lg:h-[460px]
          "
        >
          {/* ================= DRAG AREA ================= */}

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

              /*
              LEFT DRAG
              */
              if (offset < -60 || velocity < -500) {
                handleNext();
                return;
              }

              /*
              RIGHT DRAG
              */
              if (offset > 60 || velocity > 500) {
                handlePrev();
              }
            }}
          >
            {services.map((service, index) => {
              const position = getRelativePosition(index);

              /*
              Only 5 cards participate
              */

              if (Math.abs(position) > 2) {
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

        {/* ================= CONTROLS ================= */}

        <div className="mt-3 flex flex-col items-center gap-4 sm:mt-5 sm:gap-5">
          {/* NAVIGATION */}

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

          {/* PAGINATION */}

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

const StackCard = ({
  service,
  position,
}) => {
  const isCenter = position === 0;
  const isLeft = position < 0;
  const isRight = position > 0;

  /*
  ============================================
  CARD HORIZONTAL POSITION

  Cards are deliberately close together.
  ============================================
  */

  let x = "-50%";

  if (position === -1) {
    x = "calc(-50% - 205px)";
  }

  if (position === -2) {
    x = "calc(-50% - 385px)";
  }

  if (position === 1) {
    x = "calc(-50% + 205px)";
  }

  if (position === 2) {
    x = "calc(-50% + 385px)";
  }

  /*
  ============================================
  SCALE
  ============================================
  */

  let scale = 0.82;

  if (position === -1 || position === 1) {
    scale = 0.91;
  }

  if (isCenter) {
    scale = 1;
  }

  /*
  ============================================
  ROTATION
  ============================================
  */

  let rotateY = 0;

  if (isLeft) {
    rotateY = 12;
  }

  if (isRight) {
    rotateY = -12;
  }

  /*
  ============================================
  Z INDEX
  ============================================
  */

  let zIndex = 10;

  if (position === -2 || position === 2) {
    zIndex = 5;
  }

  if (isCenter) {
    zIndex = 30;
  }

  return (
    <motion.div
      className={`
        absolute
        left-1/2
        top-1/2
        w-[220px]
        sm:w-[250px]
        md:w-[270px]
        lg:w-[280px]
      `}
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
  duration: 1.3,
  ease: [0.22, 1, 0.36, 1],
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
        rounded-[18px]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.07)]
        sm:rounded-[24px]
        ${small ? "p-3 sm:p-4" : "p-4 sm:p-5"}
      `}
    >
      {/* IMAGE */}

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
          draggable={false}
          className="pointer-events-none object-contain p-3 sm:p-4"
          sizes={
            small
              ? "(max-width: 1024px) 230px, 280px"
              : "(max-width: 640px) 270px, (max-width: 1024px) 330px, 360px"
          }
        />
      </div>

      {/* CONTENT */}

      <div
        className={`
          px-1
          pb-1
          pt-3
          sm:pt-4
          ${isRight ? "text-right" : "text-left"}
        `}
      >
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