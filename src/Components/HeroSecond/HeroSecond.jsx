import GiltFrame from "../GiltFrame/giltFrame";
import { site } from "../../data/site";
import heroImage from "../../assets/images/new-hero.jpg";
import "./HeroSecond.css";

//   import cutout from "../../assets/images/cutout.webp" if I'm using no bg image;
const cutout = null;

function HeroSecond() {
  return (
    <header className="hero" id="home">
      <h1 className="hero__title display">{site.name}</h1>

      <div className="hero__stage">
        <div className="hero__window">
          <GiltFrame>
            <img
              className="hero__img"
              src={heroImage}
              alt="The view from a room at The Tortoni"
              width="1920"
              height="1080"
              fetchPriority="high"
            />
          </GiltFrame>
        </div>

        {cutout && (
          <img className="hero__cutout" src={cutout} alt="" aria-hidden="true" />
        )}

        <a className="hero__cta" href="#rooms">
          Find a room
        </a>
      </div>

      <p className="hero__tagline">Your quiet escape in {site.city}.</p>
      <p className="hero__sub">Rooms, a terrace and an unhurried welcome.</p>
    </header>
  );
}

export default HeroSecond;
