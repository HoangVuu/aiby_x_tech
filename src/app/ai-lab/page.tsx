"use client";

import './AILab.css';
import { motion } from 'motion/react';
import {
  getMotionFadeInAndSlideUpAnimation,
  getMotionFadeInAndZoomInAnimation,
  getMotionFadeInFromLeftToRightAnimation,
} from '../../utils/animation';
import Image from 'next/image';

export default function AILab() {
  return (
    <main>
    <section className="ai-lab-welcome Hero_hero--reveal">
      <div className="Hero_hero__container__ailab">
        <h1 className="Hero_hero__title__ailab">AI Lab by AIBY X Technology</h1>
        <p className="Hero_hero__description__ailab">
          Welcoming Vietnam’s Finest Machine Learning Engineers
        </p>
        <a
          href="https://hubx.breezy.hr/p/3fa28e2d66ca-machine-learning-engineer"
          className="Button_button Button_button--variant-filled-light Button_button--radius-large Hero_hero__apply__ailab"
        >
          <div className="Button_button__children">Apply Now</div>
          <div className="Button_button__spinner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
      <section className="WhatsNewGrad_whats-new-grad WhatsNewGrad_whats-new-grad--reveal">
        <div className="WhatsNewGrad_whats-new-grad__container">
          <p className="WhatsNewGrad_whats-new-grad__title">
            What is the AI Lab <br />
            by AIBY X Technology?
          </p>
          <p className="WhatsNewGrad_whats-new-grad__description">
            Welcome to the AI Lab, where innovation meets intelligence. Our
            program is a dynamic ecosystem designed to fuel groundbreaking
            advancements in machine learning and artificial intelligence.
            Through collaborative research initiatives, cutting-edge
            technologies, and a community of top-tier experts, we empower
            pioneers to push the boundaries of what&apos;s possible in the
            ever-evolving landscape of AI/ML.
            <br />
            <br />
            Join us on this transformative journey as we shape the future of AI
            together.
          </p>
        </div>
        <svg width="0" height="0">
          <clipPath id="x-symbol-mask">
            <path
              d="M1567 1474h-413.72l-369.795-472.69L413.716 1474H0l576.642-736.91L0 0h413.537l369.948 472.688L990.358 737.09l184.972 236.582L1567 1474Zm0-1474h-413.57L783.485 472.688h413.745L1567 0Z"
              fill="black"
            ></path>
          </clipPath>
        </svg>
        <div className="XSymbol_x-symbol">
          <div className="XSymbol_x-symbol__video-container">
            <video
              muted={true}
              autoPlay={true}
              loop={true}
              preload="metadata"
              // playsinline=""
              src="/assets/ai-lab/ai-lab-video.mp4"
            ></video>
          </div>
        </div>
      </section>
      <div className="StarParticles_particles">
        <div className="StarParticles_particles__particle StarParticles_particles__particle--1"></div>
        <div className="StarParticles_particles__particle StarParticles_particles__particle--2"></div>
      </div>
    </section>

    <section className="WhatWeDoAtAiLab_what-we-do">
      <div className="WhatWeDoAtAiLab_what-we-do__container">
        <h1 className="WhatWeDoAtAiLab_what-we-do__title">What We Do?</h1>
        <p className="WhatWeDoAtAiLab_what-we-do__subtitle">at the AI Lab</p>
        <p className="WhatWeDoAtAiLab_what-we-do__description">
          At AIBY X Technology, we are building and growing highly-scalable AI-based mobile
          apps with a track record to be proud of — our apps and games have
          reached over million users across 160 countries.
          <br />
          <br />
          In addition to our ML team at AIBY X Technology HQ, we have established an ML
          center at the Ho Chi Minh City of Technology. At the AI Lab
          by AIBY X Technology, we are dedicated to pioneering advancements in machine
          learning and artificial intelligence. Through our multifaceted
          approach, we drive innovation, foster collaboration, and empower
          individuals to shape the future of AI.
          <br />
          <br />
          Through cutting-edge research initiatives, we explore the frontiers of
          machine learning, unraveling new insights and pushing the boundaries
          of what&apos;s possible. Our expert-led mentorship programs provide
          invaluable guidance, nurturing talent and accelerating professional
          growth.
          <br />
          <br />
          We cultivate a vibrant and inclusive community where passionate
          individuals come together to share ideas, collaborate on projects, and
          inspire one another. Together, we harness the power of collective
          intelligence to tackle complex challenges and drive meaningful impact.
        </p>
      </div>
    </section>

    <section className="WhyNewGrad_why-new-grad WhyNewGrad_why-new-grad--reveal">
      <div className="WhyNewGrad_why-new-grad__container">
        <motion.p
          {...getMotionFadeInAndSlideUpAnimation()}
          className="WhyNewGrad_why-new-grad__subtitle"
        >
          Top Reasons
        </motion.p>
        <motion.h1
          {...getMotionFadeInAndSlideUpAnimation()}
          className="WhyNewGrad_why-new-grad__title"
        >
          Why the AI Lab is Essential
        </motion.h1>
        <ul className="ReasonList_reason-list">
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ReasonItem_reason-item ReasonItem_reason-item--variant-cutting-edge"
          >
            <div className="ReasonItem_reason-item__background"></div>
            <div className="ReasonItem_reason-item__wrapper">
              <div className="ReasonItem_reason-item__content">
                <p className="ReasonItem_reason-item__title">
                  Cutting-edge Research Opportunities:
                </p>
                <p className="ReasonItem_reason-item__description">
                  Participants in the AI Lab by AIBY X Technology gain access to
                  cutting-edge research projects at the forefront of machine
                  learning and artificial intelligence. Engage with
                  groundbreaking technologies and explore innovative solutions
                  to real-world problems.
                </p>
                <div className="ReasonItem_reason-item__globe ReasonItem_reason-item__globe--show">
                  <Image src="/assets/ai-lab/globe.avif" alt={'Globe'} />
                </div>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ReasonItem_reason-item ReasonItem_reason-item--variant-contributing-industry"
          >
            <div className="ReasonItem_reason-item__background"></div>
            <div className="ReasonItem_reason-item__wrapper">
              <div className="ReasonItem_reason-item__content">
                <p className="ReasonItem_reason-item__title">
                  Contributing to Industry Advancement:
                </p>
                <p className="ReasonItem_reason-item__description">
                  By facilitating research, collaboration, and knowledge
                  dissemination, the AI Lab by AIBY X Technology plays a pivotal role in
                  advancing the AI-based mobile application industry as a whole.
                  Through groundbreaking research, in-depth studies, and
                  community engagement, the Lab aims to contribute to shaping
                  the future of machine learning.
                </p>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ReasonItem_reason-item ReasonItem_reason-item--variant-collaborative-community"
          >
            <div className="ReasonItem_reason-item__background"></div>
            <div className="ReasonItem_reason-item__wrapper">
              <div className="ReasonItem_reason-item__content">
                <p className="ReasonItem_reason-item__title">
                  Collaborative Community:
                </p>
                <p className="ReasonItem_reason-item__description">
                  It is a vibrant and collaborative community of like-minded
                  individuals passionate about advancing machine learning.
                  Connect with peers, share ideas, and collaborate on projects
                  that push the boundaries of AI innovation. This collaboration
                  not only enhances individual skill sets but also promotes
                  knowledge sharing and community building within the broader ML
                  ecosystem.
                </p>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ReasonItem_reason-item ReasonItem_reason-item--variant-career-development"
          >
            <div className="ReasonItem_reason-item__background"></div>
            <div className="ReasonItem_reason-item__wrapper">
              <div className="ReasonItem_reason-item__content">
                <p className="ReasonItem_reason-item__title">
                  Career Development Opportunities:
                </p>
                <p className="ReasonItem_reason-item__description">
                  The AI Lab by AIBY X Technology offers ample opportunities for career
                  development and advancement in the field of machine learning.
                  Gain practical experience, build a strong professional
                  network, and position yourself for success in a rapidly
                  evolving industry.
                </p>
                <div className="ReasonItem_reason-item__cubes ReasonItem_reason-item__cubes--show">
                  <Image src="/assets/ai-lab/cubes.avif" alt={'cubes'} />
                </div>
              </div>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>

    <section className="WhatYouWillBeDoing_what-you-will-be-doing">
      <div className="WhatYouWillBeDoing_what-you-will-be-doing__container">
        <p className="WhatYouWillBeDoing_what-you-will-be-doing__subtitle">
          Our Research Focus
        </p>
        <h1 className="WhatYouWillBeDoing_what-you-will-be-doing__title">
          What are the key research areas?
        </h1>
        <p className="WhatYouWillBeDoing_what-you-will-be-doing__description">
          We aim to unlock the full potential of ML to drive innovation and
          discovery while maximizing the product defensibility by assembling a
          team with diverse skills, providing them with the necessary tools and
          infrastructure, and fostering a collaborative work environment. Our
          research focus encompasses the cutting-edge domain of Generative AI
          Modeling, targeting four pivotal areas: Computer Vision (CV), Model
          Optimization, Natural Language Processing (NLP), and Audio Data
          Processing.
        </p>
        <ul className="StepList_step-list">
          <li
            className="StepItem_step-item StepItem_step-item--reveal"
            // style={{ "--index": 0 }}
          >
            <motion.div
              {...getMotionFadeInAndZoomInAnimation()}
              className="StepItem_shape"
            >
              <div className="StepItem_shape__trail"></div>
              <div className="StepItem_shape__ellipse"></div>
            </motion.div>
            <motion.span
              {...getMotionFadeInAndSlideUpAnimation()}
              className="StepItem_step-item__text"
            >
              Computer Vision (CV)
            </motion.span>
          </li>
          <li
            className="StepItem_step-item StepItem_step-item--reveal"
            // style="--index: 1"
          >
            <motion.div
              {...getMotionFadeInFromLeftToRightAnimation(1)}
              className="StepItem_shape"
            >
              <div className="StepItem_shape__trail"></div>
              <div className="StepItem_shape__ellipse"></div>
            </motion.div>
            <motion.span
              {...getMotionFadeInAndSlideUpAnimation(1)}
              className="StepItem_step-item__text"
            >
              Model Optimization
            </motion.span>
          </li>
          <li
            className="StepItem_step-item StepItem_step-item--reveal"
            // style="--index: 2"
          >
            <motion.div
              {...getMotionFadeInFromLeftToRightAnimation(1.5)}
              className="StepItem_shape"
            >
              <div className="StepItem_shape__trail"></div>
              <div className="StepItem_shape__ellipse"></div>
            </motion.div>
            <motion.span
              {...getMotionFadeInAndSlideUpAnimation(1.5)}
              className="StepItem_step-item__text"
            >
              Natural Language Processing (NLP)
            </motion.span>
          </li>
          <li
            className="StepItem_step-item StepItem_step-item--reveal"
            // style="--index: 3"
          >
            <motion.div
              {...getMotionFadeInFromLeftToRightAnimation(2)}
              className="StepItem_shape"
            >
              <div className="StepItem_shape__trail"></div>
              <div className="StepItem_shape__ellipse"></div>
            </motion.div>
            <motion.span
              {...getMotionFadeInAndSlideUpAnimation(2)}
              className="StepItem_step-item__text"
            >
              Audio Data Processing
            </motion.span>
          </li>
        </ul>
        <ul className="ResearchList_research-list">
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ResearchItem_research-item ResearchItem_research-item--variant-computer-vision"
          >
            <div className="ResearchItem_research-item__background"></div>
            <div className="ResearchItem_research-item__wrapper">
              <div className="ResearchItem_research-item__content">
                <p className="ResearchItem_research-item__title">
                  Computer Vision
                </p>
                <p className="ResearchItem_research-item__description">
                  We aim to revolutionize how machines interpret and generate
                  visual data, creating and fine tuning models that can
                  seamlessly construct realistic images and videos from textual
                  descriptions. We will focus on enabling machines to interpret,
                  understand, and generate visual content in a way that mimics
                  human visual perception. This area of study is particularly
                  fascinating because it involves teaching computers not just to
                  see but to analyze and create images and videos with an
                  understanding of context, depth, and semantic meaning. This
                  includes synthesizing photorealistic scenes, generating human
                  faces that do not exist, and creating animated sequences from
                  static images.
                </p>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ResearchItem_research-item ResearchItem_research-item--variant-model-optimization"
          >
            <div className="ResearchItem_research-item__background"></div>
            <div className="ResearchItem_research-item__wrapper">
              <div className="ResearchItem_research-item__content">
                <p className="ResearchItem_research-item__title">
                  Model Optimization
                </p>
                <p className="ResearchItem_research-item__description">
                  Model Optimization stands at the core of our efforts, where we
                  refine and advance algorithms to achieve unprecedented
                  efficiency and performance, making AI more accessible and
                  sustainable for real-world applications.
                </p>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ResearchItem_research-item ResearchItem_research-item--variant-audio-data-processing"
          >
            <div className="ResearchItem_research-item__background"></div>
            <div className="ResearchItem_research-item__wrapper">
              <div className="ResearchItem_research-item__content">
                <p className="ResearchItem_research-item__title">
                  Audio Data Processing
                </p>
                <p className="ResearchItem_research-item__description">
                  Audio Data Processing focuses on synthesizing and transforming
                  sounds, including speech and music, paving the way for
                  innovations in how we interact with technology and each other
                  through sound. Across these domains, our research not only
                  pushes the boundaries of what&apos;s possible with Generative AI
                  but also explores ethical considerations, ensuring the
                  responsible development and deployment of AI technologies.
                </p>
              </div>
            </div>
          </motion.li>
          <motion.li
            {...getMotionFadeInAndZoomInAnimation()}
            className="ResearchItem_research-item ResearchItem_research-item--variant-natural-language-processing"
          >
            <div className="ResearchItem_research-item__background"></div>
            <div className="ResearchItem_research-item__wrapper">
              <div className="ResearchItem_research-item__content">
                <p className="ResearchItem_research-item__title">
                  Natural Language Processing (NLP)
                </p>
                <p className="ResearchItem_research-item__description">
                  The exploration within NLP seeks to break new ground in
                  understanding and generating human language, enabling machines
                  to compose text that is indistinguishable from that written by
                  humans, thus opening new avenues for automated content
                  creation and interactive AI systems.
                </p>
              </div>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  </main>
  );
}
