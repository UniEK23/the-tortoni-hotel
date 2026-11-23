import "./Hero.css";
import heroImage from "/src/assets/images/hero-image.jpg";

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__frame">
        <img
          className="hero__img"
          src={heroImage}
          alt="A Tortoni room balcony at golden hour"
          width="1920"
          height="1080"
          fetchpriority="high"
        />
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">Your quiet escape in Vernice.</h1>
        <p className="hero__sub">Rooms, a terrace and an unhurried welcome.</p>
        <a className="hero__cta" href="#contact">
          Reserve a room
        </a>
      </div>
    </header>
  );
}

export default Hero;