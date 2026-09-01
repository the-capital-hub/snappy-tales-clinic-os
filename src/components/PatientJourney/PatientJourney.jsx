import {
  FiArrowRight,
  FiCalendar,
  FiGlobe,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";

import { motion } from "framer-motion";

import "./PatientJourney.css";

const journey = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find",
    text: "A patient discovers your clinic online.",
    icon: FiGlobe,
  },
  {
    number: "02",
    label: "EXPLORE",
    title: "Trust",
    text: "Your website builds confidence before they call.",
    icon: FiUser,
  },
  {
    number: "03",
    label: "CONNECT",
    title: "Talk",
    text: "They start a conversation or request an appointment.",
    icon: FiMessageCircle,
  },
  {
    number: "04",
    label: "APPOINTMENT",
    title: "Book",
    text: "Their interest becomes a real appointment.",
    icon: FiCalendar,
  },
];

function PatientJourney() {
  return (
    <section className="patient-journey" id="journey">
      <div className="patient-journey-container">

        {/* HEADER */}
        <motion.div
          className="pj-new-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pj-new-kicker">
            <span />
            PATIENT JOURNEY
          </div>

          <div className="pj-new-title-wrap">
            <h2>
              Patients don't think
              <br />
              in <em>systems.</em>
            </h2>

            <p>
              They simply want to find a clinic they trust,
              ask a question and book an appointment.
            </p>
          </div>
        </motion.div>

        {/* JOURNEY */}
        <div className="pj-new-visual">

          <div className="pj-side-label">
            <span>THE JOURNEY</span>

            <div className="pj-side-line" />

            <small>
              From first interaction
              <br />
              to booked appointment.
            </small>
          </div>

          <div className="pj-flow">

            <div className="pj-flow-line">
              <motion.div
                className="pj-flow-line-active"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
              />
            </div>

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  className={`pj-flow-item ${
                    index === journey.length - 1
                      ? "pj-flow-item-last"
                      : ""
                  }`}
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                >
                  <div className="pj-flow-number">
                    {item.number}
                  </div>

                  <div className="pj-flow-node">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className="pj-flow-copy">
                    <span>{item.label}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CLINICOS */}
        <motion.div
          className="pj-clinicos-connection"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="pj-connection-brand">
            <div className="pj-connection-dot">
              C
            </div>

            <span>CLINICOS</span>
          </div>

          <div className="pj-connection-arrow">
            <FiArrowRight size={18} />
          </div>

          <div className="pj-connection-content">
            <span>THE DIGITAL LAYER</span>

            <h3>
              Connect every step
              <br />
              behind the scenes.
            </h3>
          </div>

          <div className="pj-connection-points">
            <span>Website</span>
            <span>Booking</span>
            <span>WhatsApp</span>
            <span>Patient Management</span>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="pj-new-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="pj-bottom-accent" />

          <p>
            ClinicOS removes friction between{" "}
            <strong>patient intent</strong>{" "}
            and{" "}
            <strong>clinic action.</strong>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default PatientJourney;