"use client";

import "./Header.css";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ROUTES } from "../../routes/Routes";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <header className="Header_header Header_header--theme-dark">
      <div className="Header_header__container">
        <div className="Header_header__static-container">
          <Link aria-label="Logo" className="Logo_logo" href="/">
            {/* <div
              style={{ fontSize: "22px", fontWeight: "bold" }}
              className="text-white "
            >
              Technify
            </div> */}
            <div>
              <img
                src="/assets/home/logo-white.png"
                alt="Logo"
              />
            </div>
          </Link>
          <button
            type="button"
            className={`MenuButton_menu-button MenuButton_menu-button--variant-dark ${
              isOpenMenu ? "MenuButton_menu-button--open" : ""
            }`}
            aria-label="Menu toggle"
            onClick={handleMenuClick}
          >
            <span className="MenuButton_menu-button__line"></span>
            <span className="MenuButton_menu-button__line"></span>
          </button>
        </div>
        <div
          className={`NavMenu_nav-menu ${
            isOpenMenu ? "NavMenu_nav-menu--open" : ""
          }`}
        >
          <nav className="NavMenu_nav">
            {ROUTES.filter((route) => !route.isHidden).map((route) => (
              <Link
                key={route.path}
                className="NavLink_nav-link NavLink_nav-link--variant-default NavLink_nav-link--theme-dark"
                href={route.path}
              >
                <span className="NavLink_nav-link__title-container">
                  <span className="NavLink_nav-link__title-text NavLink_nav-link__title-text--theme-dark">
                    {route.name}
                  </span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="Header_social-links" style={{ display: "none" }}>
          <div className="SocialLinks_social-links SocialLinks_social-links--size-small Header_social-links__links">
            <Link
              target="_blank"
              className="SocialLinks_link SocialLinks_link--dark SocialLinks_link--size-small"
              href="#"
            >
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Instagram Icon"
              >
                <path
                  d="M16.7016 5.7C16.5016 5 16.0016 4.5 15.3016 4.3C14.1016 4 9.00156 4 9.00156 4C9.00156 4 4.00157 4 2.70157 4.3C2.00157 4.5 1.50156 5 1.30156 5.7C1.10156 7 1.10156 9.6 1.10156 9.6C1.10156 9.6 1.10157 12.2 1.40157 13.5C1.60157 14.2 2.10156 14.7 2.80156 14.9C4.00156 15.2 9.10156 15.2 9.10156 15.2C9.10156 15.2 14.1016 15.2 15.4016 14.9C16.1016 14.7 16.6016 14.2 16.8016 13.5C17.1016 12.2 17.1016 9.6 17.1016 9.6C17.1016 9.6 17.1016 7 16.7016 5.7ZM7.50156 12V7.2L11.7016 9.6L7.50156 12Z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="SocialLinks_link SocialLinks_link--dark SocialLinks_link--size-small"
              href="#"
            >
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Twitter Icon"
              >
                <path
                  d="m28.9991 14.7373c-.6741.2982-1.389.4941-2.1211.5811.7716-.4615 1.3491-1.1877 1.6249-2.0434-.7242.431-1.518.7329-2.3454.8963-.5558-.5946-1.2924-.989-2.0956-1.1218-.803-.1328-1.6274.0034-2.345.3875-.7177.3841-1.2883.9945-1.6232 1.7364-.3349.7418-.4154 1.5736-.2288 2.3658-1.4684-.0736-2.9049-.4551-4.2163-1.1199-1.3113-.6648-2.4683-1.598-3.3956-2.739-.3282.5638-.5007 1.2047-.4998 1.8571 0 1.2804.6517 2.4116 1.6425 3.0739-.5863-.0185-1.1598-.1768-1.6725-.4619v.046c.0002.8527.2953 1.6792.8352 2.3392.54.66 1.2916 1.113 2.1274 1.2821-.5443.1475-1.115.1693-1.6689.0636.2356.734.6949 1.376 1.3136 1.836.6186.4599 1.3656.7149 2.1364.7292-.766.6017-1.6432 1.0465-2.5812 1.3089-.9381.2624-1.9187.3373-2.8857.2206 1.6881 1.0856 3.6532 1.662 5.6603 1.6601 6.7933 0 10.5083-5.6276 10.5083-10.5082 0-.159-.0045-.3197-.0115-.4769.7231-.5226 1.3471-1.17 1.8429-1.9118z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="SocialLinks_link SocialLinks_link--dark SocialLinks_link--size-small"
              href="#"
            >
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Medium Icon"
              >
                <path
                  d="m28.8407 14.8578c.1536-.1419.2013-.3579.1204-.5463-.0808-.1883-.2739-.3115-.4885-.3115h-5.2713c-.2912 0-.5274.2238-.5274.4998v2.404l-1.9734 4.849-3.6193-7.4617c-.0861-.1774-.2732-.2911-.4792-.2911h-4.9369c-.2037 0-.3892.1112-.4765.2856s-.0608.3809.068.5304l2.2318 2.5897v6.3975l-2.377 2.8897c-.1238.1507-.1463.355-.0579.5267.0885.1715.2723.2804.4739.2804h4.9768c.2015 0 .3854-.1089.4739-.2804.0884-.1717.0659-.376-.058-.5267l-2.3769-2.8897v-4.4432l4.1146 7.8623c.0893.1706.2728.2777.4724.2777.0081 0 .0162-.0002.0244-.0005.2089-.0092.3924-.1345.4677-.3194l3.0517-7.4986v5.2868l-1.4185 1.7245c-.1239.1507-.1464.3551-.0579.5268.0884.1715.2723.2804.4738.2804h6.5843c.2015 0 .3853-.1089.4739-.2806.0884-.1715.0659-.3759-.0581-.5266l-1.4185-1.7245v-8.6438z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="SocialLinks_link SocialLinks_link--dark SocialLinks_link--size-small"
              href="#"
            >
              <svg
                fill="none"
                height="40"
                viewBox="0 0 40 40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="LinkedIn Icon"
              >
                <path
                  d="m14.7775 12.8897c-.0002.5009-.1994.9813-.5538 1.3353s-.8349.5528-1.3359.5525c-.5009-.0002-.9812-.1994-1.3353-.5538-.354-.3544-.5528-.8349-.5525-1.3359.0003-.5009.1995-.9812.5539-1.3353.3544-.354.8349-.5528 1.3358-.5525s.9813.1995 1.3353.5539.5528.8349.5525 1.3358zm.0567 3.2865h-3.7775v11.8237h3.7775zm5.9685 0h-3.7586v11.8237h3.7208v-6.2046c0-3.4565 4.5048-3.7776 4.5048 0v6.2046h3.7303v-7.489c0-5.8268-6.6674-5.6096-8.2351-2.7482z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              className="SocialLinks_link SocialLinks_link--dark SocialLinks_link--size-small"
              href="#"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 -6 21 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Youtube Icon"
              >
                <g clipPath="url(#clip0_1747_4822)">
                  <path
                    d="M16.7016 5.7C16.5016 5 16.0016 4.5 15.3016 4.3C14.1016 4 9.00156 4 9.00156 4C9.00156 4 4.00157 4 2.70157 4.3C2.00157 4.5 1.50156 5 1.30156 5.7C1.10156 7 1.10156 9.6 1.10156 9.6C1.10156 9.6 1.10157 12.2 1.40157 13.5C1.60157 14.2 2.10156 14.7 2.80156 14.9C4.00156 15.2 9.10156 15.2 9.10156 15.2C9.10156 15.2 14.1016 15.2 15.4016 14.9C16.1016 14.7 16.6016 14.2 16.8016 13.5C17.1016 12.2 17.1016 9.6 17.1016 9.6C17.1016 9.6 17.1016 7 16.7016 5.7ZM7.50156 12V7.2L11.7016 9.6L7.50156 12Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1747_4822">
                    <rect
                      width="17.7778"
                      height="17.7778"
                      fill="white"
                      transform="translate(0.221558 0.111328)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
