"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  getMotionFadeInAndSlideUpAnimation,
  getMotionFadeInAndZoomInAnimation,
} from "../../utils/animation";
import "./OurDna.css";
import { OUR_DNA_ACCORDIONS } from "../../constants/mock-data";
import Accordion from "../../components/accordion/Accordion";

export default function OurDNA() {
  const nextSectionRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section className="Hero_hero__dna">
        {/* <motion.div {...getMotionFadeInAndZoomInAnimation()}> */}
          <img
            src="/assets/our-dna/hero.png"
            style={{
              opacity: "1",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={"hero"}
          />
        {/* </motion.div> */}

        <div
          className="Hero_content__dna"
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        >
          <h1 className="Text_text--display-m Text_text--weight-bold Hero_content__title__dna">
            <span className="">Our Mission</span>
          </h1>
          <button
            className="ScrollHandle_scroll-handle Hero_scroll-handle__dna"
            onClick={handleClick}
          >
            <div className="ScrollHandle_scroll-handle__circle">
              <svg
                fill="none"
                viewBox="0 0 12 8"
                xmlns="http://www.w3.org/2000/svg"
                className="ScrollHandle_scroll-handle__arrow"
              >
                <path
                  d="m11 1.95-4.949 4.88-4.95-4.88"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </section>
      <section
        id="our-mission"
        className="OurMission_our-mission"
        ref={nextSectionRef}
      >
        <div className="OurMission_our-mission__content">
          <h2 className="OurMission_our-mission__title">Our Mission</h2>
          <p className="Text_text--display-m Text_text--weight-bold OurMission_our-mission__description">
            <span className="Text_text--gradient-purple">
              is to build apps people love and make life easier and more fun for
              billions of people
            </span>
          </p>
        </div>
      </section>
      <section className="Values_values">
        <div className="Values_values__content">
          <h2 className="Values_values__title">Our DNA</h2>
          <p className="Text_text--display-m Text_text--weight-bold Values_values__description">
            <span className="">
              We believe companies are just like people and only strive when
              they have a strong core of principles.
            </span>
          </p>
          <p className="Text_text--headline-m--extra-height Text_text--weight-regular Values_values__body-text-1">
            <span className="">
              That&apos;s why we focus on preseverving the core DNA and
              stimulate progress as a team.
            </span>
          </p>
          <p className="Text_text--body-l Text_text--weight-regular Values_values__body-text-2">
            <span className="">
              Here are the core values and the DNA of our company
            </span>
          </p>
          <div className="DnaSpiral_dna-spiral">
            <div className="DnaSpiral_texts DnaSpiral_texts--left-group">
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.75)}>
                Be Simple
              </motion.span>
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.5)}>
                Be Result-oriented
              </motion.span>
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.25)}>
                Be Data-driven
              </motion.span>
            </div>
            <div className="DnaSpiral_image">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
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
                    border: 0,
                    margin: 0,
                    padding: 0,
                    paddingTop: "282.8080229226361%",
                  }}
                ></span>
                <motion.img
                  alt=""
                  src="assets/our-dna/dna.png"
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
                  {...getMotionFadeInAndSlideUpAnimation(1)}
                  sizes="100vw"
                />
              </span>
            </div>
            <div className="DnaSpiral_texts DnaSpiral_texts--right-group">
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.75)}>
                Be a Team-player
              </motion.span>
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.5)}>
                Be Growth-oriented
              </motion.span>
              <motion.span {...getMotionFadeInAndSlideUpAnimation(0.25)}>
                Be Humble
              </motion.span>
            </div>
            <div className="BlurredBubbles_bubble BlurredBubbles_bubble--small">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
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
                    border: 0,
                    margin: 0,
                    padding: 0,
                    paddingTop: "100%",
                  }}
                ></span>
                <motion.img
                  alt=""
                  src="assets/our-dna/blurred-bubble-small.png"
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
                  {...getMotionFadeInAndZoomInAnimation(1)}
                  sizes="100vw"
                />
              </span>
            </div>
            <div className="BlurredBubbles_bubble BlurredBubbles_bubble--medium">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
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
                    border: 0,
                    margin: 0,
                    padding: 0,
                    paddingTop: "100%",
                  }}
                ></span>
                <motion.img
                  src="assets/our-dna/blurred-bubble-medium.png"
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
                  {...getMotionFadeInAndZoomInAnimation(1)}
                  sizes="100vw"
                />
              </span>
            </div>
            <div className="BlurredBubbles_bubble BlurredBubbles_bubble--large">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
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
                    border: 0,
                    margin: 0,
                    padding: 0,
                    paddingTop: "100%",
                  }}
                ></span>
                <motion.img
                  alt=""
                  src="assets/our-dna/blurred-bubble-large.png"
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
                  {...getMotionFadeInAndZoomInAnimation(1)}
                  sizes="100vw"
                />
              </span>
            </div>
          </div>
          <div className="CareersLink_link">
            <a
              href="/jobs"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Careers at Technify</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="Principles_principles">
        <div className="InfoSection_info-section">
          <div className="InfoSection_info-section__container">
            <div className="InfoSection_title">
              <p className="InfoSection_title__top-title">Team of A Players</p>
              <h2 className="Text_text--display-m Text_text--weight-bold">
                <span className="">Our principles and core values</span>
              </h2>
            </div>
            <div className="InfoSection_content">
              <p>
                Since the beginning, we have upheld the same principles and
                values that shape who we are. They guide what we do, how we do
                it, why we do it, and who we hire.
              </p>
              <p>
                We&apos;re in a rapidly changing and evolving industry. As our
                company evolves and grows, these six values remain constant.
              </p>
            </div>
          </div>
        </div>
        <div className="PrincipleList_principle-list">
          {OUR_DNA_ACCORDIONS.map((item) => (
            <Accordion key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
