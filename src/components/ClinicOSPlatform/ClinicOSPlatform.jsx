import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  LayoutDashboard,
  MessageCircle,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import "./ClinicOSPlatform.css";

const modules = [
  {
    number: "01",
    title: "Enquiries",
    text: "See who contacted your clinic and what they need.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Appointments",
    text: "Keep upcoming appointments and requests organised.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Patients",
    text: "Keep patient information connected in one place.",
    icon: Users,
  },
  {
    number: "04",
    title: "Dashboard",
    text: "Understand what's happening across your digital pipeline.",
    icon: LayoutDashboard,
  },
];

function ClinicOSPlatform() {
  return (
    <section className="clinicos-platform" id="platform">
      <div className="clinicos-platform-container">

        {/* HEADER */}
        <motion.div
          className="platform-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="platform-label">
            <span />
            THE FULL CLINICOS PLATFORM
          </div>

          <div className="platform-heading">
            <h2>
              Your website is the
              <br />
              <span>front door.</span>
            </h2>

            <div className="platform-intro">
              <strong>
                ClinicOS is what sits behind it.
              </strong>

              <p>
                Connect enquiries, appointments, patients and
                communication into one simple digital layer
                for your clinic.
              </p>
            </div>
          </div>
        </motion.div>

        {/* PLATFORM VISUAL */}
        <motion.div
          className="platform-dashboard"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >

          {/* SIDEBAR */}
          <aside className="platform-sidebar">

            <div className="platform-logo">
              <div>C</div>

              <span>
                ClinicOS
              </span>
            </div>

            <small>WORKSPACE</small>

            <div className="platform-nav active">
              <LayoutDashboard size={14} />
              Dashboard
            </div>

            <div className="platform-nav">
              <MessageCircle size={14} />
              Enquiries
              <b>8</b>
            </div>

            <div className="platform-nav">
              <CalendarDays size={14} />
              Appointments
            </div>

            <div className="platform-nav">
              <Users size={14} />
              Patients
            </div>

            <small className="platform-nav-label">
              CLINIC
            </small>

            <div className="platform-nav">
              Website
            </div>

            <div className="platform-nav">
              Communication
            </div>

          </aside>

          {/* DASHBOARD */}
          <div className="platform-main">

            {/* TOP */}
            <div className="platform-main-top">

              <div>
                <span>MONDAY, SEPTEMBER 01</span>

                <h3>
                  Good morning, Dr. Sharma.
                </h3>
              </div>

              <button>
                + Add patient
              </button>

            </div>

            {/* STAT CARDS */}
            <div className="platform-stats">

              <div className="platform-stat">

                <span>NEW ENQUIRIES</span>

                <strong>24</strong>

                <small>
                  +18% this week
                </small>

                <div className="mini-chart">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>

              </div>

              <div className="platform-stat">

                <span>APPOINTMENTS</span>

                <strong>18</strong>

                <small>
                  6 scheduled today
                </small>

                <div className="stat-circle">
                  76%
                </div>

              </div>

              <div className="platform-stat">

                <span>ACTIVE PATIENTS</span>

                <strong>842</strong>

                <small>
                  +32 this month
                </small>

              </div>

            </div>

            {/* LOWER */}
            <div className="platform-lower">

              {/* ENQUIRIES */}
              <div className="platform-panel">

                <div className="platform-panel-header">
                  <div>
                    <span>RECENT ACTIVITY</span>
                    <h4>Latest enquiries</h4>
                  </div>

                  <ArrowUpRight size={15} />
                </div>

                <div className="platform-patient">

                  <div className="patient-avatar">
                    RS
                  </div>

                  <div>
                    <strong>
                      Rahul Sharma
                    </strong>

                    <span>
                      Dental Implant
                    </span>
                  </div>

                  <small>
                    2 min
                  </small>

                </div>

                <div className="platform-patient">

                  <div className="patient-avatar">
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

                <div className="platform-patient">

                  <div className="patient-avatar">
                    VK
                  </div>

                  <div>
                    <strong>
                      Vikram Kumar
                    </strong>

                    <span>
                      Consultation
                    </span>
                  </div>

                  <small>
                    42 min
                  </small>

                </div>

              </div>

              {/* APPOINTMENTS */}
              <div className="platform-panel appointments-panel">

                <div className="platform-panel-header">

                  <div>
                    <span>TODAY</span>
                    <h4>Appointments</h4>
                  </div>

                  <CalendarDays size={15} />

                </div>

                <div className="appointment-big">
                  <strong>06</strong>
                  <span>appointments today</span>
                </div>

                <div className="appointment-list">

                  <div>
                    <span>10:00 AM</span>
                    <strong>Rahul Sharma</strong>
                    <small>Consultation</small>
                  </div>

                  <div>
                    <span>12:30 PM</span>
                    <strong>Ananya Patel</strong>
                    <small>Whitening</small>
                  </div>

                  <div>
                    <span>04:00 PM</span>
                    <strong>Vikram Kumar</strong>
                    <small>Implant</small>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* MODULES */}
        <div className="platform-modules">

          {modules.map((module, index) => {

            const Icon = module.icon;

            return (
              <motion.div
                className="platform-module"
                key={module.number}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: index * 0.07,
                }}
              >

                <div className="module-top">
                  <span>{module.number}</span>

                  <Icon size={18} />
                </div>

                <h3>
                  {module.title}
                </h3>

                <p>
                  {module.text}
                </p>

                <ChevronRight
                  className="module-arrow"
                  size={16}
                />

              </motion.div>
            );

          })}

        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="platform-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div>
            <span>
              ONE DIGITAL LAYER
            </span>

            <strong>
              From first enquiry to patient follow-up.
            </strong>
          </div>

          <a href="#pricing">
            Explore ClinicOS
            <ArrowUpRight size={16} />
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default ClinicOSPlatform;