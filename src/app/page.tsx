"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";
import {
  getMotionFadeInAnimation,
  getMotionFadeInAndSlideUpAnimation,
  getMotionFadeInAndZoomInAnimation,
  getMotionFadeInAndZoomOutAnimation,
} from "@/utils/animation";
import "./Home.css";
import Chip from "@/components/chip/Chip";
import Link from "next/link";

const Home: React.FC = () => {
  // const [isDisabledPrevNews, setIsDisabledPrevNews] = useState(true);
  // const [isDisabledNextNews, setIsDisabledNextNews] = useState(false);
  // const [isDisabledPrevPositions, setIsDisabledPrevNewsPositions] =
  //   useState(true);
  // const [isDisabledNextPositions, setIsDisabledNextPositions] = useState(false);
  const newsSliderRef = useRef<SwiperRef>(null);
  const positionsSliderRef = useRef<SwiperRef>(null);

  useEffect(() => {
    console.log(newsSliderRef.current?.swiper.activeIndex);
  }, [newsSliderRef.current?.swiper.activeIndex]);

  // const handlePrev = useCallback(() => {
  //   if (!newsSliderRef.current) return;
  //   newsSliderRef.current.swiper.slidePrev();

  //   if (newsSliderRef.current.swiper.isBeginning) {
  //     setIsDisabledPrevNews(true);
  //   } else {
  //     setIsDisabledPrevNews(false);
  //     setIsDisabledNextNews(false);
  //   }
  // }, []);

  // const handleNext = useCallback(() => {
  //   if (!newsSliderRef.current) return;

  //   newsSliderRef.current.swiper.slideNext();

  //   if (newsSliderRef.current.swiper.isEnd) {
  //     setIsDisabledNextNews(true);
  //   } else {
  //     setIsDisabledNextNews(false);
  //     setIsDisabledPrevNews(false);
  //   }
  // }, []);

  // const handlePrevPositions = useCallback(() => {
  //   if (!positionsSliderRef.current) return;
  //   positionsSliderRef.current.swiper.slidePrev();

  //   if (positionsSliderRef.current.swiper.isBeginning) {
  //     setIsDisabledPrevNewsPositions(true);
  //   } else {
  //     setIsDisabledPrevNewsPositions(false);
  //     setIsDisabledNextPositions(false);
  //   }
  // }, []);

  // const handleNextPositions = useCallback(() => {
  //   if (!positionsSliderRef.current) return;

  //   positionsSliderRef.current.swiper.slideNext();

  //   if (positionsSliderRef.current.swiper.isEnd) {
  //     setIsDisabledNextPositions(true);
  //   } else {
  //     setIsDisabledNextPositions(false);
  //     setIsDisabledPrevNewsPositions(false);
  //   }
  // }, []);

  return (
    <main>
      <div>
        <section className="Hero_hero-container">
          <div className="Hero_hero">
            <div className="Hero_content">
              <div className="video-container">
                <video
                  muted={true}
                  autoPlay={true}
                  loop={true}
                  preload="metadata"
                  playsInline={true}
                  src="/assets/home/header.mp4"
                ></video>
              </div>

              <h1 className="Text_text--display-s Text_text--weight-bold Hero_content__title mt-10">
                <span className="">The science behind the apps.</span>
              </h1>
              <p className="Text_text--headline-m Text_text--weight-medium Hero_content__description  mt-10">
                <span className="">
                  Technify is a technology hub, building next-gen apps
                  using world-class expertise and cutting-edge tech.
                </span>
              </p>

              {/* Video button */}
              {/* <button
                type="button"
                className="Button_button Button_button--variant-colorful-dark Button_button--radius-large"
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 14 16"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Button_button__start-icon Button_button__start-icon--stroke"
                >
                  <path
                    d="m3.38956.76009 9.55424 5.65086c1.2085.71374 1.2085 2.46363 0 3.17737l-9.55424 5.65088c-1.23058.7285-2.786044-.16-2.786044-1.5899v-11.29929c0-1.429941 1.555464-2.3184274 2.786044-1.58992z"
                    fill="#fff"
                  ></path>
                </svg>
                <div className="Button_button__children">
                  Discover the Hub
                </div>
                <div className="Button_button__spinner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </button> */}
            </div>
            {/* <motion.div
              {...getMotionFadeInAnimation(0)}
              className="Hero_background"
            >
              <div className="Hero_background__text">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "26.1293% 0px 0px",
                    }}
                  ></span>
                  <motion.img
                    alt=""
                    sizes="100vw"
                    src="assets/home/xtech.png"
                    decoding="async"
                    data-nimg="responsive"
                    {...getMotionFadeInAndSlideUpAnimation(0)}
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "0px",
                      height: "0px",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
              <div className="Hero_background__screenshot">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "79.7081% 0px 0px",
                    }}
                  ></span>
                  <motion.img
                    alt=""
                    sizes="100vw"
                    src="assets/home/screenshot.png"
                    decoding="async"
                    data-nimg="responsive"
                    {...getMotionFadeInAndSlideUpAnimation(0)}
                    style={{
                      position: "absolute",
                      inset: "0px",
                      boxSizing: "border-box",
                      padding: "0px",
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: "0px",
                      height: "0px",
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </div>
            </motion.div> */}
          </div>
        </section>
        <section className="WhatWeDo_what-we-do">
          <div className="WhatWeDo_what-we-do__container">
            <motion.div
              {...getMotionFadeInAndSlideUpAnimation(0)}
              className="WhatWeDo_content"
            >
              <h2 className="Text_text--headline-l Text_text--weight-bold WhatWeDo_what-we-do__title">
                <span className="">What We Do</span>
              </h2>
              <p className="Text_text--display-s Text_text--weight-bold WhatWeDo_what-we-do__subtitle">
                <span className="">Design. Build. Launch. Scale.</span>
              </p>
              <p className="Text_text--headline-m Text_text--weight-medium">
                <span className="">
                  At Technify, we are building and growing
                  highly-scalable mobile apps with a track record to be proud of
                  — our apps and games have reached over million users across
                  160 countries.
                </span>
              </p>
            </motion.div>
          </div>
          <div className="WhatWeDo_visual">
            <motion.div
              {...getMotionFadeInAndZoomInAnimation(0)}
              className="WhatWeDo_visual__wrapper"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "45.8559% 0px 0px",
                  }}
                ></span>
                <img
                  alt="we do"
                  sizes="100vw"
                  src="assets/home/what-we-do.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </span>
            </motion.div>
          </div>
          <div className="WhatWeDo_content">
            <p className="Text_text--headline-m Text_text--weight-medium WhatWeDo_what-we-do__description">
              <span className="">
                We are structured as a hub, focusing on collaboration and
                coordination between autonomous in-house studios and essential
                central departments. Each studio is expertly working on a
                specific app category while taking advantage of the shared
                resources of the central hub.
              </span>
            </p>
            <a
              href="https://hubx.co/products"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large WhatWeDo_what-we-do__button"
            >
              <div className="Button_button__children">Discover Products</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </section>
        <section className="Investments_investments">
          <div>
            <motion.div
              {...getMotionFadeInAndSlideUpAnimation(0)}
              className="Investments_title"
            >
              <h2 className="Text_text--headline-l Text_text--weight-bold Investments_title__title">
                <span className="">Investments &amp; Publishing</span>
              </h2>
              <p className="Text_text--display-m Text_text--weight-bold Investments_title__subtitle">
                <span className="">We enable entrepreneurship</span>
              </p>
              <p className="Text_text--headline-m--extra-height Text_text--weight-medium Investments_title__description">
                <span className="">
                  In addition to supporting our in-house studios, we are always
                  looking to extend our resources to promising new projects in
                  our ecosystem. Our focus is on mobile apps and games, but we
                  are also evaluating opportunities in other exciting fields.
                </span>
              </p>
            </motion.div>
          </div>
          <motion.div
            {...getMotionFadeInAndZoomInAnimation(0)}
            className="Investments_cards"
          >
            <Swiper
              slidesPerView={1}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              ref={positionsSliderRef}
            >
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="Card_card Investments_card"
                  style={{ width: "100%", height: "560px" }}
                >
                  <motion.div
                    {...getMotionFadeInAnimation(0)}
                    className="Card_card__image"
                  >
                    <div>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "97.1919% 0px 0px",
                          }}
                        ></span>
                        <img
                          alt="app"
                          src="/assets/home/sell-your-app.png"
                          decoding="async"
                          data-nimg="responsive"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "border-box",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript></noscript>
                      </span>
                    </div>
                  </motion.div>
                  <div className="Card_card__title">
                    <p className="Text_text--headline-xl Text_text--weight-medium">
                      <span className="">Sell your app</span>
                    </p>
                  </div>
                  <div className="Card_card__body">
                    <p className="Text_text--body-m Text_text--weight-regular">
                      <span className="">
                        If you’re looking to sell your mobile app, our
                        acquisition team is excited to work with you.
                      </span>
                    </p>
                  </div>
                  <div className="Card_card__link">
                    <Link href="/contact">
                      <p className="Text_text--link-xxl Text_text--weight-medium">
                        <span className="">Contact Us</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="Card_card Investments_card"
                  style={{ width: "100%", height: "560px" }}
                >
                  <motion.div
                    {...getMotionFadeInAnimation(0)}
                    className="Card_card__image"
                  >
                    <div>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "82.5193% 0px 0px",
                          }}
                        ></span>
                        <img
                          alt="investments"
                          src="/assets/home/investments.png"
                          decoding="async"
                          data-nimg="responsive"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "border-box",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript></noscript>
                      </span>
                    </div>
                  </motion.div>
                  <div className="Card_card__title">
                    <p className="Text_text--headline-xl Text_text--weight-medium">
                      <span className="">Investments</span>
                    </p>
                  </div>
                  <div className="Card_card__body">
                    <p className="Text_text--body-m Text_text--weight-regular">
                      <span className="">
                        We invest in start-ups who have a global vision to build
                        market-leading companies. We not only provide capital,
                        but we also share our expertise and know-how in our
                        field.
                      </span>
                    </p>
                  </div>
                  {/* <div className="Card_card__link">
                    <a href="https://hubx.co/investments">
                      <p className="Text_text--link-xxl Text_text--weight-medium">
                        <span className="">Apply Now</span>
                      </p>
                    </a>
                  </div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="Card_card Investments_card"
                  style={{ width: "100%", height: "560px" }}
                >
                  <motion.div
                    {...getMotionFadeInAnimation(0)}
                    className="Card_card__image"
                  >
                    <div>
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "74.8698% 0px 0px",
                          }}
                        ></span>
                        <img
                          alt="publishing"
                          src="/assets/home/publishing.png"
                          decoding="async"
                          data-nimg="responsive"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "border-box",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: "0px",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                        />
                        <noscript></noscript>
                      </span>
                    </div>
                  </motion.div>
                  <div className="Card_card__title">
                    <p className="Text_text--headline-xl Text_text--weight-medium">
                      <span className="">Publishing</span>
                    </p>
                  </div>
                  <div className="Card_card__body">
                    <p className="Text_text--body-m Text_text--weight-regular">
                      <span className="">
                        Our marketing team accelerates the growth of ventures we
                        partner with and scales their apps globally. Let us
                        carry your app to top of the lists in app markets.
                      </span>
                    </p>
                  </div>
                  {/* <div className="Card_card__link">
                    <a href="https://hubx.co/publisher">
                      <p className="Text_text--link-xxl Text_text--weight-medium">
                        <span className="">Join Our Program</span>
                      </p>
                    </a>
                  </div> */}
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </section>
        <section className="HowWeWork_how-we-work">
          <div className="HowWeWork_how-we-work__container">
            <motion.div
              {...getMotionFadeInAndSlideUpAnimation(0)}
              className="HowWeWork_how-we-work__content"
            >
              <h2 className="Text_text--headline-l Text_text--weight-bold HowWeWork_how-we-work__title">
                <span className="">How We Work</span>
              </h2>
              <p className="Text_text--display-s Text_text--weight-bold HowWeWork_how-we-work__subtitle">
                <span className="">
                  To build products <b>people love</b>, we created an
                  environment where <b>passionate</b> people thrive
                </span>
              </p>
            </motion.div>
            <div className="HowWeWork_key-components">
              <div className="KeyComponentItem_key-component-item">
                <motion.div
                  {...getMotionFadeInAndZoomInAnimation(0)}
                  className="KeyComponentItem_key-component-item__image"
                >
                  <div className="KeyComponentItem_key-component-item__image-wrapper">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "101.595% 0px 0px",
                        }}
                      ></span>
                      <img
                        alt="component"
                        src="/assets/home/key-component-1.png"
                        decoding="async"
                        data-nimg="responsive"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />

                      <noscript></noscript>
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  {...getMotionFadeInAndSlideUpAnimation(0)}
                  className="KeyComponentItem_key-component-item__content"
                >
                  <h3 className="Text_text--display-s Text_text--weight-bold KeyComponentItem_key-component-item__title">
                    <span className="">
                      The Right
                      <br />
                      People
                    </span>
                  </h3>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      We want to work with self-starters who can take the
                      initiative and solve problems independently with minimal
                      direction. By giving our people the space they need and
                      providing them with the most innovative tools, we trust
                      them to do their part.
                    </span>
                  </p>
                </motion.div>
              </div>
              <div className="KeyComponentItem_key-component-item">
                <motion.div
                  {...getMotionFadeInAndZoomInAnimation(0)}
                  className="KeyComponentItem_key-component-item__image"
                >
                  <div className="KeyComponentItem_key-component-item__image-wrapper">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "82.9862% 0px 0px",
                        }}
                      ></span>
                      <img
                        alt="Technify computer producing mobile application"
                        src="/assets/home/key2.png"
                        decoding="async"
                        data-nimg="responsive"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  {...getMotionFadeInAndSlideUpAnimation(0)}
                  className="KeyComponentItem_key-component-item__content"
                >
                  <h3 className="Text_text--display-s Text_text--weight-bold KeyComponentItem_key-component-item__title">
                    <span className="">State-of-the-art Tech</span>
                  </h3>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      In our field, having a data-driven culture is essential
                      for success. Data empowers us to be more efficient and
                      more precise, that’s why we live and breathe data. To
                      support our brilliant minds, we continuously build tech
                      and data tools helping them make well-informed decisions.
                    </span>
                  </p>
                </motion.div>
              </div>
              <div className="KeyComponentItem_key-component-item">
                <motion.div
                  {...getMotionFadeInAndZoomInAnimation(0)}
                  className="KeyComponentItem_key-component-item__image"
                >
                  <div className="KeyComponentItem_key-component-item__image-wrapper">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "103.709% 0px 0px",
                        }}
                      ></span>
                      <img
                        alt="component 3"
                        src="/assets/home/key-component-3.png"
                        decoding="async"
                        data-nimg="responsive"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  {...getMotionFadeInAndSlideUpAnimation(0)}
                  className="KeyComponentItem_key-component-item__content"
                >
                  <h3 className="Text_text--display-s Text_text--weight-bold KeyComponentItem_key-component-item__title">
                    <span className="">Shared Values</span>
                  </h3>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      At Technify, we believe in cultivating a culture
                      with strong shared values that serve a specific vision and
                      strategy — that is our magic formula.
                    </span>
                  </p>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      We seek out partners who share our passion, not employees.
                      And we work tirelessly to provide turbo-charged careers
                      for outstanding people who truly care about their work and
                      making a positive impact.
                    </span>
                  </p>
                </motion.div>
              </div>
              <div className="KeyComponentItem_key-component-item">
                <motion.div
                  {...getMotionFadeInAndZoomInAnimation(0)}
                  className="KeyComponentItem_key-component-item__image"
                >
                  <div className="KeyComponentItem_key-component-item__image-wrapper">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "80.226% 0px 0px",
                        }}
                      ></span>
                      <img
                        alt=""
                        src="/assets/home/key-component-4.png"
                        decoding="async"
                        data-nimg="responsive"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  {...getMotionFadeInAndSlideUpAnimation(0)}
                  className="KeyComponentItem_key-component-item__content"
                >
                  <h3 className="Text_text--display-s Text_text--weight-bold KeyComponentItem_key-component-item__title">
                    <span className="">
                      Autonomous
                      <br />
                      Studios
                    </span>
                  </h3>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      We’re structured as a hub, focusing on collaboration and
                      coordination between autonomous in-house studios and a
                      central hub. Each studio has its own team and specializes
                      in a specific app vertical in a unique app category.
                    </span>
                  </p>
                  <p className="Text_text--body-l Text_text--weight-medium KeyComponentItem_key-component-item__description">
                    <span className="">
                      Technify, our central hub, orchestrates the whole
                      structure with shared resources such as various central
                      departments, office space, in-house data tools, funding
                      and strong know-how.
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="Growth_growth">
          <motion.div
            {...getMotionFadeInAndSlideUpAnimation(0)}
            className="Growth_growth__container"
          >
            <p className="Text_text--display-m Text_text--weight-bold Growth_growth__text">
              <span className="">
                We are in an exciting period of growth and we are seeking
                exceptional talents who share our vision.
              </span>
            </p>
            {/* <button
              type="button"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <a
                href="https://xtech.ai.vn/jobs#open-positions"
                className="Button_button__children"
              >
                See Open Positions
              </a>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button> */}
          </motion.div>
          <motion.div
            {...getMotionFadeInAndZoomOutAnimation(0)}
            className="Growth_background"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              <img
                
                alt="home we"
                src="/assets/home/we.png"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
              <noscript></noscript>
            </span>
          </motion.div>
        </section>
        <section className="InternalTech_internal-tech">
          <motion.div
            {...getMotionFadeInAndSlideUpAnimation(0)}
            className="Content_content"
          >
            <div className="Content_content__container">
              <h2 className="Text_text--headline-l Text_text--weight-bold Content_content__title">
                <span className="">Advanced Custom-built Technology</span>
              </h2>
              <p className="Text_text--display-s Text_text--weight-bold Content_content__subtitle">
                <span className="">
                  We use proven external products, performance marketing tools,
                  and our <b>custom-built data analytics</b> tech to formulate
                  our strategies.
                </span>
              </p>
              <p className="Text_text--headline-m Text_text--weight-medium Content_content__description">
                <span className="">
                  Behind the apparent simplicity, our apps hide an incredible
                  amount of complex proprietary tech that we developed and
                  perfected.
                </span>
              </p>
            </div>
          </motion.div>
          <motion.div
            {...getMotionFadeInAndZoomInAnimation(0)}
            className="TechLogos_tech-logos"
          >
            <div className="TechLogos_tech-logos__container">
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="30"
                  viewBox="0 0 180 30"
                  width="180"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Google Cloud"
                >
                  <g fill="#000">
                    <defs>
                      <style>
                        {`
                      .cls-1 {
                        fill: #212121;
                      }
                      .cls-2 {
                        fill: #303030;
                      }
  
                      .cls-3 {
                        fill: #161616;
                      }
                    `}
                      </style>
                    </defs>
                    <path d="M21.85,7.41h1l2.85-2.85.14-1.21C20.54-1.33,12.44-.83,7.76,4.48c-1.3,1.47-2.24,3.23-2.76,5.12.32-.13.67-.15,1-.06l5.7-.94s.29-.48.44-.45c2.54-2.78,6.8-3.11,9.73-.74h-.02Z"></path>
                    <path
                      className="cls-3"
                      d="M29.76,9.6c-.66-2.41-2-4.58-3.87-6.24l-4,4c1.69,1.38,2.65,3.46,2.61,5.64v.71c1.97,0,3.56,1.59,3.56,3.56s-1.59,3.56-3.56,3.56h-7.12l-.71.72v4.27l.71.71h7.12c5.11.04,9.29-4.07,9.33-9.19.02-3.1-1.5-6.01-4.07-7.74Z"
                    ></path>
                    <path
                      className="cls-1"
                      d="M10.25,26.49h7.12v-5.7h-7.12c-.51,0-1.01-.11-1.47-.32l-1,.31-2.87,2.85-.25,1c1.61,1.22,3.57,1.87,5.59,1.86Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M10.25,8c-5.11.03-9.24,4.2-9.2,9.32.02,2.86,1.35,5.54,3.61,7.28l4.13-4.13c-1.79-.81-2.59-2.92-1.78-4.71s2.92-2.59,4.71-1.78c.79.36,1.42.99,1.78,1.78l4.13-4.13c-1.76-2.3-4.49-3.64-7.38-3.63Z"
                    ></path>
                    <path d="M52.79,22.51c-2.48.03-4.86-.95-6.6-2.71-1.8-1.69-2.8-4.05-2.77-6.52-.03-2.47.98-4.83,2.77-6.52,1.73-1.78,4.12-2.78,6.6-2.76,2.37-.03,4.65.89,6.33,2.55l-1.78,1.81c-1.22-1.18-2.85-1.83-4.55-1.8-1.78-.02-3.48.7-4.7,2-1.26,1.25-1.96,2.97-1.93,4.75-.01,1.76.68,3.45,1.93,4.69,2.58,2.57,6.73,2.61,9.36.11.78-.86,1.27-1.95,1.37-3.11h-6v-2.56h8.49c.08.52.12,1.04.1,1.56.11,2.18-.68,4.32-2.19,5.9-1.68,1.74-4.01,2.69-6.43,2.61ZM72.53,20.81c-2.37,2.27-6.1,2.27-8.47,0-1.15-1.11-1.77-2.65-1.73-4.25-.04-1.6.58-3.14,1.73-4.25,2.37-2.26,6.1-2.26,8.47,0,1.15,1.11,1.77,2.65,1.73,4.25.04,1.6-.59,3.14-1.74,4.25h.01ZM65.93,19.14c1.22,1.31,3.27,1.37,4.58.15.05-.05.1-.1.15-.15.67-.69,1.03-1.62,1-2.58.03-.96-.33-1.9-1-2.59-1.26-1.31-3.34-1.36-4.65-.1-.03.03-.07.06-.1.1-.67.69-1.03,1.63-1,2.59-.03.96.34,1.89,1.01,2.58h.01ZM85.55,20.81c-2.37,2.27-6.1,2.27-8.47,0-1.15-1.11-1.77-2.65-1.73-4.25-.04-1.6.58-3.14,1.73-4.25,2.37-2.27,6.1-2.27,8.47,0,1.15,1.11,1.77,2.65,1.73,4.25.04,1.6-.58,3.14-1.73,4.25ZM78.95,19.14c1.22,1.31,3.27,1.37,4.58.15.05-.05.1-.1.15-.15.67-.69,1.03-1.62,1-2.58.03-.96-.33-1.9-1-2.59-1.26-1.31-3.34-1.36-4.65-.1-.03.03-.07.06-.1.1-.67.69-1.03,1.63-1,2.59-.03.96.34,1.89,1.01,2.58h.01ZM94.11,27.85c-1.2.04-2.37-.34-3.33-1.06-.85-.64-1.52-1.49-1.94-2.46l2.28-.95c.25.58.64,1.09,1.13,1.49.53.43,1.19.65,1.87.63.87.05,1.72-.28,2.33-.9.6-.73.9-1.66.83-2.6v-.86h-.09c-.77.92-1.93,1.42-3.13,1.35-1.52,0-2.97-.63-4-1.74-1.12-1.1-1.74-2.62-1.71-4.19-.03-1.58.59-3.1,1.71-4.22,1.03-1.12,2.48-1.75,4-1.75.64,0,1.26.14,1.84.41.5.22.94.54,1.3.95h.09v-.95h2.48v10.65c.13,1.7-.44,3.38-1.59,4.65-1.09,1.04-2.56,1.6-4.07,1.55ZM94.29,20.17c.86.02,1.69-.35,2.26-1,.62-.71.94-1.62.91-2.56.04-.95-.29-1.89-.91-2.61-.57-.65-1.4-1.02-2.26-1-.89-.02-1.74.35-2.34,1-.66.7-1.02,1.63-1,2.59-.02.95.34,1.87,1,2.56.6.66,1.45,1.03,2.34,1.02ZM104.18,4.67v17.48h-2.61V4.67h2.61ZM111.34,22.51c-1.58.04-3.11-.58-4.21-1.71-1.12-1.12-1.73-2.65-1.69-4.24-.06-1.59.53-3.13,1.63-4.28,1.04-1.1,2.49-1.7,4-1.67.69,0,1.37.13,2,.39.57.23,1.09.57,1.53,1,.38.36.71.77,1,1.21.23.37.43.76.59,1.17l.27.68-8,3.29c.5,1.14,1.64,1.85,2.88,1.8,1.2,0,2.31-.62,2.93-1.65l2,1.35c-.51.73-1.16,1.35-1.92,1.82-.9.57-1.95.86-3.01.84ZM108,16.38l5.32-2.21c-.16-.39-.46-.71-.83-.91-.42-.24-.89-.36-1.37-.35-.81.02-1.59.36-2.15.95-.68.65-1.04,1.58-.97,2.52Z"></path>
                    <path d="M130.13,22.51c-4.55.08-8.3-3.55-8.38-8.1,0-.11,0-.22,0-.33-.11-4.55,3.5-8.32,8.05-8.43.11,0,.22,0,.33,0,2.28-.07,4.46.9,5.93,2.64l-1.44,1.4c-1.08-1.36-2.75-2.12-4.48-2.05-1.66-.04-3.27.61-4.45,1.78-1.23,1.23-1.88,2.92-1.81,4.66-.07,1.74.58,3.43,1.81,4.66,1.18,1.17,2.79,1.82,4.45,1.78,1.94.02,3.78-.84,5-2.34l1.44,1.44c-.75.9-1.7,1.62-2.77,2.11-1.15.53-2.41.8-3.68.78Z"></path>
                    <path d="M140.45,22.15h-2.07V6h2.07v16.15Z"></path>
                    <path d="M143.83,12.43c2.26-2.24,5.9-2.24,8.16,0,1.07,1.13,1.65,2.64,1.6,4.2.05,1.56-.53,3.07-1.6,4.2-2.26,2.24-5.9,2.24-8.16,0-1.07-1.13-1.65-2.64-1.6-4.2-.05-1.56.53-3.07,1.6-4.2ZM145.37,19.53c1.32,1.4,3.53,1.46,4.93.14.05-.04.09-.09.14-.14.73-.78,1.12-1.83,1.07-2.9.05-1.07-.34-2.12-1.07-2.9-1.32-1.4-3.53-1.46-4.93-.14-.05.04-.09.09-.14.14-.73.78-1.12,1.83-1.07,2.9-.04,1.07.35,2.11,1.08,2.89h-.01Z"></path>
                    <path d="M165.06,22.15h-2v-1.53h-.06c-.36.58-.86,1.06-1.46,1.38-.62.36-1.33.55-2.05.55-1.18.08-2.34-.38-3.14-1.26-.76-.96-1.14-2.16-1.07-3.38v-6.8h2.07v6.42c0,2.06.91,3.09,2.73,3.09.82.03,1.6-.35,2.1-1,.54-.68.82-1.52.81-2.39v-6.12h2.07v11.04Z"></path>
                    <path d="M172.09,22.51c-1.42,0-2.77-.61-3.7-1.69-1.04-1.15-1.59-2.65-1.55-4.19-.04-1.54.51-3.04,1.55-4.19.93-1.08,2.28-1.69,3.7-1.69.79-.01,1.56.17,2.26.54.61.31,1.13.77,1.5,1.35h.09l-.09-1.53v-5.11h2.07v16.15h-2v-1.53h-.09c-.37.58-.89,1.04-1.5,1.35-.69.36-1.46.55-2.24.54ZM172.43,20.62c.95.01,1.85-.38,2.49-1.08.7-.8,1.06-1.85,1-2.91.06-1.06-.3-2.11-1-2.91-1.26-1.38-3.39-1.48-4.77-.23-.08.07-.15.15-.23.23-.71.8-1.07,1.84-1,2.9-.07,1.06.29,2.1,1,2.9.64.71,1.55,1.11,2.51,1.1Z"></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="32"
                  viewBox="0 0 174 32"
                  width="174"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Google Ads"
                >
                  <g fill="#000">
                    <path d="m10.5385 3.83799c.2926-.76796.6948-1.47497 1.2921-2.04789 2.3893-2.32826 6.3388-1.7431472 7.96 1.18242 1.219 2.21855 2.5111 4.38834 3.7667 6.58251 2.0966 3.64477 4.2177 7.28957 6.2899 10.94647 1.7432 3.0597-.1462 6.9238-3.6082 7.448-2.121.3169-4.1079-.6582-5.205-2.5599-1.8407-3.2059-3.6935-6.4118-5.5342-9.6056-.0366-.0731-.0853-.134-.1341-.195-.195-.1585-.2804-.3901-.4023-.5973-.8167-1.4384-1.6578-2.8646-2.4745-4.2908-.5242-.92645-1.0727-1.84069-1.5969-2.76712-.4754-.82891-.6948-1.73096-.6704-2.68176.0366-.4876.0975-.97519.3169-1.41403z"></path>
                    <path
                      d="m10.5364 3.83765c-.1097.43883-.2072.87767-.2316 1.34088-.0366 1.02395.2194 1.97475.7314 2.86461 1.3409 2.30386 2.6818 4.61996 4.0105 6.93606.1219.2072.2194.4144.3413.6095-.7314 1.2677-1.4628 2.5233-2.2064 3.791-1.0239 1.7675-2.0479 3.5472-3.084 5.3148-.0488 0-.061-.0244-.0732-.061-.0121-.0975.0244-.1828.0488-.2803.4998-1.8285.0853-3.4498-1.17022-4.8394-.76796-.8411-1.74315-1.3165-2.86461-1.475-1.46278-.2072-2.75491.1707-3.91294 1.0849-.20723.1585-.34132.3901-.58511.512-.04876 0-.07314-.0244-.08533-.061.58511-1.0117 1.15803-2.0235 1.74314-3.0352 2.41359-4.1933 4.82718-8.38665 7.25297-12.56777.0244-.04875.0609-.08532.0853-.13408z"
                      opacity="0.3"
                    ></path>
                    <path d="m1.5038 19.6114c.23161-.2073.45103-.4267.69482-.6217 2.96214-2.3405 7.41143-.6461 8.05748 3.0596.1585.8899.0731 1.7432-.195 2.5965-.0122.0731-.0244.134-.0488.2072-.1097.195-.20721.4023-.32911.5973-1.0849 1.7919-2.68177 2.6818-4.77842 2.5477-2.4014-.1707-4.290827-1.9748-4.619952-4.364-.158468-1.158.073139-2.2429.670441-3.2425.121901-.2194.268181-.4144.402261-.6339.06095-.0487.03657-.1462.14628-.1462z"></path>
                    <path d="m10.0134 24.8536c-.04881-.0854 0-.1464.0488-.2074.0122.0122.0365.0366.0487.0488z"></path>
                    <path
                      clipRule="evenodd"
                      d="m44.7686 14.8489c0-5.736 4.8141-10.39651 10.6013-10.39651 3.1753 0 5.4287 1.28036 7.1188 2.91922l-1.9974 1.99735c-1.1779-1.17793-2.868-2.04857-5.1214-2.04857-4.1996 0-7.4773 3.38011-7.4773 7.52851 0 4.1483 3.2777 7.5285 7.4773 7.5285 2.7144 0 4.302-1.1267 5.2751-2.0998.8194-.8194 1.3315-1.9974 1.5364-3.585h-6.8115v-2.8168h9.5771c.1024.5121.1536 1.1267.1536 1.7925 0 2.0998-.5634 4.7117-2.4583 6.6067-1.8437 1.8949-4.1483 2.9192-7.2724 2.9192-5.7872 0-10.6013-4.6093-10.6013-10.3453zm21.3051 3.7898c0-3.9435 3.0216-6.7602 6.6578-6.7602s6.6579 2.868 6.6579 6.7602c0 3.8923-2.9705 6.7603-6.6579 6.7603s-6.6578-2.868-6.6578-6.7603zm2.9192 0c0 2.4071 1.7413 4.0972 3.7386 4.0972 1.9974 0 3.7387-1.6901 3.7387-4.0972 0-2.4582-1.7413-4.0971-3.7387-4.0971-1.9973 0-3.7386 1.6901-3.7386 4.0971zm11.5232 0c0-3.9435 2.9704-6.7602 6.6578-6.7602 3.6875 0 6.6579 2.868 6.6579 6.7602 0 3.8923-3.0217 6.7603-6.6579 6.7603-3.6874 0-6.6578-2.868-6.6578-6.7603zm2.9192 0c0 2.4071 1.7413 4.0972 3.7386 4.0972 2.0486 0 3.7387-1.6901 3.7387-4.0972 0-2.4582-1.7413-4.0971-3.7387-4.0971-1.9973 0-3.7386 1.6901-3.7386 4.0971zm11.7793-.0512c0-3.7898 3.0216-6.709 6.3504-6.709 1.588 0 2.817.717 3.483 1.5364h.102v-1.0755h2.766v11.9841c0 4.9166-2.868 6.9651-6.3 6.9651-3.2262 0-5.1723-2.1509-5.8893-3.9434l2.5607-1.0755c.4609 1.0755 1.5364 2.3558 3.3286 2.3558 2.203 0 3.534-1.3828 3.534-3.9435v-.9731h-.102c-.666.8195-1.895 1.5365-3.483 1.5365-3.3288 0-6.3504-2.9192-6.3504-6.6579zm2.9192 0c0 2.3559 1.69 4.0459 3.6872 4.0459 1.998 0 3.534-1.69 3.534-4.0459 0-2.3558-1.536-4.0971-3.534-4.0971-1.9972 0-3.6872 1.7413-3.6872 4.0971zm14.8522-13.31568h-2.919v19.76868h2.919zm1.434 13.36688c0-4.0459 2.919-6.7602 6.402-6.7602 3.482 0 5.224 2.8167 5.787 4.3019l.307.7683-9.065 3.7386c.666 1.3828 1.742 2.0486 3.278 2.0486 1.485 0 2.561-.717 3.329-1.8437l2.305 1.5364c-.717 1.0755-2.51 2.9704-5.634 2.9704-3.841 0-6.709-2.9704-6.709-6.7603zm6.453-4.1483c-1.485 0-3.636 1.3316-3.534 3.9435l6.043-2.5095c-.307-.8707-1.331-1.434-2.509-1.434zm17.923-7.73283-6.76 17.97623h2.561l1.741-4.8654h7.529l1.741 4.8654h2.561l-6.761-17.97623zm4.302 10.95983h-5.992l2.971-8.09183h.102zm7.427 5.5312c-1.127-1.2804-1.69-2.8168-1.69-4.6605 0-1.7925.563-3.329 1.69-4.6605 1.178-1.2804 2.51-1.895 4.148-1.895.922 0 1.742.2049 2.459.5634.768.4097 1.331.8706 1.741 1.5364h.102l-.102-1.69v-5.68483h2.305v17.97623h-2.203v-1.6901h-.102c-.41.6146-.973 1.1267-1.741 1.5364-.769.4097-1.588.5634-2.459.5634-1.638 0-3.021-.6146-4.148-1.8949zm7.272-1.4341c.769-.8194 1.127-1.8949 1.127-3.2264 0-1.2804-.358-2.3559-1.127-3.1753-.717-.8195-1.638-1.2292-2.765-1.2292s-2.049.4097-2.766 1.2292c-.768.8194-1.126 1.8949-1.126 3.1753 0 1.2803.358 2.3558 1.126 3.1752.769.8195 1.69 1.2292 2.766 1.2292 1.127.0512 2.048-.3585 2.765-1.178zm10.499 3.3278c1.434 0 2.612-.4097 3.533-1.1267.922-.717 1.434-1.6388 1.383-2.7143 0-1.8438-1.178-3.0729-3.636-3.6875l-1.844-.4609c-1.331-.2561-1.997-.7682-1.997-1.4852 0-.4609.256-.8194.717-1.1267.512-.3073 1.024-.4609 1.639-.4609.666 0 1.28.1536 1.792.4609s.871.717 1.127 1.2291l2.049-.8706c-.359-.8707-.974-1.5877-1.844-2.0998-.922-.5121-1.895-.7682-2.971-.7682-1.382 0-2.56.3585-3.482 1.0243-.922.717-1.383 1.5876-1.383 2.7143 0 1.7413 1.178 2.868 3.585 3.4826l2.1.5121c1.178.3585 1.792.9731 1.792 1.7413 0 .4097-.205.8194-.717 1.1267s-1.126.461-1.843.461c-.666 0-1.332-.2049-1.895-.6146-.615-.4097-1.025-1.0243-1.332-1.7413l-2.048.8706c.409 1.0755 1.075 1.895 1.997 2.5608.973.6657 2.048.973 3.278.973z"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="39"
                  viewBox="0 0 131 39"
                  width="131"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="AppsFlyer"
                >
                  <path
                    clipRule="evenodd"
                    d="m15.4179 9.17497 6.8536-8.785203c.197-.252332.4347-.3796702.6724-.38933024.3275-.01141646.6559.20110524.8831.62263424l5.729 10.679729c.3919.729.3292 1.8058-.1383 2.4049l-6.8544 8.7869c-.4676.5987-1.1643.4936-1.5549-.2348l-5.7298-10.6794c-.3912-.7297-.3291-1.80522.1393-2.40543zm-15.03987 2.87993 5.6394 10.7281c.38505.7309 1.33415 1.3241 2.11816 1.3222l11.50431-.0243c.7854-.0016 1.1094-.5963.7247-1.3284l-5.6399-10.7275c-.3848-.7323-1.3337-1.324-2.1184-1.3222l-11.50417.0239-.02633.0002-.02634.0003c-.746313.0282-1.04802322.6119-.67143 1.3277zm21.85207 12.5 3.4151 6.3638c.2323.4341.8005.7825 1.2683.7772l6.8544-.0723c.4681-.0047.6569-.3607.4247-.7951l-3.414-6.3633c-.2327-.4344-.8016-.782-1.2684-.7771l-6.8545.0719h-.0236c-.4506.0167-.6307.3672-.402.7949zm-1.5663.1053-4.0848 5.2349c-.2796.3574-.3157.9988-.0831 1.4325l3.4143 6.3637c.2336.4344.6482.4968.9272.1393l4.0837-5.2342c.2784-.358.3157-1 .0833-1.433l-3.4145-6.3639c-.1344-.2513-.3307-.3781-.5263-.3717-.141.0049-.2834.0813-.3998.2324zm77.2235 1.8664h-2.2887v-17.20458h2.2887zm-43.289-11.7716c-3.2815 0-5.9419 2.6573-5.9419 5.9351h-.0041v10.9581h2.2887v-10.9581h.0112c0-2.0274 1.6459-3.6711 3.6746-3.6711 2.0301 0 3.6754 1.6437 3.6754 3.6711 0 2.0269-1.6453 3.6705-3.6754 3.6705-1.1447 0-2.1677-.5237-2.8413-1.3437v2.9012c.8375.4504 1.7963.707 2.8128.707 3.2836 0 5.9446-2.6579 5.9446-5.935 0-3.2778-2.661-5.9351-5.9446-5.9351zm6.9556 5.9342c0-3.2779 2.6598-5.9352 5.9425-5.9352 3.2818 0 5.9427 2.6573 5.9427 5.9352 0 3.277-2.6609 5.9349-5.9427 5.9349-1.0163 0-1.9768-.2566-2.8137-.707v-2.9012c.6739.82 1.6963 1.3437 2.8412 1.3437 2.0311 0 3.6764-1.6436 3.6764-3.6704 0-2.0275-1.6453-3.6711-3.6764-3.6711-2.0293 0-3.674 1.6436-3.674 3.6711h-.012v10.958h-2.2881v-10.958zm-20.2391-11.36718c-3.2826 0-5.9427 2.65788-5.9427 5.93528v11.2693h2.2887v-11.2693h.0035c0-2.0139 1.6338-3.6465 3.6514-3.6465 2.0164 0 3.6503 1.6326 3.6503 3.6465h.0032v1.2902h-5.8798v2.285h5.8798v7.6941h2.2899v-11.2693c0-3.2774-2.6613-5.93528-5.9443-5.93528zm50.2962 2.28738c-2.0184 0-3.654 1.6336-3.654 3.6479v1.524h6.3244v2.2857h-6.3244v7.4596h-2.289v-11.2693c0-3.2774 2.6609-5.93481 5.9424-5.93528h2.882v2.28628h-2.8814zm15.856 3.2194v7.1843h-.001c-.029 1.4455-1.207 2.6088-2.664 2.6088-1.454 0-2.634-1.1633-2.662-2.6088h-.003v-7.1843h-2.2874v7.1915h.0035c.0273 2.3107 1.6419 4.2365 3.8059 4.7488v4.8781h2.288v-4.8781c2.163-.5123 3.779-2.4381 3.806-4.7488h.002v-7.1915zm11.159 9.0211c.889-.5111 1.478-1.3403 1.711-2.26h2.335c-.263 1.7177-1.276 3.305-2.902 4.242-2.843 1.6385-6.476.6654-8.117-2.1728-1.641-2.8384-.668-6.4683 2.175-8.1071 2.841-1.6393 6.478-.6668 8.119 2.1718.196.3388.352.6883.475 1.0451l-4.809 2.7727-2.379 1.3722-1.145-1.9803 5.14-2.9631c-1.143-1.0198-2.856-1.2455-4.256-.4381-1.747 1.008-2.347 3.2378-1.337 4.9841 1.009 1.7445 3.243 2.3427 4.99 1.3335zm11.218-9.0925c-1.379 0-2.645.4703-3.652 1.2565v-1.2024h-2.29v11.7146h2.29v-5.8335h.001c0-2.0152 1.635-3.6485 3.651-3.6485v-.0014h.465v-2.2853zm-53.4106 3.6847 5.6924 2.6509c1.4299.6654 2.0478 2.3613 1.3807 3.7877-.484 1.0369-1.5117 1.6426-2.586 1.6442v.0017h-6.655v-2.2845h6.6547v-.0029c.2126.0012.418-.1182.513-.3236.1319-.2821.0103-.6169-.2729-.7481-.0015-.0012-.0021-.0012-.0021-.0012l.0006-.0014-5.693-2.6517c-1.4199-.6696-2.0345-2.3593-1.3694-3.7822.4842-1.0367 1.5122-1.6423 2.587-1.6435v-.0029h6.4951v2.2855h-6.4951v.0047c-.2116.0008-.415.1187-.51.3232-.1292.2777-.0126.6059.2618.7421z"
                    fill="#000"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="28"
                  viewBox="0 0 175 28"
                  width="175"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Facebook Ads"
                >
                  <g fill="#000">
                    <path d="m27.4521 14.151c0-7.54124-6.0762-13.654662-13.5717-13.654662-7.49552 0-13.571806 6.113422-13.571806 13.654662 0 6.8154 4.962976 12.4645 11.451206 13.4889v-9.5418h-3.44598v-3.9471h3.44598v-3.0083c0-3.42217 2.0262-5.31249 5.1262-5.31249 1.4844 0 3.038.26669 3.038.26669v3.36034h-1.7113c-1.6858 0-2.2117 1.05266-2.2117 2.13356v2.5602h3.764l-.6017 3.9471h-3.1623v9.5418c6.4882-1.0244 11.4511-6.6735 11.4511-13.4889z"></path>
                    <path d="m42.9398 22.2694h-2.0492v-14.48958h9.9531v1.75945h-7.9039v5.07133h6.8584v1.7595h-6.8584z"></path>
                    <path d="m62.5747 22.2694h-1.9028l-.0418-1.5628c-.4252.552-.9793.9935-1.6623 1.3247-.6831.3243-1.4254.4865-2.2269.4865-.9688 0-1.8366-.2346-2.6033-.7038-.7597-.4692-1.3591-1.1109-1.7982-1.9251-.4391-.821-.6587-1.7525-.6587-2.7944 0-1.0418.2196-1.9699.6587-2.784.4391-.8211 1.0385-1.4662 1.7982-1.9354.7667-.4692 1.6345-.7038 2.6033-.7038.8015 0 1.5438.1656 2.2269.4968.683.3243 1.2371.7624 1.6623 1.3144l.0418-1.5628h1.9028zm-5.4156-1.4697c.6761 0 1.2755-.1587 1.7982-.4761.5228-.3174.9305-.752 1.2232-1.304.2997-.5589.4496-1.2006.4496-1.9251 0-.7244-.1499-1.3627-.4496-1.9147-.2927-.5588-.7004-.997-1.2232-1.3144-.5227-.3174-1.1221-.4761-1.7982-.4761s-1.2755.1587-1.7983.4761c-.5227.3174-.9339.7556-1.2336 1.3144-.2928.552-.4391 1.1903-.4391 1.9147 0 .7245.1463 1.3662.4391 1.9251.2997.552.7109.9866 1.2336 1.304.5228.3174 1.1222.4761 1.7983.4761z"></path>
                    <path d="m73.0884 19.6406.92 1.4696c-.5436.4416-1.1605.7866-1.8505 1.035-.683.2484-1.4114.3726-2.1851.3726-1.0873 0-2.0421-.2312-2.8646-.6935-.8224-.4622-1.4637-1.1005-1.9237-1.9147-.46-.8141-.69-1.7525-.69-2.8151 0-1.0625.23-2.0009.69-2.8151s1.1013-1.4524 1.9237-1.9147c.8225-.4623 1.7773-.6934 2.8646-.6934.7389 0 1.4289.1104 2.0701.3312s1.2198.5175 1.7355.8901l-.92 1.4696c-.3973-.2898-.8468-.5175-1.3487-.6831-.4948-.1656-.9897-.2484-1.4846-.2484-1.0385 0-1.8784.3381-2.5196 1.0143s-.9619 1.5594-.9619 2.6495c0 1.0902.3207 1.9734.9619 2.6496.6412.6761 1.4811 1.0142 2.5196 1.0142.5367 0 1.0699-.0966 1.5996-.2898.5367-.2001 1.0246-.4761 1.4637-.8279z"></path>
                    <path d="m84.0876 19.682.8782 1.4696c-.5855.4347-1.2685.7728-2.0491 1.0143-.7737.2346-1.5753.3519-2.4047.3519-1.1152 0-2.0909-.2243-2.9273-.6728-.8364-.4484-1.4881-1.0798-1.9551-1.894-.46-.8141-.69-1.7663-.69-2.8565 0-1.0694.223-2.0113.6691-2.8254.4461-.8142 1.0629-1.449 1.8505-1.9044.7946-.4623 1.7076-.6934 2.7392-.6934 1.5125 0 2.7043.4554 3.5756 1.3662.8782.9038 1.3173 2.1527 1.3173 3.7465v1.1592h-8.0921c.1533.8901.5471 1.5904 1.1814 2.101.6412.5037 1.4672.7555 2.4778.7555.6064 0 1.1953-.0966 1.7669-.2898.5715-.1932 1.1256-.4692 1.6623-.8279zm-3.8892-6.3754c-.9131 0-1.6519.269-2.2165.8072-.5575.5382-.8956 1.2834-1.0141 2.2356h6.137v-.1035c0-.8832-.2648-1.5939-.7945-2.1321-.5228-.5382-1.2267-.8072-2.1119-.8072z"></path>
                    <path d="m89.1185 22.2694h-1.9028v-15.42105l1.9655-.20699v6.81004c.4322-.545.9863-.9763 1.6624-1.2937.6761-.3243 1.4114-.4864 2.206-.4864.9688 0 1.833.2346 2.5928.7038.7667.4692 1.3696 1.1143 1.8087 1.9354.4391.8141.6586 1.7422.6586 2.784 0 1.0419-.2195 1.9734-.6586 2.7944-.4391.8142-1.042 1.4559-1.8087 1.9251-.7598.4692-1.624.7038-2.5928.7038-.8016 0-1.5439-.1622-2.2269-.4865-.6831-.3312-1.2372-.7727-1.6624-1.3247zm3.5129-1.4697c.676 0 1.2755-.1587 1.7982-.4761s.9305-.752 1.2232-1.304c.2997-.5589.4496-1.2006.4496-1.9251 0-.7244-.1499-1.3627-.4496-1.9147-.2927-.5588-.7005-.997-1.2232-1.3144s-1.1222-.4761-1.7982-.4761c-.6761 0-1.2755.1587-1.7983.4761-.5227.3174-.9339.7556-1.2337 1.3144-.2927.552-.4391 1.1903-.4391 1.9147 0 .7245.1464 1.3662.4391 1.9251.2998.552.711.9866 1.2337 1.304.5228.3174 1.1222.4761 1.7983.4761z"></path>
                    <path d="m104.922 22.5178c-1.087 0-2.042-.2312-2.864-.6935-.823-.4622-1.464-1.1005-1.924-1.9147-.46-.8141-.69-1.7525-.69-2.8151 0-1.0625.23-2.0009.69-2.8151s1.101-1.4524 1.924-1.9147c.822-.4623 1.777-.6934 2.864-.6934 1.088 0 2.043.2311 2.865.6934s1.464 1.1005 1.924 1.9147.69 1.7526.69 2.8151c0 1.0626-.23 2.001-.69 2.8151-.46.8142-1.102 1.4525-1.924 1.9147-.822.4623-1.777.6935-2.865.6935zm0-1.7181c.676 0 1.276-.1587 1.799-.4761.522-.3174.93-.752 1.223-1.304.3-.5589.449-1.2006.449-1.9251 0-.7244-.149-1.3627-.449-1.9147-.293-.5588-.701-.997-1.223-1.3144-.523-.3174-1.123-.4761-1.799-.4761s-1.275.1587-1.798.4761-.934.7556-1.234 1.3144c-.292.552-.439 1.1903-.439 1.9147 0 .7245.147 1.3662.439 1.9251.3.552.711.9866 1.234 1.304s1.122.4761 1.798.4761z"></path>
                    <path d="m117.226 22.5178c-1.088 0-2.043-.2312-2.865-.6935-.822-.4622-1.464-1.1005-1.924-1.9147-.46-.8141-.69-1.7525-.69-2.8151 0-1.0625.23-2.0009.69-2.8151s1.102-1.4524 1.924-1.9147 1.777-.6934 2.865-.6934c1.087 0 2.042.2311 2.864.6934.823.4623 1.464 1.1005 1.924 1.9147s.69 1.7526.69 2.8151c0 1.0626-.23 2.001-.69 2.8151-.46.8142-1.101 1.4525-1.924 1.9147-.822.4623-1.777.6935-2.864.6935zm0-1.7181c.676 0 1.275-.1587 1.798-.4761s.93-.752 1.223-1.304c.3-.5589.45-1.2006.45-1.9251 0-.7244-.15-1.3627-.45-1.9147-.293-.5588-.7-.997-1.223-1.3144s-1.122-.4761-1.798-.4761-1.276.1587-1.799.4761c-.522.3174-.934.7556-1.233 1.3144-.293.552-.439 1.1903-.439 1.9147 0 .7245.146 1.3662.439 1.9251.299.552.711.9866 1.233 1.304.523.3174 1.123.4761 1.799.4761z"></path>
                    <path d="m126.602 22.2694h-1.966v-15.42105l1.966-.20699v9.85294l4.673-4.5746h2.415l-4.997 4.885 5.729 5.4647h-2.687l-5.133-4.9161z"></path>
                    <path d="m151.138 22.2694h-1.903l-.041-1.5628c-.426.552-.98.9935-1.663 1.3247-.683.3243-1.425.4865-2.227.4865-.968 0-1.836-.2346-2.603-.7038-.76-.4692-1.359-1.1109-1.798-1.9251-.439-.821-.659-1.7525-.659-2.7944 0-1.0418.22-1.9699.659-2.784.439-.8211 1.038-1.4662 1.798-1.9354.767-.4692 1.635-.7038 2.603-.7038.802 0 1.544.1656 2.227.4968.683.3243 1.237.7624 1.663 1.3144l.041-1.5628h1.903zm-5.415-1.4697c.676 0 1.275-.1587 1.798-.4761s.93-.752 1.223-1.304c.3-.5589.45-1.2006.45-1.9251 0-.7244-.15-1.3627-.45-1.9147-.293-.5588-.7-.997-1.223-1.3144s-1.122-.4761-1.798-.4761c-.677 0-1.276.1587-1.799.4761-.522.3174-.934.7556-1.233 1.3144-.293.552-.439 1.1903-.439 1.9147 0 .7245.146 1.3662.439 1.9251.299.552.711.9866 1.233 1.304.523.3174 1.122.4761 1.799.4761z"></path>
                    <path d="m163.952 22.2694h-1.903l-.042-1.5628c-.425.552-.979.9935-1.662 1.3247-.683.3243-1.425.4865-2.227.4865-.969 0-1.836-.2346-2.603-.7038-.76-.4692-1.359-1.1109-1.798-1.9251-.439-.821-.659-1.7525-.659-2.7944 0-1.0418.22-1.9699.659-2.784.439-.8211 1.038-1.4662 1.798-1.9354.767-.4692 1.634-.7038 2.603-.7038.795 0 1.53.1621 2.206.4864.676.3174 1.23.7487 1.662 1.2937v-6.60305l1.966-.20699zm-5.416-1.4697c.676 0 1.276-.1587 1.799-.4761.522-.3174.93-.752 1.223-1.304.3-.5589.449-1.2006.449-1.9251 0-.7244-.149-1.3627-.449-1.9147-.293-.5588-.701-.997-1.223-1.3144-.523-.3174-1.123-.4761-1.799-.4761s-1.275.1587-1.798.4761-.934.7556-1.234 1.3144c-.292.552-.439 1.1903-.439 1.9147 0 .7245.147 1.3662.439 1.9251.3.552.711.9866 1.234 1.304s1.122.4761 1.798.4761z"></path>
                    <path d="m165.767 21.2344.826-1.4696c.586.3449 1.195.6037 1.83.7762.641.1725 1.286.2587 1.934.2587.76 0 1.314-.1138 1.662-.3415.356-.2277.533-.5486.533-.9625 0-.4485-.212-.7659-.637-.9522s-1.122-.3967-2.091-.6313c-.669-.1587-1.297-.3519-1.882-.5796-.586-.2277-1.06-.5417-1.422-.9418-.362-.4002-.544-.9419-.544-1.6249 0-.6555.175-1.2144.523-1.6767.356-.4623.833-.8142 1.432-1.0557.6-.2415 1.269-.3622 2.008-.3622.773 0 1.547.1207 2.321.3622.773.2415 1.425.5382 1.955.8901l-.826 1.4593c-.509-.3036-1.056-.5451-1.642-.7245-.585-.1863-1.171-.2794-1.756-.2794-.592 0-1.077.1035-1.453.3105-.377.207-.565.5313-.565.9729 0 .4553.223.7796.669.9728.453.1863 1.143.3899 2.07.6107.704.1656 1.346.3657 1.924.6002.586.2346 1.053.552 1.401.9522.349.4002.523.9453.523 1.6353 0 .9797-.373 1.7387-1.119 2.2769-.739.5382-1.756.8073-3.053.8073-.941 0-1.815-.1277-2.624-.383-.801-.2553-1.467-.5554-1.997-.9004z"></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="30"
                  viewBox="0 0 139 30"
                  width="139"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Amplitude"
                >
                  <path
                    clipRule="evenodd"
                    d="m14.9706.926025c-7.95904 0-14.41103 6.441385-14.41103 14.387375 0 7.946 6.45199 14.3874 14.41103 14.3874 7.9591 0 14.4111-6.4414 14.4111-14.3874 0-7.94599-6.452-14.387375-14.4111-14.387375zm10.3627 14.648575-.0017.0014-.0018.0015c-.0156.0127-.0312.0242-.048.0358l-.0058.004-.0042.0029-.0062.0041c-.011.0069-.0226.0138-.0336.0202-.0104.0064-.0208.0121-.0312.0179l-.0009.0006-.0009.0006c-.1059.0554-.2268.0872-.3548.0872h-6.8264c.0544.2259.114.4825.1788.7616.3739 1.6126 1.3682 5.8971 2.4239 5.8971l.0208.0005.0116-.0017h.0202c.8245 0 1.2453-1.1895 2.1672-3.7961l.0009-.0024.011-.0318c.1481-.4189.3154-.8915.4965-1.3913l.0463-.1277h.0006c.0469-.1248.1673-.2138.3091-.2138.1823 0 .3304.1479.3304.3299 0 .0329-.0052.0647-.0138.0948l-.0382.1282c-.0961.3103-.1986.7333-.3166 1.2227l-.0001.0005c-.5499 2.2748-1.3804 5.7111-3.5112 5.7111h-.0157c-1.3768-.011-2.201-2.2084-2.5529-3.1467-.658-1.7548-1.1558-3.6246-1.6361-5.4355h-6.28418l-1.30452 4.1683-.01909-.015c-.11923.1872-.32874.3074-.55966.3074-.36404 0-.6621-.2958-.66384-.6593l.00116-.0225.07871-.4715c.17999-1.0713.39587-2.183.64242-3.3068h-2.65302l-.00984-.0098c-.48153-.0693-.85136-.4935-.85136-.9881 0-.4847.34379-.8979.81721-.9817.04341-.0057.13138-.0132.31021-.0132.0382 0 .08103 0 .12907.0011.84093.0145 1.73338.0277 2.71206.0405 1.38496-5.61863 2.98927-8.47069 4.76897-8.47878 1.9093 0 3.3261 4.34049 4.4599 8.58678l.0046.0168c2.3295.0468 4.8124.1144 7.2264.2871l.1013.0093c.0388.0006.077.0046.114.0104l.0139.0011c.004.0006.0081.0018.0121.0029l.0028.0007c.0012.0003.0023.0005.0036.0005.3513.0705.6118.3779.6118.7477 0 .2369-.11.4501-.2819.5905zm-12.0705-8.17105c-.0799-.10516-.1708-.16063-.272-.16063-.0834 0-.1592.03698-.2084.06876-.7674.60207-1.8173 3.15082-2.6779 6.51012l.7616.0087c1.5048.0168 3.0582.0347 4.5942.0584-.4045-1.5387-.7877-2.8573-1.1384-3.9222-.5128-1.55603-.8589-2.25287-1.0591-2.56315zm22.9714 14.32815 1.1425-2.8185v.0006h6.6383l1.1425 2.8185h3.2978l-6.2935-14.7179h-2.9314l-6.3154 14.7173zm2.2849-5.6371 2.1553-5.358 2.1982 5.358zm28.6449-.0209v5.659h-2.9957v-5.4008c0-1.6352-.7975-2.5175-2.1981-2.5175-.6251 0-1.3149.2797-1.94 1.1406.0434.3658.0862.7315.0862 1.1187v5.659h-2.9956v-5.4008c0-1.6352-.7976-2.5175-2.2201-2.5175-.5817 0-1.2287.3444-1.8318 1.162v6.7563h-2.9957v-10.3069h2.9957v.624c.6465-.6026 1.3363-.947 2.5431-.947 1.3149 0 2.4782.5165 3.2977 1.463 1.0991-1.0112 2.1339-1.463 3.7504-1.463 2.521 0 4.5039 1.9582 4.5039 4.9709zm8.0427 5.8733c2.8452 0 5.1296-2.3667 5.1296-5.3574 0-3.0335-2.285-5.3788-5.1296-5.3794-1.1633 0-2.1333.301-2.9308.8176v-.6027h-2.9956v15.2773h2.9956v-5.573c.797.5166 1.767.8176 2.9308.8176zm-.4959-8.2193c1.5522 0 2.6727 1.3342 2.6727 2.8619 0 1.5063-1.1211 2.8191-2.6727 2.8185-.8838 0-1.7676-.301-2.4355-1.1833v-3.2924c.6679-.9037 1.5517-1.2047 2.4355-1.2047zm10.2995 8.0047h-2.9957v-15.27659h2.9957zm4.5041-15.70774c-1.0128 0-1.8103.75346-1.8103 1.76462 0 .98978.7975 1.72129 1.8103 1.72129.9914 0 1.7889-.73151 1.7889-1.72129 0-1.01174-.7975-1.76462-1.7889-1.76462zm1.5088 15.70764v-10.3069h-2.9956v10.3069zm10.8828-.1509c-1.25.3872-1.811.4733-2.7806.4733-2.5003 0-4.1381-1.7647-4.1381-4.4324v-3.6795h-2.1768v-2.5175h2.1768v-3.67945h2.9742v3.67945h3.7285v2.5175h-3.7285v3.6581c0 1.162.7113 1.6999 1.8103 1.6999.5602 0 1.1642-.1288 1.7452-.2796zm9.031.149h2.995v-10.3063h-2.995v6.6274c-.69.839-1.509 1.2908-2.263 1.2908-1.401 0-2.22-.8823-2.22-2.5175v-5.4007h-2.996v5.6804c0 2.9907 1.81 4.9489 4.526 4.9489 1.164 0 2.112-.3877 2.953-1.0545zm15.713.002h-2.995v-.6026c-.798.5165-1.768.8176-2.932.8176-2.845 0-5.151-2.3454-5.151-5.3794 0-2.9907 2.307-5.358 5.151-5.358 1.164 0 2.134.301 2.932.8176v-5.57181h2.995zm-2.996-3.5067v-3.2923c-.668-.8823-1.552-1.1834-2.435-1.1834-1.573 0-2.673 1.3128-2.673 2.8186 0 1.5277 1.099 2.8618 2.673 2.8618.883 0 1.767-.301 2.435-1.2047zm7.542-.8826h7.608c.043-.3016.065-.5379.065-.9684 0-3.1849-2.199-5.2719-5.151-5.2719-3.255 0-5.475 2.3025-5.475 5.4868 0 3.0774 2.242 5.4655 5.561 5.4655 2.435 0 4.375-1.3555 4.936-3.3351h-3.126c-.323.5166-.905.7749-1.745.7749-1.638 0-2.436-.9471-2.673-2.1518zm4.698-1.7646h-4.677c.281-1.162 1.078-2.001 2.522-2.001 1.207 0 1.983.7102 2.155 2.001z"
                    fill="#000"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  width="95"
                  height="26"
                  viewBox="0 0 95 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Looker"
                >
                  <g clipPath="url(#clip0_1001_4826)">
                    <path
                      d="M7.7745 1.95306e-06C7.3745 0.000176435 6.98207 0.109081 6.63919 0.315066C6.29631 0.521052 6.01587 0.81637 5.82787 1.16943C5.63987 1.5225 5.55138 1.92003 5.57187 2.3195C5.59235 2.71897 5.72104 3.10536 5.94417 3.43734L6.88658 2.49626C6.85544 2.40238 6.83973 2.30407 6.84006 2.20516C6.84006 2.02114 6.89463 1.84124 6.99687 1.68823C7.09911 1.53522 7.24443 1.41596 7.41444 1.34554C7.58446 1.27512 7.77154 1.25669 7.95203 1.29259C8.13252 1.32849 8.29831 1.41711 8.42844 1.54724C8.55856 1.67736 8.64718 1.84315 8.68308 2.02364C8.71898 2.20413 8.70055 2.39121 8.63013 2.56123C8.55971 2.73125 8.44045 2.87656 8.28744 2.9788C8.13443 3.08104 7.95453 3.13561 7.77051 3.13561C7.67204 3.13583 7.57419 3.12012 7.48074 3.08909L6.53966 4.03017C6.82527 4.22388 7.15237 4.34785 7.49462 4.39211C7.83688 4.43637 8.18475 4.39968 8.51024 4.285C8.83574 4.17031 9.12977 3.98083 9.36869 3.7318C9.60761 3.48277 9.78474 3.18114 9.88584 2.85117C9.98694 2.52121 10.0092 2.17212 9.95079 1.83199C9.89239 1.49186 9.75497 1.17019 9.54959 0.892842C9.34421 0.6155 9.07661 0.390232 8.76831 0.23516C8.46 0.0800886 8.1196 -0.000457316 7.7745 1.95306e-06V1.95306e-06Z"
                      fill="black"
                    ></path>
                    <path
                      d="M6.89738 6.42675C6.89882 5.68185 6.65759 4.95674 6.21018 4.36116L4.9873 5.5827C5.17326 5.92283 5.24126 6.315 5.18065 6.69787C5.12005 7.08075 4.93426 7.43274 4.65234 7.69881L5.31695 9.3231C5.80156 9.01099 6.20016 8.58233 6.47626 8.07633C6.75237 7.57034 6.89716 7.00318 6.89738 6.42675V6.42675Z"
                      fill="black"
                    ></path>
                    <path
                      d="M3.47984 8.17997H3.44794C3.17451 8.18 2.90486 8.11612 2.6605 7.99343C2.41615 7.87074 2.20385 7.69264 2.04054 7.47333C1.87723 7.25403 1.76744 6.99959 1.71993 6.73033C1.67241 6.46106 1.68848 6.18441 1.76686 5.92246C1.84524 5.6605 1.98376 5.42049 2.17137 5.22158C2.35897 5.02266 2.59047 4.87035 2.84739 4.77678C3.10431 4.68322 3.37955 4.65099 3.65113 4.68268C3.92272 4.71437 4.18314 4.8091 4.41162 4.9593L5.62253 3.74839C5.19397 3.40095 4.6883 3.16142 4.14798 3.04992C3.60766 2.93843 3.04848 2.95821 2.51739 3.10762C1.98631 3.25703 1.49883 3.53169 1.0959 3.90855C0.692969 4.28541 0.386353 4.75345 0.201804 5.27337C0.0172546 5.79329 -0.039839 6.3499 0.0353182 6.89646C0.110475 7.44302 0.315689 7.96356 0.633723 8.41437C0.951757 8.86518 1.37333 9.23309 1.86302 9.4872C2.35272 9.74131 2.89624 9.8742 3.44794 9.87472C3.68183 9.87483 3.91514 9.85168 4.14445 9.8056L3.47984 8.17997Z"
                      fill="black"
                    ></path>
                    <path
                      d="M7.82109 9.58496C7.05574 9.58419 6.29441 9.6957 5.56143 9.91594L6.53043 12.2833C6.95222 12.1787 7.3852 12.1261 7.81976 12.1264C9.04086 12.1268 10.2241 12.5505 11.1678 13.3254C12.1115 14.1003 12.7574 15.1784 12.9953 16.3761C13.2333 17.5738 13.0486 18.817 12.4728 19.8938C11.897 20.9706 10.9656 21.8144 9.83736 22.2815C8.70913 22.7487 7.45385 22.8101 6.28537 22.4555C5.1169 22.1009 4.10752 21.3521 3.4292 20.3368C2.75089 19.3214 2.44561 18.1022 2.56537 16.887C2.68514 15.6718 3.22253 14.5357 4.08601 13.6723C4.45754 13.3019 4.8817 12.9884 5.34477 12.7418L4.38641 10.3812C2.66082 11.2263 1.30648 12.6767 0.581479 14.4561C-0.143523 16.2355 -0.188505 18.2194 0.455107 20.0298C1.09872 21.8403 2.38593 23.3506 4.07144 24.273C5.75696 25.1955 7.72294 25.4655 9.59475 25.0317C11.4666 24.5979 13.1133 23.4906 14.2213 21.9208C15.3292 20.351 15.8208 18.4284 15.6025 16.5194C15.3841 14.6105 14.471 12.8486 13.0372 11.5695C11.6034 10.2904 9.74915 9.58354 7.82773 9.58363L7.82109 9.58496Z"
                      fill="black"
                    ></path>
                    <path
                      d="M23.2238 3.23532H25.4236V19.8411H33.5225V21.932H23.2238V3.23532Z"
                      fill="black"
                    ></path>
                    <path
                      d="M36.7114 21.0321C35.7183 20.4425 34.9063 19.5914 34.364 18.5717C33.7976 17.5145 33.5081 16.3311 33.5226 15.1317C33.509 13.9342 33.7984 12.7527 34.364 11.6971C34.9063 10.6774 35.7183 9.82628 36.7114 9.2367C37.7427 8.64392 38.9114 8.33197 40.1009 8.33197C41.2904 8.33197 42.4591 8.64392 43.4904 9.2367C44.4833 9.82684 45.2957 10.6778 45.8391 11.6971C46.4049 12.7545 46.6944 13.9378 46.6805 15.1371C46.6944 16.3363 46.4049 17.5196 45.8391 18.5771C45.296 19.5962 44.4842 20.4471 43.4917 21.0374C42.4604 21.6302 41.2917 21.9422 40.1022 21.9422C38.9127 21.9422 37.744 21.6302 36.7127 21.0374L36.7114 21.0321ZM42.2941 19.4131C42.9847 19.0091 43.5508 18.4228 43.9303 17.7184C44.3551 16.9237 44.5671 16.0326 44.5458 15.1317C44.5669 14.2309 44.3549 13.3399 43.9303 12.5451C43.5519 11.8412 42.9872 11.2549 42.2981 10.8504C41.6319 10.4601 40.873 10.2562 40.1009 10.2602C39.3118 10.2571 38.5367 10.4679 37.858 10.8703C37.1792 11.2726 36.6222 11.8514 36.2462 12.5451C35.8226 13.3402 35.6111 14.2311 35.6321 15.1317C35.611 16.0324 35.8225 16.9233 36.2462 17.7184C36.5266 18.2327 36.9071 18.6856 37.3654 19.0505C37.8237 19.4153 38.3505 19.6847 38.9145 19.8426C39.4786 20.0006 40.0686 20.044 40.6498 19.9702C41.2309 19.8964 41.7913 19.707 42.2981 19.4131H42.2941Z"
                      fill="black"
                    ></path>
                    <path
                      d="M51.011 21.0321C50.0185 20.4418 49.2067 19.5909 48.6636 18.5717C48.0978 17.5143 47.8084 16.331 47.8223 15.1317C47.8093 13.9343 48.0987 12.7529 48.6636 11.6971C49.2067 10.6779 50.0185 9.82703 51.011 9.2367C52.0423 8.64392 53.211 8.33197 54.4005 8.33197C55.59 8.33197 56.7587 8.64392 57.79 9.2367C58.7833 9.82646 59.5957 10.6775 60.1387 11.6971C60.7046 12.7545 60.994 13.9378 60.9801 15.1371C60.994 16.3363 60.7046 17.5196 60.1387 18.5771C59.596 19.5965 58.7841 20.4475 57.7913 21.0374C56.7601 21.6302 55.5913 21.9422 54.4018 21.9422C53.2123 21.9422 52.0436 21.6302 51.0124 21.0374L51.011 21.0321ZM56.5937 19.4131C57.2826 19.0082 57.8472 18.422 58.226 17.7184C58.6501 16.9234 58.8621 16.0325 58.8414 15.1317C58.8619 14.231 58.6499 13.3401 58.226 12.5451C57.8472 11.8415 57.2826 11.2553 56.5937 10.8504C55.9275 10.4601 55.1686 10.2562 54.3965 10.2602C53.6204 10.2574 52.8575 10.4611 52.186 10.8504C51.4916 11.2521 50.9224 11.8388 50.5418 12.5451C50.1172 13.3399 49.9052 14.2309 49.9264 15.1317C49.9051 16.0326 50.1171 16.9237 50.5418 17.7184C50.9224 18.4247 51.4916 19.0114 52.186 19.4131C52.8575 19.8024 53.6204 20.0061 54.3965 20.0033C55.1704 20.0082 55.9313 19.8044 56.599 19.4131H56.5937Z"
                      fill="black"
                    ></path>
                    <path
                      d="M62.5605 3.23532H64.7591V15.0547L71.3785 8.33018H74.1699V8.43386L68.5872 14.071L73.9173 21.8336V21.932H71.2802L67.036 15.5917L64.7591 17.8739V21.932H62.5605V3.23532Z"
                      fill="black"
                    ></path>
                    <path
                      d="M76.7553 21.0573C75.788 20.4755 75.0011 19.6367 74.4823 18.6342C73.9274 17.5589 73.6475 16.3629 73.6675 15.153C73.6584 13.976 73.9213 12.8128 74.4358 11.7542C74.9211 10.7369 75.6765 9.87245 76.6197 9.25528C77.5877 8.62958 78.7198 8.30572 79.8723 8.32484C81.127 8.32484 82.2152 8.6053 83.1368 9.16623C84.0536 9.72111 84.7917 10.5275 85.2635 11.4897C85.7722 12.5487 86.0244 13.7126 85.9999 14.8871C85.999 15.1056 85.9822 15.3238 85.9494 15.5398H75.8009C75.8514 16.5145 76.0858 17.3351 76.504 18.0015C76.8893 18.6389 77.4407 19.1594 78.0991 19.5075C78.722 19.8371 79.4161 20.0096 80.1208 20.0099C81.7939 20.0099 83.0575 19.2399 83.9117 17.6998L85.7195 18.5784C85.2039 19.5775 84.433 20.4222 83.4851 21.0268C82.5307 21.6302 81.384 21.932 80.0451 21.932C78.8886 21.9511 77.7495 21.6483 76.7553 21.0573V21.0573ZM83.7403 13.7759C83.6997 13.2152 83.5459 12.6686 83.2883 12.1689C83 11.6116 82.5659 11.143 82.0322 10.8131C81.4633 10.4445 80.7438 10.2602 79.8736 10.2602C78.9269 10.2386 78.0087 10.585 77.3122 11.2265C76.6095 11.8716 76.1491 12.7214 75.9312 13.7759H83.7403Z"
                      fill="black"
                    ></path>
                    <path
                      d="M87.4196 8.33282H89.5144V10.8583H89.6181C89.8768 10.1335 90.3771 9.52955 91.1188 9.04661C91.8058 8.58272 92.6146 8.33209 93.4435 8.32617C93.9753 8.31266 94.504 8.40998 94.9961 8.61195V10.966C94.4167 10.6842 93.7793 10.5421 93.1352 10.5513C92.5065 10.5483 91.8922 10.7385 91.3753 11.0962C90.8323 11.4685 90.3917 11.9713 90.0939 12.5584C89.7753 13.1711 89.611 13.8523 89.6154 14.5429V21.932H87.4196V8.33282Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1001_4826">
                      <rect width="95" height="25.2284" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 66 24"
                  width="66"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="X-Ray"
                >
                  <g fill="#000">
                    <path d="m36.3169 14.0262.1311 2.6215c.0171.8391.1923 1.5116.5243 2.0188h-4.5619c-.2793-.5243-.4288-1.2053-.4459-2.0445l-.0784-2.0971c-.0356-1.0315-.2664-1.7439-.6953-2.1371-.4288-.3932-1.1141-.5898-2.0587-.5898h-3.6173v6.8685h-4.4308v-18.6665h8.8346c2.1841 0 3.8581.4844 5.0206 1.45462 1.1626.97023 1.7439 2.28523 1.7439 3.94501 0 2.14988-1.0059 3.6273-3.0147 4.43084.9617.31483 1.6299.79503 2.006 1.44183s.5898 1.5643.6425 2.7525zm-10.8021-10.48723v4.92948h3.9066c.8562 0 1.5201-.21371 1.9931-.64254.4716-.42742.7081-1.04431.7081-1.84785 0-1.62559-.9261-2.43767-2.7796-2.43767h-3.8282z"></path>
                    <path d="m51.6274 18.6663h-4.116c-.2094-.4018-.3234-.909-.3405-1.5202-.909 1.2239-2.3508 1.8351-4.3254 1.8351-1.486 0-2.6785-.3676-3.5789-1.1013-.9004-.7338-1.3506-1.7481-1.3506-3.0418 0-2.5174 1.7652-3.9236 5.2956-4.2214l2.1243-.1838c1.1711-.1225 1.7566-.56842 1.7566-1.33634 0-.90896-.6909-1.36344-2.0715-1.36344-.8391 0-1.429.1268-1.7695.3804s-.547.7209-.6154 1.40191h-4.0633c.2451-3.12865 2.4035-4.69298 6.4753-4.69298s6.0293 1.38909 6.0293 4.16869v7.18336c0 1.1369.1838 1.9661.55 2.4904zm-7.551-2.4377c.9261 0 1.6598-.2393 2.2026-.7209.5414-.4801.8121-1.201.8121-2.1627v-.9958c-.245.2621-.6995.4374-1.3634.5243l-1.6783.1837c-1.3108.1397-1.9661.6811-1.9661 1.6256 0 .4716.1752.8477.5243 1.127.349.2792.8391.4188 1.4688.4188z"></path>
                    <path d="m61.0145 7.07766.6027-1.94045h4.2214l-4.9024 14.05189c-.6127 1.7481-1.3891 2.9534-2.3337 3.6173-.9788.681-2.4476 1.0229-4.4052 1.0229-.3319 0-.8648-.0171-1.5999-.0527v-3.1457h1.3107c1.3634 0 2.0445-.6297 2.0445-1.8878 0-.5584-.2095-1.4332-.6298-2.6214l-3.8794-10.98449h4.4037l.6027 1.91338c.8733 2.93631 1.6427 5.77721 2.3066 8.52111.681-2.8479 1.4332-5.68025 2.2553-8.49404z"></path>
                    <path d="m19.8518 18.6665h-5.2414l-4.68448-5.9852-4.68443 5.9852h-5.24149l7.30589-9.33183-7.30589-9.33467h5.23864l4.68728 5.98661 2.62148 3.34806 2.3436 2.99613z"></path>
                    <path d="m19.8518 18.6665h-5.2414l-4.68448-5.9852-4.68443 5.9852h-5.24149l7.30589-9.33183-7.30589-9.33467h5.23864l4.68728 5.98661 2.62148 3.34806 2.3436 2.99613z"></path>
                    <path d="m19.8518 18.6665h-5.2414l-4.68448-5.9852-4.68443 5.9852h-5.24149l7.30589-9.33183-7.30589-9.33467h5.23864l4.68728 5.98661 2.62148 3.34806 2.3436 2.99613z"></path>
                    <path d="m15.1673 5.98661h-5.24152l4.68732-5.98661h5.2386z"></path>
                    <path d="m15.1673 5.98661h-5.24152l4.68732-5.98661h5.2386z"></path>
                    <path d="m15.1673 5.98661h-5.24152l4.68732-5.98661h5.2386z"></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="38"
                  viewBox="0 0 141 38"
                  width="141"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Marketing+"
                >
                  <g fill="#000">
                    <path d="m62.1597 24.993h-2.272v-9.0018l-3.3047 9.0018h-2.3064l-3.2703-8.9329v8.9329h-2.2719v-12.3925h3.2875l3.4079 9.3116 3.408-9.3116h3.3219z"></path>
                    <path d="m72.7888 16.1117v1.8417 2.1515 3.0465.0344 1.8072h-2.2719v-1.1532c-.3443.4017-.7459.7115-1.2049.9295-.4475.218-.9294.327-1.4458.327h-.0172c-.6885 0-1.3196-.2008-1.8933-.6024-.5737-.4131-1.027-.9639-1.3597-1.6523-.3328-.7-.4992-1.4631-.4992-2.2892 0-.8262.1664-1.5835.4992-2.272.3327-.7.786-1.2507 1.3597-1.6523.5737-.4131 1.2048-.6197 1.8933-.6197h.0172c.5164 0 .9983.109 1.4458.3271.459.218.8606.5278 1.2049.9294v-1.1532zm-4.3202 6.7126c.3672 0 .7057-.0975 1.0155-.2926.3213-.2065.5738-.4819.7574-.8261.1836-.3557.2754-.7401.2754-1.1532s-.0918-.7918-.2754-1.136c-.1836-.3557-.4361-.6311-.7574-.8262-.3098-.2065-.6483-.3098-1.0155-.3098h-.0172c-.5966 0-1.0958.218-1.4974.654-.3901.4361-.5852.9754-.5852 1.618 0 .6425.1951 1.1819.5852 1.6179.4016.436.9008.654 1.4974.654z"></path>
                    <path d="m79.7297 16.0084c.2295 0 .436.0115.6196.0344.1951.023.3156.0345.3615.0345v2.2547c-.3443-.0688-.7516-.1032-1.2221-.1032-.677 0-1.2048.195-1.5835.5852-.3786.3786-.568.9638-.568 1.7556v4.4234h-2.272v-8.8813h2.272v1.0843c.2984-.3786.6483-.6712 1.0499-.8778.4131-.2065.8606-.3098 1.3426-.3098z"></path>
                    <path d="m90.4554 24.993h-2.5818l-2.4785-3.6145-1.1532 1.3081v2.3064h-2.272v-12.3925h2.272v6.988l1.79-2.0654c.8147-.9409 1.2221-1.4114 1.2221-1.4114h2.7539l-3.1842 3.6317 3.1498 4.5267z"></path>
                    <path d="m92.7197 21.1892c.0803.5737.2983 1.0327.654 1.377.3558.3442.8492.5163 1.4803.5163.4245 0 .7803-.0975 1.0671-.2926.2869-.2065.4762-.4418.568-.7057h2.272c-.0344.3328-.1951.7344-.482 1.2049-.2753.4704-.6999.8892-1.2736 1.2564-.5738.3672-1.2909.5508-2.1515.5508-.8491 0-1.6122-.1951-2.2892-.5852s-1.2106-.9294-1.6007-1.6179c-.3787-.7-.568-1.4802-.568-2.3408 0-.8377.1951-1.6007.5852-2.2892.3901-.7.918-1.2507 1.5835-1.6524.677-.4016 1.4171-.6024 2.2203-.6024.7573 0 1.4516.2066 2.0827.6197.6311.4016 1.1302.9466 1.4974 1.6351s.5508 1.44.5508 2.2547c0 .2181-.0115.4418-.0344.6713zm2.0654-3.167c-.5278 0-.9581.1377-1.2909.4131-.3327.2754-.568.6541-.7057 1.136h3.8899c-.1262-.4705-.3499-.8434-.6712-1.1188-.3098-.2868-.7172-.4303-1.2221-.4303z"></path>
                    <path d="m103.262 18.0911v3.9759c0 .3328.109.5737.327.7229s.5.2238.844.2238c.298 0 .574-.0631.826-.1894v2.0138c-.585.1722-1.079.2582-1.48.2582-.838 0-1.515-.2754-2.031-.8262-.505-.5622-.758-1.2851-.758-2.1687v-4.0103h-1.2905v-1.9794h1.2905v-2.5302h2.272v2.5302h1.997v1.9794z"></path>
                    <path d="m108.234 15.1134c-.425 0-.786-.1492-1.085-.4475-.298-.2983-.447-.6598-.447-1.0844 0-.4245.149-.7802.447-1.0671.299-.2983.66-.4475 1.085-.4475.413 0 .769.1492 1.067.4475.298.2869.447.6426.447 1.0671 0 .4246-.149.7861-.447 1.0844s-.654.4475-1.067.4475zm1.119 9.8796h-2.272v-8.8813h2.272z"></path>
                    <path d="m116.738 16.0084c.884 0 1.601.3328 2.151.9983.563.6541.844 1.6179.844 2.8916v5.0947h-2.272v-4.9398c0-.4934-.166-.9122-.499-1.2564-.322-.3443-.717-.5164-1.188-.5164-.47 0-.872.1721-1.205.5164-.321.3442-.482.763-.482 1.2564v4.9398h-2.272v-8.8813h2.272v1.136c.345-.3787.746-.677 1.205-.895.471-.2295.953-.3443 1.446-.3443z"></path>
                    <path d="m130.196 24.6832c0 .8606-.201 1.6352-.603 2.3236-.39.6885-.929 1.2278-1.618 1.618-.688.4016-1.463.6024-2.323.6024-.849 0-1.607-.1836-2.272-.5508-.666-.3557-1.188-.8147-1.566-1.377-.379-.5622-.586-1.1302-.62-1.7039h2.358c.057.4016.293.7515.706 1.0499.413.2983.9.4475 1.463.4475.642 0 1.17-.2295 1.583-.6885s.62-1.0327.62-1.7212v-.8434c-.344.3902-.746.7-1.205.9295-.447.218-.924.327-1.429.327-.688 0-1.325-.2008-1.91-.6024-.574-.4131-1.033-.9639-1.377-1.6523-.333-.7-.499-1.4631-.499-2.2892 0-.8262.166-1.5835.499-2.272.344-.7.803-1.2507 1.377-1.6523.585-.4131 1.222-.6197 1.91-.6197.505 0 .982.1148 1.429.3443.459.218.861.5221 1.205.9122v-1.1532h2.272zm-4.32-1.8589c.585 0 1.073-.218 1.463-.654.39-.4475.585-.9868.585-1.6179s-.195-1.1647-.585-1.6007c-.39-.4475-.878-.6713-1.463-.6713-.586 0-1.085.2238-1.498.6713-.401.436-.602.9696-.602 1.6007s.201 1.1704.602 1.6179c.413.436.912.654 1.498.654z"></path>
                    <path d="m137.202 20.7761v3.3391h-1.996v-3.3391h-3.357v-1.9966h3.357v-3.3391h1.996v3.3391h3.339v1.9966z"></path>
                    <path
                      clipRule="evenodd"
                      d="m30.1065 12.9185c.2823.5184.6859.9609 1.1764 1.2898s1.0534.5345 1.6407.5992l.3277.0306c.9422-.026 1.8587.3089 2.5615.9361s1.1387 1.4991 1.2184 2.437c.0796.9379-.203 1.8707-.79 2.6072-.5871.7364-1.4339 1.2207-2.3671 1.3535-.1098.0162-.2205.0264-.3315.0306-1.7248.2048-2.8248.5205-3.5971 2.3616-.4024.9665-.2165 1.311-.4676 2.1933-.1409.6888-.4769 1.3226-.9682 1.8261s-1.1171.8555-1.8029 1.014c-.2858.0776-.5785.1276-.8739.1493-.5485.012-1.0879.1425-1.581.3827-.7854.3951-1.3989 1.0636-1.7247 1.8794-.1595.4191-.2501.8611-.2683 1.309-.0148.5838-.1553 1.1576-.4121 1.6823-.2972.5992-.7532 1.1056-1.3185 1.4641l-.0249.0153c-.5872.3683-1.267.5627-1.9604.5607-.9786 0-1.9171-.3881-2.6093-1.0789-.6921-.6909-1.0812-1.6279-1.0817-2.6052-.0004-.9597.3743-1.8818 1.0443-2.5698.67-.6881 1.5825-1.0879 2.5432-1.1143h.1035.1667c1.9777-.0517 3.4495-1.6593 3.4495-3.6803.0051-.7109.2153-1.4054.6055-2 .3902-.5947.9438-1.0645 1.5945-1.353.9065-.4421 1.5006-.2679 2.4453-.4918.7881-.1864 1.4935-.6251 2.0087-1.2491s.8119-1.3992.8449-2.2073c0-.0855 0-.1716 0-.2583-.0252-.6292-.2084-1.2419-.5328-1.7818 0 0-.2913-.4077-.3219-.444-.4709-.5665-1.099-.9813-1.8053-1.1923-.428-.1079-.8647-.1777-1.3051-.2086-.8855-.0642-1.7182-.4452-2.3452-1.0731-.6269-.6278-1.0061-1.4605-1.0679-2.345l-.0421-.3943c-.138-2.05157-2.0122-3.67066-3.7792-3.5788-.962-.02446-1.8764-.42338-2.548-1.11165-.6717-.68827-1.0474-1.6114-1.0471-2.57245-.0058-.48406.0839-.96451.2641-1.41393.1801-.44942.4471-.85901.7858-1.20537.3386-.346368.7423-.622729 1.1879-.813309s.9244-.29164733 1.4091-.29742783c.9789-.01167427 1.9223.36547883 2.6228 1.04848683.7005.68301 1.1006 1.61592 1.1122 2.59351.0173.20669.0326.40956.0633.61817.0405.23966.0975.47626.1705.70811.1955.60136.5553 1.13626 1.0387 1.54445 1.054.86122 1.627.85548 2.7654.95691.7194.06376 1.4042.33667 1.97.78497.5657.4483.9875 1.05234 1.2131 1.73744.3296 1.01819.0575 1.85259.642 2.92619zm-15.289-1.7454v.1378c.0508.9608.4705 1.8649 1.1719 2.5244.7015.6595 1.6305 1.0235 2.5938 1.0162.3531.0237.7022.0879 1.0406.1914.7413.2434 1.3864.7152 1.8426 1.3475s.7001 1.3927.6966 2.172c.0038.4802-.0873.9565-.2682 1.4015-.1808.445-.4479.85-.7858 1.1917-.8221.8402-1.5868 1.0411-2.6829 1.1636-.931.0066-1.8238.3705-2.4934 1.0165-.6697.6459-1.0649 1.5243-1.1037 2.4533v.1722.1914c.0008.0064.0008.0128 0 .0191-.0515.9412-.4623 1.8269-1.1478 2.4748s-1.5936 1.0088-2.5374 1.0084c-.979 0-1.91777-.3884-2.60997-1.0796-.69219-.6913-1.08106-1.6288-1.08106-2.6064.00079-.6065.15166-1.2034.43919-1.7377.28753-.5342.70282-.9892 1.20891-1.3244.16052-.112.33194-.2076.51168-.2852.45865-.2099.95585-.3226 1.46025-.3311l.3047-.0344c.8529-.047 1.6633-.3874 2.2932-.9635.63-.5761 1.0407-1.3523 1.1625-2.1966.1217-.8444-.0532-1.7048-.4948-2.4349-.4417-.7302-1.1229-1.2851-1.9279-1.5704-.3665-.1291-.7488-.2082-1.1364-.2354h-.1457c-.963.0034-1.8892-.3695-2.58066-1.0389s-1.09337-1.5824-1.11988-2.5437v-.1512.0708-.0134c.02198-.9633.4206-1.87977 1.11058-2.5533.68997-.67353 1.61656-1.05064 2.58136-1.05064s1.8914.37711 2.5814 1.05064c.6899.67353 1.0886 1.59 1.1105 2.5533zm-8.47432 10.0036c-.60461.6021-1.39955.9762-2.2494 1.0587s-1.70204-.1319-2.41139-.6065c-.709354-.4747-1.231983-1.1802-1.478854-1.9965-.2468704-.8163-.20271145-1.6928.124954-2.4802.327665-.7875.91857-1.4371 1.67204-1.8382.75347-.4012 1.6229-.529 2.46018-.3618.83727.1672 1.59059.6192 2.13163 1.2789.54103.6596.8363 1.4862.83552 2.339.00068.4841-.09445.9637-.27994 1.411s-.45767.8536-.80091 1.1956z"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="38"
                  viewBox="0 0 136 38"
                  width="136"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Analytics+"
                >
                  <g fill="#000">
                    <path d="m62.7777 24.893h-2.4515l-1.2171-3.1544h-4.7315l-1.2172 3.1544h-2.4514l4.8-12.343h2.4686zm-4.4915-5.2458-1.5429-3.9772-1.5428 3.9772z"></path>
                    <path d="m68.9429 15.9443c.88 0 1.5943.3314 2.1428.9943.56.6514.84 1.6114.84 2.88v5.0744h-2.2628v-4.9201c0-.4914-.1658-.9086-.4972-1.2514-.32-.3429-.7143-.5143-1.1829-.5143-.4685 0-.8685.1714-1.2.5143-.32.3428-.48.76-.48 1.2514v4.9201h-2.2628v-8.8458h2.2628v1.1314c.3429-.3771.7429-.6743 1.2-.8914.4686-.2286.9486-.3429 1.4401-.3429z"></path>
                    <path d="m82.2097 16.0472v1.8343 2.1428 3.0344.0342 1.8001h-2.2629v-1.1486c-.3429.4-.7429.7086-1.2.9257-.4457.2171-.9257.3257-1.44.3257h-.0172c-.6857 0-1.3143-.2-1.8857-.6-.5714-.4114-1.0229-.96-1.3543-1.6457-.3314-.6972-.4971-1.4572-.4971-2.28 0-.8229.1657-1.5772.4971-2.2629.3314-.6972.7829-1.2457 1.3543-1.6457.5714-.4115 1.2-.6172 1.8857-.6172h.0172c.5143 0 .9943.1086 1.44.3257.4571.2172.8571.5257 1.2.9257v-1.1485zm-4.3029 6.6857c.3657 0 .7028-.0971 1.0114-.2914.32-.2057.5714-.48.7543-.8229.1829-.3542.2743-.7371.2743-1.1485 0-.4115-.0914-.7886-.2743-1.1315-.1829-.3543-.4343-.6286-.7543-.8228-.3086-.2058-.6457-.3086-1.0114-.3086h-.0172c-.5943 0-1.0914.2171-1.4914.6514-.3886.4343-.5829.9715-.5829 1.6115s.1943 1.1771.5829 1.6114c.4.4343.8971.6514 1.4914.6514z"></path>
                    <path d="m86.6713 24.893h-2.2629v-12.343h2.2629z"></path>
                    <path d="m96.6628 24.6701c0 .8457-.1885 1.6057-.5657 2.28-.3771.6743-.8971 1.2-1.56 1.5772-.6629.3885-1.3943.5828-2.1943.5828-.8572 0-1.6057-.1828-2.2457-.5485-.64-.3658-1.1315-.8286-1.4743-1.3886-.3429-.56-.5315-1.12-.5658-1.68h2.3486c.0572.4114.2629.76.6172 1.0457.3657.2971.8171.4457 1.3543.4457.6171 0 1.1086-.2229 1.4743-.6686s.5486-.9943.5486-1.6457v-.9086c-.3429.3886-.7429.6915-1.2.9086-.4458.2171-.9086.3257-1.3886.3257-.9715 0-1.7258-.3371-2.2629-1.0114-.5257-.6743-.7886-1.5429-.7886-2.6058v-5.3314h2.2629v4.92c0 .4914.16.9086.48 1.2514.32.3429.72.5143 1.2.5143s.88-.1714 1.2-.5143c.3314-.3542.4972-.7714.4972-1.2514v-4.92h2.2628z"></path>
                    <path d="m101.681 18.0186v3.96c0 .3315.109.5715.326.7201.217.1485.497.2228.84.2228.297 0 .572-.0628.823-.1886v2.0058c-.583.1714-1.074.2571-1.474.2571-.835 0-1.509-.2743-2.023-.8228-.503-.5601-.7544-1.2801-.7544-2.1601v-3.9943h-1.2857v-1.9714h1.2857v-2.5201h2.2624v2.5201h1.989v1.9714z"></path>
                    <path d="m106.633 15.0529c-.423 0-.783-.1486-1.08-.4457-.297-.2972-.446-.6572-.446-1.0801 0-.4228.149-.7771.446-1.0628.297-.2972.657-.4457 1.08-.4457.411 0 .766.1485 1.063.4457.297.2857.446.64.446 1.0628 0 .4229-.149.7829-.446 1.0801-.297.2971-.652.4457-1.063.4457zm1.114 9.8401h-2.263v-8.8458h2.263z"></path>
                    <path d="m115.741 19.3215c-.103-.3543-.309-.64-.617-.8572-.332-.2514-.72-.3771-1.166-.3771-.64 0-1.154.2343-1.543.7028-.388.4686-.583 1.0286-.583 1.6801 0 .4228.086.8171.258 1.1828.182.3657.434.6572.754.8743.331.2172.703.3257 1.114.3257.469 0 .874-.1314 1.217-.3943.16-.1257.292-.2628.395-.4114.102-.16.165-.3086.188-.4457h2.246c-.023.4571-.212.9543-.566 1.4914-.354.5258-.834.9772-1.44 1.3543-.606.3658-1.286.5486-2.04.5486-.8 0-1.537-.2-2.211-.6-.663-.4114-1.195-.96-1.595-1.6457-.388-.6972-.582-1.4572-.582-2.28 0-.8229.194-1.5772.582-2.2629.4-.6972.932-1.2457 1.595-1.6457.674-.4115 1.411-.6172 2.211-.6172.834 0 1.549.1771 2.143.5314.606.3543 1.069.7943 1.389 1.3201.331.5257.514 1.0342.548 1.5257z"></path>
                    <path d="m121.216 21.9101c0 .3085.143.5771.428.8057.263.2286.589.3429.978.3429.342 0 .628-.0686.857-.2058.228-.1485.343-.3485.343-.6 0-.2171-.086-.3828-.258-.4971-.16-.1257-.422-.2286-.788-.3086l-1.097-.2743c-1.566-.3771-2.349-1.2457-2.349-2.6057 0-.5029.137-.9543.411-1.3543.286-.4.681-.7086 1.183-.9257.503-.2286 1.069-.3429 1.698-.3429.605 0 1.142.1429 1.611.4286.48.2743.851.6343 1.114 1.08s.395.9086.395 1.3886h-2.023c0-.3429-.115-.6115-.343-.8057-.217-.1829-.469-.2743-.754-.2743-.32 0-.578.0743-.772.2228-.194.1372-.291.32-.291.5486 0 .3543.234.5829.703.6857l1.182.2743c.858.2057 1.503.5372 1.938.9943.445.4457.668.9886.668 1.6286 0 .8914-.326 1.5943-.977 2.1086-.64.5143-1.457.7714-2.451.7714-.72 0-1.343-.1486-1.869-.4457-.514-.3086-.909-.6972-1.183-1.1657-.274-.48-.411-.9715-.411-1.4743z"></path>
                    <path d="m132.254 20.6929v3.3258h-1.988v-3.3258h-3.343v-1.9886h3.343v-3.3257h1.988v3.3257h3.326v1.9886z"></path>
                    <path d="m17.5265 31.5158 13.3782-13.7456c.0334-.03.0628-.0634.0941-.0962.3711-.3822.5802-.8981.5822-1.4364s-.2032-1.0558-.5714-1.441c-.3682-.3851-.8699-.6071-1.3969-.618-.527-.0108-1.037.1902-1.4202.5599l-13.589 13.9191z"></path>
                    <path d="m7.42676 24.5729 15.19344-15.4286c.0334-.02996.0627-.06409.0948-.09613.3777-.38091.5925-.89902.5973-1.44111.0048-.5421-.2007-1.06411-.5715-1.45197-.3709-.38786-.8771-.61005-1.4079-.618-.5308-.00796-1.0431.19896-1.4249.57555l-11.97645 12.14056z"></path>
                    <path d="m10.2055 28.996 1.4843-.1143 19.2706-19.72948c.0334-.02995.0628-.06409.0942-.09683.371-.38228.5801-.89818.5821-1.43646.0021-.53828-.2032-1.0558-.5714-1.44096s-.8699-.60711-1.3969-.61798-1.037.19021-1.4202.55987l-19.17985 19.61174z"></path>
                    <path d="m13.0594 4.27148c-.4428 0-.8756.13412-1.2437.38539s-.655.60839-.8243 1.02619-.2135.8775-.1269 1.32094c.0866.44343.3.85068.6133 1.17022.3133.31953.7123.53699 1.1466.62487.4344.08787.8845.04221 1.2934-.1312.4089-.17342.7583-.46681 1.0039-.84304s.3764-.8184.3758-1.27056c-.0007-.6057-.2368-1.18633-.6565-1.61436-.4196-.42803-.9885-.66845-1.5816-.66845z"></path>
                    <path d="m24.5298 2.14551c-.2873-.00028-.5682.08647-.8072.24927s-.4254.39433-.5355.6653c-.1101.27098-.1391.56922-.0832.857.0559.28779.1941.55218.3972.75973.203.20755.4618.34894.7435.40628.2818.05734.5739.02805.8393-.08416.2655-.11221.4924-.3023.652-.54622.1596-.24393.2449-.53072.2449-.82411 0-.3931-.1529-.77012-.4249-1.04821-.2721-.2781-.6411-.43451-1.0261-.43488z"></path>
                    <path d="m33.6597 2.57764c-.2874-.00014-.5684.08676-.8074.24972s-.4254.39465-.5354.66576c-.1101.27111-.139.56947-.083.85735.056.28787.1943.55232.3975.7599.2031.20758.462.34897.7439.40628s.574.02796.8396-.08432c.2655-.11229.4925-.30247.6522-.54649.1596-.24402.2449-.53092.2449-.82442 0-.3934-.153-.7707-.4254-1.04895-.2723-.27824-.6417-.43465-1.0269-.43483z"></path>
                    <path d="m27.3273 0c-.1659 0-.3281.0502524-.4661.144403-.138.09415-.2455.227969-.3091.384535-.0635.156567-.0801.328847-.0477.495062.0324.1662.1123.31888.2296.43871.1174.11983.2669.20144.4296.2345.1628.03306.3315.01609.4848-.04876s.2843-.17468.3765-.31558c.0922-.14091.1414-.30657.1414-.476034 0-.227247-.0884-.445187-.2457-.605875-.1574-.1606876-.3708-.250961-.5933-.250961z"></path>
                    <path d="m32.2062 12.5376c-.1659 0-.3282.0503-.4662.1444-.138.0942-.2455.2281-.309.3847s-.0801.3289-.0476.4951c.0324.1663.1124.3189.2298.4387s.267.2014.4298.2344.3315.0159.4848-.0491c.1533-.0649.2843-.1749.3764-.3158.0921-.141.1412-.3068.1411-.4763 0-.1125-.0217-.2238-.0639-.3278-.0422-.1039-.104-.1983-.1819-.2778s-.1704-.1425-.2722-.1855-.2109-.0651-.3211-.065z"></path>
                    <path
                      d="m25.2651 20.327 6.9276.2119.0219.0007.0218.0018c.7662.0627 1.4821.4018 2.0208.9518.5382.5497.8646 1.2741.9248 2.0423l.0017.0208.0006.0209.2101 7.0915.0321 1.0823-.165-.0338c-.0097.0314-.0199.0628-.0307.0939-.1293.3757-.3317.7222-.596 1.0184l-.6396-.5706.6396.5707c-.2644.2962-.5853.5363-.9444.705-.3592.1687-.7486.2622-1.145.2745-.3965.0123-.7909-.057-1.1597-.2033-.3688-.1462-.7038-.3662-.9855-.6459-.2494-.2476-.4525-.5374-.601-.8554-1.3093 1.2928-2.8223 2.3598-4.4804 3.1538-2.2018 1.0543-4.6047 1.6012-7.0381 1.6011zm0 0c-.3914-.026-.7837.0278-1.1539.1579-.3764.1323-.7216.3405-1.0152.6112-.2935.2707-.5293.5981-.6942.9621s-.2557.7575-.2676 1.1571.0555.7978.1983 1.1711c.1429.3732.3587.7143.6353 1.0023s.6084.517.976.6722c.0083.0035.0165.0069.0248.0103-.5816.5651-1.2419 1.042-1.9613 1.4142-1.156.598-2.4325.9093-3.7266.9096zm-6.9845 8.068c-4.546-.0001-8.2759-3.7832-8.2759-8.4692v-.0031c-.00609-1.6653.4752-3.2928 1.3798-4.6738.6008-.8008 1.1714-1.7083 1.1714-2.9538v-.0007c-.0009-1.1346-.4427-2.2259-1.2339-3.03324-.7918-.80794-1.86923-1.26516-2.99647-1.26516-1.86684 0-2.97929 1.26189-3.82322 2.4978l-.00449.0065-.00438.0067c-1.82939 2.7891-2.80649 6.0679-2.80965 9.4215v.0008c0 9.3194 7.4278 16.9301 16.59691 16.9301z"
                      stroke="#fff"
                      strokeWidth="1.7143"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="18"
                  viewBox="0 0 118 18"
                  width="118"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="RevenueX"
                >
                  <g fill="#000">
                    <path d="m117.887 17.952h-5.041l-4.505-5.7561-4.505 5.7561h-5.0411l7.0261-8.97464-7.0261-8.97736h5.0381l4.508 5.75746 2.521 3.2199 2.254 2.88144z"></path>
                    <path d="m117.887 17.952h-5.041l-4.505-5.7561-4.505 5.7561h-5.0411l7.0261-8.97464-7.0261-8.97736h5.0381l4.508 5.75746 2.521 3.2199 2.254 2.88144z"></path>
                    <path d="m113.383 5.75746h-5.041l4.508-5.75746h5.038z"></path>
                    <path d="m113.383 5.75746h-5.041l4.508-5.75746h5.038z"></path>
                    <path d="m14.1817 13.3851.122 2.4408c.0159.7813.1791 1.4074.4882 1.8797h-4.2475c-.26-.4882-.3993-1.1223-.4152-1.9036l-.073-1.9526c-.0331-.9604-.24802-1.6236-.6473-1.9898-.39928-.3661-1.03732-.5491-1.91547-.5491h-3.368v6.3951h-4.12543v-17.379916h8.22566c2.03354 0 3.59214.451012 4.67464 1.354366 1.0824.90335 1.6236 2.12771 1.6236 3.67309 0 2.0017-.9365 3.37728-2.8069 4.12543.8954.29316 1.5175.74023 1.8677 1.34243s.5492 1.4565.5983 2.5628zm-10.05627-9.76438v4.58971h3.63728c.79723 0 1.41538-.19897 1.85578-.59825.43911-.39795.65931-.97233.65931-1.72048 0-1.51354-.86227-2.26965-2.58805-2.26965h-3.56432zm24.70217 8.15268v.7561h-9.324c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1475.6831 1.9288.6831 1.2363 0 2.0826-.4722 2.5389-1.4154h3.6134c-.3422 1.3027-1.0665 2.3307-2.1728 3.0881-1.1076.7561-2.4328 1.1355-3.9795 1.1355-1.9526 0-3.5312-.6022-4.7356-1.8067-1.2045-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5942-3.59615 1.7815-4.78469 1.1713-1.20447 2.7418-1.80671 4.7117-1.80671s3.5312.62612 4.7356 1.87966c1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.5984-.6102.6592-1.90353h3.9053l-4.4916 12.59521h-4.5406l-4.4916-12.59521h4.1003l.6592 1.90353c.3423 1.20447.6752 2.37976 1.0002 3.52718.325 1.1474.5771 2.0428.7575 2.6849.179.6433.2931 1.0532.3422 1.2323.0491-.1791.1632-.5903.3422-1.2323.1791-.6421.4312-1.5375.7562-2.6849.3249-1.14742.6592-2.32271 1.0001-3.52718zm17.6239 4.75948v.7561h-9.3253c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1474.6831 1.9287.6831 1.2364 0 2.0827-.4722 2.539-1.4154h3.6121c-.3423 1.3027-1.0666 2.3307-2.1729 3.0881-1.1063.7561-2.4328 1.1355-3.9782 1.1355-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5943-3.59615 1.7815-4.78469 1.1713-1.20447 2.7419-1.80671 4.7118-1.80671 1.9698 0 3.5311.62612 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.9884-2.80689c1.3344 0 2.3956.40326 3.1849 1.20845s1.1846 1.94863 1.1846 3.42901v8.25091h-3.8084v-7.4935c0-1.43127-.6752-2.14758-2.0256-2.14758-.6832 0-1.2536.22816-1.7085.68315-.455.45499-.6832 1.09834-.6832 1.92873v7.0305h-3.8084v-12.59651h3.7102v1.7815c.9764-1.38355 2.2949-2.07466 3.9544-2.07466zm14.4748 7.32367v-7.03051h3.8084v12.59521h-3.7103v-1.7815c-.9763 1.3835-2.2948 2.0746-3.9543 2.0746-1.3344 0-2.397-.4032-3.1849-1.2084-.7893-.8052-1.1846-1.9487-1.1846-3.429v-8.25091h3.8084v7.49341c0 1.4326.6752 2.1476 2.0256 2.1476.6831 0 1.2535-.2281 1.7085-.6831s.6832-1.0984.6832-1.9288zm18.4782-.3661v.7561h-9.3253c.13.8622.447 1.5215.9524 1.9778.5041.4563 1.1474.6831 1.9287.6831 1.2363 0 2.0827-.4722 2.539-1.4153h3.6121c-.3423 1.3026-1.0666 2.3306-2.1729 3.0881-1.1063.7561-2.4328 1.1354-3.9782 1.1354-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98574.5943-3.59612 1.7815-4.78467 1.1713-1.20446 2.7419-1.8067 4.7118-1.8067 1.9698 0 3.5311.62611 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07791zm-6.5423-4.14936c-1.5626 0-2.4819.8304-2.7578 2.48986h5.566c-.13-.78132-.4391-1.39151-.9272-1.83058-.4882-.43908-1.1143-.65928-1.8797-.65928z"></path>
                    <path d="m14.1817 13.3851.122 2.4408c.0159.7813.1791 1.4074.4882 1.8797h-4.2475c-.26-.4882-.3993-1.1223-.4152-1.9036l-.073-1.9526c-.0331-.9604-.24802-1.6236-.6473-1.9898-.39928-.3661-1.03732-.5491-1.91547-.5491h-3.368v6.3951h-4.12543v-17.379916h8.22566c2.03354 0 3.59214.451012 4.67464 1.354366 1.0824.90335 1.6236 2.12771 1.6236 3.67309 0 2.0017-.9365 3.37728-2.8069 4.12543.8954.29316 1.5175.74023 1.8677 1.34243s.5492 1.4565.5983 2.5628zm-10.05627-9.76438v4.58971h3.63728c.79723 0 1.41538-.19897 1.85578-.59825.43911-.39795.65931-.97233.65931-1.72048 0-1.51354-.86227-2.26965-2.58805-2.26965h-3.56432zm24.70217 8.15268v.7561h-9.324c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1475.6831 1.9288.6831 1.2363 0 2.0826-.4722 2.5389-1.4154h3.6134c-.3422 1.3027-1.0665 2.3307-2.1728 3.0881-1.1076.7561-2.4328 1.1355-3.9795 1.1355-1.9526 0-3.5312-.6022-4.7356-1.8067-1.2045-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5942-3.59615 1.7815-4.78469 1.1713-1.20447 2.7418-1.80671 4.7117-1.80671s3.5312.62612 4.7356 1.87966c1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.5984-.6102.6592-1.90353h3.9053l-4.4916 12.59521h-4.5406l-4.4916-12.59521h4.1003l.6592 1.90353c.3423 1.20447.6752 2.37976 1.0002 3.52718.325 1.1474.5771 2.0428.7575 2.6849.179.6433.2931 1.0532.3422 1.2323.0491-.1791.1632-.5903.3422-1.2323.1791-.6421.4312-1.5375.7562-2.6849.3249-1.14742.6592-2.32271 1.0001-3.52718zm17.6239 4.75948v.7561h-9.3253c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1474.6831 1.9287.6831 1.2364 0 2.0827-.4722 2.539-1.4154h3.6121c-.3423 1.3027-1.0666 2.3307-2.1729 3.0881-1.1063.7561-2.4328 1.1355-3.9782 1.1355-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5943-3.59615 1.7815-4.78469 1.1713-1.20447 2.7419-1.80671 4.7118-1.80671 1.9698 0 3.5311.62612 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.9884-2.80689c1.3344 0 2.3956.40326 3.1849 1.20845s1.1846 1.94863 1.1846 3.42901v8.25091h-3.8084v-7.4935c0-1.43127-.6752-2.14758-2.0256-2.14758-.6832 0-1.2536.22816-1.7085.68315-.455.45499-.6832 1.09834-.6832 1.92873v7.0305h-3.8084v-12.59651h3.7102v1.7815c.9764-1.38355 2.2949-2.07466 3.9544-2.07466zm14.4748 7.32367v-7.03051h3.8084v12.59521h-3.7103v-1.7815c-.9763 1.3835-2.2948 2.0746-3.9543 2.0746-1.3344 0-2.397-.4032-3.1849-1.2084-.7893-.8052-1.1846-1.9487-1.1846-3.429v-8.25091h3.8084v7.49341c0 1.4326.6752 2.1476 2.0256 2.1476.6831 0 1.2535-.2281 1.7085-.6831s.6832-1.0984.6832-1.9288zm18.4782-.3661v.7561h-9.3253c.13.8622.447 1.5215.9524 1.9778.5041.4563 1.1474.6831 1.9287.6831 1.2363 0 2.0827-.4722 2.539-1.4153h3.6121c-.3423 1.3026-1.0666 2.3306-2.1729 3.0881-1.1063.7561-2.4328 1.1354-3.9782 1.1354-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98574.5943-3.59612 1.7815-4.78467 1.1713-1.20446 2.7419-1.8067 4.7118-1.8067 1.9698 0 3.5311.62611 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07791zm-6.5423-4.14936c-1.5626 0-2.4819.8304-2.7578 2.48986h5.566c-.13-.78132-.4391-1.39151-.9272-1.83058-.4882-.43908-1.1143-.65928-1.8797-.65928z"></path>
                    <path d="m14.1817 13.3851.122 2.4408c.0159.7813.1791 1.4074.4882 1.8797h-4.2475c-.26-.4882-.3993-1.1223-.4152-1.9036l-.073-1.9526c-.0331-.9604-.24802-1.6236-.6473-1.9898-.39928-.3661-1.03732-.5491-1.91547-.5491h-3.368v6.3951h-4.12543v-17.379916h8.22566c2.03354 0 3.59214.451012 4.67464 1.354366 1.0824.90335 1.6236 2.12771 1.6236 3.67309 0 2.0017-.9365 3.37728-2.8069 4.12543.8954.29316 1.5175.74023 1.8677 1.34243s.5492 1.4565.5983 2.5628zm-10.05627-9.76438v4.58971h3.63728c.79723 0 1.41538-.19897 1.85578-.59825.43911-.39795.65931-.97233.65931-1.72048 0-1.51354-.86227-2.26965-2.58805-2.26965h-3.56432zm24.70217 8.15268v.7561h-9.324c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1475.6831 1.9288.6831 1.2363 0 2.0826-.4722 2.5389-1.4154h3.6134c-.3422 1.3027-1.0665 2.3307-2.1728 3.0881-1.1076.7561-2.4328 1.1355-3.9795 1.1355-1.9526 0-3.5312-.6022-4.7356-1.8067-1.2045-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5942-3.59615 1.7815-4.78469 1.1713-1.20447 2.7418-1.80671 4.7117-1.80671s3.5312.62612 4.7356 1.87966c1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.5984-.6102.6592-1.90353h3.9053l-4.4916 12.59521h-4.5406l-4.4916-12.59521h4.1003l.6592 1.90353c.3423 1.20447.6752 2.37976 1.0002 3.52718.325 1.1474.5771 2.0428.7575 2.6849.179.6433.2931 1.0532.3422 1.2323.0491-.1791.1632-.5903.3422-1.2323.1791-.6421.4312-1.5375.7562-2.6849.3249-1.14742.6592-2.32271 1.0001-3.52718zm17.6239 4.75948v.7561h-9.3253c.13.8623.447 1.5215.9524 1.9779.5041.4563 1.1474.6831 1.9287.6831 1.2364 0 2.0827-.4722 2.539-1.4154h3.6121c-.3423 1.3027-1.0666 2.3307-2.1729 3.0881-1.1063.7561-2.4328 1.1355-3.9782 1.1355-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98577.5943-3.59615 1.7815-4.78469 1.1713-1.20447 2.7419-1.80671 4.7118-1.80671 1.9698 0 3.5311.62612 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07784zm-6.5423-4.14928c-1.5626 0-2.4819.83039-2.7578 2.48988h5.566c-.13-.78134-.4391-1.39154-.9272-1.83061-.4882-.43907-1.1143-.65927-1.8797-.65927zm15.9884-2.80689c1.3344 0 2.3956.40326 3.1849 1.20845s1.1846 1.94863 1.1846 3.42901v8.25091h-3.8084v-7.4935c0-1.43127-.6752-2.14758-2.0256-2.14758-.6832 0-1.2536.22816-1.7085.68315-.455.45499-.6832 1.09834-.6832 1.92873v7.0305h-3.8084v-12.59651h3.7102v1.7815c.9764-1.38355 2.2949-2.07466 3.9544-2.07466zm14.4748 7.32367v-7.03051h3.8084v12.59521h-3.7103v-1.7815c-.9763 1.3835-2.2948 2.0746-3.9543 2.0746-1.3344 0-2.397-.4032-3.1849-1.2084-.7893-.8052-1.1846-1.9487-1.1846-3.429v-8.25091h3.8084v7.49341c0 1.4326.6752 2.1476 2.0256 2.1476.6831 0 1.2535-.2281 1.7085-.6831s.6832-1.0984.6832-1.9288zm18.4782-.3661v.7561h-9.3253c.13.8622.447 1.5215.9524 1.9778.5041.4563 1.1474.6831 1.9287.6831 1.2363 0 2.0827-.4722 2.539-1.4153h3.6121c-.3423 1.3026-1.0666 2.3306-2.1729 3.0881-1.1063.7561-2.4328 1.1354-3.9782 1.1354-1.9526 0-3.5311-.6022-4.7356-1.8067-1.2044-1.2044-1.8067-2.7989-1.8067-4.7847 0-1.98574.5943-3.59612 1.7815-4.78467 1.1713-1.20446 2.7419-1.8067 4.7118-1.8067 1.9698 0 3.5311.62611 4.7356 1.87966 1.1713 1.26947 1.7576 2.96209 1.7576 5.07791zm-6.5423-4.14936c-1.5626 0-2.4819.8304-2.7578 2.48986h5.566c-.13-.78132-.4391-1.39151-.9272-1.83058-.4882-.43908-1.1143-.65928-1.8797-.65928z"></path>
                  </g>
                </svg>
              </div>
              <div className="TechLogoItem_tech-logo-item">
                <svg
                  fill="none"
                  height="23"
                  viewBox="0 0 111 23"
                  width="111"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="LandingX"
                >
                  <g fill="#000">
                    <path d="m4.6966 0v13.8325h8.0385v3.7238h-12.205803v-17.5563z"></path>
                    <path d="m26.7162 17.5562h-3.8712c-.197-.3778-.3042-.8549-.3203-1.4297-.8549 1.151-2.2109 1.7259-4.0681 1.7259-1.3976 0-2.5191-.3457-3.366-1.0358s-1.2703-1.6442-1.2703-2.8609c0-2.3677 1.6602-3.6902 4.9807-3.97028l1.9979-.17286c1.1014-.11523 1.6522-.53464 1.6522-1.25823 0-.8549-.6499-1.28235-1.9484-1.28235-.7892 0-1.344.11926-1.6642.35777-.3203.23852-.5146.67803-.5789 1.31987h-3.8216c.2305-2.94257 2.2606-4.41385 6.0902-4.41385s5.6707 1.30647 5.6707 3.92074v6.75609c0 1.0693.1729 1.8492.5173 2.3423zm-7.1019-2.2926c.871 0 1.5611-.2265 2.0716-.6781.5092-.4515.7638-1.1296.7638-2.034v-.9367c-.2305.2466-.6579.4114-1.2823.4931l-1.5785.1729c-1.2328.1313-1.8492.6405-1.8492 1.5289 0 .4435.1648.7973.4931 1.0599s.7893.394 1.3815.394z"></path>
                    <path d="m35.9865 4.53729c1.348 0 2.42.40735 3.2172 1.22071.7973.81336 1.1966 1.96842 1.1966 3.46382v8.33458h-3.847v-7.56946c0-1.44582-.6821-2.1694-2.0461-2.1694-.6901 0-1.2663.23047-1.7259.69008-.461.46095-.6901 1.10949-.6901 1.94828v7.1019h-3.8471v-12.72437h3.7479v1.79957c.9862-1.39758 2.3182-2.09571 3.9945-2.09571z"></path>
                    <path d="m51.3734 6.36217v-6.36217h3.8471v17.5563h-3.7479v-1.6522c-.8549 1.2984-2.1292 1.9483-3.8216 1.9483s-3.0578-.6003-4.044-1.7996c-1.0023-1.1992-1.5035-2.8193-1.5035-4.8574 0-2.03806.5012-3.65674 1.5035-4.85735.9862-1.19927 2.3342-1.79958 4.044-1.79958 1.6106 0 2.8514.60835 3.7238 1.82504zm-2.6625 8.40833c1.825 0 2.7376-1.1913 2.7376-3.5751 0-2.38377-.9126-3.575-2.7376-3.575-.8549 0-1.5209.31623-1.9966.9487-.477.63246-.7155 1.541-.7155 2.7242 0 2.3181.9045 3.4772 2.7121 3.4772z"></path>
                    <path d="m61.2846 17.5563h-3.8471v-12.72296h3.8471zm-.0737-14.17816h-3.6742v-3.254788h3.6742z"></path>
                    <path d="m71.2716 4.53729c1.348 0 2.42.40735 3.2173 1.22071s1.1966 1.96842 1.1966 3.46382v8.33458h-3.8471v-7.56946c0-1.44582-.682-2.1694-2.0461-2.1694-.6901 0-1.2663.23047-1.7259.69008-.4609.46095-.6901 1.10949-.6901 1.94828v7.1019h-3.847v-12.72437h3.7479v1.79957c.9862-1.39758 2.3181-2.09571 3.9944-2.09571z"></path>
                    <path d="m86.7564 6.50954v-1.6763h3.7479v12.32906c0 1.7259-.5709 3.0779-1.7138 4.0561-1.143.9782-2.7416 1.4672-4.7958 1.4672-1.8907 0-3.37-.4153-4.438-1.2448-1.0693-.8308-1.6441-1.9684-1.7258-3.4156h3.7974c.0992 1.1832.9125 1.7755 2.4415 1.7755.8388 0 1.4793-.2184 1.9228-.6539s.666-1.0479.666-1.8371v-1.825c-.8054 1.2006-2.022 1.7995-3.6488 1.7995-1.6267 0-3.0323-.5922-4.0681-1.7754s-1.553-2.7202-1.553-4.6109c0-1.89066.5092-3.41018 1.5289-4.61079 1.0197-1.16712 2.3583-1.75134 4.0185-1.75134 1.6603 0 2.9841.65792 3.8216 1.97243zm-2.7617 7.69276c.871 0 1.545-.2841 2.022-.8509s.7156-1.3842.7156-2.4535c0-1.06926-.2345-1.88262-.7022-2.44138-.469-.55877-1.147-.83882-2.034-.83882-.8871 0-1.5209.29211-1.9966.875-.477.58422-.7155 1.4016-.7155 2.4535s.2385 1.8371.7155 2.4039 1.1417.8509 1.9966.8509z"></path>
                    <path d="m110.286 17.5563h-4.93l-4.406-5.6292-4.407 5.6292h-4.9297l6.8713-8.77683-6.8713-8.77947h4.9284l4.4083 5.63055 2.464 3.14892 2.206 2.81793z"></path>
                    <path d="m105.881 5.63055h-4.93l4.407-5.63055h4.929z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>
        </section>
        <Chip />
        {/* <section className="LatestNews_latest-news">
          <div className="LatestNews_latest-news__container">
            <motion.div
              {...getMotionFadeInAndSlideUpAnimation(0)}
              className="LatestNews_latest-news__title"
            >
              <h2 className="Text_text--headline-xl Text_text--weight-bold">
                <span className="">Latest News From Technify</span>
              </h2>
            </motion.div>
            <motion.div
              {...getMotionFadeInAndZoomInAnimation(0)}
              className="LatestNews_latest-news__news"
            >
              <Swiper ref={newsSliderRef}>
                <SwiperSlide>
                  <a
                    className="LatestNewsItem_latest-news-item"
                    href="https://hubx.co/news/ai-lab-by-hubx"
                  >
                    <motion.div
                      {...getMotionFadeInAnimation(0)}
                      className="LatestNewsItem_cover"
                    >
                      <div className="LatestNewsItem_cover__image-container">
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'absolute',
                            inset: '0px',
                          }}
                        >
                          <img
                            alt=""
                            src="assets/home/clwkdiwn800000jtagiokbn0n.png"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: '0px',
                              height: '0px',
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                    </motion.div>
                    <div className="LatestNewsItem_content">
                      <p className="Text_text--headline-s Text_text--weight-bold LatestNewsItem_content__category">
                        <span className="">Newsroom</span>
                      </p>
                      <p className="Text_text--headline-xl Text_text--weight-bold LatestNewsItem_content__title">
                        <span className="">&nbsp;AI Lab by Technify</span>
                      </p>
                      <p className="Text_text--body-m Text_text--weight-regular LatestNewsItem_content__date">
                        <span className="">May 24, 2024</span>
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="LatestNewsItem_latest-news-item"
                    href="https://hubx.co/news/davinci-secures-the-1-spot"
                  >
                    <motion.div
                      {...getMotionFadeInAnimation(0)}
                      className="LatestNewsItem_cover"
                    >
                      <div className="LatestNewsItem_cover__image-container">
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'absolute',
                            inset: '0px',
                          }}
                        >
                          <img
                            alt=""
                            src="assets/home/clryvaibh00020juib48p7537.avif"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: '0px',
                              height: '0px',
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                    </motion.div>
                    <div className="LatestNewsItem_content">
                      <p className="Text_text--headline-s Text_text--weight-bold LatestNewsItem_content__category">
                        <span className="">Newsroom</span>
                      </p>
                      <p className="Text_text--headline-xl Text_text--weight-bold LatestNewsItem_content__title">
                        <span className="">
                          DaVinci Secures the #1 Spot in the Top Charts Across
                          the Globe
                        </span>
                      </p>
                      <p className="Text_text--body-m Text_text--weight-regular LatestNewsItem_content__date">
                        <span className="">January 30, 2024</span>
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="LatestNewsItem_latest-news-item"
                    href="https://hubx.co/news/hubx-new-grad-program"
                  >
                    <motion.div
                      {...getMotionFadeInAnimation(0)}
                      className="LatestNewsItem_cover"
                    >
                      <div className="LatestNewsItem_cover__image-container">
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'absolute',
                            inset: '0px',
                          }}
                        >
                          <img
                            alt=""
                            src="assets/home/cli07rje800000judacmb8dop.avif"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: '0px',
                              height: '0px',
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                    </motion.div>
                    <div className="LatestNewsItem_content">
                      <p className="Text_text--headline-s Text_text--weight-bold LatestNewsItem_content__category">
                        <span className="">Newsroom</span>
                      </p>
                      <p className="Text_text--headline-xl Text_text--weight-bold LatestNewsItem_content__title">
                        <span className="">Technify New Grad Program</span>
                      </p>
                      <p className="Text_text--body-m Text_text--weight-regular LatestNewsItem_content__date">
                        <span className="">May 23, 2023</span>
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="LatestNewsItem_latest-news-item"
                    href="https://hubx.co/news/nova-reaches-1-million-users-two-weeks-after-launch"
                  >
                    <motion.div
                      {...getMotionFadeInAnimation(0)}
                      className="LatestNewsItem_cover"
                    >
                      <div className="LatestNewsItem_cover__image-container">
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'absolute',
                            inset: '0px',
                          }}
                        >
                          <img
                            alt=""
                            src="assets/home/clftpai6200060jtkgymd8wln.avif"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: '0px',
                              height: '0px',
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                    </motion.div>
                    <div className="LatestNewsItem_content">
                      <p className="Text_text--headline-s Text_text--weight-bold LatestNewsItem_content__category">
                        <span className="">Newsroom</span>
                      </p>
                      <p className="Text_text--headline-xl Text_text--weight-bold LatestNewsItem_content__title">
                        <span className="">
                          Nova reaches 1 million users two weeks after launch
                        </span>
                      </p>
                      <p className="Text_text--body-m Text_text--weight-regular LatestNewsItem_content__date">
                        <span className="">March 27, 2023</span>
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    className="LatestNewsItem_latest-news-item"
                    href="https://hubx.co/news/hubx-is-moving-to-its-new-office-in-june"
                  >
                    <motion.div
                      {...getMotionFadeInAnimation(0)}
                      className="LatestNewsItem_cover"
                    >
                      <div className="LatestNewsItem_cover__image-container">
                        <span
                          style={{
                            boxSizing: 'border-box',
                            display: 'block',
                            overflow: 'hidden',
                            width: 'initial',
                            height: 'initial',
                            background: 'none',
                            opacity: 1,
                            border: '0px',
                            margin: '0px',
                            padding: '0px',
                            position: 'absolute',
                            inset: '0px',
                          }}
                        >
                          <img
                            alt=""
                            src="assets/home/cl9moeepp00020ivkdvvx6bzf.avif"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              inset: '0px',
                              boxSizing: 'border-box',
                              padding: '0px',
                              border: 'none',
                              margin: 'auto',
                              display: 'block',
                              width: '0px',
                              height: '0px',
                              minWidth: '100%',
                              maxWidth: '100%',
                              minHeight: '100%',
                              maxHeight: '100%',
                              objectFit: 'cover',
                            }}
                          />
                          <noscript></noscript>
                        </span>
                      </div>
                    </motion.div>
                    <div className="LatestNewsItem_content">
                      <p className="Text_text--headline-s Text_text--weight-bold LatestNewsItem_content__category">
                        <span className="">Newsroom</span>
                      </p>
                      <p className="Text_text--headline-xl Text_text--weight-bold LatestNewsItem_content__title">
                        <span className="">
                          Technify is moving to its new office in June
                        </span>
                      </p>
                      <p className="Text_text--body-m Text_text--weight-regular LatestNewsItem_content__date">
                        <span className="">June 21, 2022</span>
                      </p>
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div className="CarouselNavigation_carousel-navigation">
                <span
                  id="latest-news-navigation-prev"
                  className={`CarouselNavigation_carousel-navigation__button 
                    CarouselNavigation_carousel-navigation__button--variant-dark 
                    CarouselNavigation_carousel-navigation__button--prev 
                    ${
                      isDisabledPrevNews
                        ? 'CarouselNavigation_carousel-navigation__button--disabled'
                        : ''
                    }`}
                  onClick={handlePrev}
                >
                  <svg
                    fill="none"
                    height="56"
                    viewBox="0 0 56 56"
                    width="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" fill="#fff" r="28"></circle>
                    <path
                      d="m24.4111 38.7696 10.0513-10.0513-10.0513-10.0513"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.5"
                    ></path>
                  </svg>
                </span>
                <span
                  id="latest-news-navigation-next"
                  className={`CarouselNavigation_carousel-navigation__button 
                    CarouselNavigation_carousel-navigation__button--variant-dark 
                    CarouselNavigation_carousel-navigation__button--next 
                    ${
                      isDisabledNextNews
                        ? 'CarouselNavigation_carousel-navigation__button--disabled'
                        : ''
                    }`}
                  onClick={handleNext}
                >
                  <svg
                    fill="none"
                    height="56"
                    viewBox="0 0 56 56"
                    width="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" fill="#fff" r="28"></circle>
                    <path
                      d="m24.4111 38.7696 10.0513-10.0513-10.0513-10.0513"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.5"
                    ></path>
                  </svg>
                </span>
              </div>
            </motion.div>
          </div>
        </section> */}
        {/* <section className="OpenPositions_open-positions">
          <div className="OpenPositions_open-positions__container">
            <motion.div
              {...getMotionFadeInAndSlideUpAnimation(0)}
              className="OpenPositions_open-positions__title"
            >
              <h2
                className="Text_text--headline-xl Text_text--weight-bold"
                style={{ color: 'white' }}
              >
                <span className="">Open Positions</span>
              </h2>
            </motion.div>
          </div>
          <motion.div
            {...getMotionFadeInAndZoomInAnimation(0)}
            className="OpenPositions_positions"
          >
            <a
              href="https://xtech.ai.vn/jobs#open-positions"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large OpenPositions_positions__button"
            >
              <div className="Button_button__children">See All Openings</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <div className="OpenPositions_cards">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                ref={positionsSliderRef}
              >
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Mid./Senior Marketing Artist</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Mid./Senior Marketing Artist”
                            role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/b9ada8c77bb9-mid-senior-marketing-artist">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Project Manager</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Project Manager” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/399c78ff47da-project-manager">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">
                            Senior Performance Marketing Specialist
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Senior Performance Marketing
                            Specialist” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/b39bf3ac5d65-senior-performance-marketing-specialist">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">
                            Development General Application
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Development General
                            Application” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/f14b249f8d4a-development-general-application">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Frontend Developer</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Frontend Developer” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/2a8e5709e4f5-frontend-developer">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Product General Application</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Product General Application”
                            role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/3af39bbca377-product-general-application">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Web Product Manager</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Web Product Manager” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/32b8fbe90aba-web-product-manager">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">
                            Marketing General Application
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Marketing General Application”
                            role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/7761ab37144c-marketing-general-application">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">React Native Developer</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “React Native Developer” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/b69c7d17b2a4-react-native-developer">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Senior iOS Developer</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Senior iOS Developer” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/5e4e364a7ac8-senior-ios-developer">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Android Developer</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Android Developer” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/b26d837d3040-android-developer">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Backend Developer</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Backend Developer” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/100f78632ca7-backend-developer">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="OpenPositions_card" style={{ width: '100%' }}>
                    <div className="Card_card" style={{ minHeight: '500px' }}>
                      <div className="Card_card__title">
                        <p className="Text_text--headline-xl Text_text--weight-medium">
                          <span className="">Web Growth Manager</span>
                        </p>
                      </div>
                      <div className="Card_card__body">
                        <p className="Text_text--body-m Text_text--weight-regular">
                          <span className="">
                            Operating on a global scale requires focus,
                            dedication, and a great team. Now, we are expanding
                            our great team with “Web Growth Manager” role.
                          </span>
                        </p>
                      </div>
                      <div className="Card_card__link">
                        <a href="https://hubx.co/jobs/df78e3aafa15-web-growth-manager">
                          <p className="Text_text--link-xxl Text_text--weight-medium">
                            <span className="">Apply</span>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="CarouselNavigation_carousel-navigation">
                <span
                  id="open-positions-navigation-prev"
                  className={`CarouselNavigation_carousel-navigation__button CarouselNavigation_carousel-navigation__button--variant-light CarouselNavigation_carousel-navigation__button--prev
                    ${
                      isDisabledPrevPositions
                        ? 'CarouselNavigation_carousel-navigation__button--disabled'
                        : ''
                    }`}
                  onClick={handlePrevPositions}
                >
                  <svg
                    fill="none"
                    height="56"
                    viewBox="0 0 56 56"
                    width="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" fill="#fff" r="28"></circle>
                    <path
                      d="m24.4111 38.7696 10.0513-10.0513-10.0513-10.0513"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.5"
                    ></path>
                  </svg>
                </span>
                <span
                  id="open-positions-navigation-next"
                  className={`CarouselNavigation_carousel-navigation__button CarouselNavigation_carousel-navigation__button--variant-light CarouselNavigation_carousel-navigation__button--next
                    ${
                      isDisabledNextPositions
                        ? 'CarouselNavigation_carousel-navigation__button--disabled'
                        : ''
                    }`}
                  onClick={handleNextPositions}
                >
                  <svg
                    fill="none"
                    height="56"
                    viewBox="0 0 56 56"
                    width="56"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28" fill="#fff" r="28"></circle>
                    <path
                      d="m24.4111 38.7696 10.0513-10.0513-10.0513-10.0513"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.5"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="OpenPositions_background"
            {...getMotionFadeInAndZoomOutAnimation(0)}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: '0px',
                margin: '0px',
                padding: '0px',
                position: 'absolute',
                inset: '0px',
              }}
            >
              <motion.img
                alt=""
                src="assets/home/open-positions.png"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  boxSizing: 'border-box',
                  padding: '0px',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0px',
                  height: '0px',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
              />
              <noscript></noscript>
            </span>
          </motion.div>
        </section> */}
      </div>
    </main>
  );
};
export default Home;
