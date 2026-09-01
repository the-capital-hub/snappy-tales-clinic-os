import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Closing.css";

function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-container">

        {/* IMAGE */}
        <motion.div
          className="closing-image"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1800&q=90"
            alt="Modern dental clinic"
          />

          <div className="closing-image-overlay" />

          <div className="closing-image-label">
            <span>CLINICOS × SNAPPY TALES</span>
            <strong>THE DIGITAL FRONT DESK</strong>
          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="closing-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >

          <div className="closing-kicker">
            <Sparkles size={14} />
            THANK YOU
          </div>

          <h2>
            Better digital
            <br />
            experiences.
            <br />
            <span>Better first impressions.</span>
          </h2>

          <div className="closing-divider" />

          <p className="closing-thankyou">
            Thank you for choosing Snappy Tales
            as your growth partner.
          </p>

          <p className="closing-description">
            We believe every modern clinic deserves a digital
            presence that feels as professional, thoughtful and
            patient-focused as the care it provides.
          </p>

        </motion.div>

        {/* FOOTER LINE */}
        <motion.div
          className="closing-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <span>SNAPPY TALES</span>
            <strong>Digital experiences for modern dental clinics.</strong>
          </div>

          <div className="closing-number">
            <span>END</span>
            <strong>×</strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Closing;