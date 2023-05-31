import React, { useEffect, useState } from "react";
import {useAuthContext} from "../hooks/useAuthContext";

const AdvertsTable = () => {
  const [adverts, setAdverts] = useState([]);
  const {user} = useAuthContext();

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await fetch("http://localhost:8080/adverts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const data = await response.json();
          setAdverts(data);
        } else {
          console.error("Error fetching adverts:", response.status);
        }
      } catch (error) {
        console.error("Error fetching adverts:", error);
      }
    };

    fetchAdverts();
  }, []);

  const deleteAdvert = async (advertId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/adverts/${advertId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
          }
        }
      );
      if (response.ok) {
        setAdverts((prevAdverts) =>
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
    <table className="users-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {adverts.map((advert, index) => (
          <tr key={advert.id}>
            <td>{index + 1}</td>
            <td>{advert.title}</td>
            <td>{advert.manufacturer}</td>
            <td>{advert.model}</td>
            <td>{advert.year}</td>
            <td>{advert.price}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => deleteAdvert(advert.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvertsTable;
