import {
  ArrowUpRight,
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="booking-label">
            <span />
            PATIENT CONNECTION
          </div>

          <div className="booking-heading">
            <h2>
              Make it easy for
              <br />
              patients to <span>reach you.</span>
            </h2>

            <p>
              Every extra step creates friction. ClinicOS gives
              patients two simple ways to take action — book
              an appointment or start a conversation.
            </p>
          </div>
        </motion.div>

        {/* TWO OPTIONS */}
        <div className="booking-options">

          {/* APPOINTMENT */}
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

              <div className="booking-option-copy">
                <h3>
                  Turn interest
                  <br />
                  into an <em>appointment.</em>
                </h3>

                <p>
                  Give patients a clear path from discovering
                  your clinic to requesting their preferred
                  appointment.
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
                    <strong>Request appointment</strong>
                  </div>
                </div>

                <a href="#contact" className="booking-action">
                  Book an appointment
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* BOOKING UI */}
              <div className="booking-ui">

                <div className="booking-ui-header">
                  <div>
                    <small>APPOINTMENT</small>
                    <strong>Request a visit</strong>
                  </div>

                  <CalendarCheck2 size={18} />
                </div>

                <div className="booking-field">
                  <span>SELECT SERVICE</span>
                  <strong>Dental Consultation</strong>
                  <ArrowUpRight size={12} />
                </div>

                <div className="booking-field">
                  <span>PREFERRED DATE</span>
                  <strong>Choose a date</strong>
                  <Clock3 size={12} />
                </div>

                <div className="booking-input-row">
                  <div>
                    <span>NAME</span>
                    <strong>Your name</strong>
                  </div>

                  <div>
                    <span>PHONE</span>
                    <strong>+91 XXXXX</strong>
                  </div>
                </div>

                <button className="booking-submit">
                  Request appointment
                  <ArrowUpRight size={13} />
                </button>

              </div>

            </div>
          </motion.div>

          {/* WHATSAPP */}
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
                <MessageCircle size={25} />
              </div>

              <h3>
                Start a
                <br />
                <em>conversation.</em>
              </h3>

              <p>
                Let patients ask questions, request an appointment
                or simply reach your clinic through WhatsApp.
              </p>

              <div className="whatsapp-features">

                <div>
                  <Check size={13} />
                  Ask a question
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

              <a
                href="#contact"
                className="whatsapp-action"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
                <ArrowUpRight size={15} />
              </a>

            </div>

            {/* CHAT PREVIEW */}
            <div className="whatsapp-chat">

              <div className="chat-top">
                <div className="chat-avatar">
                  S
                </div>

                <div>
                  <strong>Your Clinic</strong>
                  <small>Usually replies instantly</small>
                </div>

                <Phone size={14} />
              </div>

              <div className="chat-body">

                <div className="chat-message patient">
                  Hi, I wanted to know about
                  teeth whitening.
                </div>

                <div className="chat-message clinic">
                  Hi! We'd be happy to help.
                  Would you like to book a consultation?
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          className="booking-bottom"
          initial={{ opacity: 0, y: 20 }}
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
            Less friction. More conversations.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default BookingWhatsApp;