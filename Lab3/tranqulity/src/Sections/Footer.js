import arrow_img from "../Assets/Arrow.svg";

function Footer() {
  return (
    <div className="Footer">
      <section id="rent" class="footer grid">
        <div class="card-image"></div>
        <article class="footer-details">
          <p class="title-large">Rent with us!</p>
          <p class="text-middle">
            If you’re a hotel or an apartament owner who’s looking to reach more
            customers you can now rent your property with TranquilTravels.{" "}
          </p>
          <button class="button secondary">
            Learn more <img src={arrow_img} />
          </button>
        </article>
      </section>
    </div>
  );
}

export default Footer;
