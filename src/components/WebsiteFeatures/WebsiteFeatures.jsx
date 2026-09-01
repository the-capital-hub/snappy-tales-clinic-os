import {
  ArrowUpRight,
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

        {/* HEADER */}
        <motion.div
          className="website-features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="website-features-label">
            <span />
            YOUR WEBSITE
          </div>

          <div className="website-features-heading">
            <h2>
              Everything a patient
              <br />
              needs <span>before they book.</span>
            </h2>

            <p>
              Your website should do more than look good.
              It should answer questions, build trust and make
              taking the next step easy.
            </p>
          </div>
        </motion.div>

        {/* MAIN AREA */}
        <div className="website-features-main">

          {/* LEFT VISUAL */}
          <motion.div
            className="website-features-visual"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="website-browser">

              <div className="website-browser-bar">
                <div className="website-browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="website-browser-url">
                  yourclinic.clinicos.in
                </div>

                <span className="browser-menu">•••</span>
              </div>

              {/* WEBSITE MOCKUP */}
              <div className="website-screen">

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

                  <button>
                    Book Appointment
                  </button>
                </div>

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
                      around your comfort and confidence.
                    </p>

                    <button className="mock-cta">
                      Book Your Visit
                      <ArrowUpRight size={13} />
                    </button>

                  </div>

                  <div className="mock-image">
                    <div className="mock-person">
                      <span>YOUR</span>
                      <strong>CLINIC</strong>
                    </div>
                  </div>

                </div>

                <div className="mock-trust">

                  <div>
                    <Check size={11} />
                    <span>Experienced doctors</span>
                  </div>

                  <div>
                    <Check size={11} />
                    <span>Modern facilities</span>
                  </div>

                  <div>
                    <Check size={11} />
                    <span>Patient-first care</span>
                  </div>

                </div>

              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              className="website-floating-card"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="floating-check">
                <Check size={15} />
              </div>

              <div>
                <small>READY TO BOOK</small>
                <strong>Appointment available</strong>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="website-feature-list">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="website-feature-item"
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                >

                  <div className="website-feature-icon">
                    <Icon size={19} />
                  </div>

                  <div className="website-feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>

                  <span className="website-feature-number">
                    0{index + 1}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="website-features-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span>THE RESULT</span>

            <strong>
              A digital experience patients can trust.
            </strong>
          </div>

          <div className="website-features-check">
            <Check size={17} />
            We build the website. You focus on your patients.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WebsiteFeatures;