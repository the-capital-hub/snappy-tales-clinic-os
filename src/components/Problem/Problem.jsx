import { motion } from "framer-motion";
import {
  FiSearch,
  FiStar,
  FiMessageCircle,
  FiCalendar,
} from "react-icons/fi";

import "./Problem.css";

const patientNeeds = [
  {
    number: "01",
    icon: FiSearch,
    title: "Find",
    text: "Discover your clinic online.",
  },
  {
    number: "02",
    icon: FiStar,
    title: "Trust",
    text: "Understand who you are.",
  },
  {
    number: "03",
    icon: FiMessageCircle,
    title: "Ask",
    text: "Get answers quickly.",
  },
  {
    number: "04",
    icon: FiCalendar,
    title: "Book",
    text: "Request an appointment.",
  },
];

function Problem() {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">

        {/* HEADER */}
        <motion.div
          className="problem-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="problem-kicker">
            <span />
            THE DIGITAL PATIENT
          </div>

          <div className="problem-page-number">
            02 / 14
          </div>
        </motion.div>

        {/* MAIN */}
        <div className="problem-grid">

          {/* IMAGE */}
          <motion.div
            className="problem-image-area"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="problem-image-frame">

              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=90"
                alt="Dentist consulting with a patient"
              />

              <div className="problem-image-overlay" />

              <div className="problem-image-top">
                <span>DENTAL EXPERIENCE</span>
                <span>01</span>
              </div>

              <div className="problem-image-note">

                <div className="problem-image-number">
                  01
                </div>

                <p>
                  Your digital presence
                  <br />
                  is often the first impression.
                </p>

              </div>
            </div>

            <div className="problem-yellow-square">
              <span>FIRST</span>
              <strong>IMPRESS.</strong>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="problem-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="problem-eyebrow">
              THE PROBLEM
            </p>

            <h2>
              Your patients
              <br />
              are already <em>online.</em>
            </h2>

            <p className="problem-description">
              Before visiting your clinic, patients are already
              searching, comparing and deciding who they can trust.
              Your digital experience has to answer their questions
              before they ever reach your reception desk.
            </p>

            {/* PATIENT NEEDS */}
            <div className="problem-needs">

              {patientNeeds.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="problem-need"
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <span className="problem-need-number">
                      {item.number}
                    </span>

                    <div className="problem-need-icon">
                      <Icon size={14} />
                    </div>

                    <div className="problem-need-copy">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="problem-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="problem-bottom-line" />

          <p>
            If reaching your clinic feels difficult,
            <strong> patients move on.</strong>
          </p>

          <span>
            DISCOVER → TRUST → ASK → BOOK
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Problem;