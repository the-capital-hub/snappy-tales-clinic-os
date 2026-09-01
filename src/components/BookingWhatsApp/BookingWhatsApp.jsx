import {
  CalendarCheck2,
  Check,
  Clock3,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import "./BookingWhatsApp.css";

function BookingWhatsApp() {
  return (
    <section className="booking-whatsapp" id="booking">
      <div className="booking-whatsapp-container">

        {/* HEADER */}
        <motion.div
          className="booking-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="booking-topline">
            <div className="booking-label">
              <span />
              PATIENT CONNECTION
            </div>

            <div className="booking-page">
              06 / 14
            </div>
          </div>

          <div className="booking-heading">

            <div>
              <p className="booking-eyebrow">
                SIMPLE WAYS TO CONNECT
              </p>

              <h2>
                Make it easy for
                <br />
                patients to <span>reach you.</span>
              </h2>
            </div>

            <p>
              Patients can choose the interaction that feels most
              natural to them requesting an appointment or
              starting a conversation with the clinic.
            </p>

          </div>
        </motion.div>

        {/* TWO CONNECTION OPTIONS */}
        <div className="booking-options">

          {/* =================================================
              APPOINTMENT
          ================================================= */}

          <motion.div
            className="booking-option booking-option-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="booking-option-top">

              <div className="booking-option-number">
                01
              </div>

              <div className="booking-option-tag">
                <CalendarCheck2 size={13} />
                APPOINTMENT BOOKING
              </div>

            </div>

            <div className="booking-option-content">

              {/* COPY */}

              <div className="booking-option-copy">

                <h3>
                  Turn interest
                  <br />
                  into an <em>appointment.</em>
                </h3>

                <p>
                  A simple appointment journey helps patients
                  provide the right information without making
                  the process feel complicated.
                </p>

                <div className="booking-flow">

                  <div>
                    <span>01</span>
                    <strong>Choose service</strong>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>Share details</strong>
                  </div>

                  <div>
                    <span>03</span>
                    <strong>Preferred date</strong>
                  </div>

                  <div>
                    <span>04</span>
                    <strong>Clinic confirmation</strong>
                  </div>

                </div>

              </div>

              {/* BOOKING UI */}

              <div className="booking-ui">

                <div className="booking-ui-header">

                  <div>
                    <small>
                      APPOINTMENT
                    </small>

                    <strong>
                      Request a visit
                    </strong>
                  </div>

                  <CalendarCheck2 size={18} />

                </div>

                <div className="booking-field">

                  <span>
                    SELECT SERVICE
                  </span>

                  <strong>
                    Dental Consultation
                  </strong>

                  <span className="field-status">
                    SELECTED
                  </span>

                </div>

                <div className="booking-field">

                  <span>
                    PREFERRED DATE
                  </span>

                  <strong>
                    Choose a date
                  </strong>

                  <Clock3 size={12} />

                </div>

                <div className="booking-input-row">

                  <div>
                    <span>
                      NAME
                    </span>

                    <strong>
                      Your name
                    </strong>
                  </div>

                  <div>
                    <span>
                      PHONE
                    </span>

                    <strong>
                      +91 XXXXX
                    </strong>
                  </div>

                </div>

                {/* INFORMATIONAL STATUS */}

                <div className="booking-status">

                  <div className="booking-status-icon">
                    <Check size={12} />
                  </div>

                  <div>
                    <span>
                      REQUEST FLOW
                    </span>

                    <strong>
                      Details sent securely to the clinic
                    </strong>
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* =================================================
              WHATSAPP
          ================================================= */}

          <motion.div
            className="booking-option booking-option-whatsapp"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="booking-option-top">

              <div className="booking-option-number">
                02
              </div>

              <div className="booking-option-tag">
                <MessageCircle size={13} />
                WHATSAPP
              </div>

            </div>

            <div className="whatsapp-content">

              <div className="whatsapp-icon">
                <MessageCircle size={23} />
              </div>

              <h3>
                Start a
                <br />
                <em>conversation.</em>
              </h3>

              <p>
                Patients can ask questions, understand treatments,
                share basic details or discuss an appointment
                through a familiar messaging experience.
              </p>

              <div className="whatsapp-features">

                <div>
                  <Check size={13} />
                  Ask a question
                </div>

                <div>
                  <Check size={13} />
                  Discuss a treatment
                </div>

                <div>
                  <Check size={13} />
                  Request an appointment
                </div>

                <div>
                  <Check size={13} />
                  Contact the clinic
                </div>

              </div>

            </div>

            {/* CHAT PREVIEW */}

            <div className="whatsapp-chat">

              <div className="chat-top">

                <div className="chat-avatar">
                  S
                </div>

                <div>
                  <strong>
                    Your Clinic
                  </strong>

                  <small>
                    Clinic WhatsApp
                  </small>
                </div>

                <Phone size={14} />

              </div>

              <div className="chat-body">

                <div className="chat-time">
                  TODAY · 10:42 AM
                </div>

                <div className="chat-message patient">
                  Hi, I wanted to know about
                  teeth whitening.
                </div>

                <div className="chat-message clinic">
                  Hi! We'd be happy to help.
                  What would you like to know?
                </div>

                <div className="chat-message patient">
                  I'd like to understand the
                  treatment and consultation process.
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM INFORMATION */}

        <motion.div
          className="booking-bottom"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="booking-bottom-flow">

            <span>WEBSITE</span>
            <i>→</i>

            <span>BOOKING</span>
            <i>→</i>

            <span>WHATSAPP</span>
            <i>→</i>

            <strong>CLINIC</strong>

          </div>

          <p>
            Two simple connection points for patients.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default BookingWhatsApp;