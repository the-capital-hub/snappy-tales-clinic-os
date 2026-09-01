import { ArrowDown, ArrowRight, MessageCircle, Search, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import "./Problem.css";

function Problem() {
  return (
    <section className="problem-section" id="problem">

      <div className="problem-container">

        {/* TOP INTRO */}
        <motion.div
          className="problem-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span />
            THE PROBLEM
          </div>

          <h2>
            Your patients are
            <br />
            <span>already online.</span>
          </h2>

          <p>
            The question is — is your clinic ready for them?
          </p>
        </motion.div>

        {/* PATIENT JOURNEY */}
        <div className="patient-journey">

          <div className="journey-copy">
            <span className="journey-number">01</span>

            <h3>
              Patients don't want
              <br />
              to search for answers.
            </h3>

            <p>
              When someone searches for a dentist, they expect
              everything to be simple, clear and immediate.
            </p>

            <div className="journey-list">

              <div className="journey-item">
                <div className="journey-icon">
                  <Search size={17} />
                </div>
                <span>Understand your clinic</span>
              </div>

              <div className="journey-item">
                <div className="journey-icon">
                  <ArrowRight size={17} />
                </div>
                <span>Meet your doctors</span>
              </div>

              <div className="journey-item">
                <div className="journey-icon">
                  <CalendarDays size={17} />
                </div>
                <span>Book an appointment</span>
              </div>

              <div className="journey-item">
                <div className="journey-icon">
                  <MessageCircle size={17} />
                </div>
                <span>Talk to you on WhatsApp</span>
              </div>

            </div>
          </div>

          {/* JOURNEY VISUAL */}
          <div className="journey-visual">

            <div className="journey-line" />

            <motion.div
              className="journey-node node-one"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="node-icon">
                <Search size={19} />
              </div>

              <div>
                <small>DISCOVER</small>
                <strong>Google Search</strong>
              </div>
            </motion.div>

            <motion.div
              className="journey-node node-two"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <div className="node-icon">
                <ArrowRight size={19} />
              </div>

              <div>
                <small>EXPLORE</small>
                <strong>Your Clinic</strong>
              </div>
            </motion.div>

            <motion.div
              className="journey-node node-three"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="node-icon yellow">
                <CalendarDays size={19} />
              </div>

              <div>
                <small>ACTION</small>
                <strong>Book Appointment</strong>
              </div>
            </motion.div>

            <div className="journey-bottom">
              <span>THE IDEAL JOURNEY</span>
              <ArrowDown size={17} />
            </div>

          </div>

        </div>

        {/* REVENUE LEAK */}
        <motion.div
          className="revenue-section"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="revenue-intro">

            <div className="section-label dark">
              <span />
              THE REVENUE LEAK
            </div>

            <h3>
              How many patients are you
              <br />
              <strong>losing before they reach your chair?</strong>
            </h3>

            <p>
              A simple example of how missed enquiries can
              become missed revenue opportunities.
            </p>

          </div>

          <div className="revenue-flow">

            <div className="revenue-card">
              <span className="revenue-label">MONTHLY ENQUIRIES</span>
              <strong>1,000</strong>
              <small>People showing interest</small>
            </div>

            <div className="flow-arrow">
              ↓
            </div>

            <div className="revenue-card">
              <span className="revenue-label">MISSED</span>
              <strong>200</strong>
              <small>Unanswered enquiries</small>
            </div>

            <div className="flow-arrow">
              ↓
            </div>

            <div className="revenue-card">
              <span className="revenue-label">POTENTIAL</span>
              <strong>50</strong>
              <small>Potential appointments</small>
            </div>

            <div className="flow-arrow">
              ↓
            </div>

            <div className="revenue-card revenue-highlight">
              <span className="revenue-label">ILLUSTRATIVE OPPORTUNITY</span>
              <strong>₹2.5L</strong>
              <small>Potential monthly revenue</small>
            </div>

          </div>

          <div className="revenue-footer">
            <strong>
              Missed enquiries aren't just a communication problem.
            </strong>

            <span>
              They're a revenue problem.
            </span>
          </div>

          <p className="revenue-disclaimer">
            *Illustrative example. Actual results vary by clinic,
            enquiry volume, conversion rate and treatment value.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Problem;