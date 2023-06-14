import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { bin, carPicture } from "../assets";
import { Link } from "react-router-dom";

const WishlistTable = () => {
  const [wishlist, setWishlist] = useState(null);
  const [items, setItems] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/wishlist/${user.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setWishlist(data);
          setItems(data.wishlistItems);
        } else {
          console.error("Error fetching adverts:", response.status);
        }
      } catch (error) {
        console.error("Error fetching adverts:", error);
      }
    };
    fetchAdverts();
  }, [user.userId]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/wishlist/${user.userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        setWishlist(data);
      } catch (error) {
        console.log("Error fetching user adverts:", error);
      }
    };

    fetchWishlist();
  }, [user.token]);

  const deleteItem = async (advertId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/wishlist/delete-item?item=${advertId}&wishlist=${wishlist.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.ok) {
        setItems((prevAdverts) =>
          prevAdverts.filter((advert) => advert.id !== advertId)
        );
      } else {
        console.error("Error deleting advert:", response.status);
      }
    } catch (error) {
      console.error("Error deleting advert:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {items && items.length === 0 && (
        <div>
          <h1>You have no wishlist items yet</h1>
          <h1>You can add items to your wishlist in the browse menu</h1>
          <Link to={"/browse"}>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              Browse
            </button>
          </Link>
        </div>
      )}
      {items &&
        items.map((advert) => (
          <div key={advert.id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={advert.imageUrl}
              alt="Advert Image"
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-medium">
              {advert.manufacturer} {advert.model}
            </h3>
            <p className="text-gray-500">Year: {advert.year}</p>
            <p className="text-gray-500">Price: {advert.price}</p>
            <div className="flex justify-between mt-4">
              <img
                src={bin}
                alt="Delete Icon"
                className="w-6 h-6 cursor-pointer"
                onClick={() => deleteItem(advert.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default WishlistTable;
