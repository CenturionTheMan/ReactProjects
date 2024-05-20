import { useLocation } from "react-router-dom";
import hotelsList from "../data";

function HotelPage() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const hotel = hotelsList.find((hotel) => hotel.id === parseInt(id));

  return (
    <div className="HotelPage">
      <section id="hero" className="grid hero-section">
        <p className="text-middle-ex2">{hotel.name}</p>
        <div
          className="hero-image-container-ex2"
          style={{
            backgroundImage: `url(${require(`../Assets/${hotel.image_large}`)})`,
          }}
        ></div>

        <article className="hero-details-ex2">
          <p className="text-small">
            <span style={{ fontWeight: "bold" }}>Location:</span>{" "}
            {hotel.country} <br /> <br />
            <span style={{ fontWeight: "bold" }}>Local category:</span>{" "}
            {hotel.stars} <br /> <br />
            <span style={{ fontWeight: "bold" }}>Price</span> {hotel.price}
            <br /> <br />
            <span style={{ fontWeight: "bold" }}>Description:</span>
            <p className="text-middle ">{hotel.description}</p>
          </p>

          <div className="button-row-holder-ex2">
            <button className="button primary button-ex2">
              Contact{" "}
              <svg
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.99951 4.19998L8.99951 6.99998L12.9995 4.19998"
                  stroke="#50614A"
                  strokeWidth="1.26857"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z"
                  stroke="#50614A"
                  strokeWidth="1.26857"
                />
              </svg>
            </button>

            <button className="button primary button-ex2">
              Remove
              <svg
                width="18"
                height="18"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 6.33337V12.6C11.6663 12.821 11.4873 13 11.2663 13H2.73301C2.51209 13 2.33301 12.821 2.33301 12.6V6.33337"
                  stroke="#50614A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.6665 10.3334V6.33337"
                  stroke="#50614A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.3335 10.3334V6.33337"
                  stroke="#50614A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 3.66667H9.66667M9.66667 3.66667V1.4C9.66667 1.17909 9.4876 1 9.26667 1H4.73333C4.51242 1 4.33333 1.17909 4.33333 1.4V3.66667M9.66667 3.66667H4.33333M1 3.66667H4.33333"
                  stroke="#50614A"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero-cards">
            <div
              // key="1"
              className="card-image"
              style={{
                backgroundImage: `url(${require(`../Assets/${hotel.image_small1}`)})`,
              }}
            ></div>
            <div
              // key="2"
              className="card-image"
              style={{
                backgroundImage: `url(${require(`../Assets/${hotel.image_small2}`)})`,
              }}
            ></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default HotelPage;
