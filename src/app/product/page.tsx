"use client";

import { motion } from 'motion/react';
import './Product.css';
import ComingSoon from '@/components/coming-soon/ComingSoon';
import Image from 'next/image';

const getMotionAppearAnimation = () => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
});

export default function ProductPage() {
  return (
    <>
    <section className="Hero_hero__product">
      <div className="Hero_container__product">
        <h1 className="Text_text--display-m Text_text--weight-bold">
          <span className="Text_text--gradient-orange">
            Portfolio of apps
          </span>
        </h1>
        <p className="Text_text--body-xl Text_text--weight-medium Hero_description__product">
          <span className="">
            We are passionately building and publishing apps that are used and
            loved all around the world. Below you&apos;ll find a few examples of
            the products that we build, invest & publish.
          </span>
        </p>
      </div>
      <motion.div
        {...getMotionAppearAnimation()}
        className="Hero_image__product"
      >
        <div className="Hero_image__container__product">
          <div className="Hero_image__wrapper__product">
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
                  paddingTop: "62.5%",
                }}
              ></span>
              <Image
                alt="hero"
                sizes="100vw"
                src="assets/product-page/hero.png"
                decoding="async"
                data-nimg="responsive"
                style={{
                  opacity: 1,
                  transform: "scale(1)",
                  transitionDuration: "1000ms",
                  transitionProperty: "opacity, transform",
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
        </div>
      </motion.div>
    </section>

    <section>
      <ComingSoon title="Products"/>
    </section>

    {/* <section className="Product_product Product_product--dark Nova_nova">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <div className="Nova_nova__mockup-container">
            <motion.div
              className="ProductHeroImage_product-hero-image Nova_nova__mockup"
              {...getMotionFadeInAndSlideUpAnimation()}
            >
              <div className="ProductHeroImage_product-hero-image__outer">
                <div className="ProductHeroImage_product-hero-image__inner">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        width: 'initial',
                        height: 'initial',
                        background: 'none',
                        opacity: '1',
                        border: '0',
                        margin: '0',
                        padding: '0',
                        paddingTop: '90.9090909090909%',
                      }}
                    ></span>
                    <img
                      alt=""
                      src="assets/product-page/hero(1).png"
                      decoding="async"
                      data-nimg="responsive"
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                      }}
                      sizes="100vw"
                    />
                  </span>
                </div>
              </div>
            </motion.div>
            <div className="Nova_nova__chat">
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271063%27%20height=%27398%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/chat-image.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
                <noscript>
                  <img
                    alt=""
                    src="assets/product-page/chat-image.png"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                  />
                </noscript>
              </span>
            </div>
          </div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              {...getMotionFadeInAnimation()}
              className="ProductLogo_product-logo"
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Nova</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">
                  Turn your phone into an AI-powered assistant
                </span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Nova is the #1 cross-compatible AI chatbot powered by ChatGPT
                & GPT4. The advanced AI-powered technology understands your
                questions and generates human-like responses, making you feel
                like chatting with a knowledgeable friend.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://novaapp.ai/"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--light">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '96.9696%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.8
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '93.93929999999999%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.6
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title"
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Speech to text
              <br />
              technology
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1.png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Speak in any
              <br />
              language
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2.png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Get instant
              <br />
              answers
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt="Someone is scaning document papers with her phone"
                src="assets/product-page/marketing-3.png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--dark">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Lu Kang
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Nova is capable of performing a wide variety of tasks,
                including administrative and customer support services,
                research and data analysis, and many others.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Ethan Clack
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I found Nova to be highly efficient, reliable, and
                knowledgeable in providing helpful responses to any inquiries
                I had. Nova proved to be an intelligent assistant, ensuring
                that I received the best guidance.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    cbntl87
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I recently started using Nova, and I’m so impressed with its
                capabilities! This knowledgeable virtual assistant has been a
                lifesaver for me when it comes to managing my daily tasks and
                getting things done efficiently.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Marie Hawk
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Nova is a remarkably impressive and efficient app that I would
                highly recommend to anyone needing a personal assistant. Its
                user-friendly interface is easy to navigate, making it simple
                to manage your schedule.
              </span>
            </p>
          </div>
        </div>
        <div className="Nova_background">
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              position: 'relative',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                paddingTop: '87.5%',
              }}
            ></span>
            <img
              alt=""
              src="assets/product-page/nova-background.png"
              decoding="async"
              data-nimg="responsive"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                boxSizing: 'border-box',
                padding: '0',
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: '0',
                height: '0',
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%',
              }}
              sizes="100vw"
            />
            <noscript>
              <img
                alt=""
                sizes="100vw"
                src="assets/product-page/nova-background.png"
                decoding="async"
                data-nimg="responsive"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                }}
              />
            </noscript>
          </span>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light PlantApp_plant-app">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(2).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(1).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold PlantApp_plant-app__title">
                <span className="">PlantApp</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">
                  Everything you need to know about plants is in your pocket.
                </span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                PlantApp® identifies 100,000+ plants every day with 95%
                accuracy-better than most human experts. Plus, with its
                disease identification feature, you can diagnose any plant
                problem and get treatment suggestions.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://plantapp.app/"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--dark">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '95.45445000000001%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.7
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '95.45445000000001%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.7
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">12</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Identify any
              <br />
              plant
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(1).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Diagnose Plant Illness
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(1).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Set care reminders
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(1).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--light">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    upseviali
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Absolutely love this app to help take care of my plants, some
                plants I struggled with but this app has been correct so far,
                all my garden is blooming 🌺🌸🌱🌷
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    ntrankletedusea
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I’ve always had houseplants but recently have taken an
                interest in how to care for them best. This app is fantastic -
                love the video how-to’s & helpful hints & tips. So much info.
                Love it & look forward to seeing my houseplants thrive! 🌸
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    curepaultroc
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I love the fact that I can know how and when to care for my
                plants! I love that they have have really great user
                experience, and are constantly adding new features. My
                favourite is the reminder to water and fertilize my plants,
                all according to each plant's individual needs
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    liockho
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                At first glance, I thought I made a mistake buying this app.
                But once I went deeper into it, it is excellent. It has all
                kinds of pictures and discriptions of plants and problems
                etc.. you can search by plant or disease issues etc.. good
                job!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark DaVinci_davinci-app">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(3).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(2).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold DaVinci_davinci-app__title">
                <span className="">DaVinci</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle DaVinci_davinci-app__subtitle">
                <span className="">
                  Turn your thoughts into amazing AI artwork
                </span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Transform your words and images into stunning AI art and
                avatar with DaVinci art generator in seconds! DaVinci
                innovative technology uses the power of AI to turn your ideas
                into high-quality unique digital art, based on your own words.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://davinci.ai/"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--light">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '84.8484%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.0
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '93.93929999999999%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.6
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">1</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images DaVinci_davinci-app__images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            ></motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(2).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Turn your words into artwork
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(2).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Unleash your creativity
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(2).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--dark">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Ava Miller
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                mind-blowing! DaVinci has become my go-to app for creating
                stunning visuals. the AI-powered features are incredible and
                make the process so effortless. it is user-friendly and the
                results are always impressive.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Noah Taylor
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                A game-changer for visual content. I can effortlessly bring my
                ideas to life, thanks to the apps intuitive interface and
                powerful AI algorithms. highly recommended.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Sophia Clark
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                DaVinci is pure magic! I'm amazed at how this app can turn my
                simple sketches into professional-grade visuals. The AI
                technology understands my style and enhances it, resulting in
                breathtaking artwork.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Liam Wilson
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                DaVinci is a hidden gem! I stumbled upon this app while
                searching for a tool to create visuals and it has exceeded all
                my expectations. It helps me create unique and eye-catching
                visuals that grab attention. DaVinci has become an
                indispensable part of my creative toolkit!
              </span>
            </p>
          </div>
        </div>
        <div className="DaVinci_background">
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              position: 'relative',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                paddingTop: '87.5%',
              }}
            ></span>
            <img
              alt=""
              src="assets/product-page/hero-background.e56d56f0dc3d8aa96658cbdb08b6fd92.svg"
              decoding="async"
              data-nimg="responsive"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                boxSizing: 'border-box',
                padding: '0',
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: '0',
                height: '0',
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%',
              }}
              sizes="100vw"
            />
          </span>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark PhotoApp_photo-app">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(4).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(3).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">PhotoApp</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">AI Photo Quality Enhancer</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                PhotoApp is the fastest and most powerful AI photo enhancer
                app.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                You can enhance your old, pixelated, blurry or damaged photos
                into high-definition ones with just a single tap with the
                latest technology!
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://photoapp.org/"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--light">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '95.45445000000001%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.7
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '92.42415000000001%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.5
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">10</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt="Before and after view of photo enhancer feature"
                src="assets/product-page/marketing-1(3).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt="Before and after view of photo colorize feature"
                src="assets/product-page/marketing-2(3).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(3).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--dark">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    ntulescryper
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I had a picture that I took the other day, and I wanted to
                make it better quality… it was blurry- BUT this app has made
                that photo 1000 times better! My eyes seriously look like
                crystals! Great app, will be using it for all my blurry or bad
                quality photos. 😄
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    waylkyheloide99
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                This app blows my mind every time! If you need to enhance your
                photo, you’re at the right address!
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    kampalowo
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I have a picture that I tried to clear up with PhotoApp and it
                turned out crystal clear. And I'm talking about a picture from
                1933.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    inalmonsalealaus
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Colorizing old photos of my family made me realize my
                grandma’s beauty, this is so appealing
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light FastVpn_fastvpn">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt="FastVPN is working on phone, tablet and laptop"
                    src="assets/product-page/hero(5).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(4).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">FastVPN</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Unlimited Privacy and Security</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                FastVPN is the safest, most private, and most secure VPN in
                the App Store. Unlike our competitors, we do not collect,
                store or sell your data. The privacy of our users is of utmost
                importance and our commitment to protecting their data is
                unrivaled.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://thefastvpn.com/"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--dark">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '92.42415000000001%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.5
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '92.42415000000001%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.5
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Fastest VPN Servers
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(4).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Trusted around the world
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(4).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Utmost Privacy
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(4).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--light">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    A really great working vpn app!
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    rozannewilmer
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I have been using it for about 4 months without any problems.
                No issues faced & it’s really fast 👍
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    5 star app, great!
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    kristine9982
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I had to download this application due to the ban in my
                country. I am really glad. It’s really good at speed. I can
                access any content with it.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    The Best 🤩
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    meghanua_12
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Perfect app, perfect speed, perfect support. Love it.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    10/10 ✅
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    thevpnfreak
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Using many VPN apps for a while. Really happy with the service
                compared to other apps. Thanks FastVPN team!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark Mimic_mimic">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(6).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(5).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Mimic</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle Mimic_mimic__subtitle">
                <span className="">Make your photos sing</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Choose a photo, pick a song, and make it dance! The result?
                Videos that are hilarious, bizarre, fun, and ready to go
                viral. No dancing lessons are required.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Mimic is the world's best AI-powered photo animating app that
                turns pictures into fun videos.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://mimicapp.co/"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--light">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '96.9696%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.8
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '92.42415000000001%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.5
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">13</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images Mimic_mimic__bold-text">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(5).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              <span className="Mimic_mimic__second-text">
                <b>Lip Sync</b>
                <br />
                Your Favourite Songs
              </span>
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(5).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(5).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--dark">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    omeashuraquis13
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                This is the best and most fun app ever. Has a large variety of
                song selection. Recommend it for everyone. Works best on baby
                photos haha 😂
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    ganenthert
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Really awesome, lots of fun, very funny, it's a winner and
                highly recommended
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    emciage
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                OMG i LOVE this app! The result videos are so funny and there
                are literally bunch of songs to try. You should also try them.
                Ready to be amused! 5 stars!!!
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    deohambrequac
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Recommended to all my friends and having so much fun together.
                Whatsapp groups are full of these Mimic videos. And here is
                the incredible part: it is completely free ⭐⭐⭐⭐⭐
              </span>
            </p>
          </div>
        </div>
        <div className="Mimic_background">
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              position: 'relative',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                paddingTop: '32.013888888888886%',
              }}
            ></span>
            <img
              alt=""
              src="assets/product-page/background.png"
              decoding="async"
              data-nimg="responsive"
              style={{
                opacity: '1',
                transform: 'scale(1)',
                transitionDuration: '4000ms',
                transitionProperty: 'opacity, transform',
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
              }}
              sizes="100vw"
            />
          </span>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark FastScan_fast-scan">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(7).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(6).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">FastScan</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle FastScan_fast-scan__subtitle">
                <span className="">
                  Turn your phone into a powerful scanner
                </span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Say goodbye to the old, ugly scanner machine! Now you can
                carry a mobile scanner in your pocket — enjoy an advanced
                scanning experience along with many other features.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://fastscanapp.com/"
              className="Button_button Button_button--variant-filled-light Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--light">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '95.45445000000001%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      4.7
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--light ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '96.9696%',
                        color: 'var(--color-white)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.8
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images FastScan_fast-scan__bold-text">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Scan DOCS
              <br />
              to PDF
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(6).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              <b>Sign</b>
              <br />
              documents on the go
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(6).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt="Someone is scaning document papers with her phone"
                src="assets/product-page/marketing-3(6).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--dark">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Great product
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    scannerqueen
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I love this app! It’s so convenient and easy to use. The scans
                are clear and the features are great.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Effective and efficient
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    mobilemadness
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                💯 recommend this app for small business owners. I can scan
                and save receipts on the go. So convenient.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Clean UI
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    documentsaved
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I’ve tried several mobile scanner apps, but this one is the
                best. The UI is clean and the scans are great. Highly
                recommend.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--dark ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Easy to use
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    scannernerd
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I was hesitant to try a mobile scanner app, but I’m glad I
                did. It’s easy to use and has great features. I would
                recommend it.
              </span>
            </p>
          </div>
        </div>
        <div className="FastScan_background"></div>
      </div>
    </section>
    <section className="Product_product Product_product--light Wiser_wiser">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(8).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(7).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Wiser</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">15-minute audio books.</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p>
                Listen, and read a wide range of books designed to help you
                think and learn about your self-growth path and gain insight
                into only 15-minutes book summaries on the go.
              </p>
              <ul className="Wiser_wiser__list">
                <li>Listen to the audible version on the go.</li>
                <li>Personalized recommendations based on your goals.</li>
                <li>
                  Beautifully designed settings for comfortable reading.
                </li>
                <li>
                  Increase your memory and analytical thinking abilities.
                </li>
              </ul>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://wiserapp.co/"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--dark">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '106.06050000000002%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      5.0
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '84.8484%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.0
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images Wiser_wiser__images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Challenge <br />
              Yourself
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(7).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Best-Seller <br />
              Books
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(7).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              Listen & <br />
              Read
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(7).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--light">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Ethan Devis
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Wiser has completely transformed the way I consume knowledge.
                With its vast collection of book summaries, I can explore
                various topics like productivity, business, health.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Olivia Brown
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                A gateway to endless wisdom! Wiser has become my go-to app for
                quick yet powerful learning. The book summaries are concise
                and packed with valuable insights.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Emily Johnson
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Wiser is a time-saving treasure trove. Wiser’s book summaries
                have been a lifesaver. In just 15 minutes, I can absorb the
                key takeaways from renowned books on various subjects.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Alex Smith
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Discover the power of knowledge with Wiser! This app has
                opened up a world of insights for me. I love how it covers a
                wide range of topics, from personal development to finance and
                beyond.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark Momo_momo">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(9).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(8).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <motion.div
              className="ProductLogo_product-logo  Momo_momo__title-image"
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/momo.png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle Momo_momo__subtitle">
                <span className="">AI-Powered Photo Generator</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Momo is the revolutionary AI Photo Generator app with the most
                advanced AI technology.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Dive into the ultimate app designed for creating trendy and
                astonishing AI headshots that show your personality.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Momo AI Photo Generator contains cutting-edge AI technology to
                train your AI profile, simplifying the process of image
                creation. Immerse yourself in a visual transformation where
                the precision of AI Photo converges with the inspiration of AI
                Art, turning average images into captivating headshots that
                show your personality.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://momoai.co/"
              className="Button_button Button_button--variant-outlined-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <div className="ProductImages_product-images Momo_momo__bold-text">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              AI-Powered Photo Editor
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(8).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <motion.p
              className="ProductImage_product-image__title "
              {...getMotionFadeInAndZoomInAnimation()}
            >
              <span className="Momo_momo__second-text">
                <b>Style Variety</b> Discover
                <br />
                styles
              </span>
            </motion.p>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(8).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt="Features of MOMO mobile app"
                src="assets/product-page/marketing-3(8).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="Momo_background"></div>
      </div>
    </section>
    <section className="Product_product Product_product--light Retouch_retouch">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(10).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(9).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Retouch</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">
                  The ultimate one-tap photo editing solution
                </span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                This AI-powered app combines 150+ photo editing features and
                makes them easily accessible with a simple and user-friendly
                interface, adopting a one-tap functionality.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Retouch is designed for anyone who wants to professionally
                polish their photos without spending hours editing them.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://re-touch.app/"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="ProductHeroMeta_product-hero-meta">
            <div className="ProductHeroMeta_ratings ProductHeroMeta_ratings--dark">
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '106.06050000000002%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.849 17.2751C11.8567 18.2227 10.7619 18.075 9.71839 17.6282C8.60895 17.1725 7.5947 17.1436 6.42301 17.6282C4.96388 18.2479 4.18946 18.0677 3.31069 17.2751C-1.6507 12.2493 -0.918389 4.5935 4.72039 4.30528C6.08797 4.37733 7.04547 5.04924 7.85101 5.10508C9.04833 4.8655 10.1944 4.17918 11.4759 4.26925C13.0156 4.39174 14.1672 4.9898 14.9361 6.06522C11.7689 7.93864 12.5195 12.0458 15.4286 13.1986C14.8464 14.7028 14.0994 16.1889 12.8472 17.2878L12.849 17.2751ZM7.74116 4.25123C7.59287 2.01754 9.43279 0.180137 11.5492 0C11.8403 2.57596 9.16916 4.50343 7.74116 4.25123Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      5.0
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <div className="Rating_rating Rating_rating--dark ProductHeroMeta_ratings__rating">
                  <div className="Rating_rating__inner">
                    <div
                      className="Rating_rating__foreground"
                      style={{
                        width: '84.8484%',
                        color: 'var(--color-black)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="Rating_rating__background"
                      style={{
                        color: 'var(--color-silver)',
                      }}
                    >
                      <svg
                        width="66"
                        height="11"
                        viewBox="0 0 66 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold">
                  <span className="">
                    <span className="ProductHeroMeta_ratings__body">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.29678 0.254524C0.108657 0.456315 0 0.76465 0 1.16823V15.4824C0 15.886 0.108657 16.1943 0.303267 16.3881L0.353541 16.4316L8.41039 8.41169V8.2325L0.347054 0.210938L0.29678 0.254524Z"
                          fill="url(#paint0_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0896 11.0938L8.40234 8.41883V8.23157L11.0896 5.55664L11.148 5.59216L14.3266 7.39051C15.2364 7.90063 15.2364 8.74331 14.3266 9.25989L11.148 11.0582L11.0896 11.0938Z"
                          fill="url(#paint1_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 11.0573L8.40399 8.32422L0.296875 16.3942C0.593655 16.7106 1.09153 16.7461 1.64779 16.4378L11.1496 11.0573Z"
                          fill="url(#paint2_linear_1_4468)"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1496 5.59105L1.64779 0.218587C1.09153 -0.0978198 0.592033 -0.0542329 0.296875 0.262174L8.40399 8.32409L11.1496 5.59105Z"
                          fill="url(#paint3_linear_1_4468)"
                        ></path>
                        <path
                          opacity="0.2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.0926 11L1.65561 16.337C1.12854 16.6388 0.658229 16.6178 0.354962 16.3434L0.304688 16.3935L0.354962 16.437C0.658229 16.7099 1.12854 16.7325 1.65561 16.4306L11.1574 11.0581L11.0926 11Z"
                          fill="white"
                        ></path>
                        <path
                          opacity="0.25"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.6477 0.313085L14.3281 7.4839C14.7401 7.71475 14.972 8.01663 15.0077 8.32496C15.0077 7.98757 14.7839 7.64856 14.3281 7.39027L1.6477 0.219454C0.737896 -0.298743 0 0.133895 0 1.16868V1.26231C0 0.225911 0.737896 -0.198655 1.6477 0.313085Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_4468"
                            x1="7.6877"
                            y1="1.01379"
                            x2="-5.21009"
                            y2="4.46624"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#00A0FF"></stop>
                            <stop offset="0.00657" stopColor="#00A1FF"></stop>
                            <stop offset="0.2601" stopColor="#00BEFF"></stop>
                            <stop offset="0.5122" stopColor="#00D2FF"></stop>
                            <stop offset="0.7604" stopColor="#00DFFF"></stop>
                            <stop offset="1" stopColor="#00E3FF"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_4468"
                            x1="15.5131"
                            y1="8.32523"
                            x2="-0.22269"
                            y2="8.32523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FFE000"></stop>
                            <stop offset="0.4087" stopColor="#FFBD00"></stop>
                            <stop offset="0.7754" stopColor="#FFA500"></stop>
                            <stop offset="1" stopColor="#FF9C00"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_4468"
                            x1="9.65665"
                            y1="9.81139"
                            x2="-0.633815"
                            y2="27.2108"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF3A44"></stop>
                            <stop offset="1" stopColor="#C31162"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_4468"
                            x1="-1.74459"
                            y1="-4.50702"
                            x2="2.84639"
                            y2="3.26379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#32A071"></stop>
                            <stop offset="0.0685" stopColor="#2DA771"></stop>
                            <stop offset="0.4762" stopColor="#15CF74"></stop>
                            <stop offset="0.8009" stopColor="#06E775"></stop>
                            <stop offset="1" stopColor="#00F076"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      4.0
                    </span>
                  </span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">AGE</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">4+</span>
                </p>
              </div>
              <div className="ProductHeroMeta_ratings__item">
                <p className="Text_text--meta-title__Hy8qF Text_text--weight-medium">
                  <span className="">LANGUAGES</span>
                </p>
                <p className="Text_text--meta-body__Lhd1c Text_text--weight-bold ProductHeroMeta_ratings__body">
                  <span className="">7</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ProductImages_product-images">
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-1(9).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-2(9).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
          <motion.div
            className="ProductImage_product-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                position: 'relative',
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  paddingTop: '130.0561797752809%',
                }}
              ></span>
              <img
                alt=""
                src="assets/product-page/marketing-3(9).png"
                decoding="async"
                data-nimg="responsive"
                className="ProductImage_product-image__image"
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  bottom: '0',
                  right: '0',
                  boxSizing: 'border-box',
                  padding: '0',
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: '0',
                  height: '0',
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                sizes="100vw"
              />
            </span>
          </motion.div>
        </div>
        <div className="ProductReviews_product-reviews ProductReviews_product-reviews--light">
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Mary J.
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Finally, a photo editing app that delivers on its promises!
                Retouch is a dream come true for amateur photographers like
                me. The one-tap functionality is a game-changer.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Emma L.
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                I can’t imagine my photo editing routine without Retouch now.
                This app is a lifesaver! The simplicity of the interface
                combined with the extensive range of editing features is a
                winning combination.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Max P.
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                The app’s wide range of editing features, from skin smoothing
                to teeth whitening, make my photos look flawless effortlessly.
                I can’t believe how much time and effort I’ve saved thanks to
                this app.
              </span>
            </p>
          </div>
          <div className="ProductReviews_review">
            <div className="ProductReviews_review__header">
              <div className="Rating_rating Rating_rating--light ProductReviews_review__rating">
                <div className="Rating_rating__inner">
                  <div
                    className="Rating_rating__foreground"
                    style={{
                      width: '106.06050000000002%',
                      color: 'var(--color-salomie)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="Rating_rating__background"
                    style={{
                      color: 'var(--color-silver)',
                    }}
                  >
                    <svg
                      width="66"
                      height="11"
                      viewBox="0 0 66 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6735 0.248477C4.77624 -0.0828263 5.2236 -0.0828254 5.32634 0.248478L6.27137 3.29579C6.31732 3.44395 6.4491 3.54427 6.59779 3.54427L9.65596 3.54427C9.98845 3.54427 10.1267 3.99003 9.8577 4.19479L7.38359 6.07813C7.26329 6.1697 7.21296 6.33201 7.25891 6.48018L8.20393 9.52749C8.30668 9.85879 7.94476 10.1343 7.67577 9.92953L5.20166 8.04619C5.08136 7.95462 4.91847 7.95462 4.79818 8.04619L2.32407 9.92953C2.05508 10.1343 1.69316 9.85879 1.79591 9.52749L2.74093 6.48018C2.78688 6.33201 2.73655 6.1697 2.61625 6.07813L0.142138 4.19479C-0.126848 3.99003 0.0113931 3.54427 0.343877 3.54427L3.40205 3.54427C3.55074 3.54427 3.68252 3.44395 3.72847 3.29579L4.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M18.6696 0.248477C18.7723 -0.0828263 19.2197 -0.0828254 19.3224 0.248478L20.2675 3.29579C20.3134 3.44395 20.4452 3.54427 20.5939 3.54427L23.6521 3.54427C23.9845 3.54427 24.1228 3.99003 23.8538 4.19479L21.3797 6.07813C21.2594 6.1697 21.2091 6.33201 21.255 6.48018L22.2 9.52749C22.3028 9.85879 21.9409 10.1343 21.6719 9.92953L19.1978 8.04619C19.0775 7.95462 18.9146 7.95462 18.7943 8.04619L16.3202 9.92953C16.0512 10.1343 15.6893 9.85879 15.792 9.52749L16.737 6.48018C16.783 6.33201 16.7326 6.1697 16.6123 6.07813L14.1382 4.19479C13.8692 3.99003 14.0075 3.54427 14.34 3.54427L17.3981 3.54427C17.5468 3.54427 17.6786 3.44395 17.7246 3.29579L18.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M32.6735 0.248477C32.7762 -0.0828263 33.2236 -0.0828254 33.3263 0.248478L34.2714 3.29579C34.3173 3.44395 34.4491 3.54427 34.5978 3.54427L37.656 3.54427C37.9884 3.54427 38.1267 3.99003 37.8577 4.19479L35.3836 6.07813C35.2633 6.1697 35.213 6.33201 35.2589 6.48018L36.2039 9.52749C36.3067 9.85879 35.9448 10.1343 35.6758 9.92953L33.2017 8.04619C33.0814 7.95462 32.9185 7.95462 32.7982 8.04619L30.3241 9.92953C30.0551 10.1343 29.6932 9.85879 29.7959 9.52749L30.7409 6.48018C30.7869 6.33201 30.7365 6.1697 30.6163 6.07813L28.1421 4.19479C27.8732 3.99003 28.0114 3.54427 28.3439 3.54427L31.4021 3.54427C31.5507 3.54427 31.6825 3.44395 31.7285 3.29579L32.6735 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M46.6696 0.248477C46.7723 -0.0828263 47.2197 -0.0828254 47.3224 0.248478L48.2675 3.29579C48.3134 3.44395 48.4452 3.54427 48.5939 3.54427L51.6521 3.54427C51.9845 3.54427 52.1228 3.99003 51.8538 4.19479L49.3797 6.07813C49.2594 6.1697 49.2091 6.33201 49.255 6.48018L50.2 9.52749C50.3028 9.85879 49.9409 10.1343 49.6719 9.92953L47.1978 8.04619C47.0775 7.95462 46.9146 7.95462 46.7943 8.04619L44.3202 9.92953C44.0512 10.1343 43.6893 9.85879 43.792 9.52749L44.737 6.48018C44.783 6.33201 44.7326 6.1697 44.6123 6.07813L42.1382 4.19479C41.8692 3.99003 42.0075 3.54427 42.34 3.54427L45.3981 3.54427C45.5468 3.54427 45.6786 3.44395 45.7246 3.29579L46.6696 0.248477Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M60.6735 0.25043C60.7762 -0.0808732 61.2236 -0.0808722 61.3263 0.250431L62.2714 3.29774C62.3173 3.44591 62.4491 3.54622 62.5978 3.54622L65.656 3.54622C65.9884 3.54622 66.1267 3.99199 65.8577 4.19674L63.3836 6.08008C63.2633 6.17165 63.213 6.33397 63.2589 6.48213L64.2039 9.52944C64.3067 9.86074 63.9448 10.1362 63.6758 9.93148L61.2017 8.04814C61.0814 7.95657 60.9185 7.95657 60.7982 8.04814L58.3241 9.93149C58.0551 10.1362 57.6932 9.86074 57.7959 9.52944L58.7409 6.48213C58.7869 6.33397 58.7365 6.17165 58.6163 6.08008L56.1421 4.19674C55.8732 3.99199 56.0114 3.54622 56.3439 3.54622L59.4021 3.54622C59.5507 3.54622 59.6825 3.44591 59.7285 3.29774L60.6735 0.25043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="Text_text--body-s Text_text--weight-bold">
                <span className="">
                  <span className="ProductReviews_review__title">
                    Awesome app
                  </span>
                  by
                  <span className="ProductReviews_review__username">
                    Emily Y.
                  </span>
                </span>
              </p>
            </div>
            <p className="Text_text--body-m Text_text--weight-regular ProductReviews_review__body">
              <span className="">
                Retouch is a revelation! I’ve tried countless photo editing
                apps, but none have come close to the level of convenience and
                quality that this app offers. The one-tap functionality is a
                stroke of genius.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light IyiYasa_iyi-yasa">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(11).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo "
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(10).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">İyi yaşa.</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Have a happier and healthier life</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                İyi Yaşa is an online wellness platform that offers a wide
                range of content from the most trusted and experienced
                fitness, yoga, meditation, awareness, and nutrition trainers
                in Turkey!
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://www.iyiyasa.com/"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Explore</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light SpaceColony_space-colony">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right__t__9h">
          <motion.div
            className="ProductHeroImage_product-hero-image "
            {...getMotionFadeInAndSlideUpAnimation()}
          >
            <div className="ProductHeroImage_product-hero-image__outer">
              <div className="ProductHeroImage_product-hero-image__inner">
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    overflow: 'hidden',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      paddingTop: '90.9090909090909%',
                    }}
                  ></span>
                  <img
                    alt=""
                    src="assets/product-page/hero(12).png"
                    decoding="async"
                    data-nimg="responsive"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                      boxSizing: 'border-box',
                      padding: '0',
                      border: 'none',
                      margin: 'auto',
                      display: 'block',
                      width: '0',
                      height: '0',
                      minWidth: '100%',
                      maxWidth: '100%',
                      minHeight: '100%',
                      maxHeight: '100%',
                    }}
                    sizes="100vw"
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <motion.div
              className="ProductLogo_product-logo  SpaceColony_space-colony__logo"
              {...getMotionFadeInAnimation()}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'inline-block',
                  overflow: 'hidden',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: '1',
                  border: '0',
                  margin: '0',
                  padding: '0',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                <span
                  style={{
                    boxSizing: 'border-box',
                    display: 'block',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: '1',
                    border: '0',
                    margin: '0',
                    padding: '0',
                    maxWidth: '100%',
                  }}
                >
                  <img
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27120%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="assets/product-page/logo(11).png"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    boxSizing: 'border-box',
                    padding: '0',
                    border: 'none',
                    margin: 'auto',
                    display: 'block',
                    width: '0',
                    height: '0',
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </span>
            </motion.div>
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Space Colony</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Idle Tap Miner</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Train astronauts, construct colonies, set up a logistics
                system, and research new technologies to mine precious metals
                on 16 different planets by building the greatest space colony
                in the universe.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Art lovers will be impressed by the astonishing 3D graphics in
                harmony with the beautiful UI that has been designed, aiming
                to become the best of its kind.
              </p>
            </div>
          </div>
          <div className="ProductHeroButton_product-hero-button">
            <a
              target="_blank"
              href="https://apps.apple.com/app/space-colony-idle-tap-miner/id1476713225"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Download</div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="Button_button__end-icon Button_button__end-icon--stroke"
              >
                <path
                  d="M10.9498 1.5498L1.0498 11.4498"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M4 1.5L10.95 1.549L11 8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        <div className="SpaceColony_background">
          <div className="SpaceColony_background__gradient"></div>
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              overflow: 'hidden',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              position: 'relative',
            }}
          >
            <span
              style={{
                boxSizing: 'border-box',
                display: 'block',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0',
                paddingTop: '13.61111111111111%',
              }}
            ></span>
            <img
              alt=""
              src="assets/product-page/background(1).png"
              decoding="async"
              data-nimg="responsive"
              style={{
                transform: 'translateY(0px)',
                opacity: '1',
                transitionProperty: 'transform, opacity',
                transitionDuration: '1500ms',
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
              }}
              sizes="100vw"
            />
          </span>
        </div>
      </div>
    </section>
    <section className="ManyMore_many-more">
      <p className="Text_text--display-m Text_text--weight-bold ManyMore_title">
        <span className="">And So Many More</span>
      </p>
      <motion.div {...getMotionFadeInAnimation()} className="ManyMore_images">
        <div className="ManyMore_images__container">
          <div className="Ticker_ticker-container">
            <div className="Ticker_ticker Ticker_ticker--right">
              <div className="Ticker_ticker__children">
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fasting-x.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/photoapp.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/mimic.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/space-colony.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fastscan.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/plus.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/nft.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/momo(1).png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/mic.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/fastvpn.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/trusted.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/identify.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
              </div>
              <div className="Ticker_ticker__children">
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fasting-x.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/photoapp.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/mimic.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/space-colony.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fastscan.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/plus.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/nft.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/momo(1).png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/mic.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fastvpn.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/trusted.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/identify.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Ticker_ticker-container">
            <div className="Ticker_ticker Ticker_ticker--left">
              <div className="Ticker_ticker__children">
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/w-letter.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/photoapp-2.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fitness-pro.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/plantapp.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/background-erase.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/m-letter.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/wiser.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/alarm-plus.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/plantapp-logo.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/fastscan-2.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/fastest.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
              </div>
              <div className="Ticker_ticker__children">
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/w-letter.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/photoapp-2.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      src="assets/product-page/fitness-pro.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        opacity: '1',
                        transition: 'opacity 1500ms',
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
                      sizes="50vw"
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/plantapp.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/background-erase.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/m-letter.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/wiser.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/alarm-plus.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item TickerItems_ticker-item--small-logo">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/plantapp-logo.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fastscan-2.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
                <div className="TickerItem_ticker-item">
                  <span
                    style={{
                      boxSizing: 'border-box',
                      display: 'block',
                      overflow: 'hidden',
                      width: 'initial',
                      height: 'initial',
                      background: 'none',
                      opacity: '1',
                      border: '0',
                      margin: '0',
                      padding: '0',
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      bottom: '0',
                      right: '0',
                    }}
                  >
                    <img
                      alt=""
                      sizes="50vw"
                      src="assets/product-page/fastest.png"
                      decoding="async"
                      data-nimg="fill"
                      style={{
                        transition: 'opacity 1500ms',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        boxSizing: 'border-box',
                        padding: '0',
                        border: 'none',
                        margin: 'auto',
                        display: 'block',
                        width: '0',
                        height: '0',
                        minWidth: '100%',
                        maxWidth: '100%',
                        minHeight: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section> */}
  </>
  );
}
