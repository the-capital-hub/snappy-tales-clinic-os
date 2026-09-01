import { ArrowUpRight, ExternalLink } from "lucide-react";
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

        <motion.div
          className="templates-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="templates-label">
            <span />
            DESIGNED FOR DENTAL CLINICS
          </div>

          <div className="templates-heading-row">
            <h2>
              Choose a design
              <br />
              <span>you love.</span>
            </h2>

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

        <div className="templates-grid">

          {templates.map((template, index) => (
            <motion.article
              className="template-card"
              key={template.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
            >

              <div className="template-preview">

                <div className="template-browser">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-url">
                    {template.url.replace("https://", "").replace("/", "")}
                  </div>

                  <ExternalLink size={13} />
                </div>

                <iframe
                  src={template.url}
                  title={`${template.name} dental website template`}
                  loading="lazy"
                  className="template-iframe"
                />

                <div className="template-overlay">
                  <a
                    href={template.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Live Website
                    <ArrowUpRight size={17} />
                  </a>
                </div>

              </div>

              <div className="template-info">

                <div className="template-title">
                  <span>{template.number}</span>

                  <div>
                    <h3>{template.name}</h3>
                    <small>{template.style}</small>
                  </div>
                </div>

                <a
                  href={template.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${template.name}`}
                >
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

        <motion.div
          className="templates-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <span>YOUR CLINIC. YOUR BRAND.</span>
            <strong>
              Choose a template. We'll customise the rest.
            </strong>
          </div>

          <a href="#pricing">
            Get your clinic online
            <span>
              <ArrowUpRight size={16} />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Templates;