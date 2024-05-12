import arrow_img from "../Assets/Arrow.svg";

function HeroSection() {
  return (
    <div className="HeroSection">
      <section id="hero" class="grid hero-section">
        <article class="hero-details">
          <p class="title-large">Your tranquillity oasis awaits</p>
          <p class="text-middle">
            TranquilTravels is designed to help you find a serene retreat for
            your next holidays. With us searching for the hotels nestled amidst
            picturesque landscapes is easier than ever.{" "}
          </p>
          <div class="hero-cards">
            <div class="card-image">
              <p class="chip">
                New hotels <img src={arrow_img} />
              </p>
            </div>
            <div class="card-image">
              <p class="chip">
                Best reviews <img src={arrow_img} />
              </p>
            </div>
          </div>
        </article>
        <div class="hero-image-container"></div>
      </section>
    </div>
  );
}

export default HeroSection;
