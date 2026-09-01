import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "./Templates.css";

const templates = [
  {
    number: "01",
    name: "First Edition",
    style: "Modern",
    url: "https://oak-ivory-version1.snappytales.in/",
  },
  {
    number: "02",
    name: "Third Edition",
    style: "Editorial",
    url: "https://oak-ivory-version3.snappytales.in/",
  },
  {
    number: "03",
    name: "Fourth Edition",
    style: "Clinical",
    url: "https://oak-ivory-version4.snappytales.in/",
  },
  {
    number: "04",
    name: "Fifth Edition",
    style: "Minimal",
    url: "https://oak-ivory-version5.snappytales.in/",
  },
  {
    number: "05",
    name: "Extra Edition",
    style: "Bold",
    url: "https://extra-version-khaki.snappytales.in/",
  },
];

function Templates() {
  return (
    <section className="templates-section" id="templates">
      <div className="templates-container">

        {/* HEADER */}
        <motion.div
          className="templates-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="templates-topline">

            <div className="templates-label">
              <span />
              DESIGNED FOR DENTAL CLINICS
            </div>

            <div className="templates-page-number">
              04 / 14
            </div>

          </div>

          <div className="templates-heading-row">

            <div>
              <p className="templates-eyebrow">
                WEBSITE DIRECTIONS
              </p>

              <h2>
                Five ways to make
                <br />
                your clinic <span>stand out.</span>
              </h2>
            </div>

            <div className="templates-copy">

              <p>
                Start with a professionally designed dental
                website and make it yours with your clinic's
                branding, doctors, services and content.
              </p>

              <div className="template-count">
                <strong>05</strong>
                <span>DESIGN DIRECTIONS</span>
              </div>

            </div>

          </div>
        </motion.div>

        {/* TEMPLATE GRID */}
        <div className="templates-grid">

          {templates.map((template, index) => (

            <motion.article
              className="template-card"
              key={template.number}
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
                delay: index * 0.08,
              }}
            >

              {/* PREVIEW */}
              <div className="template-preview">

                <div className="template-browser">

                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-url">
                    {template.url
                      .replace("https://", "")
                      .replace("/", "")}
                  </div>

                  <ExternalLink size={11} />

                </div>

                <iframe
                  src={template.url}
                  title={`${template.name} dental website template`}
                  loading="lazy"
                  className="template-iframe"
                />

                {/* INFORMATION OVERLAY — NO CTA */}
                <div className="template-overlay">

                  <span className="template-overlay-number">
                    {template.number}
                  </span>

                  <div>
                    <small>
                      DENTAL WEBSITE
                    </small>

                    <strong>
                      {template.style}
                    </strong>
                  </div>

                </div>

              </div>

              {/* INFORMATION */}
              <div className="template-info">

                <div className="template-title">

                  <span>
                    {template.number}
                  </span>

                  <div>
                    <h3>
                      {template.name}
                    </h3>

                    <small>
                      {template.style} direction
                    </small>
                  </div>

                </div>

                <div className="template-type">
                  WEBSITE
                </div>

              </div>

            </motion.article>

          ))}

        </div>

        {/* BOTTOM INFORMATION */}
        <motion.div
          className="templates-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >

          <div className="templates-bottom-line" />

          <div>
            <span>
              YOUR CLINIC. YOUR BRAND.
            </span>

            <strong>
              Every design can be customised around
              your clinic's identity.
            </strong>
          </div>

          <div className="templates-bottom-count">
            <strong>05</strong>
            <span>STARTING DIRECTIONS</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Templates;