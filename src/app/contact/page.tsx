"use client";

import { motion } from 'motion/react';
import './Contact.css';
import { getMotionFadeInAnimation } from '../../utils/animation';

export default function Contact() {
  return (
    <main>
    <section className="contact">
      <motion.img
        alt=""
        src="/assets/contact/get-in-touch.svg"
        decoding="async"
        data-nimg="fill"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          minHeight: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        className="get-in-touch__bg"
        {...getMotionFadeInAnimation(0.3)}
      />

      <div className="contact__info">
        <h1 className="contact__info__title">
          <span className="">Get in touch</span>
        </h1>
        <p className="contact__info__description">
          <span className="Text_text--gradient-gray">
            For all enquiries, feel free to contact us from the email below.
          </span>
        </p>
        <a className="contact__info__email" href="mailto:hello@xtech.ai.vn">
          hello@xtech.ai.vn
        </a>
        <p className="contact__info__address Hero_section__address-title">
          <span className="">Address</span>
        </p>
        <p className="contact__info__address-details Hero_section__address">
          <span className="">
            590/12 Phan Van Tri
            <br />
            Ward 7, District Go Vap
            <br />
            Ho Chi Minh City, Vietnam
          </span>
        </p>
        <div className="Hero_button">
          <a
            className="contact__info__open"
            target="_blank"
            href="https://maps.app.goo.gl/D4myCGrFTgWqX9819"
          >
            <span className="contact__info__open__text">Open In Map</span>
            <svg
              fill="none"
              height="25"
              viewBox="0 0 24 25"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="m16.9508 8.55078-9.90002 9.90002"></path>
                <path d="m10 8.5 6.95.049.05 6.951"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <section className="contact-cards">
      <div className="contact-cards__content">
        <article className="card">
          <p className="card__title">General Contact Email</p>
          <p className="card__description">Say Hello</p>
          <div className="card__email">
            <a className="email" href="mailto:hello@xtech.ai.vn">
              hello@xtech.ai.vn
            </a>
          </div>
        </article>
        <article className="card">
          <p className="card__title">Investment</p>
          <p className="card__description">
            Interested in selling your app or looking for an investment?
          </p>
          {/* <div className="card__email">
            <a className="email" href="mailto:investment@xtech.co">
              investment@xtech.co
            </a>
          </div> */}
        </article>
        <article className="card">
          <p className="card__title">Press</p>
          <p className="card__description">
            Interested in including AIBY X Technology in your next article or blog?
          </p>
          {/* <div className="card__email">
            <a className="email" href="mailto:press@xtech.co">
              press@xtech.co
            </a>
          </div> */}
        </article>
      </div>
    </section>

    <section className="contact__support">
      <div className="contact__support__container">
        <img
          alt=""
          src="/assets/contact/contact-support.png"
          decoding="async"
          data-nimg="fill"
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            minHeight: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
          }}
          sizes="100vw"
          className="contact__support__bg"
        />

        <div className="contact__support__content">
          <h2 className="contact__support__title">
            Contact Our Beta Test Support
          </h2>
          <p className="contact__support__description">
            You can always reach out beta test release team via our Discord
            channel or Email.
          </p>

          <a
            className="contact__support__email"
            href="mailto:hello@xtech.ai.vn"
          >
            hello@xtech.ai.vn
          </a>
        </div>
      </div>

      <div className="contact-us">
        <div className="contact-us__container">
          <form
            className="contact-us__form"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
              };

              try {
                const response = await fetch(
                  'https://script.google.com/macros/s/AKfycbwOK1PD5tXBkCYIQfNWpDAPvDgHspsmBVj9EtTKJxRGlFS_71Bm6UNxkEXNiP7xfHBavQ/exec',
                  {
                    redirect: "follow",
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      'Content-Type': 'text/plain;charset=utf-8',
                    }
                  }
                );

                if (response.ok) {
                  console.log('response', response);
                  alert('Message sent successfully!');
                  form.reset();
                } else {
                  alert('Failed to send message.');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while sending the message.');
              }
            }}
          >
            <h2 className="contact-us__title">Say hello</h2>
            <p className="contact-us__description">
              Avg. response time: 72 hours or less
            </p>
            <div className="inputs__tyMmX">
              <label className="Input_input contact-us__input">
                <input
                  name="name"
                  className="Input_input__input Input_input__input--light"
                  placeholder=" "
                  type="text"
                  required
                />
                <span className="Input_placeholder">Your Name</span>
              </label>
              <label className="Input_input contact-us__input">
                <input
                  name="email"
                  className="Input_input__input Input_input__input--light"
                  placeholder=" "
                  type="email"
                  required
                />
                <span className="Input_placeholder">E-mail</span>
              </label>
              <label className="Input_input contact-us__input">
                <textarea
                  name="message"
                  className="Input_input__input Input_input__input--light Input_input__input--textarea"
                  placeholder=" "
                  rows={6}
                  required
                ></textarea>
                <span className="Input_placeholder">Message</span>
              </label>
            </div>
            <button
              type="submit"
              className="Button_button Button_button--variant-filled-dark Button_button--radius-large"
            >
              <div className="Button_button__children">Send Message</div>
              <div className="Button_button__spinner">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </form>
          <div className="contact-us__address">
            <h2 className="contac-us_address__title">Address</h2>
            <div className="CompanyAddress_map__image-wrapper">
              <div className="CompanyAddress_map__image-container">
                <img
                  src="assets/contact/gg-map.png"
                  className="contact-us__map"
                />
              </div>
            </div>
            <p className="contact-us_address__details">
              590/12 Phan Van Tri, Ward 7, District Go Vap
              <br />
              Ho Chi Minh City, Vietnam
            </p>
            <p className="contact-us_address__hours">09:00 AM - 06:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
