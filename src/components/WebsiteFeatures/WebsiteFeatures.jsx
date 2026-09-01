import {
  CalendarCheck2,
  Check,
  Globe2,
  MessageCircle,
  Smartphone,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import "./WebsiteFeatures.css";

const features = [
  {
    icon: Globe2,
    title: "Your Clinic",
    text: "Tell patients who you are, where you are and what makes your practice different.",
  },
  {
    icon: UserRound,
    title: "Your Doctors",
    text: "Showcase qualifications, experience, specialisations and professional profiles.",
  },
  {
    icon: Stethoscope,
    title: "Your Services",
    text: "Present treatments clearly so patients understand what your clinic offers.",
  },
  {
    icon: CalendarCheck2,
    title: "Appointment Booking",
    text: "Give visitors a simple path from interest to an appointment request.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Let patients contact your clinic through a channel they already know.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    text: "A responsive experience designed for patients discovering you on their phones.",
  },
];

function WebsiteFeatures() {
  return (
    <section className="website-features" id="website-features">
      <div className="website-features-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="website-features-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="website-features-topline">

            <div className="website-features-label">
              <span />
              YOUR WEBSITE
            </div>

            <div className="website-features-page">
              05 / 14
            </div>

          </div>

          <div className="website-features-heading">

            <div>
              <p className="website-features-eyebrow">
                BUILT AROUND THE PATIENT
              </p>

              <h2>
                Everything a patient
                <br />
                needs <span>before they book.</span>
              </h2>
            </div>

            <p>
              Your website should do more than look good.
              It should answer questions, build trust and make
              the patient journey feel simple.
            </p>

          </div>
        </motion.div>

        {/* =================================================
            MAIN AREA
        ================================================= */}

        <div className="website-features-main">

          {/* =================================================
              WEBSITE VISUAL
          ================================================= */}

          <motion.div
            className="website-features-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="website-browser">

              {/* BROWSER BAR */}

              <div className="website-browser-bar">

                <div className="website-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="website-browser-url">
                  yourclinic.clinicos.in
                </div>

                <span className="browser-menu">
                  •••
                </span>

              </div>

              {/* WEBSITE MOCKUP */}

              <div className="website-screen">

                {/* NAVIGATION */}

                <div className="mock-nav">

                  <strong>
                    SMILE<span>+</span>
                  </strong>

                  <div className="mock-nav-links">
                    <span>About</span>
                    <span>Treatments</span>
                    <span>Doctors</span>
                    <span>Contact</span>
                  </div>

                  <div className="mock-nav-indicator">
                    CLINIC
                  </div>

                </div>

                {/* HERO */}

                <div className="mock-content">

                  <div className="mock-copy">

                    <small>
                      MODERN DENTISTRY
                    </small>

                    <h3>
                      A healthier
                      <br />
                      smile starts here.
                    </h3>

                    <p>
                      Personalised dental care designed
                      around comfort, confidence and
                      long-term oral health.
                    </p>

                    <div className="mock-info-row">

                      <div>
                        <Check size={10} />
                        <span>
                          Patient-first care
                        </span>
                      </div>

                      <div>
                        <Check size={10} />
                        <span>
                          Experienced team
                        </span>
                      </div>

                    </div>

                  </div>

                  <div className="mock-image">

                    <div className="mock-person">
                      <span>YOUR</span>
                      <strong>CLINIC</strong>
                    </div>

                  </div>

                </div>

                {/* TRUST STRIP */}

                <div className="mock-trust">

                  <div>
                    <Check size={11} />
                    <span>
                      Experienced doctors
                    </span>
                  </div>

                  <div>
                    <Check size={11} />
                    <span>
                      Modern facilities
                    </span>
                  </div>

                  <div>
                    <Check size={11} />
                    <span>
                      Patient-first care
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* VISUAL LABEL */}

            <div className="website-visual-label">

              <span>01</span>

              <div>
                <small>
                  DIGITAL EXPERIENCE
                </small>

                <strong>
                  Designed around your clinic.
                </strong>
              </div>

            </div>

          </motion.div>

          {/* =================================================
              FEATURES
          ================================================= */}

          <div className="website-feature-list">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  className="website-feature-item"
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                >

                  <div className="website-feature-icon">
                    <Icon size={18} />
                  </div>

                  <div className="website-feature-content">

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.text}
                    </p>

                  </div>

                  <span className="website-feature-number">
                    0{index + 1}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <motion.div
          className="website-features-bottom"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <div>

            <span>
              THE RESULT
            </span>

            <strong>
              A digital experience patients can understand,
              trust and navigate with confidence.
            </strong>

          </div>

          <div className="website-features-check">

            <Check size={16} />

            <span>
              Built for modern dental clinics
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WebsiteFeatures;