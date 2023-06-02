import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { carPicture } from "../assets";
import { useAuthContext } from "../hooks/useAuthContext";

const AdvertDetails = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    fetch(`http://localhost:8080/adverts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAdvert(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!advert) {
    return <div>Loading...</div>;
  }

  const { title, manufacturer, model, year, price, description, imageUrl } =
    advert;

  const addToWishlist = () => {
    fetch(`http://localhost:8080/wishlist/${user.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        id: advert.id,
        manufacturer: advert.manufacturer,
        model: advert.model,
        year: advert.year,
        title: advert.title,
        description: advert.description,
        price: advert.price,
        sellerId: user.userId,
        messages: advert.messages,
      }),
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="advert-details mt-[7%]">
      <div className="advert-details-card">
        <div className="advert-details-card-image">
          <img src={imageUrl} alt="Car" />
        </div>
        <div className="advert-details-card-content">
          <div className="advert-details-card-header">
            <h2>{title}</h2>
          </div>
          <div className="advert-details-card-body">
            <p>Manufacturer: {manufacturer}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
          </div>
        </div>
      </div>
      <div className="advert-details-message-form">
        <button className="advert-details-button" onClick={addToWishlist}>
          Add to Wishlist
        </button>
        <h3 className="advert-details-h3">Send a Message</h3>
        <textarea
          className="advert-details-textarea"
          rows="4"
          cols="50"
          placeholder="Enter your message..."
        />
        <button className="advert-details-button">Send</button>
      </div>
    </div>
  );
};

export default AdvertDetails;
