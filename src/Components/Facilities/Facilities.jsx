import GiltFrame from "../GiltFrame/giltFrame";
import { facilities } from "../../data/site";
import { useReveal } from "../../hooks/useReveal";
import "./Facilities.css";

function Facilities() {
  const ref = useReveal();

  return (
    <section className="facilities" id="facilities" ref={ref}>
      <div className="facilities__head reveal">
        <h2 className="display-fade">Facilities</h2>
        <p>Everything you need, and nothing that hurries you.</p>
      </div>

      <div className="facilities__grid">
        {facilities.map((f, i) => (
          <article className="facility reveal" key={f.id} style={{ "--i": i }}>
            <GiltFrame variant="thin">
              <div className="facility__img">
                {f.image ? (
                  <img
                    src={f.image}
                    alt={f.alt}
                    width="800"
                    height="1000"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="facility__placeholder">Photo: {f.name}</div>
                )}
              </div>
            </GiltFrame>

            <h3 className="display facility__name">{f.name}</h3>
            <p className="facility__text">{f.text}</p>
            <p className="facility__meta">{f.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
