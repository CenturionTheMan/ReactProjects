import arrow_img from "../Assets/Arrow.svg";

function BrowseSection() {
  return (
    <div className="BrowseSection">
      <section id="browse" class="browse-section">
        <p class="title-middle">Explore the hotels</p>
        <input
          class="searchbar"
          placeholder="Search by hotel name, place etc."
        />
        <section class="grid hotel-cards">
          <article class="hotel-card">
            <div class="card-image">
              <p class="chip">Florence</p>
            </div>
            <p class="text-middle">Harmony Hideaway Hotel</p>
            <p class="text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              dapibus quis felis a venenatis. Suspendisse accumsan aliquam
              lorem, sit amet ultricies justo tristique nec.
            </p>
            <div class="hotel-card-footer">
              <p class="text-middle">★★★★★</p>
              <p class="text-middle">100€/room</p>
            </div>
          </article>
          <article class="hotel-card">
            <div class="card-image">
              <p class="chip">Florence</p>
            </div>
            <p class="text-middle">Harmony Hideaway Hotel</p>
            <p class="text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              dapibus quis felis a venenatis. Suspendisse accumsan aliquam
              lorem, sit amet ultricies justo tristique nec.
            </p>
            <div class="hotel-card-footer">
              <p class="text-middle">★★★★★</p>
              <p class="text-middle">100€/room</p>
            </div>
          </article>
          <article class="hotel-card">
            <div class="card-image">
              <p class="chip">Florence</p>
            </div>
            <p class="text-middle">Harmony Hideaway Hotel</p>
            <p class="text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              dapibus quis felis a venenatis. Suspendisse accumsan aliquam
              lorem, sit amet ultricies justo tristique nec.
            </p>
            <div class="hotel-card-footer">
              <p class="text-middle">★★★★★</p>
              <p class="text-middle">100€/room</p>
            </div>
          </article>
          <article class="hotel-card">
            <div class="card-image">
              <p class="chip">Florence</p>
            </div>
            <p class="text-middle">Harmony Hideaway Hotel</p>
            <p class="text-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              dapibus quis felis a venenatis. Suspendisse accumsan aliquam
              lorem, sit amet ultricies justo tristique nec.
            </p>
            <div class="hotel-card-footer">
              <p class="text-middle">★★★★★</p>
              <p class="text-middle">100€/room</p>
            </div>
          </article>
        </section>
        <button class="button secondary">
          Find more <img src={arrow_img} />
        </button>
      </section>
    </div>
  );
}

export default BrowseSection;
