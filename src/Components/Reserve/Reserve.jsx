import { site } from "../../data/site";
import { useReveal } from "../../hooks/useReveal";
import "./Reserve.css";

function Reserve() {
  const ref = useReveal();
  const message = `Hello, I'd like to book a room at ${site.name}.`;
  const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="reserve band-green" id="contact" ref={ref}>
      <div className="reserve__inner reveal">
        <p className="reserve__label">Book direct</p>
        <h2 className="display reserve__title">Your room is waiting.</h2>
        <p className="reserve__text">
          Message us on WhatsApp for rates, dates and special requests. We’ll
          reply as soon as we can.
        </p>

        <a
          className="reserve__btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find a room
        </a>

        <p className="reserve__details">
          {site.phone} · {site.email}
        </p>
      </div>
    </section>
  );
}

export default Reserve;
