"use client";

import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="Footer_footer Footer_footer--theme-light">
    <div className="Footer_navigation Footer_navigation--theme-light">
      <div className="Footer_navigation__container">
        <div className="TopNavigation_top-navigation">
          <Link aria-label="Home page" className="Logo_logo" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 90 18"
              className="Logo_logo--variant-light Logo_logo__logo"
            >
              <path d="M18.5485 17.4262H13.7063L9.3794 11.8981L5.0512 17.4262H0.209L6.9582 8.80724L0.209 0.18457H5.0487L9.3794 5.71393L11.7992 8.80724L13.9652 11.5744L18.5485 17.4262Z" />
              <path d="M14.2199 5.71393H9.3789L13.7083 0.18457H18.548L14.2199 5.71393Z" />
              <path d="M66 18V0H68.1864V8.01563H77.8136V0H80V18H77.8136V9.94922H68.1864V18H66Z" />
              <path d="M64 5.71483H61.9907C61.8719 5.10456 61.664 4.56844 61.3669 4.10646C61.0752 3.64449 60.7187 3.25665 60.2975 2.94297C59.8816 2.62357 59.4198 2.38403 58.912 2.22433C58.4043 2.06464 57.875 1.98479 57.3241 1.98479C56.3194 1.98479 55.4093 2.25285 54.5937 2.78897C53.7836 3.3251 53.1381 4.11502 52.6574 5.15875C52.1821 6.20247 51.9444 7.48289 51.9444 9C51.9444 10.5171 52.1821 11.7975 52.6574 12.8413C53.1381 13.885 53.7836 14.6749 54.5937 15.211C55.4093 15.7472 56.3194 16.0152 57.3241 16.0152C57.875 16.0152 58.4043 15.9354 58.912 15.7757C59.4198 15.616 59.8816 15.3793 60.2975 15.0656C60.7187 14.7462 61.0752 14.3555 61.3669 13.8935C61.664 13.4259 61.8719 12.8897 61.9907 12.2852H64C63.8488 13.1806 63.5733 13.9819 63.1736 14.6892C62.7739 15.3964 62.277 15.9981 61.6829 16.4943C61.0887 16.9848 60.4217 17.3584 59.6817 17.615C58.9471 17.8717 58.1613 18 57.3241 18C55.9089 18 54.6505 17.635 53.5486 16.9049C52.4468 16.1749 51.5799 15.1369 50.9479 13.7909C50.316 12.4449 50 10.8479 50 9C50 7.15209 50.316 5.55513 50.9479 4.20913C51.5799 2.86312 52.4468 1.8251 53.5486 1.09506C54.6505 0.365019 55.9089 0 57.3241 0C58.1613 0 58.9471 0.128327 59.6817 0.384981C60.4217 0.641635 61.0887 1.01806 61.6829 1.51426C62.277 2.00475 62.7739 2.60361 63.1736 3.31084C63.5733 4.01236 63.8488 4.81369 64 5.71483Z" />
              <path d="M37 18V0H47.8594V1.93359H39.1789V8.01563H47.2971V9.94922H39.1789V16.0664H48V18H37Z" />
              <path d="M21 1.93359V0H35V1.93359H29.1302V18H26.8698V1.93359H21Z" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Scroll to top"
            className="ScrollTop_scroll-top ScrollTop_scroll-top--variant-light"
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
          <span className="text-address">- Company name:</span>{' '}
          <span className="text-bold">HELIOS LABS LIMITED</span>
          <p className="text-address">
            - Address:{' '}
            <span className="text-bold">
              RM 1701, 17/F, WAI FUNG PLAZA, 664 NATHAN ROAD, MONG KOK HONG
              KONG{' '}
            </span>
          </p>
          <p className="text-address">
            - Email:
            <span className="text-bold">hello@xtech.ai.vn</span>
          </p>
        </div>
        <div className="NavigationList_navigation-list">
          <nav className="NavigationList_nav">
            <div className="NavigationList_nav__column">
              <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                <span className="">Company</span>
              </p>
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/product"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Our Products</span>
                </span>
              </Link>
              {/* <a
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="https://xtech.ai.vn/news"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Newsroom</span>
                </span>
              </a> */}
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/our-dna"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Our DNA</span>
                </span>
              </Link>
              {/* <a
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                target="_blank"
                href="https://s3.eu-west-1.amazonaws.com/xtech.ai.vn/hubx-branding-guideline.pdf"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Branding Guideline</span>
                </span>
              </a> */}
            </div>
            <div className="NavigationList_nav__column">
              <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                <span className="">Careers</span>
              </p>
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/jobs"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Careers</span>
                </span>
              </Link>
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/jobs"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Open Positions</span>
                </span>
              </Link>
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/contact"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Contact Us</span>
                </span>
              </Link>
              {/* <a
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="https://xtech.ai.vn/aday-veri-koruma-bilgilendirme-metni"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Candidate Data Protection</span>
                </span>
              </a> */}
            </div>
            <div className="NavigationList_nav__column">
              <p className="Text_text--footer-title Text_text--weight-bold NavigationList_nav__title">
                <span className="">What do we do</span>
              </p>
              <span
                className="NavigationList_nav__link--variant-light"
                // href="https://xtech.ai.vn/investments"
              >
                {/* <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Investment</span>
                </span> */}
              </span>
              <span
                className="NavigationList_nav__link--variant-light"
                // href="https://xtech.ai.vn/publisher"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Publisher</span>
                </span>
              </span>
              <a
                className="NavigationList_nav__link--variant-light"
                // href="https://xtech.ai.vn/sell-your-app"
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
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/contact"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Contact Us</span>
                </span>
              </Link>
              <span
                className=" NavigationList_nav__link--variant-light"
                // href="https://xtech.ai.vn/beta-testing"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Beta Testing</span>
                </span>
              </span>
              <Link
                className="NavigationList_nav__link NavigationList_nav__link--variant-light"
                href="/policy"
              >
                <span className="Text_text--footer-link Text_text--weight-regular">
                  <span className="">Privacy Policy</span>
                </span>
              </Link>
            </div>
          </nav>
          {/* <div className="SubscribeForm_subscribe-form">
            <p className="Text_text--footer-title Text_text--weight-bold SubscribeForm_subscribe-form__title">
              <span className="">Subscribe href our Beta testers</span>
            </p>
            <p className="Text_text--footer-body Text_text--weight-regular">
              <span className="">
                Enter your email to enroll in the X Tech Beta Testing Program
                and start experiencing our upcoming products.
              </span>
            </p>
            <form className="SubscribeForm_subscribe-form__form">
              <label className="Input_input SubscribeForm_subscribe-form__email">
                <input
                  name="email"
                  className="Input_input__input Input_input__input--light"
                  placeholder=" "
                  type="email"
                  value=""
                />
                <span className="Input_placeholder">Your email address</span>
              </label>
              <button
                type="submit"
                className="Button_button Button_button--variant-filled-dark Button_button--radius-small SubscribeForm_subscribe-form__subscribe"
              >
                <div className="Button_button__children">Subscribe</div>
                <div className="Button_button__spinner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
    {/* <div className="Footer_copyright Footer_copyright--theme-light">
      <div className="Footer_copyright__container">
        <div className="Copyright_copyright">
          <a
            className="Copyright_copyright__privacy-link"
            href="https://xtech.ai.vn/newgrad/privacy"
          >
            Candidate Privacy Statement
          </a>
          <div className="SocialLinks_social-links SocialLinks_social-links--size-small Copyright_copyright__social-links">
            <a
              target="_blank"
              className="SocialLinks_link SocialLinks_link--light SocialLinks_link--size-small"
              href="https://instagram.com/hubxstudios"
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
                  d="m20 11c2.4453 0 2.7504.009 3.7098.054.9585.045 1.611.1953 2.1852.4185.594.2286 1.0944.5382 1.5948 1.0377.4576.4499.8118.9941 1.0377 1.5948.2223.5733.3735 1.2267.4185 2.1852.0423.9594.054 1.2645.054 3.7098s-.009 2.7504-.054 3.7098c-.045.9585-.1962 1.611-.4185 2.1852-.2253.6009-.5795 1.1453-1.0377 1.5948-.45.4575-.9942.8115-1.5948 1.0377-.5733.2223-1.2267.3735-2.1852.4185-.9594.0423-1.2645.054-3.7098.054s-2.7504-.009-3.7098-.054c-.9585-.045-1.611-.1962-2.1852-.4185-.6009-.2255-1.1452-.5796-1.5948-1.0377-.4577-.4499-.8119-.9941-1.0377-1.5948-.2232-.5733-.3735-1.2267-.4185-2.1852-.0423-.9594-.054-1.2645-.054-3.7098s.009-2.7504.054-3.7098.1953-1.611.4185-2.1852c.2252-.601.5794-1.1454 1.0377-1.5948.4497-.4579.994-.812 1.5948-1.0377.5742-.2232 1.2258-.3735 2.1852-.4185.9594-.0423 1.2645-.054 3.7098-.054zm0 4.5c-1.1935 0-2.3381.4741-3.182 1.318s-1.318 1.9885-1.318 3.182.4741 2.3381 1.318 3.182c.8439.844 1.9885 1.318 3.182 1.318s2.3381-.474 3.182-1.318c.844-.8439 1.318-1.9885 1.318-3.182s-.474-2.3381-1.318-3.182c-.8439-.8439-1.9885-1.318-3.182-1.318zm5.85-.225c0-.2984-.1185-.5845-.3295-.7955s-.4971-.3295-.7955-.3295-.5845.1185-.7955.3295-.3295.4971-.3295.7955.1185.5845.3295.7955.4971.3295.7955.3295.5845-.1185.7955-.3295.3295-.4971.3295-.7955zm-5.85 2.025c.7161 0 1.4028.2845 1.9092.7908.5063.5064.7908 1.1931.7908 1.9092s-.2845 1.4028-.7908 1.9092c-.5064.5063-1.1931.7908-1.9092.7908s-1.4028-.2845-1.9092-.7908c-.5063-.5064-.7908-1.1931-.7908-1.9092s.2845-1.4028.7908-1.9092c.5064-.5063 1.1931-.7908 1.9092-.7908z"
                  fill="#000"
                ></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="SocialLinks_link SocialLinks_link--light SocialLinks_link--size-small"
              href="https://twitter.com/hubxstudios"
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
            </a>
            <a
              target="_blank"
              className="SocialLinks_link SocialLinks_link--light SocialLinks_link--size-small"
              href="https://medium.com/hubxstudios"
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
            </a>
            <a
              target="_blank"
              className="SocialLinks_link SocialLinks_link--light SocialLinks_link--size-small"
              href="https://www.linkedin.com/company/hubxstudios"
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
            </a>
            <a
              target="_blank"
              className="SocialLinks_link SocialLinks_link--light SocialLinks_link--size-small"
              href="https://www.youtube.com/@hubxstudios"
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
            </a>
          </div>
        </div>
      </div>
    </div> */}
  </footer>
  );
};

export default Footer;
