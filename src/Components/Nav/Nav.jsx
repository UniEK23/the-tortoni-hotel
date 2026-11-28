import { useState } from "react";
import "./Nav.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav" aria-label="Main">
      <a href="#home" className="nav__logo" onClick={close}>
        The Tortoni
      </a>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <i className={open ? "ri-close-line" : "ri-menu-line"} aria-hidden="true"></i>
      </button>

      <div id="nav-panel" className={`nav__panel${open ? " is-open" : ""}`}>
        <ul className="nav__menu">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav__btn" onClick={close}>
          Book now
        </a>
      </div>
    </nav>
  );
}

export default Nav;