"use client";

import { Apple, Mail, Play } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full px-3 pb-3 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[42px]
          bg-[#f5f6fa]
          px-7
          pt-10
          sm:rounded-[50px]
          sm:px-10
          sm:pt-12
          md:px-14
          lg:px-16
          lg:pt-14
        "
      >
        {/* =====================================================
            MAIN FOOTER CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            grid
            grid-cols-1
            gap-9

            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-10

            lg:grid-cols-[1.25fr_0.7fr_0.7fr_1.3fr]
            lg:gap-8
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                max-w-[230px]
                text-[12px]
                font-medium
                leading-[1.35]
                text-[#073e6c]

                sm:text-[13px]
                lg:text-[12px]
              "
            >
              <span className="font-bold">ekhoon</span> connects you with
              trusted
              <br />
              professionals for your everyday
              <br />
              home service needs.
            </p>

            {/* SOCIAL ICONS */}

            <div className="mt-6 flex items-center gap-2.5">
              <SocialIcon>
                <FaFacebook size={13} />
              </SocialIcon>

              <SocialIcon>
                <FaInstagram size={13} />
              </SocialIcon>

              <SocialIcon>
                <FaYoutube size={13} />
              </SocialIcon>

              <SocialIcon>
                <FaLinkedin size={13} />
              </SocialIcon>

              <SocialIcon>
                <Mail size={13} strokeWidth={2.5} />
              </SocialIcon>
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>
            <FooterTitle>Company</FooterTitle>

            <div className="mt-5 space-y-2">
              <FooterLink>About Us</FooterLink>
              <FooterLink>How It Works</FooterLink>
              <FooterLink>Our Services</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </div>

            {/* SUPPORT */}

            <div className="mt-7">
              <FooterTitle>Support</FooterTitle>

              <div className="mt-5 space-y-2">
                <FooterLink>Help Center</FooterLink>
                <FooterLink>FAQs</FooterLink>
                <FooterLink>Contact Support</FooterLink>
              </div>
            </div>
          </div>

          {/* =================================================
              FOR PROVIDERS
          ================================================== */}

          <div>
            <FooterTitle>For Providers</FooterTitle>

            <div className="mt-5 space-y-2">
              <FooterLink>Become a Provider</FooterLink>
              <FooterLink>How It Works</FooterLink>
              <FooterLink>Provider Support</FooterLink>
            </div>
          </div>

          {/* =================================================
              GET THE EKHOON APP
          ================================================== */}

          <div>
            <FooterTitle>Get the Ekhonn App</FooterTitle>

            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                mt-3
                max-w-[270px]
                text-[11px]
                leading-[1.45]
                text-gray-500
              "
            >
              Book trusted home services anytime, anywhere.
            </p>

            {/* APP BUTTONS */}

            <div className="mt-4 flex items-center gap-2">
              {/* GOOGLE PLAY */}

              <button
                className="
                  flex
                  h-[38px]
                  min-w-[105px]
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-[6px]
                  bg-black
                  px-2.5
                  text-white
                  transition
                  hover:scale-[1.03]
                "
              >
                <Play
                  size={17}
                  fill="white"
                  strokeWidth={1.5}
                />

                <div className="text-left leading-none">
                  <span className="block text-[6px] uppercase">
                    Get it on
                  </span>

                  <span
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="mt-0.5 block text-[12px] font-medium"
                  >
                    Google Play
                  </span>
                </div>
              </button>

              {/* APP STORE */}

              <button
                className="
                  flex
                  h-[38px]
                  min-w-[105px]
                  cursor-pointer
                  items-center
                  gap-2
                  rounded-[6px]
                  bg-black
                  px-2.5
                  text-white
                  transition
                  hover:scale-[1.03]
                "
              >
                <Apple
                  size={18}
                  fill="white"
                  strokeWidth={1.5}
                />

                <div className="text-left leading-none">
                  <span className="block text-[6px]">
                    Download on the
                  </span>

                  <span
                    style={{ fontFamily: "Inter, sans-serif" }}
                    className="mt-0.5 block text-[12px] font-medium"
                  >
                    App Store
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER + COPYRIGHT
        ====================================================== */}

        <div
          className="
            relative
            z-20
            mt-12
            border-t
            border-gray-400/70
            pt-5
            sm:mt-14
            lg:mt-16
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              pb-[170px]

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:pb-[190px]

              md:pb-[210px]

              lg:pb-[230px]
            "
          >
            {/* COPYRIGHT */}

            <p
              style={{ fontFamily: "Inter, sans-serif" }}
              className="
                text-[10px]
                text-gray-500
                sm:text-[11px]
                lg:text-xs
              "
            >
              © 2026 Ekhonn. All rights reserved.
            </p>

            {/* LEGAL LINKS */}

            <div className="flex items-center gap-6">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms & Conditions</FooterLink>
            </div>
          </div>
        </div>

        {/* =====================================================
            HUGE EKHOON LOGO
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
          
            left-1/2
            z-10
            w-[920px]
            -translate-x-1/2

           
            sm:w-[750px]

            md:bottom-[-60px]
            md:w-[900px]

       
            lg:w-[1050px]

            xl:w-[1150px]
          "
        >
          <Image
            src="/Elements-22.svg"
            alt=""
            width={1200}
            height={400}
            priority
            className="
              h-auto
              w-full
              object-contain
            "
          />
        </div>
      </div>
    </footer>
  );
};

/* =============================================================
   FOOTER TITLE
============================================================= */

const FooterTitle = ({ children }) => {
  return (
    <h3
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        text-[12px]
        font-semibold
        text-[#111827]
        sm:text-[13px]
      "
    >
      {children}
    </h3>
  );
};

/* =============================================================
   FOOTER LINK
============================================================= */

const FooterLink = ({ children }) => {
  return (
    <button
      style={{ fontFamily: "Inter, sans-serif" }}
      className="
        block
        cursor-pointer
        text-left
        text-[10px]
        leading-[1.25]
        text-gray-500
        transition-colors
        hover:text-[#073e6c]
        sm:text-[11px]
      "
    >
      {children}
    </button>
  );
};

/* =============================================================
   SOCIAL ICON
============================================================= */

const SocialIcon = ({ children }) => {
  return (
    <button
      className="
        flex
        h-[21px]
        w-[21px]
        cursor-pointer
        items-center
        justify-center
        rounded-full
        bg-[#1d1d1d]
        text-white
        transition
        hover:scale-110
      "
    >
      {children}
    </button>
  );
};

export default Footer;