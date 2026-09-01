import {
  ArrowUpRight,
  Check,
  Sparkles,
  Globe2,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Pricing.css";

const websiteFeatures = [
  "Premium dental website",
  "Custom clinic branding",
  "Doctor profiles",
  "Service pages",
  "Appointment booking",
  "WhatsApp integration",
  "Mobile responsive",
  "Basic SEO structure",
  "Content setup",
];

const clinicFeatures = [
  "Everything in Get Online",
  "ClinicOS Admin Panel",
  "Patient CRM",
  "Enquiry management",
  "Appointment management",
  "Patient management",
  "Digital dashboard",
  "AI Receptionist — coming soon",
];

function Feature({ children }) {
  return (
    <li>
      <span>
        <Check size={11} />
      </span>
      {children}
    </li>
  );
}

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">

        {/* HEADER */}
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="pricing-label">
            <span />
            SIMPLE, TRANSPARENT PRICING
          </div>

          <div className="pricing-heading">
            <h2>
              Choose what your
              <br />
              <span>clinic needs today.</span>
            </h2>

            <p>
              Start with a professional website or bring your
              entire digital front desk together with ClinicOS.
              Simple packages designed for modern dental clinics.
            </p>
          </div>
        </motion.div>

        {/* PRICING CARDS */}
        <div className="pricing-grid">

          {/* GET ONLINE */}
          <motion.article
            className="price-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="price-card-accent" />

            <div className="price-card-top">
              <div className="price-card-title">
                <div className="price-icon">
                  <Globe2 size={19} />
                </div>

                <div>
                  <span>01 / WEBSITE</span>
                  <h3>Get Online</h3>
                </div>
              </div>

              <div className="price-number">
                <small>₹</small>
                30,000
                
              </div>
            </div>

            <p className="price-description">
              A professional digital presence designed specifically
              for modern dental clinics that want to look credible
              and make it easier for patients to connect.
            </p>

            <div className="price-divider" />

            <div className="includes-label">
              WHAT'S INCLUDED
            </div>

            <ul className="price-features">
              {websiteFeatures.map((feature) => (
                <Feature key={feature}>
                  {feature}
                </Feature>
              ))}
            </ul>

            <div className="price-footer">
              <span>ONE-TIME WEBSITE SETUP</span>

              <div className="price-footer-arrow">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.article>

          {/* CLINICOS */}
          <motion.article
            className="price-card price-card-dark"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
          >
            <div className="popular-badge">
              MOST COMPLETE
            </div>

            <div className="price-card-top">
              <div className="price-card-title">
                <div className="price-icon">
                  <LayoutDashboard size={19} />
                </div>

                <div>
                  <span>02 / PLATFORM</span>
                  <h3>ClinicOS</h3>
                </div>
              </div>

              <div className="price-number">
                <small>₹</small>
                40,000
                
              </div>
            </div>

            <p className="price-description">
              Your complete digital front desk for managing the
              patient journey beyond your website — from enquiries
              and appointments to patient management.
            </p>

            <div className="price-divider" />

            <div className="includes-label">
              WHAT'S INCLUDED
            </div>

            <ul className="price-features">
              {clinicFeatures.map((feature) => (
                <Feature key={feature}>
                  {feature}
                </Feature>
              ))}
            </ul>

            <div className="price-footer">
              <span>CLINICOS PLATFORM SETUP</span>

              <div className="price-footer-arrow">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.article>

        </div>

        {/* EARLY PARTNER OFFER */}
        <motion.div
          className="early-partner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <div className="early-pattern" />

          <div className="early-partner-left">
            <div className="early-partner-icon">
              <Sparkles size={21} />
            </div>

            <div>
              <span className="early-label">
                EARLY CLINICOS PARTNER
              </span>

              <h3>
                Be among the first clinics
                <br />
                to experience ClinicOS.
              </h3>

              <p>
                Get the complete ClinicOS experience at an
                exclusive early-partner price.
              </p>
            </div>
          </div>

          <div className="early-partner-price">
            <span>EARLY ACCESS</span>

            <strong>
              ₹35,000
              
            </strong>

            <em>
              Limited early partner availability
            </em>
          </div>

          <div className="early-partner-mark">
            <span>CLINICOS</span>
            <strong>01</strong>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="pricing-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <span>BUILT FOR MODERN DENTAL CLINICS</span>

            <p>
              Start with your website. Build your digital
              infrastructure as your clinic grows.
            </p>
          </div>

          <strong>
            Website → ClinicOS → AI Receptionist
          </strong>
        </motion.div>

      </div>
    </section>
  );
}

export default Pricing;