import {
  ArrowUpRight,
 
  Mail,
} from "lucide-react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import {
 FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">

        {/* TOP */}
        <div className="footer-top">

          <div className="footer-brand">

            <div className="footer-logo">
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

            <div>
              <h2>SNAPPY TALES</h2>

              <p>
                Digital infrastructure for ambitious businesses.
              </p>
            </div>

          </div>

          {/* NAV */}
          <div className="footer-navigation">

            <div className="footer-column">
              <span>EXPLORE</span>

              <a href="#top">Home</a>
              <a href="#clinicos">ClinicOS</a>
              <a href="#journey">Patient Journey</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div className="footer-column">
              <span>PRODUCT</span>

              <a href="#templates">Templates</a>
              <a href="#features">Features</a>
              <a href="#ai-receptionist">
                AI Receptionist
              </a>
            </div>

            <div className="footer-column">
              <span>CONNECT</span>

              <a href="mailto:hello@snappytales.in">
                <Mail size={12} />
                Email us
              </a>

              <a href="#">
                <FaInstagram size={12} />
                Instagram
              </a>

              <a href="#">
                <FaLinkedinIn size={12} />
                LinkedIn
              </a>
            </div>

          </div>

        </div>

        {/* CLINICOS STRIP */}
        <div className="footer-clinicos">

          <div>
            <span>BUILT BY SNAPPY TALES</span>

            <strong>
              ClinicOS
            </strong>
          </div>

          <p>
            Website → Booking → WhatsApp → Patient Management
          </p>

          <ArrowUpRight size={18} />

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Snappy Tales.
            All rights reserved.
          </span>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <span className="footer-made">
            MADE FOR MODERN BUSINESSES
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;