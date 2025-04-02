import { motion } from "motion/react";
import "./Chip.css";
import { getMotionFadeInAndZoomInAnimation } from "../../utils/animation";

const getXAppearAnimation = () => ({
  initial: {
    opacity: 0,
    transform: "scale3d(0.85, 0.85, 1)",
  },
  whileInView: {
    opacity: "var(--x-in-view-opacity)",
    transform: "var(--x-in-view-scale)",
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay: 0.5,
  },
  viewport: { once: true },
});

// const getChipAppearAnimation = () => ({
//   initial: {
//     opacity: 0,
//     transform: "var(--chip-initial-transform)",
//   },
//   whileInView: {
//     opacity: 1,
//     transform: "var(--chip-in-view-transform)",
//   },
//   transition: {
//     duration: 1,
//     ease: "easeOut",
//     delay: 0.5,
//   },
//   viewport: { once: true },
// });

const getChipLineAppearAnimation = () => ({
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay: 1.4,
  },
  viewport: { once: true },
});

const getChipBlurAppearAnimation = () => ({
  initial: {
    opacity: 0,
    transform: "var(--blur-initial-transform)",
  },
  whileInView: {
    opacity: 0.9,
    transform: "var(--blur-in-view-transform)",
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay: 0.9,
  },
  viewport: { once: true },
});

const getPlayAppearAnimation = () => ({
  initial: {
    opacity: 0,
    transform: "var(--play-initial-transform)",
  },
  whileInView: {
    opacity: 1,
    transform: "var(--play-in-view-transform)",
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay: 0.5,
  },
  viewport: { once: true },
});

const getAppleAppearAnimation = () => ({
  initial: {
    opacity: 0,
    transform: "var(--apple-initial-transform)",
  },
  whileInView: {
    opacity: 1,
    transform: "var(--apple-in-view-transform)",
  },
  transition: {
    duration: 1,
    ease: "easeOut",
    delay: 0.5,
  },
  viewport: { once: true },
});

