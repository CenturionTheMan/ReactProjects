import arrow_img from "../Assets/Arrow.svg";
import { Link } from "react-router-dom";
import { getHotels } from "../data/HotelDataService";
import { useEffect, useState } from "react";
import { useUser } from "../data/UserService";

function BrowseSection() {
  const [hotelsData, setHotelsData] = useState([]);
  const user = useUser();
  useEffect(() => {
    getHotels().then((data) => setHotelsData(data));
  }, [user]);

  return (
    <div className="BrowseSection">
      <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>
        <input
          className="searchbar"
          placeholder="Search by hotel name, place etc."
        />
        <section className="grid hotel-cards-browse">
          {hotelsData.map((hotel) => (
            <article key={hotel.id} className="hotel-card-browse">
              <Link to={`hotel/${hotel.id}`} className="link-style">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${require(`../Assets/${hotel.card_img}`)})`,
                  }}
                >
                  <p className="chip">{hotel.country}</p>
                </div>
                <div>
                  <p className="text-middle">{hotel.name}</p>
                  <p className="text-small">{hotel.card_text}</p>
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
          Add new <img src={arrow_img} alt="Arrow" />
        </button>
      </section>
    </div>
  );
}

export default BrowseSection;
