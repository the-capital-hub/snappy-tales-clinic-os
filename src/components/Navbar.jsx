import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#process" },
  { label: "Templates", href: "#templates" },
  { label: "Pricing", href: "#pricing" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#" className="brand">
  <div className="brand-logo">
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

  <span className="brand-name">
    SNAPPY TALES
  </span>
</a>

        {/* Navigation */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#pricing" className="nav-cta">
          Get Started
          <span className="nav-cta-icon">
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </span>
        </a>

      </div>
    </header>
  );
}

export default Navbar;