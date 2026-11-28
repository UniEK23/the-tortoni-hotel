import { useState } from "react";
import { site } from "../../data/site";
import { useReveal } from "../../hooks/useReveal";
import "./AvailabilityBar.css";

// Today's date as YYYY-MM-DD in the visitor's own timezone
function localToday() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

function AvailabilityBar() {
  const ref = useReveal();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [error, setError] = useState("");

  const today = localToday();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Please choose both dates.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }

    setError("");
    const message = `Hello, I'd like to check availability at ${site.name} from ${checkIn} to ${checkOut} for ${guests} guest(s).`;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
  };

  return (
    <section className="availability" aria-label="Check availability" ref={ref}>
      <form className="availability__form" onSubmit={handleSubmit} noValidate>
        <label className="availability__field">
          <span>Check-in</span>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </label>

        <label className="availability__field">
          <span>Check-out</span>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </label>

        <label className="availability__field">
          <span>Guests</span>
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="availability__btn">
          Check availability
        </button>

        {error && (
          <p className="availability__error" role="alert">
            {error}
          </p>
        )}
      </form>
    </section>
  );
}

export default AvailabilityBar;
