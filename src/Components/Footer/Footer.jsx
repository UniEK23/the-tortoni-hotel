import { site } from "../../data/site";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <p className="footer__brand">{site.name}</p>
          <p className="footer__line">Unhurried, like a Paris café.</p>
        </div>

        <div>
          <h3 className="footer__head">Visit</h3>
          <p>{site.address}</p>
          <p>{site.hours}</p>
        </div>

        <div>
          <h3 className="footer__head">Contact</h3>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>

        <nav aria-label="Footer">
          <h3 className="footer__head">Explore</h3>
          <ul>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Book now</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. A seat has been left for
          you.
        </p>
        <p>The Tortoni is a design concept, not a real hotel.</p>
      </div>
    </footer>
  );
}

export default Footer;
