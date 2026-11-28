import { reviews } from "../../data/site";
import { useReveal } from "../../hooks/useReveal";
import "./Reviews.css";

function Reviews() {
  const ref = useReveal();

  return (
    <section className="reviews" id="reviews" ref={ref}>
      <h2 className="display reviews__title reveal">Guests say</h2>

      <div className="reviews__grid">
        {reviews.map((r, i) => (
          <blockquote className="review reveal" key={r.who} style={{ "--i": i }}>
            <p className="review__quote">{r.quote}</p>
            <footer className="review__who">{r.who}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
