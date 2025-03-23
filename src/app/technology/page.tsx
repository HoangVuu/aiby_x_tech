"use client";

import './tech.css';
import { useRef } from 'react';
import { motion } from 'motion/react';
import './tech.css';
import { getMotionFadeInAndZoomInAnimation } from '../../utils/animation';


export default function Technology() {
  const nextSectionRef = useRef<HTMLElement>(null);

  const getMotionAppearAnimation = () => ({
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  });

  const handleClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <section>
      <motion.div {...getMotionAppearAnimation()}>
        <img
          src="assets/technologies/hero.png"
          className="Hero_image__image__3RkdF banner_img"
          style={{
            opacity: '1',
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
          }}
        />
      </motion.div>

      <div
        className="Hero_content__technologies"
        style={{ position: 'absolute', top: 0, left: 0, right: 0 }}
      >
        <h1 className="Text_text--display-m Text_text--weight-bold Hero_content__title__technologies">
          <span className="">Bring tech to its climax</span>
        </h1>
        <p className="Text_text--body-xl Text_text--weight-regular Hero_content__description__technologies">
          <span className="">
            We respect the external libraries and tools. But when they fall
            short of expectations, we build our own tech tools to tackle tough
            problems in our rapidly changing and intensely competitive market.
          </span>
        </p>
        <p className="Text_text--body-xl Text_text--weight-regular Hero_content__description__technologies">
          <span className="">
            Those tools power our family of apps and help us make more
            informed decisions. Take a look at some of the solutions we&apos;ve
            developed so far.
          </span>
        </p>
        <button
          className="ScrollHandle_scroll-handle Hero_scroll-handle__technologies"
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
      id="marketingx"
      className="Product_product Product_product--dark"
      ref={nextSectionRef}
    >
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-left-plain">
          <motion.div
            {...getMotionFadeInAndZoomInAnimation()}
            className="ProductHeroImage_product-hero-image"
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
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
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
                      border: '0px',
                      margin: '0px',
                      padding: '90.9091% 0px 0px',
                    }}
                  ></span>
                  {/* <img alt="" src="./AIBY X Technologynologies That We Found - HubX_files/marketingx.png" decoding="async" data-nimg="responsive" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketingx.f03c972f.png&amp;w=2048&amp;q=75 2048w"> */}
                  <img
                    src="assets/technologies/marketingx.png"
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
                    }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold MarketingX_marketing-x__title">
                <span className="">MarketingX</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Marketing Analytics Platform</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                To see the big picture of the marketing spend and actual or
                predicted revenue from each cohort of users, we build our own
                in-house marketing analytics platform: MarketingX.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                It provides centralized dashboards with the most up-to-date
                data to help our growth team make more informed decisions
                while analyzing and optimizing ad campaigns.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                But its most powerful ability is...
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Making future revenue predictions so that we can estimate the
                long-term profitability of the campaign from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right-plain">
          <motion.div
            {...getMotionFadeInAndZoomInAnimation()}
            className="ProductHeroImage_product-hero-image"
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
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
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
                      border: '0px',
                      margin: '0px',
                      padding: '90.9091% 0px 0px',
                    }}
                  ></span>
                  {/* <img alt="" src="./AIBY X Technologynologies That We Found - HubX_files/revenuex.png" decoding="async" data-nimg="responsive" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" sizes="100vw" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevenuex.29686dae.png&amp;w=2048&amp;q=75 2048w"> */}
                  <img
                    src="assets/technologies/revenuex.png"
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
                    }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">RevenueX</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Ultimate revenue maximization engine</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                RevenueX is the ultimate in-app purchase tracking and revenue
                maximization engine that we developed internally to power our
                family of apps.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                We&apos;ve created many success stories leveraging RevenueX. Now is
                time to launch the beta version of our first commercial B2B
                product to other publishers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--dark">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right-plain">
          <motion.div
            {...getMotionFadeInAndZoomInAnimation()}
            className="ProductHeroImage_product-hero-image"
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
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
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
                      border: '0px',
                      margin: '0px',
                      padding: '90.9091% 0px 0px',
                    }}
                  ></span>
                  <img
                    src="assets/technologies/xray.png"
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
                    }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold XRay_xray__title">
                <span className="">XRay</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">X-Ray Vision For The App Store.</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Have you ever wondered how many times an app has been
                downloaded? Or how much revenue your favorite app generates?
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                Well, we did. That’s why we built a cutting-edge data science
                model to process data of millions of apps on the App Store and
                Google Play — from all countries on an hourly basis. We then
                convert that information into the number of daily downloads,
                revenue, and other key usage metrics using a statistical model
                developed by our data science team.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                We call this powerful tool: XRay.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                It helps us uncover key metrics of our competitors, let us see
                trends, and identify emerging app categories we can get into —
                XRay is one of our biggest competitive advantages in the
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="Product_product Product_product--light Zeus_zeus">
      <div className="Product_product__container">
        <div className="ProductHero_product-hero ProductHero_product-hero--image-on-right-plain">
          <motion.div
            {...getMotionFadeInAndZoomInAnimation()}
            className="ProductHeroImage_product-hero-image"
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
                    border: '0px',
                    margin: '0px',
                    padding: '0px',
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
                      border: '0px',
                      margin: '0px',
                      padding: '90.9091% 0px 0px',
                    }}
                  ></span>
                  {/* <img alt="" src="./AIBY X Technologynologies That We Found - HubX_files/zeus.png" decoding="async" data-nimg="responsive"
                   style=
                    sizes="100vw" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzeus.4cf8c693.png&amp;w=2048&amp;q=75 2048w"> */}
                  <img
                    src="assets/technologies/zeus.png"
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
                    }}
                  />
                </span>
              </div>
            </div>
          </motion.div>
          <div className="ProductHeroInfo_product-hero-info">
            <div className="ProductHeroInfo_heading">
              <h2 className="Text_text--display-s Text_text--weight-bold">
                <span className="">Zeus</span>
              </h2>
              <p className="Text_text--display-xs Text_text--weight-bold ProductHeroInfo_heading__subtitle">
                <span className="">Big Data holds the answers</span>
              </p>
            </div>
            <div className="ProductHeroInfo_description">
              <p className="ProductHeroInfo_description__paragraph">
                Data is the most significant portion of the science behind our
                apps. Without big data analytics, we are blind and deaf. To
                improve our apps, we ask questions to our data in the form of
                sophisticated SQL queries.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                When these SQL queries became so sophisticated, none of the
                existing tools we used helped us get relevant answers. So, we
                decided to create our own data analytics solution: Zeus.
              </p>
              <p className="ProductHeroInfo_description__paragraph">
                All our apps send all their data directly to Zeus. And when
                our product and marketing teams have questions, Zeus always
                has the answers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
