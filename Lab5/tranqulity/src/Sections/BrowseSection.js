import arrow_img from "../Assets/Arrow.svg";
import { Link } from "react-router-dom";
import { getHotels } from "../data/HotelDataService";
import { useEffect, useState } from "react";
import { useUser } from "../data/UserService";
import { CreateHotelModal } from "../Components/HotelCreateModal";
import { set } from "firebase/database";

function BrowseSection() {
  const [createHotelModalIsOpen, setCreateHotelModalIsOpen] = useState(false);
  const [hotelsData, setHotelsData] = useState([]);
  const user = useUser();
  useEffect(() => {
    getHotels().then((data) => setHotelsData(data));
  }, [user, createHotelModalIsOpen]);

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favHotels")) || []
  );

  const handleHotelFavClick = (hotelId) => {
    const favHotel = favorites.find((fav) => fav === hotelId);
    let fav = favorites;
    if (favHotel == null) {
      fav = [...favorites, hotelId];
    } else {
      fav = fav.filter((fav) => fav !== hotelId);
    }
    setFavorites(fav);
    localStorage.setItem("favHotels", JSON.stringify(fav));
  };

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
              <div
                className="card-image"
                style={{
                  backgroundImage: `url(${require(`../Assets/${hotel.card_img}`)})`,
                }}
              >
                <p className="chip">{hotel.country}</p>
                <div
                  class="card-like-holder"
                  onClick={() => handleHotelFavClick(hotel.id)}
                >
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill={favorites.includes(hotel.id) ? "#50614A" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 7.15533C22 8.77914 21.3765 10.3388 20.2631 11.4925C17.7001 14.1492 15.2143 16.9194 12.5556 19.4797C11.9461 20.058 10.9794 20.0369 10.3962 19.4324L2.73645 11.4925C0.421185 9.09256 0.421185 5.21809 2.73645 2.81815C5.07446 0.394622 8.88333 0.394622 11.2213 2.81815L11.4998 3.10674L11.778 2.81832C12.899 1.65573 14.4257 1 16.0206 1C17.6154 1 19.142 1.65566 20.2631 2.81815C21.3766 3.97197 22 5.53156 22 7.15533Z"
                      stroke="#50614A"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-middle">{hotel.name}</p>
                <p className="text-small">{hotel.card_text}</p>
                <div className="hotel-card-footer">
                  <p className="text-middle">{hotel.stars}</p>
                  <p className="text-middle">{hotel.price}</p>
                </div>
              </div>
              <Link to={`hotel/${hotel.id}`} className="link-style">
                <button class="button primary">View offer</button>
              </Link>
            </article>
          ))}
        </section>
        <button
          className="button secondary"
          onClick={() => setCreateHotelModalIsOpen(true)}
        >
          Add new <img src={arrow_img} alt="Arrow" />
        </button>
      </section>
      <CreateHotelModal
        modalIsOpen={createHotelModalIsOpen}
        setModalIsOpen={setCreateHotelModalIsOpen}
      />
    </div>
  );
}

export default BrowseSection;
