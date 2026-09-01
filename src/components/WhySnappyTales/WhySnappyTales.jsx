import {
  ArrowUpRight,
  Bot,
  Code2,
  Megaphone,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import "./WhySnappyTales.css";

const pillars = [
  {
    number: "01",
    title: "BUILD",
    subtitle: "Websites & Technology",
    text: "Digital experiences designed around how your customers actually discover and interact with your business.",
    icon: Code2,
  },
  {
    number: "02",
    title: "MARKET",
    subtitle: "Digital Growth",
    text: "Turn your digital presence into a stronger channel for visibility, trust and customer acquisition.",
    icon: Megaphone,
  },
  {
    number: "03",
    title: "SCALE",
    subtitle: "CRM & Systems",
    text: "Connect customer information, workflows and business operations as your organisation grows.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "AUTOMATE",
    subtitle: "AI & Workflows",
    text: "Use intelligent automation to reduce repetitive work and create faster customer experiences.",
    icon: Bot,
  },
];

function WhySnappyTales() {
  return (
    <section className="why-snappy" id="about">
      <div className="why-snappy-container">

        {/* HEADER */}
        <motion.div
          className="why-snappy-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="why-snappy-label">
            <span />
            WHY SNAPPY TALES
          </div>

          <div className="why-snappy-heading">
            <h2>
              We don't just
              <br />
              build <span>websites.</span>
            </h2>

            <p>
              We build the technology and growth infrastructure
              behind ambitious businesses — then help them
              evolve as they grow.
            </p>
          </div>
        </motion.div>

        {/* BRAND STATEMENT */}
        <motion.div
          className="snappy-brand-statement"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="snappy-brand-mark">

            <svg
              viewBox="0 0 317 318"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="23.5"
                y="22"
                width="270"
                height="270"
                rx="135"
                fill="#F4C906"
              />

              <path
                d="M74.5652 112.391C74.5652 86.458 95.5883 65.4348 121.522 65.4348H241.848V71.3044C241.848 97.2377 220.825 118.261 194.891 118.261H74.5652V112.391Z"
                fill="black"
              />

              <path
                d="M74.5654 135.87C74.5654 161.803 95.5886 182.826 121.522 182.826H241.848V176.957C241.848 151.023 220.825 130 194.892 130H74.5654V135.87Z"
                fill="black"
              />

              <path
                d="M74.5654 218.044C74.5654 205.077 85.077 194.565 98.0437 194.565H241.848V200.435C241.848 226.368 220.825 247.391 194.892 247.391H74.5654V218.044Z"
                fill="black"
              />
            </svg>

          </div>

          <div className="snappy-brand-copy">
            <span>BUILT BY</span>

            <h3>
              SNAPPY TALES
            </h3>

            <p>
              Technology that moves businesses forward.
            </p>
          </div>

          <div className="snappy-brand-arrow">
            <ArrowUpRight size={22} />
          </div>
        </motion.div>

        {/* PILLARS */}
        <div className="snappy-pillars">

          {pillars.map((pillar, index) => {

            const Icon = pillar.icon;

            return (
              <motion.div
                className="snappy-pillar"
                key={pillar.number}
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
                  delay: index * 0.07,
                }}
              >

                <div className="snappy-pillar-top">

                  <span>
                    {pillar.number}
                  </span>

                  <Icon size={19} />

                </div>

                <div className="snappy-pillar-icon">
                  <Icon size={20} />
                </div>

                <h3>
                  {pillar.title}
                </h3>

                <strong>
                  {pillar.subtitle}
                </strong>

                <p>
                  {pillar.text}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* CLINICOS CONNECTION */}
        <motion.div
          className="snappy-clinicos"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="snappy-clinicos-left">

            <span>
              OUR DENTAL-FIRST PRODUCT
            </span>

            <h3>
              ClinicOS brings it all
              <br />
              together.
            </h3>

          </div>

          <div className="snappy-clinicos-right">

            <div className="snappy-mini-flow">
              <span>BUILD</span>
              <i>→</i>
              <span>MARKET</span>
              <i>→</i>
              <span>SCALE</span>
              <i>→</i>
              <span>AUTOMATE</span>
            </div>

            <p>
              A dental-first digital platform combining your
              website, patient journey, systems and future
              AI capabilities in one ecosystem.
            </p>

          </div>

        </motion.div>

        {/* BOTTOM */}
        <div className="why-snappy-bottom">

          <span>
            SNAPPY TALES × CLINICOS
          </span>

          <p>
            Built for today's clinic. Designed for tomorrow's growth.
          </p>

        </div>

      </div>
    </section>
  );
}

export default WhySnappyTales;