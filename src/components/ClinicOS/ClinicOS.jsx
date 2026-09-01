import {
  Globe2,
  CalendarCheck2,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import "./ClinicOS.css";

const features = [
  {
    number: "01",
    icon: Globe2,
    title: "Website",
    text: "A premium digital presence designed around your clinic.",
  },
  {
    number: "02",
    icon: CalendarCheck2,
    title: "Booking",
    text: "Give patients a simple path from interest to appointment.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Let patients start conversations through a channel they already use.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Patient Management",
    text: "Keep enquiries, appointments and patient activity connected.",
  },
];

function ClinicOS() {
  return (
    <section className="clinicos-section" id="features">
      <div className="clinicos-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="clinicos-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="clinicos-label">
            <span />
            INTRODUCING CLINICOS
          </div>

          <div className="clinicos-page-number">
            03 / 14
          </div>

          <div className="clinicos-heading-row">

            <div>
              <p className="clinicos-eyebrow">
                THE DIGITAL FRONT DESK
              </p>

              <h2>
                Meet <span>ClinicOS.</span>
                <br />
                Your clinic's digital front desk.
              </h2>
            </div>

            <div className="clinicos-header-copy">
              <p>
                ClinicOS brings the essential digital pieces of
                your clinic together — helping patients discover,
                contact and book with you.
              </p>

              <div className="clinicos-system-note">
                <span />
                ONE CONNECTED DIGITAL SYSTEM
              </div>
            </div>

          </div>
        </motion.div>

        {/* =================================================
            PRODUCT VISUAL
        ================================================= */}

        <motion.div
          className="clinicos-product"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >

          {/* TOP BAR */}

          <div className="product-top">

            <div className="product-brand">

              <div className="product-logo">
                C
              </div>

              <div>
                <strong>ClinicOS</strong>
                <span>Digital Front Desk</span>
              </div>

            </div>

            <div className="product-status">
              <span />
              Everything connected
            </div>

          </div>

          {/* PRODUCT BODY */}

          <div className="product-body">

            {/* SIDEBAR */}

            <aside className="product-sidebar">

              <span className="sidebar-label">
                OVERVIEW
              </span>

              <div className="sidebar-item active">
                Dashboard
              </div>

              <div className="sidebar-item">
                Enquiries
              </div>

              <div className="sidebar-item">
                Appointments
              </div>

              <div className="sidebar-item">
                Patients
              </div>

              <div className="sidebar-item">
                Communication
              </div>

              <span className="sidebar-label bottom-label">
                CLINIC
              </span>

              <div className="sidebar-item">
                Website
              </div>

              <div className="sidebar-item">
                Settings
              </div>

            </aside>

            {/* DASHBOARD */}

            <div className="product-dashboard">

              <div className="dashboard-heading">

                <div>
                  <span>
                    GOOD MORNING, DR. SHARMA
                  </span>

                  <h3>
                    Your clinic at a glance.
                  </h3>
                </div>

                <div className="dashboard-date">
                  TODAY
                </div>

              </div>

              {/* STATS */}

              <div className="dashboard-stats">

                <div className="dashboard-stat">
                  <span>NEW ENQUIRIES</span>

                  <strong>24</strong>

                  <small>
                    +18% this week
                  </small>
                </div>

                <div className="dashboard-stat">
                  <span>APPOINTMENTS</span>

                  <strong>18</strong>

                  <small>
                    6 today
                  </small>
                </div>

                <div className="dashboard-stat">
                  <span>ACTIVE PATIENTS</span>

                  <strong>842</strong>

                  <small>
                    +32 this month
                  </small>
                </div>

              </div>

              {/* ACTIVITY */}

              <div className="dashboard-content">

                <div className="activity-card">

                  <div className="activity-header">
                    <strong>
                      Recent enquiries
                    </strong>

                    <span>
                      LIVE
                    </span>
                  </div>

                  <div className="activity-row">

                    <div className="activity-avatar">
                      RS
                    </div>

                    <div>
                      <strong>
                        Rahul Sharma
                      </strong>

                      <span>
                        Dental Implant enquiry
                      </span>
                    </div>

                    <small>
                      2 min
                    </small>

                  </div>

                  <div className="activity-row">

                    <div className="activity-avatar">
                      AP
                    </div>

                    <div>
                      <strong>
                        Ananya Patel
                      </strong>

                      <span>
                        Teeth Whitening
                      </span>
                    </div>

                    <small>
                      18 min
                    </small>

                  </div>

                  <div className="activity-row">

                    <div className="activity-avatar">
                      VK
                    </div>

                    <div>
                      <strong>
                        Vikram Kumar
                      </strong>

                      <span>
                        General Consultation
                      </span>
                    </div>

                    <small>
                      42 min
                    </small>

                  </div>

                </div>

                {/* APPOINTMENTS */}

                <div className="appointment-card">

                  <div className="activity-header">
                    <strong>
                      Today's appointments
                    </strong>

                    <span>
                      6 TOTAL
                    </span>
                  </div>

                  <div className="appointment-progress">

                    <div>
                      <strong>04</strong>
                      <span>Confirmed</span>
                    </div>

                    <div>
                      <strong>01</strong>
                      <span>Pending</span>
                    </div>

                    <div>
                      <strong>01</strong>
                      <span>Follow up</span>
                    </div>

                  </div>

                  <div className="progress-line">
                    <span />
                  </div>

                  <p>
                    Your team has everything they need
                    for today's patients.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =================================================
            FEATURE CARDS
        ================================================= */}

        <div className="clinicos-features">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                className="clinicos-feature"
                key={feature.number}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                <div className="feature-top">

                  <span>
                    {feature.number}
                  </span>

                  <div className="feature-icon">
                    <Icon size={18} />
                  </div>

                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </motion.div>
            );

          })}

        </div>

        {/* =================================================
            BOTTOM SYSTEM STATEMENT
        ================================================= */}

        <motion.div
          className="clinicos-statement"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <span>
            ONE CONNECTED EXPERIENCE
          </span>

          <strong>
            Website <i>→</i> Booking <i>→</i> WhatsApp{" "}
            <i>→</i> Patient Management
          </strong>

        </motion.div>

      </div>
    </section>
  );
}

export default ClinicOS;