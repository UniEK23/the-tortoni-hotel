import GiltFrame from "../GiltFrame/giltFrame";
import "./Story.css";
import painting from "../../assets/images/Édouard_Manet_Chez_Tortoni.jpeg";

function Story() {
    return (
        <section className="story band-green" id="about">
            <div className="story__inner">
                <div className="story__text">
                    <p className="story__label">Why "Tortoni"?</p>

                    <h2 className="display story__title">
                        Unhurried, like a Paris café.
                    </h2>

                    <p className="story__body">
                        The Tortoni takes its name from a café where, in the 1800s, a man could sit with a sketchbook and let the street go by. We kept the idea: a good seat, good light and no one hurrying you. Then we added deep beds, fast Wi-Fi and a front desk that remembers your name.
                    </p>

                    <ul className="story__pillars">
                        <li>
                            <strong>Quiet</strong>
                            <span>Rooms built for sleep, away from the noise.</span>
                        </li>
                        <li>
                            <strong>Light</strong>
                            <span>Big windows and warm evenings on the terrace.</span>
                        </li>
                        <li>
                            <strong>Welcome</strong>
                            <span>Service that is attentive without hovering.</span>
                        </li>
                    </ul>
                </div>

                <figure className="story__art">
                    <GiltFrame>
                        {painting ? (
                            <img src={painting} alt="Chez Tortoni, a painting by Édouard Manet" width="680" height="850" loading="lazy" decoding="async" />
                        ) : (
                            <div className="story__placeholder">
                                Painting: Manet, Chez Tortoni
                            </div>
                        )}
                    </GiltFrame>
                    
                    <figcaption className="story__caption">
                        Édouard Manet, Chez Tortoni, c. 1878–80
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}

export default Story;