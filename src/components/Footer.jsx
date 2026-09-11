"use client";

import { Apple, Mail, Play } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full px-3 pb-0 sm:px-6 lg:px-8">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-t-[42px]
          bg-[#f5f6fa]
          px-7
          pt-10
          sm:rounded-t-[50px]
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
              BRAND / DESCRIPTION
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
              ekhonn connects you with trusted
              <br />
              professionals for your everyday
              <br />
              home service needs.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-2.5">
              <SocialIcon>
                <FaFacebook  size={14} strokeWidth={2.5} />
              </SocialIcon>

              <SocialIcon>
                <FaInstagram size={14} strokeWidth={2.5} />
              </SocialIcon>

              <SocialIcon>
                <FaYoutube size={14} strokeWidth={2.5} />
              </SocialIcon>

              <SocialIcon>
                <FaLinkedin size={14} strokeWidth={2.5} />
              </SocialIcon>

              <SocialIcon>
                <Mail size={14} strokeWidth={2.5} />
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

            {/* Support */}
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

            {/* App Buttons */}
            <div className="mt-4 flex items-center gap-2">
              {/* Google Play */}
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

              {/* App Store */}
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
            BOTTOM FOOTER
        ====================================================== */}
        <div
          className="
            relative
            z-20
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-gray-200/70
            pt-5
            pb-32

            sm:mt-14
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:pb-36

            lg:mt-16
            lg:pb-40
          "
        >
          {/* Copyright */}
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

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms & Conditions</FooterLink>
          </div>
        </div>

        {/* =====================================================
            HUGE EKHONN TEXT
        ====================================================== */}
      
      </div>
    </footer>
  );
};

/* =============================================================
   SMALL COMPONENTS
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