const Chip = () => {
  return (
    <div
      className="pin-spacer"
      style={{
        order: "0",
        placeSelf: "auto",
        gridArea: "auto",
        zIndex: "auto",
        float: "none",
        flexShrink: "1",
        display: "block",
        margin: "0px",
        inset: "auto",
        position: "relative",
        flexBasis: "auto",
        overflow: "visible",
        boxSizing: "border-box",
      }}
    >
      <section
        className="RevenueX_section__1wcn2RevenueX_revenueSection__jOVVV revenueSection"
        style={{
          inset: "0px auto auto 0px",
          margin: "0px",
          padding: "0px",
        }}
      >
        <div className="RevenueX_overWrap__MMRIq overWrap">
          <motion.picture
            className="RevenueX_revenuex__fVCjw RevenueX_litX__31MWW litX [--x-in-view-opacity:0] md:[--x-in-view-opacity:1] md:[--x-in-view-scale:scale(1) lg:[--x-in-view-scale:scale(1.2)] 2xl:[--x-in-view-scale:scale(1)]"
            {...getXAppearAnimation()}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0",
                margin: "0",
                padding: "0",
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
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                  paddingTop: "91.9%",
                }}
              ></span>
              <img
                alt="ltrX"
                src="/assets/home/ltrX.png"
                decoding="async"
                data-nimg="responsive"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  boxSizing: "border-box",
                  padding: "0",
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
                sizes="100vw"
              />
            </span>
          </motion.picture>
          <div className="RevenueX_picturesContainer__kgSem picturesContainer">
            <div className="min-h-[60vh] md:min-h-[80vh] lg:min-h-[60vh] [@media(min-width:1200px)]:min-h-[80vh] [@media(min-width:1800px)]:min-h-[90vh] [@media(max-height:430px)]:min-h-[150vh] CustomContainer"></div>
            <picture
              className="RevenueX_revenuex__fVCjw RevenueX_logoX__7XokK logoX z-10"
              style={{
                transform: "translateY(100px)",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "15.192743764172336%",
                  }}
                ></span>
                <img
                  className="scale-75 xl:scale-100"
                  alt="logoX"
                  src="/assets/home/logorevenuex.bda6d26159f7762ca2f89c1777b0d563.svg"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </picture>
            <picture className="RevenueX_revenuex__fVCjw RevenueX_ground_chip__ZuCKe ground_chip transform md:translate-x-[0%] translate-y-[calc(350px-50%)] md:translate-y-[calc(459px-50%)] scale-150 md:scale-100 [@media(min-width:1800px)]:translate-y-[calc(600px-50%)]">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="chip"
                  src="/assets/home/ground_chip.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </picture>
            <svg
              className="appleandgoogle_lines transform md:translate-x-[0%] translate-y-[calc(350px-50%)] md:translate-y-[calc(459px-50%)] scale-[1.47] md:scale-[0.98] [@media(min-width:1800px)]:translate-y-[calc(600px-50%)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1109 755.5"
              style={{
                position: "absolute",
                maxWidth: "100%",
                opacity: "1",
                filter: "saturate(1)",
              }}
              xmlSpace="preserve"
            >
              <path
                className="st0"
                d="m772.1 326.8 241.6-.7v-1.7l-241.6.6c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8l-17.7 17.9c-1 1-2.2 1.9-3.6 2.4s-2.8.8-4.2.9l-92.8.4v1.7l92.8-.4c1.7 0 3.3-.3 4.9-1 1.5-.6 2.9-1.6 4.1-2.8l17.8-17.8c1-1 2.2-1.8 3.6-2.4 1.3-.6 2.7-.9 4.1-.9z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m777.3 339 216.5-.7v-1.7l-216.5.7c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8L750.6 359c-1 1-2.2 1.9-3.6 2.4-1.3.6-2.8.8-4.2.9l-97.9.4v1.7l97.9-.4c1.7 0 3.3-.3 4.9-1 1.6-.7 2.9-1.6 4.1-2.8l17.7-17.9c1-1 2.2-1.9 3.6-2.4 1.3-.6 2.7-.9 4.2-.9zM973.9 423.5l-195.7.7c-2.3 0-4.5-.4-6.7-1.3-2.1-.9-4-2.1-5.7-3.8l-26.6-26.3c-1.5-1.5-3.2-2.6-5.1-3.4-1.9-.8-3.9-1.2-6-1.2l-83.3.4v-1.7l83.3-.4c2.3 0 4.5.4 6.7 1.3 2.1.9 4 2.1 5.7 3.8l26.6 26.3c1.5 1.5 3.2 2.6 5.1 3.4 1.9.8 3.9 1.2 6 1.2l195.7-.7v1.7z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m773.2 436.5 220.7-.7v-1.7l-220.7.7c-2.1 0-4.1-.4-6-1.2-1.9-.8-3.6-1.9-5.1-3.4l-26.6-26.3c-1.6-1.6-3.5-2.9-5.7-3.8-2.1-.9-4.4-1.3-6.7-1.3l-78.3.4v1.7l78.3-.4c2.1 0 4.1.4 6 1.2 1.9.8 3.6 1.9 5.1 3.4l26.6 26.3c1.6 1.6 3.5 2.9 5.7 3.8 2.2.9 4.4 1.3 6.7 1.3zM54.798 417.379l165.8-.75.007 1.7-165.8.75z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m772.1 326.8 241.6-.7v-1.7l-241.6.6c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8l-17.7 17.9c-1 1-2.2 1.9-3.6 2.4s-2.8.8-4.2.9l-92.8.4v1.7l92.8-.4c1.7 0 3.3-.3 4.9-1 1.5-.6 2.9-1.6 4.1-2.8l17.8-17.8c1-1 2.2-1.8 3.6-2.4 1.3-.6 2.7-.9 4.1-.9zm5.2 12.2 216.5-.7v-1.7l-216.5.7c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8L750.6 359c-1 1-2.2 1.9-3.6 2.4-1.3.6-2.8.8-4.2.9l-97.9.4v1.7l97.9-.4c1.7 0 3.3-.3 4.9-1 1.6-.7 2.9-1.6 4.1-2.8l17.7-17.9c1-1 2.2-1.9 3.6-2.4 1.3-.6 2.7-.9 4.2-.9zm196.6 84.5-195.7.7c-2.3 0-4.5-.4-6.7-1.3-2.1-.9-4-2.1-5.7-3.8l-26.6-26.3c-1.5-1.5-3.2-2.6-5.1-3.4-1.9-.8-3.9-1.2-6-1.2l-83.3.4v-1.7l83.3-.4c2.3 0 4.5.4 6.7 1.3 2.1.9 4 2.1 5.7 3.8l26.6 26.3c1.5 1.5 3.2 2.6 5.1 3.4 1.9.8 3.9 1.2 6 1.2l195.7-.7v1.7zm-200.7 13 220.7-.7v-1.7l-220.7.7c-2.1 0-4.1-.4-6-1.2-1.9-.8-3.6-1.9-5.1-3.4l-26.6-26.3c-1.6-1.6-3.5-2.9-5.7-3.8-2.1-.9-4.4-1.3-6.7-1.3l-78.3.4v1.7l78.3-.4c2.1 0 4.1.4 6 1.2 1.9.8 3.6 1.9 5.1 3.4l26.6 26.3c1.6 1.6 3.5 2.9 5.7 3.8 2.2.9 4.4 1.3 6.7 1.3zm-297.1-96.1-78.1.4c-2.3 0-4.6.5-6.7 1.4s-4.1 2.2-5.7 3.8l-17 17.1c-1.7 1.8-3.8 3.2-6.1 4.1-2.3 1-4.7 1.4-7.2 1.5l-206.2.9v-1.2l206.2-.9c2.3 0 4.6-.5 6.7-1.4s4.1-2.2 5.7-3.8l17-17.1c1.7-1.8 3.8-3.2 6.1-4.1 2.3-1 4.7-1.4 7.2-1.5l78.1-.4v1.2zm-47.5 73.5 47.8-.2v-1.2l-47.8.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-331 1.5v1.2l331-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-1 4.4-1.4 6.7-1.4zm47.5-61-73.1.3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-175.7.8v-1.7l175.7-.8c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l73.1-.3v1.7zm-52.6 48.8 52.9-.2v-1.2l-52.9.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-325.9 1.4v1.2l325.9-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-.8 4.4-1.3 6.7-1.3zm52.7-36.6-68 .3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-310.8 1.4V393l310.8-1.4c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l68-.3v1.7zm-62.9 12.5 63-.3v-1.7l-63 .3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.4 1.3-6.6 1.3l-315.8 1.4v1.7l315.8-1.4c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.8 4.3-1.3 6.6-1.3zM54.8 417.4v1.7l165.8-.7v-1.7l-165.8.7zm363.6-27.6 57.9-.3v-1.7l-57.9.3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.3 1.3-6.6 1.3l-121.4.5v1.7l121.4-.5c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.9 4.3-1.3 6.6-1.3zm289.4-14.9v1l38.5-.2v-1l-38.5.2zm124.5.8V374l132.4-.5v1.7l-132.4.5z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m772.1 326.8 241.6-.7v-1.7l-241.6.6c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8l-17.7 17.9c-1 1-2.2 1.9-3.6 2.4s-2.8.8-4.2.9l-92.8.4v1.7l92.8-.4c1.7 0 3.3-.3 4.9-1 1.5-.6 2.9-1.6 4.1-2.8l17.8-17.8c1-1 2.2-1.8 3.6-2.4 1.3-.6 2.7-.9 4.1-.9zm5.2 12.2 216.5-.7v-1.7l-216.5.7c-1.7 0-3.3.3-4.9 1-1.5.6-2.9 1.6-4.1 2.8L750.6 359c-1 1-2.2 1.9-3.6 2.4-1.3.6-2.8.8-4.2.9l-97.9.4v1.7l97.9-.4c1.7 0 3.3-.3 4.9-1 1.6-.7 2.9-1.6 4.1-2.8l17.7-17.9c1-1 2.2-1.9 3.6-2.4 1.3-.6 2.7-.9 4.2-.9zm196.6 84.5-195.7.7c-2.3 0-4.5-.4-6.7-1.3-2.1-.9-4-2.1-5.7-3.8l-26.6-26.3c-1.5-1.5-3.2-2.6-5.1-3.4-1.9-.8-3.9-1.2-6-1.2l-83.3.4v-1.7l83.3-.4c2.3 0 4.5.4 6.7 1.3 2.1.9 4 2.1 5.7 3.8l26.6 26.3c1.5 1.5 3.2 2.6 5.1 3.4 1.9.8 3.9 1.2 6 1.2l195.7-.7v1.7zm-200.7 13 220.7-.7v-1.7l-220.7.7c-2.1 0-4.1-.4-6-1.2-1.9-.8-3.6-1.9-5.1-3.4l-26.6-26.3c-1.6-1.6-3.5-2.9-5.7-3.8-2.1-.9-4.4-1.3-6.7-1.3l-78.3.4v1.7l78.3-.4c2.1 0 4.1.4 6 1.2 1.9.8 3.6 1.9 5.1 3.4l26.6 26.3c1.6 1.6 3.5 2.9 5.7 3.8 2.2.9 4.4 1.3 6.7 1.3zm-297.1-96.1-78.1.4c-2.3 0-4.6.5-6.7 1.4s-4.1 2.2-5.7 3.8l-17 17.1c-1.7 1.8-3.8 3.2-6.1 4.1-2.3 1-4.7 1.4-7.2 1.5l-206.2.9v-1.2l206.2-.9c2.3 0 4.6-.5 6.7-1.4s4.1-2.2 5.7-3.8l17-17.1c1.7-1.8 3.8-3.2 6.1-4.1 2.3-1 4.7-1.4 7.2-1.5l78.1-.4v1.2zm-47.5 73.5 47.8-.2v-1.2l-47.8.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-331 1.5v1.2l331-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-1 4.4-1.4 6.7-1.4zm47.5-61-73.1.3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-175.7.8v-1.7l175.7-.8c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l73.1-.3v1.7zm-52.6 48.8 52.9-.2v-1.2l-52.9.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-325.9 1.4v1.2l325.9-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-.8 4.4-1.3 6.7-1.3zm52.7-36.6-68 .3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-310.8 1.4V393l310.8-1.4c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l68-.3v1.7zm-62.9 12.5 63-.3v-1.7l-63 .3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.4 1.3-6.6 1.3l-315.8 1.4v1.7l315.8-1.4c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.8 4.3-1.3 6.6-1.3zM54.8 417.4v1.7l165.8-.7v-1.7l-165.8.7zm363.6-27.6 57.9-.3v-1.7l-57.9.3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.3 1.3-6.6 1.3l-121.4.5v1.7l121.4-.5c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.9 4.3-1.3 6.6-1.3zm289.4-14.9v1l38.5-.2v-1l-38.5.2zm124.5.8V374l132.4-.5v1.7l-132.4.5z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m476.1 340.4-78.1.4c-2.3 0-4.6.5-6.7 1.4s-4.1 2.2-5.7 3.8l-17 17.1c-1.7 1.8-3.8 3.2-6.1 4.1-2.3 1-4.7 1.4-7.2 1.5l-206.2.9v-1.2l206.2-.9c2.3 0 4.6-.5 6.7-1.4s4.1-2.2 5.7-3.8l17-17.1c1.7-1.8 3.8-3.2 6.1-4.1 2.3-1 4.7-1.4 7.2-1.5l78.1-.4v1.2zM428.6 413.9l47.8-.2v-1.2l-47.8.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-331 1.5v1.2l331-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-1 4.4-1.4 6.7-1.4z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m476.1 352.9-73.1.3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-175.7.8v-1.7l175.7-.8c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l73.1-.3v1.7zM423.5 401.7l52.9-.2v-1.2l-52.9.2c-2.5 0-4.9.5-7.2 1.5s-4.3 2.4-6.1 4.1l-17 17.1c-1.6 1.6-3.6 3-5.7 3.8-2.1.9-4.4 1.4-6.7 1.4l-325.9 1.4v1.2l325.9-1.5c2.5 0 4.9-.5 7.2-1.5s4.3-2.4 6.1-4.1l17-17.1c1.6-1.6 3.6-3 5.7-3.8 2.1-.8 4.4-1.3 6.7-1.3z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m476.2 365.1-68 .3c-2.3 0-4.5.5-6.6 1.3-2.1.9-4 2.2-5.6 3.8l-17 17.1c-1.8 1.8-3.9 3.2-6.2 4.2-2.3 1-4.8 1.5-7.3 1.5l-310.8 1.4V393l310.8-1.4c2.3 0 4.5-.5 6.6-1.3 2.1-.9 4-2.2 5.6-3.8l17-17.1c1.8-1.8 3.9-3.2 6.2-4.2 2.3-1 4.8-1.5 7.3-1.5l68-.3v1.7z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m413.3 377.6 63-.3v-1.7l-63 .3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.4 1.3-6.6 1.3l-315.8 1.4v1.7l315.8-1.4c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.8 4.3-1.3 6.6-1.3z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="st0"
                d="m418.4 389.8 57.9-.3v-1.7l-57.9.3c-2.5 0-5 .5-7.3 1.5s-4.4 2.4-6.2 4.2l-17 17.1c-1.6 1.6-3.5 2.9-5.6 3.8-2.1.9-4.3 1.3-6.6 1.3l-121.4.5v1.7l121.4-.5c2.5 0 5-.5 7.3-1.5s4.4-2.4 6.2-4.2l17-17.1c1.6-1.6 3.5-2.9 5.6-3.8 2-.9 4.3-1.3 6.6-1.3zM707.806 374.896l38.5-.184.005 1-38.5.184zM832.304 373.97l132.4-.534.007 1.7-132.4.534z"
                style={{
                  opacity: "0.1",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              ></path>
              <path
                className="red_line1"
                d="M245.3 392.1h45c.6 0 1 .4 1 1s-.4 1-1 1h-45c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="244.29998779296875 392.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,47,0)"
              ></path>
              <radialGradient
                id="SVGID_1_"
                cx="933.154"
                cy="373.478"
                r="1"
                gradientTransform="matrix(0 1.383 -33.4489 0 12739.88 -898.343)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line1"
                d="M245.3 392.1h45c.6 0 1 .4 1 1s-.4 1-1 1h-45c-.6 0-1-.4-1-1s.4-1 1-1z"
                style={{ fill: "url('#SVGID_1_')", transformOrigin: "0px 0px" }}
                data-svg-origin="244.29998779296875 392.1000061035156"
                transform="matrix(1,0,0,1,47,0)"
              ></path>
              <radialGradient
                id="SVGID_00000071543555469951075580000005287511817509910146_"
                cx="35.753"
                cy="352.64"
                r="1"
                gradientTransform="matrix(0 -1.6986 41.0821 0 -14215.701 454.977)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line1"
                style={{
                  fill: "url('#SVGID_00000071543555469951075580000005287511817509910146_')",
                  transformOrigin: "0px 0px",
                }}
                d="M245.3 392.1h45c.6 0 1 .4 1 1s-.4 1-1 1h-45c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="244.29998779296875 392.1000061035156"
                transform="matrix(1,0,0,1,47,0)"
              ></path>
              <radialGradient
                id="SVGID_00000124844612488936855830000005973519378888728475_"
                cx="-65.19"
                cy="350.296"
                r="1"
                gradientTransform="matrix(0 -1.3582 32.8485 0 -11262.397 305.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line1"
                style={{
                  fill: "url('#SVGID_00000124844612488936855830000005973519378888728475_')",
                  transformOrigin: "0px 0px",
                }}
                d="M245.3 392.1h45c.6 0 1 .4 1 1s-.4 1-1 1h-45c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="244.29998779296875 392.1000061035156"
                transform="matrix(1,0,0,1,47,0)"
              ></path>
              <radialGradient
                id="SVGID_00000102529831454023127780000002526505370007706539_"
                cx="787.639"
                cy="368.156"
                r="1"
                gradientTransform="matrix(0 1.9594 -62.3286 0 23234.11 -1151.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line1"
                style={{
                  fill: "url('#SVGID_00000102529831454023127780000002526505370007706539_')",
                  transformOrigin: "0px 0px",
                }}
                d="M245.3 392.1h45c.6 0 1 .4 1 1s-.4 1-1 1h-45c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="244.29998779296875 392.1000061035156"
                transform="matrix(1,0,0,1,47,0)"
              ></path>
              <path
                className="red_line2"
                d="M295.3 416.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="294.29998779296875 416.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000160884932222649316020000009025701102616744595_"
                cx="933.154"
                cy="379.407"
                r="1"
                gradientTransform="matrix(0 1.383 -22.062 0 8666.844 -874.343)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line2"
                style={{
                  fill: "url('#SVGID_00000160884932222649316020000009025701102616744595_')",
                  transformOrigin: "0px 0px",
                }}
                d="M295.3 416.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="294.29998779296875 416.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000121239663318848982630000000764338418169209785_"
                cx="35.753"
                cy="347.813"
                r="1"
                gradientTransform="matrix(0 -1.6986 27.0967 0 -9112.354 478.977)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line2"
                style={{
                  fill: "url('#SVGID_00000121239663318848982630000000764338418169209785_')",
                  transformOrigin: "0px 0px",
                }}
                d="M295.3 416.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="294.29998779296875 416.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000167367324007614905700000004715508668448447926_"
                cx="-65.19"
                cy="344.259"
                r="1"
                gradientTransform="matrix(0 -1.3582 21.6661 0 -7164.456 329.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line2"
                style={{
                  fill: "url('#SVGID_00000167367324007614905700000004715508668448447926_')",
                  transformOrigin: "0px 0px",
                }}
                d="M295.3 416.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="294.29998779296875 416.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000075853877911869545630000016868615233920188805_"
                cx="787.639"
                cy="371.338"
                r="1"
                gradientTransform="matrix(0 1.9594 -41.1104 0 15588.6 -1127.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line2"
                style={{
                  fill: "url('#SVGID_00000075853877911869545630000016868615233920188805_')",
                  transformOrigin: "0px 0px",
                }}
                d="M295.3 416.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="294.29998779296875 416.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <path
                className="red_line6"
                d="M849.3 374.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="848.2999877929688 374.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,-31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000023990732746241381890000009293918174144005807_"
                cx="933.154"
                cy="379.407"
                r="1"
                gradientTransform="matrix(0 1.383 -22.062 0 9220.844 -916.343)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line6"
                style={{
                  fill: "url('#SVGID_00000023990732746241381890000009293918174144005807_')",
                  transformOrigin: "0px 0px",
                }}
                d="M849.3 374.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="848.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000168088377830927568450000000066596905351835825_"
                cx="35.753"
                cy="347.813"
                r="1"
                gradientTransform="matrix(0 -1.6986 27.0967 0 -8558.353 436.977)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line6"
                style={{
                  fill: "url('#SVGID_00000168088377830927568450000000066596905351835825_')",
                  transformOrigin: "0px 0px",
                }}
                d="M849.3 374.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="848.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000123435624788013508750000000147608740676571575_"
                cx="-65.19"
                cy="344.259"
                r="1"
                gradientTransform="matrix(0 -1.3582 21.6661 0 -6610.456 287.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line6"
                style={{
                  fill: "url('#SVGID_00000123435624788013508750000000147608740676571575_')",
                  transformOrigin: "0px 0px",
                }}
                d="M849.3 374.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="848.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000078743477591857026260000015779556248715645370_"
                cx="787.639"
                cy="371.338"
                r="1"
                gradientTransform="matrix(0 1.9594 -41.1104 0 16142.6 -1169.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line6"
                style={{
                  fill: "url('#SVGID_00000078743477591857026260000015779556248715645370_')",
                  transformOrigin: "0px 0px",
                }}
                d="M849.3 374.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="848.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-31,0)"
              ></path>
              <path
                className="red_line7"
                d="M812.3 434.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="811.2999877929688 434.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000165954294312777929160000012621540641371182269_"
                cx="933.154"
                cy="397.983"
                r="1"
                gradientTransform="matrix(0 1.383 -10.6752 0 5060.84 -856.344)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line7"
                style={{
                  fill: "url('#SVGID_00000165954294312777929160000012621540641371182269_')",
                  transformOrigin: "0px 0px",
                }}
                d="M812.3 434.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="811.2999877929688 434.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000056427003151185888670000006291362377983691426_"
                cx="35.753"
                cy="332.688"
                r="1"
                gradientTransform="matrix(0 -1.6986 13.1113 0 -3542.008 496.978)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line7"
                style={{
                  fill: "url('#SVGID_00000056427003151185888670000006291362377983691426_')",
                  transformOrigin: "0px 0px",
                }}
                d="M812.3 434.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="811.2999877929688 434.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000171687791223164601410000006756358701121890466_"
                cx="-65.19"
                cy="325.343"
                r="1"
                gradientTransform="matrix(0 -1.3582 10.4836 0 -2599.48 347.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line7"
                style={{
                  fill: "url('#SVGID_00000171687791223164601410000006756358701121890466_')",
                  transformOrigin: "0px 0px",
                }}
                d="M812.3 434.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="811.2999877929688 434.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000066503206111372322170000017458791485530632127_"
                cx="787.639"
                cy="381.307"
                r="1"
                gradientTransform="matrix(0 1.9594 -19.8921 0 8410.054 -1109.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line7"
                style={{
                  fill: "url('#SVGID_00000066503206111372322170000017458791485530632127_')",
                  transformOrigin: "0px 0px",
                }}
                d="M812.3 434.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="811.2999877929688 434.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <path
                className="red_line4"
                d="M780.3 325.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="779.2999877929688 325.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,0,0)"
              ></path>
              <radialGradient
                id="SVGID_00000145040464409268171620000018391167454423789757_"
                cx="933.154"
                cy="397.983"
                r="1"
                gradientTransform="matrix(0 1.383 -10.6752 0 5028.84 -965.343)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line4"
                style={{
                  fill: "url('#SVGID_00000145040464409268171620000018391167454423789757_')",
                  transformOrigin: "0px 0px",
                }}
                d="M780.3 325.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="779.2999877929688 325.1000061035156"
                transform="matrix(1,0,0,1,0,0)"
              ></path>
              <radialGradient
                id="SVGID_00000157995914593439862350000002313001356738831513_"
                cx="35.753"
                cy="332.688"
                r="1"
                gradientTransform="matrix(0 -1.6986 13.1113 0 -3574.008 387.977)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line4"
                style={{
                  fill: "url('#SVGID_00000157995914593439862350000002313001356738831513_')",
                  transformOrigin: "0px 0px",
                }}
                d="M780.3 325.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="779.2999877929688 325.1000061035156"
                transform="matrix(1,0,0,1,0,0)"
              ></path>
              <radialGradient
                id="SVGID_00000023252186756655141350000003940086188962395572_"
                cx="-65.19"
                cy="325.343"
                r="1"
                gradientTransform="matrix(0 -1.3582 10.4836 0 -2631.48 238.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line4"
                style={{
                  fill: "url('#SVGID_00000023252186756655141350000003940086188962395572_')",
                  transformOrigin: "0px 0px",
                }}
                d="M780.3 325.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="779.2999877929688 325.1000061035156"
                transform="matrix(1,0,0,1,0,0)"
              ></path>
              <radialGradient
                id="SVGID_00000017476301930557408290000015324260892163986877_"
                cx="787.639"
                cy="381.307"
                r="1"
                gradientTransform="matrix(0 1.9594 -19.8921 0 8378.054 -1218.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line4"
                style={{
                  fill: "url('#SVGID_00000017476301930557408290000015324260892163986877_')",
                  transformOrigin: "0px 0px",
                }}
                d="M780.3 325.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="779.2999877929688 325.1000061035156"
                transform="matrix(1,0,0,1,0,0)"
              ></path>
              <path
                className="red_line5"
                d="M711.3 374.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="710.2999877929688 374.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000101071861345716419090000014887824497946751377_"
                cx="933.154"
                cy="397.983"
                r="1"
                gradientTransform="matrix(0 1.383 -10.6752 0 4959.84 -916.343)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line5"
                style={{
                  fill: "url('#SVGID_00000101071861345716419090000014887824497946751377_')",
                  transformOrigin: "0px 0px",
                }}
                d="M711.3 374.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="710.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000011739621687522016750000016234214212812734621_"
                cx="35.753"
                cy="332.688"
                r="1"
                gradientTransform="matrix(0 -1.6986 13.1113 0 -3643.008 436.977)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line5"
                style={{
                  fill: "url('#SVGID_00000011739621687522016750000016234214212812734621_')",
                  transformOrigin: "0px 0px",
                }}
                d="M711.3 374.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="710.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000152968241591815673700000001017895551560221366_"
                cx="-65.19"
                cy="325.343"
                r="1"
                gradientTransform="matrix(0 -1.3582 10.4836 0 -2700.48 287.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line5"
                style={{
                  fill: "url('#SVGID_00000152968241591815673700000001017895551560221366_')",
                  transformOrigin: "0px 0px",
                }}
                d="M711.3 374.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="710.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <radialGradient
                id="SVGID_00000137853771697433278720000004503821577841899673_"
                cx="787.639"
                cy="381.307"
                r="1"
                gradientTransform="matrix(0 1.9594 -19.8921 0 8309.054 -1169.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line5"
                style={{
                  fill: "url('#SVGID_00000137853771697433278720000004503821577841899673_')",
                  transformOrigin: "0px 0px",
                }}
                d="M711.3 374.1h13c.6 0 1 .4 1 1s-.4 1-1 1h-13c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="710.2999877929688 374.1000061035156"
                transform="matrix(1,0,0,1,-15,0)"
              ></path>
              <path
                className="red_line3"
                d="M221.3 428.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="220.3000030517578 428.1000061035156"
                style={{ transformOrigin: "0px 0px" }}
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000139988598515475903400000011782586770024002985_"
                cx="933.154"
                cy="379.407"
                r="1"
                gradientTransform="matrix(0 1.383 -22.062 0 8592.844 -862.344)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffa57a" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line3"
                style={{
                  fill: "url('#SVGID_00000139988598515475903400000011782586770024002985_')",
                  transformOrigin: "0px 0px",
                }}
                d="M221.3 428.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="220.3000030517578 428.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000138537508296833139570000007107763450286065538_"
                cx="35.753"
                cy="347.813"
                r="1"
                gradientTransform="matrix(0 -1.6986 27.0967 0 -9186.354 490.978)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#7174c7" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line3"
                style={{
                  fill: "url('#SVGID_00000138537508296833139570000007107763450286065538_')",
                  transformOrigin: "0px 0px",
                }}
                d="M221.3 428.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="220.3000030517578 428.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000091725097023022382540000015216234695623173812_"
                cx="-65.19"
                cy="344.259"
                r="1"
                gradientTransform="matrix(0 -1.3582 21.6661 0 -7238.456 341.502)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#f76751" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line3"
                style={{
                  fill: "url('#SVGID_00000091725097023022382540000015216234695623173812_')",
                  transformOrigin: "0px 0px",
                }}
                d="M221.3 428.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="220.3000030517578 428.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
              <radialGradient
                id="SVGID_00000129923917794716043250000012415193113880883611_"
                cx="787.639"
                cy="371.338"
                r="1"
                gradientTransform="matrix(0 1.9594 -41.1104 0 15514.6 -1115.162)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#ffdf80" }}></stop>
                <stop
                  offset="1"
                  style={{ stopColor: "#fc576e", stopOpacity: "0" }}
                ></stop>
              </radialGradient>
              <path
                className="red_line3"
                style={{
                  fill: "url('#SVGID_00000129923917794716043250000012415193113880883611_')",
                  transformOrigin: "0px 0px",
                }}
                d="M221.3 428.1h29c.6 0 1 .4 1 1s-.4 1-1 1h-29c-.6 0-1-.4-1-1s.4-1 1-1z"
                data-svg-origin="220.3000030517578 428.1000061035156"
                transform="matrix(1,0,0,1,31,0)"
              ></path>
            </svg>
            <motion.picture
              className="RevenueX_revenuex__fVCjw RevenueX_android_circle__U0tjd android_circle [--play-initial-transform:translate3d(5rem,0,0)_scaleX(1.1)_translate(-10%,-50%)_translate(0,350px)] [--play-in-view-transform:translateX(0)_translate(-10%,-50%)_translate(0,350px)_scale(1.3)] 
              
              [@media(min-width:1800px)]:[--play-initial-transform:translate3d(5rem,0,0)_scaleX(1.1)_translate(-10%,-50%)_translate(0,600px)] 
              [@media(min-width:1800px)]:[--play-in-view-transform:translateX(0)_translate(-10%,-50%)_translate(0,600px)_scale(1.1)]
              
              md:[--play-initial-transform:translate3d(7rem,0,0)_scaleX(1)_translate(0,-49.6%)_translate(0,459px)] md:[--play-in-view-transform:translateX(0)_translate(-80%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1400px)]:[--play-in-view-transform:translateX(0)_translate(-35%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1440px)]:[--play-in-view-transform:translateX(0)_translate(-40%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1200px)]:[--play-in-view-transform:translateX(0)_translate(-45%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]
              
              lg:[--play-initial-transform:translate3d(5rem,0,0)_scaleX(1)_translate(0,-49.6%)_translate(0,459px)] lg:[--play-in-view-transform:translateX(0)_translate(-60%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)] [@media(max-height:430px)]:[--play-in-view-transform:translateX(0)_translate(-65%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]"
              {...getPlayAppearAnimation()}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="android_circle"
                  src="/assets/home/android_circle.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </motion.picture>
            <motion.picture
              className="RevenueX_revenuex__fVCjw RevenueX_apple_circle_clear__RVxvI apple_circle_clear [--apple-initial-transform:translate3d(-5rem,0,0)_scaleX(1.1)_translate(10%,-50%)_translate(0,350px)] [--apple-in-view-transform:translateX(0)_translate(10%,-50%)_translate(0,350px)_scale(1.3)]
              
              [@media(min-width:1800px)]:[--apple-initial-transform:translate3d(-5rem,0,0)_scaleX(1.1)_translate(10%,-50%)_translate(0,600px)]
              [@media(min-width:1800px)]:[--apple-in-view-transform:translateX(0)_translate(10%,-50%)_translate(0,600px)_scale(1.1)]
              
              md:[--apple-initial-transform:translate3d(-7rem,0,0)_scaleX(1)_translate(0,-49.6%)_translate(0,459px)] md:[--apple-in-view-transform:translateX(0)_translate(-80%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1700)]:[--apple-in-view-transform:translateX(0)_translate(-35%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1400px)]:[--apple-in-view-transform:translateX(0)_translate(-30%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1440px)]:[--apple-in-view-transform:translateX(0)_translate(-40%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]

              [@media(min-width:1200px)]:[--apple-in-view-transform:translateX(0)_translate(-50%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]
              
              lg:[--apple-initial-transform:translate3d(-3rem,0,0)_scaleX(1)_translate(0,-49.6%)_translate(0,459px)] lg:[--apple-in-view-transform:translateX(0)_translate(-60%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)] [@media(max-height:430px)]:[--apple-in-view-transform:translateX(0)_translate(-65%,-49.6%)_translate(624px,459px)_scale(0.96,0.96)]"
              {...getAppleAppearAnimation()}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="clear"
                  src="/assets/home/apple_circle_clear.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </motion.picture>
            <motion.picture
              className="RevenueX_revenuex__fVCjw RevenueX_revenueChipPng_blur__XNdtd revenueChipPng_blur [--blur-initial-transform:scale3d(1,1,1)_translate(0%,-50%)_translate(0px,350px)] [--blur-in-view-transform:scaleX(1.5)_translate(0%,-50%)_translate(0px,350px)] md:[--blur-initial-transform:scale3d(0.95,1,1)_translate(0%,-50%)_translate(0px,459px)] md:[--blur-in-view-transform:scaleX(1)_translate(0%,-50%)_translate(0px,459px)]
              
              [@media(min-width:1800px)]:[--blur-initial-transform:scale3d(1,1,1)_translate(0%,-50%)_translate(0px,600px)]
              [@media(min-width:1800px)]:[--blur-in-view-transform:scaleX(1.2)_translate(0%,-50%)_translate(0px,600px)]
              "
              {...getChipBlurAppearAnimation()}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="light"
                  src="/assets/home/light.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </motion.picture>
            <motion.picture
              className="RevenueX_revenuex__fVCjw RevenueX_revenuechip_line__jbVHE revenuechip_line transform translate-x-[0%] translate-y-[calc(350px-50%)] md:translate-y-[calc(459px-50%)] scale-150 md:scale-100 [@media(min-width:1800px)]:translate-y-[calc(600px-50%)]
              "
              {...getChipLineAppearAnimation()}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="line"
                  src="/assets/home/revenuechip_line.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </motion.picture>
            <motion.picture
              className="RevenueX_revenuex__fVCjw RevenueX_revenuechip_clear__F_NzH revenuechip_clear 
              
              transform md:translate-x-[0%] translate-y-[calc(350px-50%)] md:translate-y-[calc(459px-50%)] scale-150 md:scale-100 [@media(min-width:1800px)]:translate-y-[calc(600px-50%)]
              "
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
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
                    opacity: "1",
                    border: "0",
                    margin: "0",
                    padding: "0",
                    paddingTop: "68.125%",
                  }}
                ></span>
                <img
                  alt="revenuechip_clear"
                  src="/assets/home/revenuechip_clear.png"
                  decoding="async"
                  data-nimg="responsive"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0",
                    boxSizing: "border-box",
                    padding: "0",
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
                  sizes="100vw"
                />
              </span>
            </motion.picture>
          </div>
          <motion.div
            className="RevenueX_container__PIaa0 RevenueX_contentAppear__YC7Cz contentAppear"
            {...getMotionFadeInAndZoomInAnimation()}
          >
            <p className="Text_text--display-m__q0ZjI Text_text--weight-bold__jl20H RevenueX_subtitle__kqFZJ">
              <span className="">
                RevenueT is the ultimate <b>In-app purchase</b> tracking and
                revenue maximization engine that we internally developed to
                power our family of apps.
              </span>
            </p>
            <p className="Text_text--headline-m__C9G6u Text_text--weight-medium__uNX0v RevenueX_description__A7QpP">
              <span>
                Our subscription revenue is up by 50% with RevenueT. It&apos;s
                time to launch the beta version of our first commercial B2B
                product to other publishers.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Chip;
