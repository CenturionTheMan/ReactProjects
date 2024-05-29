import arrow_img from "../Assets/Arrow.svg";

function HeroSection() {
  return (
    <div className="HeroSection">
      <section id="hero" className="grid hero-section">
        <article className="hero-details">
          <p className="title-large">Your tranquillity oasis awaits</p>
          <p className="text-middle">
            TranquilTravels is designed to help you find a serene retreat for
            your next holidays. With us searching for the hotels nestled amidst
            picturesque landscapes is easier than ever.{" "}
          </p>
          <div className="hero-cards">
            <div className="card-image">
              <p className="chip">
                New hotels <img src={arrow_img} />
              </p>
            </div>
            <div className="card-image">
              <p className="chip">
                Best reviews <img src={arrow_img} />
              </p>
            </div>
          </div>
        </article>
        <div className="hero-image-container"></div>
      </section>
    </div>
  );
}

export default HeroSection;
