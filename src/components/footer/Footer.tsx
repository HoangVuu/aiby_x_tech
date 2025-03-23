"use client";

import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="Footer_footer">
      <div className="Footer_navigation">
        <div className="Footer_navigation__container">
          <div className="TopNavigation_top-navigation">
            <Link aria-label="Home page" className="Logo_logo" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 90 18"
                className="Logo_logo__logo"
              >
                <path d="M18.5485 17.4262H13.7063L9.3794 11.8981L5.0512 17.4262H0.209L6.9582 8.80724L0.209 0.18457H5.0487L9.3794 5.71393L11.7992 8.80724L13.9652 11.5744L18.5485 17.4262Z" />
                <path d="M14.2199 5.71393H9.3789L13.7083 0.18457H18.548L14.2199 5.71393Z" />
                <path d="M66 18V0H68.1864V8.01563H77.8136V0H80V18H77.8136V9.94922H68.1864V18H66Z" />
                <path d="M64 5.71483H61.9907C61.8719 5.10456 61.664 4.56844 61.3669 4.10646C61.0752 3.64449 60.7187 3.25665 60.2975 2.94297C59.8816 2.62357 59.4198 2.38403 58.912 2.22433C58.4043 2.06464 57.875 1.98479 57.3241 1.98479C56.3194 1.98479 55.4093 2.25285 54.5937 2.78897C53.7836 3.3251 53.1381 4.11502 52.6574 5.15875C52.1821 6.20247 51.9444 7.48289 51.9444 9C51.9444 10.5171 52.1821 11.7975 52.6574 12.8413C53.1381 13.885 53.7836 14.6749 54.5937 15.211C55.4093 15.7472 56.3194 16.0152 57.3241 16.0152C57.875 16.0152 58.4043 15.9354 58.912 15.7757C59.4198 15.616 59.8816 15.3793 60.2975 15.0656C60.7187 14.7462 61.0752 14.3555 61.3669 13.8935C61.664 13.4259 61.8719 12.8897 61.9907 12.2852H64C63.8488 13.1806 63.5733 13.9819 63.1736 14.6892C62.7739 15.3964 62.277 15.9981 61.6829 16.4943C61.0887 16.9848 60.4217 17.3584 59.6817 17.615C58.9471 17.8717 58.1613 18 57.3241 18C55.9089 18 54.6505 17.635 53.5486 16.9049C52.4468 16.1749 51.5799 15.1369 50.9479 13.7909C50.316 12.4449 50 10.8479 50 9C50 7.15209 50.316 5.55513 50.9479 4.20913C51.5799 2.86312 52.4468 1.8251 53.5486 1.09506C54.6505 0.365019 55.9089 0 57.3241 0C58.1613 0 58.9471 0.128327 59.6817 0.384981C60.4217 0.641635 61.0887 1.01806 61.6829 1.51426C62.277 2.01045 62.7739 2.6121 63.1736 3.3194C63.5733 4.02669 63.8488 4.8251 64 5.71483Z" />
                <path d="M90 1.92187H84.2677V18H82.084V1.92187H76.3517V0H90V1.92187Z" />
                <path d="M28.9659 17.6746H30.941L30.9446 17.671L43.5291 0H39.7086L33.6308 8.54596L30.9373 12.3088L28.244 8.54596L22.1664 0H18.3457L28.9659 17.6746Z" />
                <path d="M44.1914 17.9999H48.0095L37.6582 0.325378H35.6864L44.1914 17.9999Z" />
              </svg>
            </Link>
            <button
              type="button"
              aria-label="Scroll to top"
              className="ScrollTop_scroll-top"
              onClick={handleClick}
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ScrollTop_scroll-top__arrow"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.318191 7.07291L7.23182 0.3112C7.65607 -0.103733 8.34393 -0.103733 8.76818 0.3112L15.6818 7.07291C16.1061 7.48784 16.1061 8.16058 15.6818 8.57551C15.2576 8.99044 14.5697 8.99044 14.1454 8.57551L9.08637 3.6276L9.08637 12.9375C9.08637 13.5243 8.59999 14 8 14C7.40001 14 6.91363 13.5243 6.91363 12.9375L6.91363 3.6276L1.85455 8.57551C1.4303 8.99044 0.742446 8.99044 0.318191 8.57551C-0.106063 8.16058 -0.106063 7.48784 0.318191 7.07291Z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
          <div className="Text_text--footer-link text-address">
            <span className="text-address">- Company name:</span>{" "}
            <span className="text-bold">HELIOS LABS LIMITED</span>
            <p className="text-address">
              - Address:{" "}
              <span className="text-bold">
                RM 1701, 17/F, WAI FUNG PLAZA, 664 NATHAN ROAD, MONG KOK HONG
                KONG{" "}
              </span>
            </p>
            <p className="text-address">
              - Email:
              <span className="text-bold"> trantheanhmkt@gmail.com</span>
            </p>
          </div>
          <div className="NavigationList_navigation-list">
            <nav className="NavigationList_nav">
              <div className="NavigationList_nav__column">
                <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                  <span className="">Company</span>
                </p>
                <Link
                  className="NavigationList_nav__link"
                  href="/product"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Our Products</span>
                  </span>
                </Link>
                <Link
                  className="NavigationList_nav__link"
                  href="/our-dna"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Our DNA</span>
                  </span>
                </Link>
              </div>
              <div className="NavigationList_nav__column">
                <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                  <span className="">Careers</span>
                </p>
                <Link
                  className="NavigationList_nav__link"
                  href="/jobs"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Careers</span>
                  </span>
                </Link>
                <Link
                  className="NavigationList_nav__link"
                  href="/jobs"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Open Positions</span>
                  </span>
                </Link>
                <Link
                  className="NavigationList_nav__link"
                  href="/contact"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Contact Us</span>
                  </span>
                </Link>
              </div>
              <div className="NavigationList_nav__column">
                <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                  <span className="">What do we do</span>
                </p>
                <span
                  className="NavigationList_nav__link"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Publisher</span>
                  </span>
                </span>
                <a
                  className="NavigationList_nav__link"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Sell your app</span>
                  </span>
                </a>
              </div>
              <div className="NavigationList_nav__column">
                <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                  <span className="">Help</span>
                </p>
                <Link
                  className="NavigationList_nav__link"
                  href="/contact"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Contact Us</span>
                  </span>
                </Link>
                <span
                  className="NavigationList_nav__link"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Beta Testing</span>
                  </span>
                </span>
                <Link
                  className="NavigationList_nav__link"
                  href="/policy"
                >
                  <span className="Text_text--footer-link Text_text--weight-regular">
                    <span className="">Privacy Policy</span>
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
