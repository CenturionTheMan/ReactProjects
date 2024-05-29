import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { useUser } from "../data/UserService";
import { toast } from "react-toastify";
import { createHotel } from "../data/HotelDataService";

Modal.setAppElement("#root");

export function CreateHotelModal({ modalIsOpen, setModalIsOpen }) {
  const user = useUser();
  const [hotelName, setHotelName] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelStars, setHotelStars] = useState("");
  const [hotelPrice, setHotelPrice] = useState("");
  const [hotelCardText, setHotelCardText] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");

  const handleCreateHotel = async (event) => {
    event.preventDefault();
    try {
      const hotelId = await createHotel({
        card_img: "hero.jpg",
        card_text: hotelCardText,
        country: hotelLocation,
        image_large: "cards3.jpg",
        image_small1: "heroSmall1.jpg",
        image_small2: "heroSmall2.jpg",
        isFav: false,
        main_description: hotelDescription,
        name: hotelName,
        price: `${hotelPrice}€/room`,
        stars: "★".repeat(hotelStars) + "☆".repeat(5 - hotelStars),
      });

      if (hotelId === null)
        throw new Error("Hotel creation failed. User not logged in.");

      setModalIsOpen(false);
      toast.success("Hotel created successfully");
    } catch (error) {
      console.error(error);
      toast.error("Hotel creation failed\nError: " + error.message);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="auth-modal"
      >
        <h2>Create a new hotel</h2>
        <form>
          <label className="modal-input-large">
            Name
            <input
              type="text"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
              required
            />
          </label>

          <label>
            Location
            <input
              type="text"
              value={hotelLocation}
              onChange={(e) => setHotelLocation(e.target.value)}
              required
            />
          </label>

          <label>
            Stars
            <input
              type="number"
              value={hotelStars}
              onChange={(e) => setHotelStars(e.target.value)}
              required
            />
          </label>

          <label>
            Price
            <input
              type="number"
              value={hotelPrice}
              onChange={(e) => setHotelPrice(e.target.value)}
              required
            />
          </label>

          <label>
            Card Text
            <input
              type="text"
              value={hotelCardText}
              onChange={(e) => setHotelCardText(e.target.value)}
              required
            />
          </label>

          <label>
            Description
            <input
              type="text"
              value={hotelDescription}
              onChange={(e) => setHotelDescription(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="button primary"
            onClick={handleCreateHotel}
          >
            Create
          </button>
        </form>
      </Modal>
    </div>
  );
}
