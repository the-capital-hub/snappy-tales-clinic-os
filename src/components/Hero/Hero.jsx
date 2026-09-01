import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiCalendar,
  FiMessageCircle,
  FiGlobe,
} from "react-icons/fi";
import "./Hero.css";

function SnappyTalesLogo() {
  return (
    <svg
      className="hero-snappy-logo"
      viewBox="0 0 317 318"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Snappy Tales"
    >
      <rect
        x="23.5"
        y="22"
        width="270"
        height="270"
        rx="135"
        fill="#F4C906"
      />

      <path
        d="M74.5652 112.391C74.5652 86.458 95.5883 65.4348 121.522 65.4348H241.848V71.3044C241.848 97.2377 220.825 118.261 194.891 118.261H74.5652V112.391Z"
        fill="black"
      />

      <path
        d="M74.5654 135.87C74.5654 161.803 95.5886 182.826 121.522 182.826H241.848V176.957C241.848 151.023 220.825 130 194.892 130H74.5654V135.87Z"
        fill="black"
      />

      <path
        d="M74.5654 218.044C74.5654 205.077 85.077 194.565 98.0437 194.565H241.848V200.435C241.848 226.368 220.825 247.391 194.892 247.391H74.5654V218.044Z"
        fill="black"
      />
    </svg>
  );
}

function Hero() {
  return (
    <section className="clinic-hero">

      <div className="clinic-hero-container">

        

        {/* MAIN */}
        <div className="clinic-hero-grid">

          {/* LEFT */}
          <motion.div
            className="clinic-hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="clinic-hero-eyebrow">
              THE DIGITAL FRONT DESK
            </p>

            <h1>
              Your clinic's
              <br />
              <span>digital front door.</span>
            </h1>

            <p className="clinic-hero-description">
              A modern digital experience designed to help
              dental clinics get discovered, build trust and
              make it easier for patients to connect.
            </p>

            {/* PRODUCT FLOW */}
            <div className="clinic-hero-flow">

              <div className="hero-flow-item">
                <div className="hero-flow-icon">
                  <FiGlobe size={13} />
                </div>

                <div>
                  <strong>01</strong>
                  <span>Website</span>
                </div>
              </div>

              <FiArrowDown className="hero-flow-arrow" />

              <div className="hero-flow-item">
                <div className="hero-flow-icon">
                  <FiCalendar size={13} />
                </div>

                <div>
                  <strong>02</strong>
                  <span>Booking</span>
                </div>
              </div>

              <FiArrowDown className="hero-flow-arrow" />

              <div className="hero-flow-item">
                <div className="hero-flow-icon">
                  <FiMessageCircle size={13} />
                </div>

                <div>
                  <strong>03</strong>
                  <span>WhatsApp</span>
                </div>
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="clinic-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <div className="clinic-hero-image-wrap">

              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=90"
                alt="Modern dental clinic"
              />

              <div className="clinic-hero-image-overlay" />

              <div className="clinic-hero-image-top">
                <span>CLINICOS</span>
                <span>01 / 14</span>
              </div>

              <div className="clinic-hero-image-caption">
                <div className="hero-caption-number">
                  01
                </div>

                <p>
                  A better first impression
                  <br />
                  starts online.
                </p>
              </div>

            </div>

            {/* YELLOW DETAIL */}
            <div className="clinic-hero-yellow-block">
              <span>CLINIC</span>
              <span>ONLINE</span>
            </div>

            {/* SMALL FLOATING LABEL */}
            <div className="clinic-hero-floating-card">
              <span>MODERN DENTAL</span>

              <strong>
                Digital
                <br />
                Experience
              </strong>
            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          className="clinic-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >

          <span>
            WEBSITE • APPOINTMENT BOOKING • WHATSAPP • PATIENT MANAGEMENT
          </span>


          <div className="clinic-hero-contact">
    <span>GET IN TOUCH</span>
    <a href="tel:+917026020151">
      +91 70260 20151
    </a>
  </div>


          <p>
            Built specifically for modern dental clinics.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;