"use client";

import { motion } from "motion/react";
import "./Jobs.css";
import Link from "next/link";

const getTeamCardOpenCardAnimation = () => ({
  initial: { transform: "rotateX(1deg)" },
  whileInView: { bottom: "-0.125rem", transform: "rotateX(110deg)" },
  viewport: { once: true },
  transition: {
    duration: 1,
    ease: "easeOut",
  },
});

export default function JobsPage() {
  return (
    <main>
      <section className="Hero_section__jobs">
        <div className="Hero_container__jobs">
          <h1 className="Text_text--display-m Text_text--weight-bold">
            <span className="">Join our team</span>
          </h1>
          <p className="Text_text--body-xl Text_text--weight-medium Hero_description__jobs">
            <span className="">
              “Talent wins games, but teamwork wins championships.”
              <br />
              Be a part of our team with your talent, passion, and natural gift
              to build products millions of people love.
            </span>
          </p>
          <button
            type="button"
            className="Button_button Button_button--variant-outlined-dark Button_button--radius-large"
          >
            <div
              className="Button_button__children"
              onClick={() => {
                const element = document.getElementById("open-positions");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Open Positions
            </div>
            {/* <div className="Button_button__number">13</div>
          <div className="Button_button__spinner">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          </button>
        </div>
        <div className="Hero_background__jobs">
          <span
            style={{
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: "1",
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "absolute",
              inset: "0px",
            }}
          >
            <img
              alt="hero"
              src="/assets/jobs-page/hero.png"
              decoding="async"
              data-nimg="fill"
              className="Hero_background__jobs"
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
              sizes="100vw"
            />
          </span>
        </div>
      </section>
      <section className="TeamOfPlayers_section">
        <div className="TeamOfPlayers_container">
          <div className="TeamOfPlayers_visual">
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
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
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "93.2579% 0px 0px",
                }}
              ></span>
              <img
                alt="players"
                sizes="100vw"
                src="/assets/jobs-page/team-of-players.png"
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
                  objectFit: "cover",
                }}
              />
            </span>
          </div>
          <h2 className="Text_text--headline-l Text_text--weight-bold TeamOfPlayers_title">
            <span className="">Team of A Players</span>
          </h2>
          <p className="Text_text--display-m Text_text--weight-bold TeamOfPlayers_subtitle">
            <span className="">
              We’re an intensely curious, vibrant team with a diverse range of
              skills in technology, design, and more.
            </span>
          </p>
          <p className="Text_text--headline-m Text_text--weight-medium TeamOfPlayers_description">
            <span className="">
              At Technify, we’re always looking for people who are dynamic,
              creative, and share our independent way of thinking. Join our
              inspiring community to surround yourself with brilliant teammates.
              Because working alongside like-minded people makes all the
              difference in the world.
            </span>
          </p>
        </div>
      </section>
      {/* <section className="GreatPlaceToWork_great-place-to-work GreatPlaceToWork_great-place-to-work--variant-office">
      <div className="GreatPlaceToWork_great-place-to-work__container">
        <h2 className="Text_text--display-s Text_text--weight-bold GreatPlaceToWork_great-place-to-work__title">
          <span className="">
            Great Place to Work,
            <br />
            2024
          </span>
        </h2>
        <p className="Text_text--body-l Text_text--weight-regular GreatPlaceToWork_great-place-to-work__description">
          <span className="">
            The company culture we're trying to cultivate by utilizing the
            harmony of meaningful work and productivity has awarded us as
            "One the best places to work in Turkey".
          </span>
        </p>
      </div>
      <div className="GreatPlaceToWork_background">
        <motion.img
          alt=""
          sizes="100vw"
          src="assets/jobs-page/office.png"
          decoding="async"
          data-nimg="future-fill"
          className="GreatPlaceToWork_background__image"
          {...getMotionFadeInAndZoomOutAnimation(0)}
          loading="lazy"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: '0px',
            color: 'transparent',
          }}
        />
      </div>
      <div className="GreatPlaceToWork_badge">
        <div className="GreatPlaceToWork_badge__container">
          <img
            alt=""
            src="assets/jobs-page/great-place-to-work.png"
            width="512"
            height="872"
            decoding="async"
            data-nimg="future"
            className="GreatPlaceToWork_badge__badge"
            loading="lazy"
            style={{ color: 'transparent' }}
          />
        </div>
      </div>
    </section> */}
      <section className="Compensation_section">
        <div className="Compensation_background">
          <div>
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: "1",
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "absolute",
                inset: "0px",
              }}
            >
              <img
                alt="compesation"
                src="/assets/jobs-page/compensation.png"
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
                sizes="100vw"
              />
            </span>
          </div>
          <div className="Compensation_background__gradient"></div>
        </div>
        <div className="Compensation_container">
          <div className="Compensation_texts">
            <h2 className="Text_text--headline-l Text_text--weight-bold Compensation_title">
              <span className="">Compensation &amp; Career Path</span>
            </h2>
            <p className="Text_text--display-m Text_text--weight-bold Compensation_subtitle">
              <span className="">
                We offer an unprecedented compensation package and a well
                structured career path
              </span>
            </p>
            <p className="Text_text--body-l Text_text--weight-medium Compensation_description">
              <span className="">
                We believe that talented people can reach their true potential
                in an environment designed uniquely to encourage progress and
                results. That&apos;s why we adopted a merit-based philosophy
                rather than focusing on fulfilling specific requirements to
                unlock bonuses.
              </span>
            </p>
            <Link className="Compensation_link" href="/policy">
              <span className="Text_text--body-s Text_text--weight-regular">
                <span className="">View Policy</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="PerksAndBenefits_section">
        <div className="PerksAndBenefits_container">
          <h2 className="Text_text--display-s Text_text--weight-bold PerksAndBenefits_title">
            <span className="">Perks &amp; Benefits</span>
          </h2>
          <div className="PerksAndBenefits_cards">
            <div className="PerksAndBenefits_card">
              <svg
                fill="none"
                height="58"
                viewBox="0 0 58 58"
                width="58"
                xmlns="http://www.w3.org/2000/svg"
                className="PerksAndBenefits_card__icon"
              >
                <g
                  stroke="#757575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <path d="m45.917 37.4587v-9.6667c0-2.002 1.623-3.625 3.625-3.625s3.625 1.623 3.625 3.625v15.843c0 1.5007-.3494 2.9807-1.0206 4.323l-1.3961 2.7923"></path>
                  <path d="m33.833 50.7496v-7.0406c0-1.0458.3392-2.0634.9667-2.9l4.055-5.4067c.6824-.9099 1.726-1.4788 2.8604-1.5594s2.248.335 3.0521 1.1392c1.3806 1.3805 1.5359 3.566.3645 5.1279l-2.5423 3.3896"></path>
                  <path d="m12.083 37.4587v-9.6667c0-2.002-1.623-3.625-3.62499-3.625-2.00203 0-3.625 1.623-3.625 3.625v15.843c.00001 1.5007.34942 2.9807 1.02056 4.323l1.3961 2.7923"></path>
                  <path d="m24.1663 50.7496v-7.0406c0-1.0458-.3392-2.0634-.9666-2.9l-4.0551-5.4067c-.6823-.9099-1.7259-1.4788-2.8603-1.5594-1.1345-.0806-2.248.335-3.0522 1.1392-1.3805 1.3805-1.5358 3.566-.3644 5.1279l2.5422 3.3896"></path>
                  <path
                    clipRule="evenodd"
                    d="m32.7582 25.027c-.9968.9964-2.3485 1.5561-3.7579 1.5563-1.4094-.0002-2.7611-.5599-3.7579-1.5563l-6.3679-6.3679c-2.61-2.61-2.61-6.8416 0-9.45161 2.61-2.60999 6.8416-2.60999 9.4516 0l.6742.67425.6743-.67425c2.6099-2.60999 6.8416-2.60999 9.4515 0 2.61 2.61001 2.61 6.84161 0 9.45161z"
                    fillRule="evenodd"
                  ></path>
                </g>
              </svg>
              <h3 className="Text_text--headline-xl Text_text--weight-bold PerksAndBenefits_card__title">
                <span className="">Private Medical Insurance</span>
              </h3>
              <p className="Text_text--body-m Text_text--weight-regular PerksAndBenefits_card__description">
                <span className="">
                  We go above and beyond for your health — therefore, we got you
                  covered from day one by private medical insurance.
                </span>
              </p>
            </div>
            <div className="PerksAndBenefits_card">
              <svg
                fill="none"
                height="58"
                viewBox="0 0 58 58"
                width="58"
                xmlns="http://www.w3.org/2000/svg"
                className="PerksAndBenefits_card__icon"
              >
                <g
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    stroke: "rgb(117, 117, 117)",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }}
                >
                  <path d="m33.7773 17.8516 6.3706 6.3705-15.9281 15.9281-6.3706-6.3705z"></path>
                  <path d="m8.56936 27.1308c.72702-.727 1.90574-.727 2.63274 0l19.6659 19.6659c.727.7271.727 1.9058 0 2.6328l-2.1451 2.1452c-.727.727-1.9058.727-2.6328 0l-19.6659-19.6659c-.72701-.7271-.72701-1.9058 0-2.6328z"></path>
                  <path d="m8.56936 36.6875c.72702-.727 1.90574-.727 2.63274 0l10.1101 10.11c.727.7271.727 1.9058 0 2.6328l-2.1452 2.1452c-.727.727-1.9057.727-2.6327 0l-10.11009-10.1101c-.72702-.727-.72702-1.9058-.00001-2.6328z"></path>
                  <path d="m49.4297 30.8711c-.7271.727-1.9058.727-2.6328 0l-19.6659-19.6659c-.727-.727-.727-1.90574 0-2.63275l2.1451-2.14516c.7271-.72702 1.9058-.72702 2.6328 0l19.6659 19.66591c.727.727.727 1.9057 0 2.6328z"></path>
                  <path d="m49.4306 21.3106c-.727.727-1.9057.727-2.6327 0l-10.1101-10.1101c-.727-.727-.727-1.90574 0-2.63276l2.1452-2.14515c.727-.72702 1.9057-.72702 2.6327 0l10.1101 10.11001c.727.7271.727 1.9058 0 2.6328-2.6328z"></path>
                </g>
              </svg>
              <h3 className="Text_text--headline-xl Text_text--weight-bold PerksAndBenefits_card__title">
                <span className="">
                  Gym
                  <br />
                  Reimbursement
                </span>
              </h3>
              <p className="Text_text--body-m Text_text--weight-regular PerksAndBenefits_card__description">
                <span className="">
                  We provide free annual gym membership because we want you to
                  be in tiptop shape psychically and mentally.
                </span>
              </p>
            </div>
            <div className="PerksAndBenefits_card">
              <svg
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 56 65"
                xmlns="http://www.w3.org/2000/svg"
                className="PerksAndBenefits_card__icon"
              >
                <g
                  stroke="#757575"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <path
                    clipRule="evenodd"
                    d="m7.55429 55.444 1.07582.7548c1.67429 1.1743 3.64149 1.801 5.65369 1.801h26.5567c2.0122 0 3.9794-.6267 5.6537-1.8011l1.0758-.7547c2.8355-1.9889 4.5388-5.3373 4.5388-8.923 0-1.5848-1.2211-2.8696-2.7274-2.8696h-43.63838c-1.5063 0-2.7274 1.2848-2.7274 2.8696 0 3.5857 1.70315 6.9341 4.53867 8.923z"
                    fillRule="evenodd"
                  ></path>
                  <path d="m48.8472 43.649c.3467-2.7723-1.1202-5.4438-3.576-6.5125l-.1236-.0538c-1.4403-.6268-2.5844-1.8306-3.1801-3.346l-.0515-.1309c-1.0155-2.5834-3.5541-4.1265-6.1884-3.7618l-.1429.0198c-1.5474.2142-3.1123-.2273-4.3502-1.2274l-.0982-.0793c-2.1073-1.7024-5.0388-1.7024-7.1461 0l-.1112.0897c-1.2338.9968-2.7935 1.4368-4.3358 1.2233l-.1473-.0204c-2.6347-.3648-5.1734 1.1795-6.1875 3.764l-.0494.1259c-.5954 1.5173-1.7408 2.7225-3.18291 3.3489l-.11968.052c-2.45634 1.067-3.92414 3.7381-3.57748 6.5103"></path>
                  <path d="m15.1876 30.9686-10.9641-11.5361c-1.03666-1.0859-1.44291-2.6719-1.06533-4.1589.37757-1.487 1.48144-2.6484 2.89471-3.0457 1.41328-.3973 2.92059.0302 3.95272 1.1209l14.2643 15.0084"></path>
                </g>
              </svg>
              <h3 className="Text_text--headline-xl Text_text--weight-bold PerksAndBenefits_card__title">
                <span className="">
                  Free Breakfast
                  <br />
                  and Snacks
                </span>
              </h3>
              <p className="Text_text--body-m Text_text--weight-regular PerksAndBenefits_card__description">
                <span className="">
                  Our grandmothers told us that breakfast is the most important
                  meal of the day. So, we offer complimentary breakfast in the
                  office every day between 8:00 - 9:00. Grab your coffee from
                  XPresso and start your day off on the right foot.
                </span>
              </p>
            </div>
            <div className="PerksAndBenefits_card">
              <svg
                fill="none"
                viewBox="0 0 58 58"
                xmlns="http://www.w3.org/2000/svg"
                className="PerksAndBenefits_card__icon"
              >
                <g
                  opacity="0.5"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                >
                  <path d="m38.667 16.8037h4.8333"></path>
                  <path d="m36.25 24.0049h7.25"></path>
                  <path d="m18.3558 12.0029v4.8009"></path>
                  <path d="m13.292 24.0041v-5.281c0-1.0606.8656-1.9204 1.9333-1.9204h5.8c1.0678 0 1.9334.8598 1.9334 1.9204v5.281"></path>
                  <path d="m29 33.6057v-7.3614c0-1.2373-1.0099-2.2404-2.2555-2.2404h-17.23895c-1.2457 0-2.25552 1.0031-2.25555 2.2404v24.1645"></path>
                  <path d="m14.5 33.6065h7.25"></path>
                  <path d="m14.5 40.8076h7.25"></path>
                  <path d="m53.1667 39.6074c0 3.9332-4.321 8.1347-6.786 10.2124-.9735.7862-2.3688.7862-3.3423 0-2.4674-2.0777-6.7884-6.2792-6.7884-10.2124"></path>
                  <path d="m44.7059 38.9824c-.3467.0013-.6268.2813-.6259.6257.0009.3443.2824.6229.6291.6225.3467-.0005.6276-.2798.6276-.6241.0009-.1662-.0654-.3259-.1839-.4432-.1186-.1173-.2796-.1825-.4469-.1809"></path>
                  <path d="m53.1667 39.6066c0-4.64-3.787-8.4015-8.4584-8.4015-4.6714 0-8.4583 3.7615-8.4583 8.4015"></path>
                  <path d="m4.83301 50.4092h26.58329"></path>
                  <path d="m29 16.8027v-2.9974c0-1.501.9374-2.8444 2.3522-3.3714l14.5-5.40092c1.1132-.41464 2.3604-.26071 3.3376.41194s1.5602 1.77851 1.5602 2.95944v15.59964"></path>
                </g>
              </svg>
              <h3 className="Text_text--headline-xl Text_text--weight-bold PerksAndBenefits_card__title">
                <span className="">
                  Beautiful Open Office in the Middle of the City
                </span>
              </h3>
              <p className="Text_text--body-m Text_text--weight-regular PerksAndBenefits_card__description">
                <span className="">
                  Our beautiful office is in the tallest building of Ho Chi Minh
                  at Thu Thiem, situated in the vibrant District 2. Every day,
                  you can enjoy the sunrise and sunset from the Landmark Tower,
                  the striking architectural marvel of Vietnam.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="TeamCard_section">
        <div className="TeamCard_container">
          <h2 className="Text_text--headline-l Text_text--weight-bold TeamCard_title">
            <span className="">Technify Team Card</span>
          </h2>
          <p className="Text_text--display-m Text_text--weight-bold TeamCard_description">
            <span className="">
              One-of-a-kind, exclusive corporate membership program.
            </span>
          </p>
        </div>
        <div className="TeamCard_visual">
          <motion.div className="TeamCard_visual__card TeamCard_visual__card--in-view">
            <motion.div
              className="TeamCard_visual__top"
              {...getTeamCardOpenCardAnimation()}
            >
              <svg
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 762 500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="TeamCard_visual__back__FUHFV"
              >
                <filter
                  id="a"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="500"
                  width="762"
                  x="0"
                  y="0"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="4" dy="2"></feOffset>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect1_innerShadow_2503_10466"
                  ></feBlend>
                </filter>
                <filter
                  id="b"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="419.186"
                  width="1389.87"
                  x="-292.765"
                  y="231.376"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_2503_10466"
                    stdDeviation="28"
                  ></feGaussianBlur>
                </filter>
                <radialGradient
                  id="c"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(1285.92224549 1564.0263817 -1115.62565147 917.25296941 -715.308 -467.291)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <clipPath id="d">
                  <rect height="500" rx="37" width="762"></rect>
                </clipPath>
                <g filter="url(#a)">
                  <g clipPath="url(#d)">
                    <rect
                      fill="#1e1e1e"
                      height="500"
                      rx="37"
                      width="762"
                    ></rect>
                    <rect
                      fill="url(#c)"
                      fillOpacity="0.2"
                      height="500"
                      rx="37"
                      width="762"
                    ></rect>
                    <g filter="url(#b)" opacity="0.3">
                      <path
                        d="m998.82 287.376-1235.585 256.644 1277.865 50.542z"
                        fill="#000"
                        fillOpacity="0.01"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 762 501"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="TeamCard_visual__front__Ne0mt"
              >
                <filter
                  id="a"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="500"
                  width="762"
                  x="0"
                  y="0.310852"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="4" dy="2"></feOffset>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect1_innerShadow_2471_10339"
                  ></feBlend>
                </filter>
                <filter
                  id="b"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="419.186"
                  width="1389.87"
                  x="-292.765"
                  y="231.687"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_2471_10339"
                    stdDeviation="28"
                  ></feGaussianBlur>
                </filter>
                <radialGradient
                  id="c"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(1285.92224549 1564.0263817 -1115.62565147 917.25296941 -715.308 -466.98)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <linearGradient
                  id="d"
                  gradientUnits="userSpaceOnUse"
                  x1="-374.008"
                  x2="787.55"
                  y1="-24.0586"
                  y2="-97.4271"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <clipPath id="e">
                  <rect height="500" rx="37" width="762" y="0.310852"></rect>
                </clipPath>
                <g filter="url(#a)">
                  <g clipPath="url(#e)">
                    <rect
                      fill="#1e1e1e"
                      height="500"
                      rx="37"
                      width="762"
                      y="0.310852"
                    ></rect>
                    <rect
                      fill="url(#c)"
                      fillOpacity="0.2"
                      height="500"
                      rx="37"
                      width="762"
                      y="0.310852"
                    ></rect>
                    <g filter="url(#b)" opacity="0.3">
                      <path
                        d="m998.82 287.687-1235.585 256.644 1277.865 50.542z"
                        fill="#000"
                        fillOpacity="0.01"
                      ></path>
                    </g>
                    <g fill="#fff">
                      <path d="m97.7578 197.31v5.166c0 1.309-.2988 2.332-.8823 3.07s-1.3804 1.107-2.3766 1.107-1.7789-.369-2.3623-1.107c-.5835-.738-.8824-1.761-.8824-3.07v-2.935h-3.4866v-2.231h9.976zm-4.867 2.231v2.835c0 .654.1423 1.14.4127 1.493.2704.352.6688.52 1.1954.52.5265 0 .925-.168 1.2096-.52.2847-.353.427-.839.427-1.493v-2.835z"></path>
                      <path d="m95.125 212.373c0 .185 0 .353-.0284.52h-1.6224v-.536c0-.789-.1708-1.409-.5123-1.829-.3416-.419-.8396-.637-1.5085-.637h-3.6716v-2.08h7.2294v2.013h-1.2951c.9393.469 1.4089 1.325 1.4089 2.549z"></path>
                      <path d="m91.2687 221.683h-.4269v-6.374c-.612.084-1.0816.302-1.3947.687-.3131.386-.4696.889-.4696 1.527 0 .939.3415 1.593 1.0388 1.946v1.996c-.74-.218-1.3234-.688-1.7646-1.392-.4412-.705-.6546-1.56-.6546-2.584 0-1.275.3415-2.298 1.0388-3.069.6973-.789 1.6082-1.175 2.7466-1.175 1.1385 0 2.0635.386 2.7466 1.158.6974.788 1.0389 1.795 1.0389 3.053s-.3558 2.315-1.0816 3.069c-.7257.755-1.665 1.141-2.832 1.141zm2.5331-4.227c0-1.225-.5692-1.929-1.7219-2.131v4.278c.5407-.084.9534-.319 1.2665-.688s.4696-.855.4696-1.459z"></path>
                      <path d="m95.1797 232.754c0 .939-.2277 1.66-.6973 2.197-.4696.52-1.1101.788-1.9212.788h-4.7817v-2.08h4.497c.9108 0 1.3663-.486 1.3663-1.476 0-.537-.1566-.956-.4839-1.275-.3273-.318-.797-.486-1.4089-.486h-3.9847v-2.063h4.497c.9108 0 1.3662-.487 1.3662-1.493 0-.52-.1565-.94-.4838-1.258-.3274-.319-.797-.487-1.4089-.487h-3.9847v-2.08h7.2294v2.013h-1.0389c.8112.587 1.2096 1.392 1.2096 2.432 0 1.292-.4554 2.181-1.3519 2.651.8965.637 1.3519 1.526 1.3519 2.65z"></path>
                      <path d="m87.7821 239.497v-2.08h7.2294v2.08zm8.1687 0v-2.046h1.6508v2.046z"></path>
                      <path d="m90.9559 246.777h4.0558v2.08h-7.2294v-2.013h1.0531c-.8111-.655-1.2239-1.544-1.2239-2.684 0-.906.2278-1.644.6831-2.164.4554-.537 1.0959-.805 1.9213-.805h4.7958v2.08h-4.497c-.9108 0-1.3662.537-1.3662 1.61 0 .537.1566.973.4839 1.342s.7685.554 1.3377.554z"></path>
                      <path d="m95.1797 260.28c0 .939-.2277 1.661-.6973 2.197-.4696.52-1.1101.789-1.9212.789h-4.7817v-2.08h4.497c.9108 0 1.3662-.487 1.3662-1.476 0-.537-.1565-.956-.4838-1.275s-.797-.487-1.4089-.487h-3.9847v-2.063h4.497c.9108 0 1.3662-.486 1.3662-1.493 0-.52-.1565-.939-.4838-1.258-.3274-.319-.797-.486-1.4089-.486h-3.9847v-2.08h7.2294v2.013h-1.0389c.8112.587 1.2096 1.392 1.2096 2.432 0 1.292-.4554 2.181-1.3519 2.65.8965.638 1.3519 1.527 1.3519 2.651z"></path>
                      <path d="m87.5544 273.817c0-1.694.4696-3.07 1.4231-4.11.9393-1.057 2.2058-1.593 3.7997-1.593s2.8746.52 3.8139 1.576c.9392 1.04 1.4089 2.416 1.4089 4.127 0 1.375-.3131 2.55-.9393 3.522-.6261.973-1.5369 1.577-2.7181 1.812v-2.265c.6546-.201 1.1527-.57 1.4942-1.107.3416-.536.5124-1.191.5124-1.979 0-1.04-.3131-1.862-.9535-2.466s-1.5085-.906-2.6185-.906-1.9924.302-2.6185.889c-.6262.588-.9393 1.426-.9393 2.483 0 .822.1992 1.51.6119 2.097s.982.939 1.7078 1.057v2.231c-1.2666-.135-2.2485-.722-2.9459-1.745-.6973-1.006-1.0388-2.231-1.0388-3.64z"></path>
                      <path d="m87.782 288.159v-2.08c.1566-.1.4412-.168.8824-.235-.6973-.57-1.0531-1.493-1.0531-2.751 0-.939.185-1.677.5692-2.231.3843-.553.9108-.838 1.5939-.838 1.3235 0 2.0635 1.09 2.2628 3.271l.0996 1.291c.0427.436.1281.738.2561.923.1281.184.3131.285.5693.285.3131 0 .5408-.117.6831-.352s.2134-.638.2134-1.191c0-.604-.0853-1.04-.2561-1.309-.1708-.268-.4696-.419-.8966-.469v-2.047c1.6508.118 2.462 1.393 2.462 3.842s-.7258 3.556-2.1774 3.556h-3.8566c-.6404 0-1.0958.117-1.3804.352zm1.0959-4.562c0 .654.1565 1.174.4554 1.593.2988.403.74.604 1.3092.604h.6546c-.1423-.201-.2419-.52-.2988-.973l-.1139-1.124c-.0569-.553-.1707-.939-.3273-1.191-.1708-.235-.3985-.352-.7115-.352-.3131 0-.5551.117-.7258.369-.1708.252-.2562.604-.2562 1.074z"></path>
                      <path d="m95.125 293.946c0 .184 0 .352-.0284.52h-1.6224v-.537c0-.788-.1708-1.409-.5123-1.828-.3416-.42-.8396-.638-1.5085-.638h-3.6716v-2.08h7.2294v2.013h-1.2951c.9393.47 1.4089 1.325 1.4089 2.55z"></path>
                      <path d="m94.072 301.294h3.6858v2.08h-9.976v-2.013h1.0105c-.7828-.621-1.1813-1.527-1.1813-2.701s.3416-2.114 1.0389-2.801c.6974-.688 1.6081-1.04 2.7466-1.04s2.0778.352 2.7609 1.04c.683.671 1.0246 1.61 1.0246 2.801s-.37 2.03-1.11 2.634zm-2.7324-4.328c-.7543 0-1.3092.184-1.6935.57-.3842.386-.5693.923-.5693 1.61 0 .688.1993 1.225.5978 1.628.3984.385.9819.57 1.7219.57s1.3235-.201 1.722-.57c.3984-.369.5977-.923.5977-1.628 0-.704-.2135-1.207-.6262-1.593-.4269-.386-1.0104-.587-1.7504-.587z"></path>
                    </g>
                    <path
                      clipRule="evenodd"
                      d="m304.294 243.095v-22.785h14.155v59.62h-14.155v-24.119h-23.952v24.119h-14.154v-59.62h14.154v22.785zm48.236 38.19c-7.755 0-14.008-2.085-18.761-6.275-4.753-4.065-7.109-9.985-7.109-17.761v-36.939h14.155v37.106c0 3.794 1.021 6.692 3.064 8.672s4.92 2.981 8.672 2.981 6.65-1.001 8.714-2.981c2.063-1.98 3.106-4.878 3.106-8.672v-37.106h14.154v36.939c0 7.651-2.293 13.571-6.9 17.761s-10.965 6.275-19.053 6.275zm74.563-33.07c3.213 1.169 5.744 3.082 7.593 5.719 1.834 2.648 2.772 5.545 2.772 8.672 0 5.462-1.834 9.736-5.482 12.779-3.648 3.044-9.027 4.565-16.114 4.565h-29.143v-59.62h28.309c6.587 0 11.569 1.397 14.947 4.19 3.377 2.794 5.065 6.484 5.065 11.049 0 5.914-2.642 10.123-7.947 12.646zm-26.261-16.586h13.237v.021c2.168 0 3.856.542 5.065 1.668 1.189 1.125 1.793 2.626 1.793 4.523 0 2.001-.583 3.607-1.793 4.774-1.209 1.167-2.897 1.751-5.065 1.751h-13.237zm14.154 37.023h-14.154l-.021.021v-13.571h14.154c5.253 0 7.88 2.251 7.88 6.775 0 2.168-.667 3.856-2.043 5.024-1.355 1.167-3.293 1.751-5.816 1.751zm79.485-48.322-12.758 18.282h-16.094l12.758-18.282zm-16.094 59.62h16.093l-12.758-18.282-8.046-11.528-8.047-11.528-12.758-18.282h-16.072l20.805 29.81-20.805 29.81h16.072l12.758-18.282z"
                      fill="url(#d)"
                      fillRule="evenodd"
                    ></path>
                  </g>
                </g>
              </svg>
            </motion.div>
            <div className="TeamCard_visual__bottom">
              <svg
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 762 504"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="TeamCard_visual__bottom"
              >
                <filter
                  id="a"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="503.042"
                  width="761.51"
                  x="0.001221"
                  y="0.829834"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="4" dy="-2"></feOffset>
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  ></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                  ></feColorMatrix>
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect1_innerShadow_2471_10320"
                  ></feBlend>
                </filter>
                <filter
                  id="b"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="362.72"
                  width="613.725"
                  x="78.1926"
                  y="83.4659"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_2471_10320"
                    stdDeviation="12"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="c"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="533.215"
                  width="1119.5"
                  x="-22"
                  y="-13.7153"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    result="effect1_foregroundBlur_2471_10320"
                    stdDeviation="8"
                  ></feGaussianBlur>
                </filter>
                <radialGradient
                  id="d"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(-543.51241763 59.00595158 -110.54509332 -1018.24696181 943.344 717.193)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="e"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(226.65871676 121.10787069 -112.01718125 209.64509088 102.193 153.795)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#ffb693"></stop>
                  <stop offset="1" stopColor="#fc576e" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="f"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(-313.96840507 -199.25040867 189.30867832 -298.30274474 613.484 398.555)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#5355b3"></stop>
                  <stop offset="1" stopColor="#004eff" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="g"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(168.39309445 -142.18283519 140.83513977 166.79696223 156.116 398.222)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#f76751"></stop>
                  <stop offset="1" stopColor="#fc576e" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                  id="h"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(-536.77918835 209.74568117 -200.24548506 -512.4663752 689.11 96.6136)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                >
                  <stop offset="0" stopColor="#ffdf80"></stop>
                  <stop offset="1" stopColor="#fc576e" stopOpacity="0"></stop>
                </radialGradient>
                <linearGradient id="i">
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#dadada"></stop>
                </linearGradient>
                <radialGradient
                  id="j"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(0 -27.0928 24.064 0 605.596 176.54)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                  xlinkHref="#i"
                ></radialGradient>
                <radialGradient
                  id="k"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(0 -16.4712 14.6298 0 605.597 369.994)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                  xlinkHref="#i"
                ></radialGradient>
                <radialGradient
                  id="l"
                  cx="0"
                  cy="0"
                  gradientTransform="matrix(0 -24.234 21.5247 0 101.954 369.996)"
                  gradientUnits="userSpaceOnUse"
                  r="1"
                  xlinkHref="#i"
                ></radialGradient>
                <linearGradient
                  id="m"
                  gradientUnits="userSpaceOnUse"
                  x1="292.741"
                  x2="683.522"
                  y1="295.984"
                  y2="-77.8007"
                >
                  <stop offset="0" stopColor="#fff"></stop>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <clipPath id="n">
                  <rect
                    height="503.042"
                    rx="36"
                    width="761.51"
                    x="0.001221"
                    y="0.829834"
                  ></rect>
                </clipPath>
                <g filter="url(#a)">
                  <g clipPath="url(#n)">
                    <rect
                      fill="#1e1e1e"
                      height="503.042"
                      rx="36"
                      width="761.51"
                      x="0.001221"
                      y="0.829834"
                    ></rect>
                    <rect
                      fill="url(#d)"
                      fillOpacity="0.2"
                      height="503.042"
                      rx="36"
                      width="761.51"
                      x="0.001221"
                      y="0.829834"
                    ></rect>
                    <path
                      clipRule="evenodd"
                      d="m620.591 95.1877-480.079-.0001c-29.415 0-53.2725 22.5844-53.2725 50.3814v74.166c-17.706 7.463-30.0469 24.252-30.0469 43.77s12.3409 36.307 30.0469 43.77v74.146c0 27.818 23.8805 50.381 53.2725 50.381h480.079c29.392 0 53.273-22.585 53.273-50.381v-235.852c0-27.819-23.881-50.3813-53.273-50.3813z"
                      fill="#000"
                      fillRule="evenodd"
                    ></path>
                    <g filter="url(#b)">
                      <path
                        d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                        fill="#fc576e"
                      ></path>
                      <path
                        d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                        fill="url(#e)"
                      ></path>
                      <path
                        d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                        fill="url(#f)"
                      ></path>
                      <path
                        d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                        fill="url(#g)"
                      ></path>
                      <path
                        d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                        fill="url(#h)"
                      ></path>
                    </g>
                    <path
                      d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                      fill="#fc576e"
                    ></path>
                    <path
                      d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                      fill="url(#e)"
                    ></path>
                    <path
                      d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                      fill="url(#f)"
                    ></path>
                    <path
                      d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                      fill="url(#g)"
                    ></path>
                    <path
                      d="m627.439 107.466h-484.767c-22.356 0-40.479 17.14-40.479 38.282v238.155c0 21.143 18.123 38.283 40.479 38.283h484.767c22.356 0 40.479-17.14 40.479-38.283v-238.155c0-21.142-18.123-38.282-40.479-38.282z"
                      fill="url(#h)"
                    ></path>
                    <path
                      d="m625.095 108.985h-480.079c-22.14 0-40.088 16.974-40.088 37.912v235.853c0 20.938 17.948 37.912 40.088 37.912h480.079c22.14 0 40.088-16.974 40.088-37.912v-235.853c0-20.938-17.948-37.912-40.088-37.912z"
                      fill="#1e1e1e"
                    ></path>
                    <path
                      d="m179.242 164.554c-.05-2.764.85-5.026 2.702-6.786 1.832-1.778 4.343-2.696 7.531-2.754 3.169-.058 5.711.759 7.626 2.45 1.914 1.692 2.897 3.929 2.948 6.712.04 2.19-.513 4.084-1.659 5.682-1.164 1.599-2.908 2.642-5.23 3.13l-.055-3.006c1.447-.397 2.526-1.104 3.234-2.119.728-.997 1.079-2.21 1.053-3.638-.035-1.912-.762-3.42-2.181-4.527-1.4-1.107-3.294-1.638-5.68-1.595s-4.268.644-5.646 1.801c-1.359 1.157-2.021 2.691-1.986 4.602.026 1.429.487 2.701 1.384 3.817.897 1.079 2.186 1.714 3.868 1.906l.054 2.979c-2.484-.197-4.422-1.117-5.813-2.762-1.391-1.627-2.108-3.591-2.15-5.892zm7.991 23.963-.811.015-.198-10.827c-1.414.156-2.479.593-3.193 1.311-.696.718-1.032 1.68-1.01 2.886.033 1.819.856 2.992 2.47 3.519l.051 2.811c-1.48-.363-2.659-1.102-3.537-2.219-.86-1.098-1.304-2.472-1.334-4.124-.038-2.059.621-3.732 1.978-5.019s3.172-1.951 5.447-1.992c2.274-.042 4.113.556 5.516 1.793 1.402 1.236 2.122 2.866 2.159 4.888.039 2.115-.649 3.798-2.062 5.049-1.413 1.232-3.239 1.869-5.476 1.909zm5.189-6.915c-.02-1.095-.372-1.989-1.056-2.682-.684-.674-1.661-1.083-2.932-1.227l.145 7.932c1.172-.151 2.106-.586 2.802-1.304.714-.699 1.061-1.606 1.041-2.719zm2.805 24.942c.029 1.558-.415 2.782-1.331 3.671-.898.889-2.12 1.347-3.668 1.375l-9.676.176-.051-2.811 9.312-.169c1.995-.036 2.976-.973 2.942-2.81-.018-.983-.415-1.783-1.191-2.4-.757-.618-1.844-.914-3.261-.888l-7.914.144-.051-2.783 9.313-.169c1.994-.037 2.975-.982 2.941-2.838-.018-.983-.415-1.784-1.191-2.401-.776-.616-1.863-.912-3.261-.887l-7.914.144-.051-2.783 14.43-.262.049 2.671-2.153.04c1.677.953 2.532 2.32 2.564 4.101.04 2.171-.837 3.663-2.632 4.475 1.827.988 2.759 2.455 2.794 4.404zm-14.798 22.978c-.054-2.932.863-5.287 2.752-7.066 1.869-1.816 4.36-2.752 7.474-2.809 3.095-.056 5.628.789 7.6 2.535 1.933 1.709 2.927 4.03 2.98 6.962.053 2.894-.855 5.249-2.724 7.065-1.907 1.798-4.408 2.725-7.503 2.781-3.095.057-5.618-.779-7.571-2.507-1.953-1.746-2.956-4.067-3.008-6.961zm4.694-4.874c-1.376 1.213-2.046 2.821-2.01 4.825.037 2.004.765 3.587 2.185 4.749 1.383 1.163 3.267 1.722 5.654 1.679 2.386-.043 4.258-.671 5.616-1.884 1.358-1.231 2.019-2.839 1.982-4.825-.036-1.985-.755-3.568-2.157-4.749-1.438-1.18-3.333-1.749-5.682-1.706-2.367.043-4.23.68-5.588 1.911zm10.759 23.853c.007.408.003.678-.014.808l-2.656.048-.013-.696c-.026-1.428-.4-2.526-1.123-3.292-.723-.767-1.755-1.138-3.098-1.113l-7.83.142-.051-2.783 14.43-.262.049 2.783-7.495.137c1.586 1.047 2.397 2.592 2.435 4.633zm-11.392-3.385c-.9.759-1.338 1.788-1.315 3.087.024 1.298.509 2.32 1.455 3.064.927.725 2.22 1.073 3.88 1.043 1.603-.029 2.836-.423 3.699-1.181s1.282-1.796 1.258-3.113c-.024-1.281-.49-2.293-1.398-3.038-.946-.743-2.221-1.101-3.825-1.071-1.603.029-2.854.432-3.754 1.209zm-.835 24.766.015.779-2.154.039c-.063-.407-.1-.861-.109-1.362-.016-.891.13-1.561.439-2.012.328-.433.845-.703 1.552-.808-1.546-.937-2.339-2.482-2.379-4.634-.028-1.577.322-2.837 1.05-3.778.748-.923 1.793-1.397 3.136-1.421 2.61-.048 4.134 1.725 4.573 5.318l.262 2.111c.107.741.303 1.275.589 1.604.305.347.727.516 1.268.506.727-.013 1.245-.255 1.553-.724.328-.452.482-1.206.463-2.264-.021-1.15-.232-1.972-.633-2.466-.382-.494-1.058-.77-2.029-.826l-.05-2.756c3.229.146 4.878 2.148 4.949 6.008.069 3.785-1.313 5.703-4.147 5.755l-7.635.138c-.485.009-.722.273-.713.793zm-.447-7.621c.022 1.188.376 2.165 1.061 2.932s1.643 1.14 2.874 1.118l1.51-.028c-.305-.347-.511-.937-.62-1.771l-.26-1.999c-.15-1.074-.425-1.839-.825-2.296-.382-.457-.917-.68-1.607-.667-.69.013-1.227.245-1.61.697-.365.471-.539 1.142-.523 2.014zm2.605 21.587c-1.268.023-2.283-.395-3.045-1.253-.761-.84-1.231-2.047-1.409-3.622l-1.278-1.062.005.278c.015.798-.179 1.442-.58 1.931-.42.491-.947.742-1.581.753-.839.015-1.497-.307-1.976-.966-.496-.641-.757-1.62-.781-2.937-.011-.631.034-1.226.136-1.785l1.37-.024c-.065.52-.093 1.059-.082 1.616.021 1.169.442 1.746 1.262 1.731.746-.014 1.109-.549 1.09-1.607-.007-.352-.021-.612-.042-.779l1.062-.019 1.333 1.006c.142-3.492 1.749-5.35 4.822-5.572l.051 2.783c-1.005.129-1.707.467-2.107 1.012-.401.546-.59 1.403-.569 2.572.039 2.115.729 3.161 2.072 3.136.577-.01 1.021-.241 1.33-.692s.555-1.254.739-2.408l.253-1.48c.503-3.053 1.911-4.601 4.223-4.643 1.287-.023 2.312.45 3.075 1.42.783.97 1.19 2.317 1.221 4.043.072 3.952-1.503 6.004-4.727 6.155l-.049-2.7c.968-.073 1.643-.382 2.025-.927.4-.546.59-1.375.57-2.489-.016-.89-.197-1.574-.541-2.05-.345-.476-.824-.709-1.44-.698-.559.01-.993.232-1.302.664-.291.432-.521 1.114-.69 2.045l-.225 1.508c-.303 1.769-.783 3.049-1.44 3.84-.657.792-1.582 1.198-2.775 1.22z"
                      fill="#f6f6f6"
                    ></path>
                    <path
                      d="m626.491 195.431h-47.32c-3.185 0-5.766-2.925-5.766-6.532v-24.74c0-3.606 2.581-6.531 5.767-6.531h47.319c3.186 0 5.767 2.925 5.767 6.531v24.74c0 3.607-2.581 6.532-5.767 6.532zm-47.319-36.791c-2.675 0-4.86 2.463-4.86 5.497v24.74c0 3.035 2.185 5.498 4.859 5.498h47.32c2.674 0 4.86-2.463 4.86-5.498v-24.74c0-3.034-2.186-5.497-4.86-5.497z"
                      fill="url(#j)"
                    ></path>
                    <path
                      d="m614.866 195.43h-24.067v-37.824h24.067zm-23.137-1.034h22.23v-35.757h-22.23z"
                      fill="url(#k)"
                    ></path>
                    <path
                      d="m632.283 184.436h-58.877v-15.833h58.877zm-57.97-1.033h57.063v-13.767h-57.063z"
                      fill="url(#l)"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="m307.729 263.195-.165 41.336 49.753-32.576 31.329-20.543 31.352-20.544 49.729-32.598.165-41.293-81.082 53.098-80.655-53.743-.165 41.293 49.492 32.994zm112.104 9.01 49.469 32.972.164-41.336-49.468-32.972z"
                      fill="url(#m)"
                      fillRule="evenodd"
                    ></path>
                    <g filter="url(#c)" opacity="0.5">
                      <path
                        d="m-5.99998 2.2847 774.63498-.00003 312.865 501.21533h-620.5z"
                        fill="#000"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </motion.div>
          <div className="TeamCard_visual__background">
            <img
              src="/assets/jobs-page/icon.565970310eb6a176d876434d8f174dc2.svg"
              alt="Technify Icon"
            />
          </div>
        </div>
      </section>
      {/* <section className="WonderfulIzmir_section">
      <div className="WonderfulIzmir_container">
        <div className="WonderfulIzmir_texts">
          <h2 className="Text_text--display-m Text_text--weight-bold WonderfulIzmir_title">
            <span className="">Wonderful Izmir</span>
          </h2>
          <p className="Text_text--body-l--low-height Text_text--weight-regular WonderfulIzmir_description">
            <span className="">
              Our headquarters are based in Izmir, in the city center
              district of Bayraklı. We believe Izmir has a huge potential to
              become a notable technology center for Turkey with its fine
              balance of urban and countryside lifestyle.
            </span>
          </p>
        </div>
      </div>
      <div className="WonderfulIzmir_images">
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                Beauty
                <br />
                Everywhere
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[122px] lg:group-hover:max-h-[144px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  Izmir is a cultural hub where elegant mosques and
                  traditional bazaars dot the palm-lined boulevards and
                  ancient Greek ruins look down from the hilltops. Whatever
                  lifestyle you’re looking for, believe us, Izmir has it
                  all.
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-1.png"
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
            </span>
          </div>
        </div>
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                A Versatile
                <br />
                Lifestyle
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[189px] lg:group-hover:max-h-[240px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  Having an established and fast-growing urban center with
                  multiple new skyscrapers rising every year, Izmir enjoys a
                  unique Mediterranean climate. You'll have popular summer
                  tourism destinations like Çeşme and Alaçatı or Urla's
                  countless wineries and charming gastronomic attractions at
                  your doorstep — there is always something to do in Izmir!
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-2.png"
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
            </span>
          </div>
        </div>
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                The food is
                <br />
                so delicious
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[170px] lg:group-hover:max-h-[210px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  Izmir has been the home of Greeks, Armenians, Jews,
                  Levantines, and Turks over the centuries, and its
                  delicious cuisine attests to this. With delicious food at
                  every corner, an array of international cuisines, and
                  award-winning restaurants, Izmir will make you fall in
                  love with the city with every bite.
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-3.png"
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
            </span>
          </div>
        </div>
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                Well-connected
                <br />
                to the world
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[126px] lg:group-hover:max-h-[168px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  Izmir, being such a frequently visited city by tourists,
                  has been made very accessible by all modes of transport.
                  Izmir Adnan Menderes International Airport has more than
                  30 direct international flight routes — connecting Izmir
                  to the world.
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-4.png"
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
            </span>
          </div>
        </div>
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                See the wonders
                <br />
                of the world
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[126px] lg:group-hover:max-h-[144px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  The cultural, historical, and natural assets of Izmir make
                  the city one of the must-see destinations in Turkey. The
                  Aegean gem has two magnificent ancient towns on the UNESCO
                  World Heritage List: Pergamon and Ephesus.
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-5.png"
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
            </span>
          </div>
        </div>
        <div className="WonderfulIzmirImage_image group">
          <div className="WonderfulIzmirImage_image__texts">
            <h3 className="Text_text--headline-xl Text_text--weight-bold WonderfulIzmirImage_image__title">
              <span className="">
                A Technology
                <br />
                Hub
              </span>
            </h3>
            <div className="WonderfulIzmirImage_image__description max-h-0 md:group-hover:max-h-[240px] lg:group-hover:max-h-[264px]">
              <p className="Text_text--body-m Text_text--weight-regular">
                <span className="">
                  We believe Izmir has a vast potential to become a notable
                  technology center for Turkey.
                  <br />
                  <br />
                  Our city is a prime location to serve as a tech hub with
                  eight universities, four techno-parks, and a rapidly
                  increasing number of R&amp;D and design centers. We
                  believe that within a decade, Izmir will be the number one
                  reverse-brain-drain destination in Turkey.
                </span>
              </p>
            </div>
          </div>
          <div className="WonderfulIzmirImage_image__item">
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
                position: 'absolute',
                inset: '0px',
              }}
            >
              <img
                alt=""
                src="assets/jobs-page/wonderful-izmir-6.png"
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
            </span>
          </div>
        </div>
      </div>
    </section> */}
      {/* <section className="Lifestyle_section">
      <div className="Lifestyle_container">
        <div className="Lifestyle_texts">
          <h2 className="Text_text--headline-l Text_text--weight-bold Lifestyle_title">
            <span className="">Lifestyle at Technify</span>
          </h2>
          <p className="Text_text--display-m Text_text--weight-bold Lifestyle_subtitle">
            <span className="">
              Not Just a Workplace <b>but a Community </b>
            </span>
          </p>
          <p className="Text_text--body-l Text_text--weight-medium Lifestyle_description">
            <span className="">
              We often spend more time with our colleagues than our family
              and friends. That’s why we strive to provide a wonderful and
              enjoyable work experience for everyone: A workplace that
              doesn’t feel like work.
            </span>
          </p>
          <a
            target="_blank"
            href="https://instagram.com/hubxstudios"
            className="Button_button Button_button--variant-outlined-dark Button_button--radius-large Lifestyle_button"
          >
            <svg
              height="18"
              viewBox="0 0 19 18"
              width="19"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="Button_button__start-icon Button_button__start-icon--fill"
            >
              <clipPath id="a">
                <path d="m.666687.111328h17.7778v17.7778h-17.7778z"></path>
              </clipPath>
              <g clipPath="url(#a)">
                <path d="m9.94501 2c2.03779 0 2.29199.0075 3.09149.045.7988.0375 1.3425.16275 1.821.34875.495.1905.912.4485 1.329.86475.3814.37492.6765.82844.8648 1.329.1852.47775.3112 1.02225.3487 1.821.0353.7995.045 1.05375.045 3.0915 0 2.0378-.0075 2.292-.045 3.0915-.0375.7988-.1635 1.3425-.3487 1.821-.1878.5008-.483.9545-.8648 1.329-.375.3812-.8285.6763-1.329.8648-.4777.1852-1.0222.3112-1.821.3487-.7995.0353-1.0537.045-3.09149.045-2.03775 0-2.292-.0075-3.0915-.045-.79875-.0375-1.3425-.1635-1.821-.3487-.50076-.1879-.95436-.4831-1.329-.8648-.38145-.3749-.67655-.8284-.86475-1.329-.186-.4778-.31125-1.0222-.34875-1.821-.03525-.7995-.045-1.0537-.045-3.0915 0-2.03775.0075-2.292.045-3.0915s.16275-1.3425.34875-1.821c.18767-.50087.48285-.95451.86475-1.329.37475-.38158.82832-.6767 1.329-.86475.4785-.186 1.0215-.31125 1.821-.34875.7995-.03525 1.05375-.045 3.0915-.045zm0 3.75c-.99456 0-1.94839.39509-2.65165 1.09835s-1.09835 1.65709-1.09835 2.65165c0 .9946.39509 1.9484 1.09835 2.6517.70326.7032 1.65709 1.0983 2.65165 1.0983.99459 0 1.94839-.3951 2.65169-1.0983.7032-.7033 1.0983-1.6571 1.0983-2.6517 0-.99456-.3951-1.94839-1.0983-2.65165-.7033-.70326-1.6571-1.09835-2.65169-1.09835zm4.87499-.1875c0-.24864-.0988-.4871-.2746-.66291-.1758-.17582-.4143-.27459-.6629-.27459s-.4871.09877-.6629.27459c-.1758.17581-.2746.41427-.2746.66291s.0988.4871.2746.66291c.1758.17582.4143.27459.6629.27459s.4871-.09877.6629-.27459c.1758-.17581.2746-.41427.2746-.66291zm-4.87499 1.6875c.59669 0 1.16899.23705 1.59099.65901s.659.99425.659 1.59099c0 .5967-.237 1.169-.659 1.591-.422.4219-.9943.659-1.59099.659-.59674 0-1.16904-.2371-1.59099-.659-.42196-.422-.65901-.9943-.65901-1.591 0-.59674.23705-1.16903.65901-1.59099.42195-.42196.99425-.65901 1.59099-.65901z"></path>
              </g>
            </svg>
            <div className="Button_button__children">
              Follow us on Instagram
            </div>
            <div className="Button_button__spinner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
      <div className="Lifestyle_images">
        <div className="Lifestyle_image Lifestyle_image--1">
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
              position: 'absolute',
              inset: '0px',
            }}
          >
            <img
              alt=""
              src="assets/jobs-page/lifestyle-1.png"
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
          </span>
        </div>
        <div className="Lifestyle_image Lifestyle_image--2">
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
              position: 'absolute',
              inset: '0px',
            }}
          >
            <img
              alt=""
              src="assets/jobs-page/lifestyle-2.jpg"
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
          </span>
        </div>
        <div className="Lifestyle_image Lifestyle_image--3">
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
              position: 'absolute',
              inset: '0px',
            }}
          >
            <img
              alt=""
              src="assets/jobs-page/lifestyle-3.jpg"
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
          </span>
        </div>
        <div className="Lifestyle_image Lifestyle_image--4">
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
              position: 'absolute',
              inset: '0px',
            }}
          >
            <img
              alt=""
              src="assets/jobs-page/lifestyle-4.png"
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
          </span>
        </div>
      </div>
    </section> */}
      <div className="HashAnchor_hash-anchor-container">
        <div id="open-positions" className="HashAnchor_hash-anchor"></div>
      </div>
      <section className="OpenPositions_open-positions">
        <div className="OpenPositions_open-positions__container">
          <div className="PositionsInfo_container !mb-10">
            <div className="PositionsInfo_texts">
              <h2 className="Text_text--display-m Text_text--weight-bold">
                <span className="">Work at Technify</span>
              </h2>
              <p className="Text_text--body-xl Text_text--weight-regular PositionsInfo_description">
                <span className="">
                  Explore our latest job opportunities below.
                  <br />
                  If you think you would be a good fit for any of the positions,
                  reach out to us. We&apos;d love to get to know you.
                </span>
              </p>
            </div>
          </div>
          {/* <div className="PositionList_positions PositionList_positions--variant-default">
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Mid./Senior Marketing Artist</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Istanbul, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/b9ada8c77bb9-mid-senior-marketing-artist"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Project Manager</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Istanbul, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/399c78ff47da-project-manager"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">
                Senior Performance Marketing Specialist
              </span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Istanbul, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/b39bf3ac5d65-senior-performance-marketing-specialist"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Development General Application</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Türkiye</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/f14b249f8d4a-development-general-application"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Frontend Developer</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Türkiye</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/2a8e5709e4f5-frontend-developer"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Product General Application</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Türkiye</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/3af39bbca377-product-general-application"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Web Product Manager</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Türkiye</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/32b8fbe90aba-web-product-manager"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Marketing General Application</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İstanbul / İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/7761ab37144c-marketing-general-application"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">React Native Developer</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İstanbul / İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/b69c7d17b2a4-react-native-developer"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Senior iOS Developer</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İstanbul / İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/5e4e364a7ac8-senior-ios-developer"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Android Developer</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/b26d837d3040-android-developer"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Backend Developer</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/100f78632ca7-backend-developer"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="PositionList_position PositionList_position--variant-default">
            <p className="Text_text--headline-l Text_text--weight-bold PositionList_position__title">
              <span className="">Web Growth Manager</span>
            </p>
            <div className="PositionList_position__info">
              <div className="PositionList_info-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 15.9688C12.3281 15.9688 15.9375 12.3516 15.9375 8C15.9375 3.64062 12.3203 0.03125 7.96094 0.03125C3.60938 0.03125 0 3.64062 0 8C0 12.3516 3.61719 15.9688 7.96875 15.9688ZM3.88281 8.84375C3.57031 8.84375 3.33594 8.60938 3.33594 8.29688C3.33594 7.99219 3.57031 7.75781 3.88281 7.75781H7.42188V3.03125C7.42188 2.72656 7.65625 2.49219 7.96094 2.49219C8.26562 2.49219 8.50781 2.72656 8.50781 3.03125V8.29688C8.50781 8.60938 8.26562 8.84375 7.96094 8.84375H3.88281Z"
                    fill="black"
                  ></path>
                </svg>
                <span>Full-Time</span>
              </div>
              <div className="PositionList_info-item">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 0C5.21052 0.00237379 3.49501 0.714295 2.22965 1.97965C0.964295 3.24501 0.252374 4.96052 0.25 6.75C0.25 11.5959 6.53875 17.6653 6.80594 17.9212C6.85791 17.9718 6.92753 18 7 18C7.07247 18 7.14209 17.9718 7.19406 17.9212C7.46125 17.6653 13.75 11.5959 13.75 6.75C13.7476 4.96052 13.0357 3.24501 11.7703 1.97965C10.505 0.714295 8.78948 0.00237379 7 0V0ZM7 9.84375C6.38811 9.84375 5.78997 9.6623 5.2812 9.32236C4.77244 8.98241 4.37591 8.49924 4.14175 7.93393C3.90759 7.36862 3.84632 6.74657 3.9657 6.14644C4.08507 5.54631 4.37972 4.99506 4.81239 4.56239C5.24506 4.12972 5.79631 3.83507 6.39644 3.7157C6.99657 3.59632 7.61862 3.65759 8.18393 3.89175C8.74924 4.12591 9.23241 4.52244 9.57236 5.0312C9.9123 5.53997 10.0938 6.13811 10.0938 6.75C10.0933 7.57036 9.76715 8.35698 9.18707 8.93707C8.60699 9.51715 7.82036 9.84326 7 9.84375Z"
                    fill="black"
                  ></path>
                </svg>
                <span>İzmir, TR</span>
              </div>
            </div>
            <a
              href="https://hubx.co/jobs/df78e3aafa15-web-growth-manager"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Apply Now</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div> */}
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <a href="/contact" className="Button_button__children">
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
