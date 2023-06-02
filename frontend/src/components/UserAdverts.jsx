import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { carPicture, bin, edit } from "../assets";
import { Link } from "react-router-dom";

const UserAdverts = () => {
  const { user } = useAuthContext();
  const [adverts, setAdverts] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editedAdvert, setEditedAdvert] = useState(null);
  const [editedData, setEditedData] = useState({
    manufacturer: "",
    model: "",
    year: "",
    price: "",
  });

  useEffect(() => {
    const fetchUserAdverts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/adverts/user/${user.userId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        setAdverts(data);
      } catch (error) {
        console.log("Error fetching user adverts:", error);
      }
    };

    fetchUserAdverts();
  }, [user.token]);

  useEffect(() => {
    if (editedAdvert) {
      setEditedData(editedAdvert);
    }
  }, [editedAdvert]);

  const deleteAdvert = async (advertId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/adverts/${advertId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (response.ok) {
        setAdverts((prevAdverts) =>
          prevAdverts.filter((advert) => advert.id !== advertId)
        );
      } else {
        console.log("Failed to delete advert");
      }
    } catch (error) {
      console.log("Error deleting advert:", error);
    }
  };

  const openEditModal = (advertId) => {
    const advert = adverts.find((item) => item.id === advertId);
    setEditedAdvert(advert);
    setEditedData(advert);
    setIsModalOpen(true);
  };

  const closeEditModal = () => {
    setIsModalOpen(false);
    setEditedData({
      id: "",
      manufacturer: "",
      model: "",
      year: "",
      price: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUpdating(true);
    try {
      const response = await fetch(
        `http://localhost:8080/adverts/${editedAdvert.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(editedData),
        }
      );

      if (response.ok) {
        setAdverts((prevAdverts) =>
          prevAdverts.map((advert) =>
            advert.id === editedData.id ? editedData : advert
          )
        );
        closeEditModal();
      } else {
        console.log("Failed to update advert");
      }
    } catch (error) {
      console.log("Error updating advert:", error);
    }
    setIsUpdating(false);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {adverts && adverts.length === 0 && (
        <div>
          <h1>You have no adverts yet</h1>
          <h1>To create a new advert, click on the button below</h1>
          <Link to={"/create"}>
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
              Create
            </button>
          </Link>
        </div>
      )}
      {adverts &&
        adverts.map((advert) => (
          <div key={advert.id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={advert.imageUrl}
              alt="Advert Image"
              className="w-full h-60 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-medium">
              {advert.manufacturer} {advert.model}
            </h3>
            <p className="text-gray-500">Year: {advert.year}</p>
            <p className="text-gray-500">Price: {advert.price}</p>
            <div className="flex justify-between mt-4">
              <img
                src={edit}
                alt="Update Icon"
                className="w-6 h-6 cursor-pointer"
                onClick={() => openEditModal(advert.id)}
              />
              <img
                src={bin}
                alt="Delete Icon"
                className="w-6 h-6 cursor-pointer"
                onClick={() => deleteAdvert(advert.id)}
              />
            </div>
          </div>
        ))}

      {/* Edit Advert Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 shadow">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Form inputs for editing advert details */}
              <label className="text-sm font-medium">Price:</label>
              <input
                type="text"
                name="price"
                value={editedData.price}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <label className="text-sm font-medium">Manufacturer:</label>
              <input
                type="text"
                name="manufacturer"
                value={editedData.manufacturer}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <label className="text-sm font-medium">Model:</label>
              <input
                type="text"
                name="model"
                value={editedData.model}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <label className="text-sm font-medium">Year:</label>
              <input
                type="text"
                name="year"
                value={editedData.year}
                onChange={handleInputChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Update
                </button>
                <button
                  onClick={closeEditModal}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAdverts;
