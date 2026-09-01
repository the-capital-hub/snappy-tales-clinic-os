import {
  Check,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import "./LaunchProcess.css";

const steps = [
  {
    number: "01",
    title: "Choose your template",
    text: "Pick the design direction that feels right for your clinic.",
  },
  {
    number: "02",
    title: "Share your details",
    text: "Send us your doctors, services, photos, contact details and branding.",
  },
  {
    number: "03",
    title: "We build",
    text: "Our team customises the website around your clinic and your brand.",
  },
  {
    number: "04",
    title: "Go live",
    text: "Your new digital presence is ready to welcome patients.",
  },
];

function LaunchProcess() {
  return (
    <section className="launch-process" id="process">
      <div className="launch-process-container">

        {/* HEADER */}
        <motion.div
          className="launch-process-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="launch-process-label">
            <span />
            HOW IT WORKS
          </div>

          <div className="launch-process-heading">

            <h2>
              From zero digital presence
              <br />
              to <span>live in 24 hours.</span>
            </h2>

            <div className="launch-process-intro">

              <div className="launch-clock">
                <Rocket size={20} />
              </div>

              <p>
                A simple, streamlined process designed to
                get your clinic online without weeks of
                back-and-forth.
              </p>

            </div>

          </div>
        </motion.div>

        {/* STEPS */}
        <div className="launch-steps">

          {steps.map((step, index) => (
            <motion.div
              className="launch-step"
              key={step.number}
              initial={{
                opacity: 0,
                y: 35,
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

              <div className="launch-step-top">

                <span className="launch-step-number">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="launch-step-connector">
                    →
                  </span>
                )}

              </div>

              <div className="launch-step-icon">

                {index === 0 && "01"}

                {index === 1 && "02"}

                {index === 2 && "03"}

                {index === 3 && (
                  <Check size={20} />
                )}

              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>

              {index === 3 && (
                <div className="launch-ready">
                  <span />
                  READY TO WELCOME PATIENTS
                </div>
              )}

            </motion.div>
          ))}

        </div>

        {/* TIMELINE */}
        <motion.div
          className="launch-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div className="timeline-line">
            <span />
          </div>

          <div className="timeline-label timeline-start">
            START
          </div>

          <div className="timeline-label timeline-end">
            LIVE
          </div>

          <div className="timeline-time">

            <strong>
              24
            </strong>

            <span>
              HOURS
            </span>

          </div>

        </motion.div>

        {/* INFORMATIONAL BOTTOM */}
        <motion.div
          className="launch-process-bottom"
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
        >

          <div className="launch-process-summary">

            <span>
              SIMPLE. FAST. CLINIC-READY.
            </span>

            <strong>
              You provide the information. We handle the digital build.
            </strong>

          </div>

          <div className="launch-process-flow">

            <span>
              TEMPLATE
            </span>

            <i>→</i>

            <span>
              CONTENT
            </span>

            <i>→</i>

            <span>
              BUILD
            </span>

            <i>→</i>

            <strong>
              LIVE
            </strong>

          </div>

        </motion.div>

        {/* DISCLAIMER */}
        <div className="launch-disclaimer">
          *24-hour launch target applies after all required information
          and website assets are received.
        </div>

      </div>
    </section>
  );
}

export default LaunchProcess;