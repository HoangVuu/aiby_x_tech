const FadeIn = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
  },
};

// const FadeOut = {
//   initial: {
//     opacity: 1,
//   },
//   whileInView: {
//     opacity: 0,
//   },
// };

const SlideIn = {
  initial: {
    transform: 'translate3d(0, 1.875rem, 0) scaleX(1)',
  },
  whileInView: {
    transform: 'translateZ(0) scaleX(1)',
  },
};

const ZoomIn = {
  initial: {
    transform: 'scale3d(0.95, 0.95, 1)',
  },
  whileInView: {
    transform: 'scaleX(1)',
  },
};

// const ZoomInBig = {
//   initial: {
//     transform: "scale3d(0.3, 0.3, 1)",
//   },
//   whileInView: {
//     transform: "scaleX(1)",
//   },
// };

const ZoomOut = {
  initial: {
    transform: 'scale(1.1)',
  },
  whileInView: {
    transform: 'scale(1)',
  },
};

// const Pulse = {
//   initial: {
//     boxShadow: "0 0 0 0 rgba(255, 0, 0, 0.6)",
//   },
//   animate: {
//     boxShadow: "0 0 0 0.5rem rgba(255, 0, 0, 0)",
//   },
// };

const getMotionFadeInAnimation = (delay = 0) => ({
  ...FadeIn,
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: 'easeOut',
    delay,
  },
});

const getMotionFadeInAndSlideUpAnimation = (delay = 0.5) => ({
  initial: {
    ...FadeIn.initial,
    ...SlideIn.initial,
  },
  whileInView: {
    ...FadeIn.whileInView,
    ...SlideIn.whileInView,
  },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: 'easeOut',
    delay: delay,
  },
});

const getMotionFadeInAndZoomInAnimation = (delay = 0.5) => ({
  initial: {
    ...FadeIn.initial,
    ...ZoomIn.initial,
  },
  whileInView: {
    ...FadeIn.whileInView,
    ...ZoomIn.whileInView,
  },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: 'easeOut',
    delay,
  },
});

const getMotionFadeInAndZoomOutAnimation = (delay = 0.5) => ({
  initial: {
    ...FadeIn.initial,
    ...ZoomOut.initial,
  },
  whileInView: {
    ...FadeIn.whileInView,
    ...ZoomOut.whileInView,
  },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: 'easeOut',
    delay,
  },
});

const getMotionFadeInFromLeftToRightAnimation = (delay = 0.5) => ({
  initial: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)',
  },
  whileInView: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: 'easeOut',
    delay: delay,
  },
});

// const getMotionPulseAnimation = () => ({
//   ...Pulse,
//   transition: {
//     duration: 1.6,
//     ease: "easeOut",
//     repeat: Infinity,
//   },
// });

export {
  getMotionFadeInAnimation,
  getMotionFadeInAndSlideUpAnimation,
  getMotionFadeInAndZoomInAnimation,
  getMotionFadeInAndZoomOutAnimation,
  getMotionFadeInFromLeftToRightAnimation,
};
