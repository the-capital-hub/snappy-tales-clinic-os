import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Templates.css";

import one from "../../image/one.png";
import two from "../../image/two.png";
import three from "../../image/three.png";
import four from "../../image/four.png";
import five from "../../image/five.png";

const templates = [
  {
    number: "01",
    name: "First Version",
    style: "Modern",
    image: one,
    description:
      "A clean and contemporary direction focused on trust, clarity and a strong first impression.",
    url: "https://oak-ivory-version1.snappytales.in/",
  },
  {
    number: "02",
    name: "Third Version",
    style: "Editorial",
    image: two,
    description:
      "An elegant editorial approach with refined typography and a premium clinical feel.",
    url: "https://oak-ivory-version3.snappytales.in/",
  },
  {
    number: "03",
    name: "Fourth Version",
    style: "Clinical",
    image: three,
    description:
      "A structured and professional design built around services, doctors and patient confidence.",
    url: "https://oak-ivory-version4.snappytales.in/",
  },
  {
    number: "04",
    name: "Fifth Version",
    style: "Minimal",
    image: four,
    description:
      "A calm, minimal interface that keeps the patient's attention on essential information.",
    url: "https://oak-ivory-version5.snappytales.in/",
  },
  {
    number: "05",
    name: "Extra Version",
    style: "Bold",
    image: five,
    description:
      "A stronger visual direction for clinics looking for a distinctive and memorable identity.",
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
          <div className="templates-label">
            <span />
            WEBSITE DESIGN DIRECTIONS
          </div>

          <div className="templates-heading-row">
            <h2>
              Five ways to
              <br />
              <span>introduce your clinic.</span>
            </h2>

            <div className="templates-intro">
              <p>
                Every clinic is different. Choose a visual direction
                that reflects your practice, your personality and
                the experience you want patients to remember.
              </p>

              <div className="templates-count">
                <strong>05</strong>
                <span>DESIGN DIRECTIONS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEMPLATES */}
        <div className="templates-grid">

          {templates.map((template, index) => (
            <motion.article
              className={`template-card template-card-${index + 1}`}
              key={template.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
            >

              {/* IMAGE PREVIEW */}
              <div className="template-preview">

                {/* BROWSER BAR */}
                <div className="template-browser">

                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browser-address">
                    <span>
                      {template.url
                        .replace("https://", "")
                        .replace("/", "")}
                    </span>
                  </div>

                  <ExternalLink size={12} />

                </div>

                {/* REAL IMAGE */}
                <div className="template-screen">

                  <img
                    src={template.image}
                    alt={`${template.name} dental website`}
                    className="template-image"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="template-hover">

                    <a
                      href={template.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live Website
                      <ArrowUpRight size={16} />
                    </a>

                  </div>

                </div>

                {/* NUMBER */}
                <div className="template-preview-number">
                  {template.number}
                </div>

              </div>

              {/* INFO */}
              <div className="template-info">

                <div className="template-info-main">

                  <div className="template-meta">
                    <span>{template.number}</span>
                    <small>{template.style}</small>
                  </div>

                  <h3>{template.name}</h3>

                  <p>{template.description}</p>

                </div>

                <a
                  href={template.url}
                  target="_blank"
                  rel="noreferrer"
                  className="template-link"
                  aria-label={`View ${template.name}`}
                >
                  <span>View Website</span>
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </motion.article>
          ))}

        </div>

        {/* FOOTER */}
        <motion.div
          className="templates-footer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="templates-footer-line" />

          <div className="templates-footer-content">

            <div>
              <span>ONE PLATFORM · MULTIPLE DIRECTIONS</span>

              <strong>
                Each design can be customised around your clinic.
              </strong>
            </div>

            <div className="templates-footer-mark">
              <span>CLINICOS</span>
              <strong>05</strong>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Templates;