import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* Background decoration */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-inner">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            THE DIGITAL FRONT DESK FOR DENTAL CLINICS
          </div>

          <h1>
            Your clinic
            <br />
            deserves a{" "}
            <span>digital front door.</span>
          </h1>

          <p className="hero-description">
            Get your clinic online in 24 hours with a professional
            website, appointment booking and WhatsApp experience
            built specifically for modern dental clinics.
          </p>

          <div className="hero-actions">

            <a href="#pricing" className="hero-primary">
              Get Started
              <span>
                <ArrowUpRight size={18} />
              </span>
            </a>

            <a href="#templates" className="hero-secondary">
              <span className="play-icon">
                <Play size={14} fill="currentColor" />
              </span>
              Explore Templates
            </a>

          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              <span>DR</span>
              <span>DS</span>
              <span>AK</span>
            </div>

            <div>
              <div className="trust-stars">★★★★★</div>
              <p>Built for modern dental clinics</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >

          <div className="hero-card">

            <div className="browser-top">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                yourclinic.clinicos.in
              </div>
            </div>

            <div className="clinic-preview">

              <div className="preview-nav">
                <strong>SMILE<span>+</span></strong>

                <div className="preview-links">
                  <span>Home</span>
                  <span>About</span>
                  <span>Treatments</span>
                  <span>Contact</span>
                </div>

                <button>Book Appointment</button>
              </div>

              <div className="preview-hero">

                <div className="preview-copy">
                  <small>WELCOME TO YOUR SMILE</small>

                  <h3>
                    Confident smiles.
                    <br />
                    Exceptional care.
                  </h3>

                  <p>
                    Modern dentistry designed around
                    your comfort and confidence.
                  </p>

                  <button>
                    Book Your Visit
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <div className="preview-image">
                  <div className="doctor-placeholder">
                    <span>YOUR</span>
                    <strong>CLINIC</strong>
                  </div>
                </div>

              </div>

              <div className="preview-stats">
                <div>
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>

                <div>
                  <strong>10K+</strong>
                  <span>Happy Patients</span>
                </div>

                <div>
                  <strong>4.9</strong>
                  <span>Patient Rating</span>
                </div>
              </div>

            </div>

          </div>

          {/* FLOATING BOOKING CARD */}
          <motion.div
            className="floating-booking"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon">✓</div>

            <div>
              <small>NEW APPOINTMENT</small>
              <strong>Appointment Requested</strong>
            </div>
          </motion.div>

          {/* FLOATING WHATSAPP CARD */}
          <motion.div
            className="floating-whatsapp"
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="whatsapp-dot">W</div>

            <div>
              <small>WHATSAPP</small>
              <strong>New patient enquiry</strong>
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* BOTTOM MARQUEE */}
      <div className="hero-marquee">
        <div className="marquee-track">
          <span>WEBSITE</span>
          <i>✦</i>
          <span>APPOINTMENT BOOKING</span>
          <i>✦</i>
          <span>WHATSAPP</span>
          <i>✦</i>
          <span>PATIENT MANAGEMENT</span>
          <i>✦</i>
          <span>WEBSITE</span>
          <i>✦</i>
          <span>APPOINTMENT BOOKING</span>
          <i>✦</i>
        </div>
      </div>

    </section>
  );
}

export default Hero;