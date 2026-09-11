"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Construction, X } from "lucide-react";

const UnderConstructionPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Page-er nicher dike gele popup show korbe
      if (scrollPosition > 500) {
        setShowPopup(true);

        // Ekbar show korar por listener remove
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/30
            px-4
            backdrop-blur-sm
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-[420px]
              rounded-[28px]
              bg-white
              px-6
              py-8
              text-center
              shadow-2xl

              sm:px-8
              sm:py-10
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="
                absolute
                right-4
                top-4
                flex
                h-8
                w-8
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-600
                transition
                hover:bg-gray-200
                hover:text-black
              "
            >
              <X size={17} />
            </button>

            {/* Icon */}
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#e8f4fc]
                text-[#073e6c]

                sm:h-20
                sm:w-20
              "
            >
              <Construction
                size={32}
                strokeWidth={1.8}
                className="sm:h-9 sm:w-9"
              />
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "Amplesoft, sans-serif",
              }}
              className="
                mt-5
                text-2xl
                font-semibold
                text-[#073e6c]

                sm:text-3xl
              "
            >
              Website Under Construction
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
              }}
              className="
                mx-auto
                mt-3
                max-w-[330px]
                text-sm
                leading-6
                text-gray-500

                sm:text-[15px]
              "
            >
              We are working hard to make Ekhonn better for you.
              Some features are still under development.
            </p>

            {/* Button */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                fontFamily: "Inter, sans-serif",
              }}
              className="
                mt-6
                cursor-pointer
                rounded-full
                bg-[#073e6c]
                px-6
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:scale-105
              "
            >
              Continue Exploring
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UnderConstructionPopup;