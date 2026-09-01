import {
  Check,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import "./Pricing.css";

const websiteFeatures = [
  "Premium dental website template",
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

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="pricing-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <div className="pricing-label">
            <span />
            SIMPLE PRICING
          </div>

          <div className="pricing-heading">

            <h2>
              Start with your website.
              <br />
              <span>
                Upgrade when you're ready.
              </span>
            </h2>

            <p>
              Choose the level that fits your clinic today.
              Start with a professional website or build a
              complete digital infrastructure with ClinicOS.
            </p>

          </div>

        </motion.div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div className="pricing-grid">

          {/* =================================================
              GET ONLINE
          ================================================= */}

          <motion.article
            className="price-card"
            initial={{
              opacity: 0,
              y: 30,
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

            <div className="price-card-top">

              <div>
                <span>
                  01 / WEBSITE
                </span>

                <h3>
                  Get Online
                </h3>
              </div>

              <div className="price-number">
                ₹30K
              </div>

            </div>

            <p className="price-description">
              A professional digital presence designed
              specifically for modern dental clinics.
            </p>

            <div className="price-divider" />

            <div className="price-includes">
              WHAT'S INCLUDED
            </div>

            <ul className="price-features">
              {websiteFeatures.map((feature) => (
                <Feature key={feature}>
                  {feature}
                </Feature>
              ))}
            </ul>

            <div className="price-note">
              One-time website setup
            </div>

          </motion.article>

          {/* =================================================
              CLINICOS
          ================================================= */}

          <motion.article
            className="price-card price-card-dark"
            initial={{
              opacity: 0,
              y: 30,
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
              delay: 0.08,
            }}
          >

            <div className="popular-badge">
              MOST COMPLETE
            </div>

            <div className="price-card-top">

              <div>
                <span>
                  02 / PLATFORM
                </span>

                <h3>
                  ClinicOS
                </h3>
              </div>

              <div className="price-number">
                ₹40K
              </div>

            </div>

            <p className="price-description">
              Your complete digital front desk for managing
              the patient journey beyond your website.
            </p>

            <div className="price-divider" />

            <div className="price-includes">
              WHAT'S INCLUDED
            </div>

            <ul className="price-features">
              {clinicFeatures.map((feature) => (
                <Feature key={feature}>
                  {feature}
                </Feature>
              ))}
            </ul>

            <div className="price-note">
              Platform setup
            </div>

          </motion.article>

        </div>

        {/* =================================================
            EARLY PARTNER INFORMATION
        ================================================= */}

        <motion.div
          className="early-partner"
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
          }}
        >

          <div className="early-partner-icon">
            <Sparkles size={19} />
          </div>

          <div className="early-partner-copy">

            <span>
              EARLY CLINICOS PARTNER OFFER
            </span>

            <h3>
              Complete ClinicOS experience
            </h3>

            <div className="early-partner-price">
              ₹35,000
            </div>

            <p>
              Available for selected early ClinicOS clinics.
            </p>

          </div>

          <div className="early-partner-status">
            <span />
            LIMITED EARLY ACCESS
          </div>

        </motion.div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <motion.div
          className="pricing-bottom"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >

          <span>
            TRANSPARENT CLINICOS PRICING
          </span>

          <p>
            Start with your website and expand your digital
            infrastructure as your clinic grows.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Pricing;