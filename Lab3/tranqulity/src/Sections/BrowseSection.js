import arrow_img from "../Assets/Arrow.svg";
import hotelsList from "../data";
import { Link } from "react-router-dom";

function BrowseSection() {
  return (
    <div className="BrowseSection">
      <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>
        <input
          className="searchbar"
          placeholder="Search by hotel name, place etc."
        />
        <section className="grid hotel-cards">
          {hotelsList.map((hotel) => (
            <article key={hotel.id} className="hotel-card">
              <Link to={`hotel/${hotel.id}`} className="link-style">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${require(`../Assets/${hotel.img_card}`)})`,
                  }}
                >
                  <p className="chip">{hotel.country}</p>
                </div>
                <div>
                  <p className="text-middle">{hotel.name}</p>
                  <p className="text-small">{hotel.text}</p>
                  <div className="hotel-card-footer">
                    <p className="text-middle">{hotel.stars}</p>
                    <p className="text-middle">{hotel.price}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>
        <button className="button secondary">
          Find more <img src={arrow_img} alt="Arrow" />
        </button>
      </section>
    </div>
  );
}

export default BrowseSection;
