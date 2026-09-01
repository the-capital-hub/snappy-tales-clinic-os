import {
  Bot,
  Clock3,
  MessageCircle,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import "./AIReceptionist.css";

const features = [
  {
    icon: MessageCircle,
    title: "Answer questions",
    text: "Handle common patient questions automatically.",
  },
  {
    icon: UserRoundCheck,
    title: "Capture enquiries",
    text: "Collect important patient details when they reach out.",
  },
  {
    icon: Clock3,
    title: "Beyond reception hours",
    text: "Support patient conversations even when your team is away.",
  },
];

function AIReceptionist() {
  return (
    <section className="ai-receptionist" id="ai-receptionist">
      <div className="ai-receptionist-container">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <motion.div
          className="ai-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span />
          COMING SOON
        </motion.div>

        {/* =====================================================
            MAIN
        ===================================================== */}

        <div className="ai-main">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            className="ai-copy"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="ai-eyebrow">
              <Sparkles size={13} />
              THE NEXT LAYER OF CLINICOS
            </div>

            <h2>
              Meet your
              <br />
              <span>AI Receptionist.</span>
            </h2>

            <p>
              An AI-powered receptionist designed to help
              dental clinics respond faster, capture enquiries
              and support patients beyond reception hours.
            </p>

            {/* EARLY ACCESS */}

            <div className="ai-exclusive">

              <div className="ai-exclusive-number">
                100
              </div>

              <div className="ai-exclusive-copy">
                <span>EXCLUSIVE EARLY ACCESS</span>

                <strong>
                  Available to the first 100 ClinicOS doctors.
                </strong>
              </div>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            className="ai-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* ORBITS */}

            <div className="ai-orbit ai-orbit-one" />
            <div className="ai-orbit ai-orbit-two" />

            {/* CENTER AI */}

            <div className="ai-center">

              <div className="ai-bot-icon">
                <Bot size={34} />
              </div>

              <div className="ai-center-dot" />

              <span>CLINICOS AI</span>

              <strong>
                Reception
              </strong>

              <small>
                Coming soon
              </small>

            </div>

            {/* =================================================
                FLOATING INFORMATION CARD 01
            ================================================= */}

            <motion.div
              className="ai-floating-card ai-card-one"
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <MessageCircle size={14} />

              <div>
                <span>NEW MESSAGE</span>

                <strong>
                  Patient enquiry
                </strong>
              </div>

            </motion.div>

            {/* =================================================
                FLOATING INFORMATION CARD 02
            ================================================= */}

            <motion.div
              className="ai-floating-card ai-card-two"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <Clock3 size={14} />

              <div>
                <span>AFTER HOURS</span>

                <strong>
                  Still responding
                </strong>
              </div>

            </motion.div>

            {/* =================================================
                FLOATING INFORMATION CARD 03
            ================================================= */}

            <motion.div
              className="ai-floating-card ai-card-three"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <UserRoundCheck size={14} />

              <div>
                <span>ENQUIRY CAPTURED</span>

                <strong>
                  Ready for clinic
                </strong>
              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <div className="ai-features">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                className="ai-feature"
                key={feature.title}
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
                  delay: index * 0.08,
                }}
              >

                <div className="ai-feature-icon">
                  <Icon size={17} />
                </div>

                <div className="ai-feature-content">
                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.text}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <motion.div
          className="ai-bottom"
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
          transition={{
            duration: 0.5,
          }}
        >

          <div className="ai-bottom-message">

            <span>
              CLINICOS × AI
            </span>

            <strong>
              The digital front desk is getting smarter.
            </strong>

          </div>

          <div className="ai-bottom-note">

            <div className="ai-bottom-note-number">
              100
            </div>

            <div>
              <span>
                EARLY ACCESS
              </span>

              <strong>
                First 100 ClinicOS doctors
              </strong>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default AIReceptionist;