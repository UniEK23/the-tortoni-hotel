import { useEffect, useRef } from "react";
import { rooms } from "../../data/rooms";
import { formatPrice } from "../../utils/formatPrice";
import GiltFrame from "../GiltFrame/giltFrame";
import "./roomsPreview.css";

function RoomsPreview() {
    const gridRef = useRef(null);

    // Fade cards up as they scroll into view
    useEffect(() => {
        const cards = gridRef.current ? gridRef.current.querySelectorAll(".room-card") : [];

        if (!("IntersectionObserver" in window)) {
            cards.forEach((c) => c.classList.add("is-visible"));
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        cards.forEach((c) => io.observe(c));
        return () => io.disconnect();
    }, []);

    return (
        <section className="rooms" id="rooms">
            <div className="rooms__head">
                <h2 className="display-fade">Rooms</h2>
                <p className="rooms__intro">
                    Some hotels want you to rush. We don’t. Quiet rooms, good light and a front desk that remembers your name.
                </p>
            </div>

            <div className="rooms__grid" ref={gridRef}>
                {rooms.map((r, i) => (
                    <article className="room-card" key={r.id} style={{"--i": i}}>
                        <a href={`#${r.id}`} className="room-card__media" aria-label={`View ${r.name}`}>
                            <GiltFrame variant="thin">
                                <span className="room-card__img">
                                    {r.image ? (
                                        <img
                                            src={r.image}
                                            alt={r.alt}
                                            width="800"
                                            height="1000"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <span className="room-card__placeholder">
                                            Photo: {r.name}
                                        </span>
                                    )}
                                </span>
                            </GiltFrame>
                        </a>

                        <div className="room-card__body">
                            <p className="room-card__type">{r.type}</p>
                            <h3 className="room-card__name">{r.name}</h3>
                            <p className="room-card__blurb">{r.blurb}</p>

                            <ul className="room-card__specs">
                                <li>
                                    <i className="ri-hotel-bed-line" aria-hidden="true"></i>
                                    {r.beds}
                                </li>
                                <li>
                                    <i className="ri-ruler-2-line" aria-hidden="true"></i>
                                    {r.size}
                                </li>
                                <li>
                                    <i className="ri-user-line" aria-hidden="true"></i>
                                    {r.guests}
                                </li>
                            </ul>

                            <div className="room-card__foot">
                                <p className="room-card__price">
                                    <span>From</span> {formatPrice(r.price)} <span>/ night</span>
                                </p>

                                <a href={`#${r.id}`} className="room-card__link">View room</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="rooms__more">
                <a href="#rooms-all" className="rooms__all">
                    View all rooms
                </a>
            </div>
        </section>
    );
}

export default RoomsPreview;