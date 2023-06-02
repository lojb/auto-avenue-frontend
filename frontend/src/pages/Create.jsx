import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import Lottie from "lottie-react";
import animationData from "../assets/carAnimation/car-in-movement.json";
import { manufacturers } from "../constants";
import { useAuthContext } from "../hooks/useAuthContext";

const Create = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const { user } = useAuthContext();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageName(file.name);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "dznubedj");

    // Make a POST request to Cloudinary upload URL
    fetch("https://api.cloudinary.com/v1_1/dekwx51ge/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.secure_url;
        console.log(imageUrl);

        // Save the image URL along with other form data to your backend API
        const advertData = {
          manufacturer,
          model,
          year,
          title,
          price,
          description,
          imageUrl,
          // other form data...
        };
        fetch("http://localhost:8080/adverts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(advertData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      });

    setManufacturer("");
    setModel("");
    setYear("");
    setTitle("");
    setPrice("");
    setDescription("");
    setImage(null);
    setImageName("");
  };

  const onClickAcceptButton = (e) => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => (
        <div className="react-confirm-alert">
          <h1 className="react-confirm-alert-title">
            Confirm to add new advertisement
          </h1>
          <p className="react-confirm-alert-message">
            Are you sure you want to add a new advertisement?
          </p>
          <div className="react-confirm-alert-button-group">
            <button className="react-confirm-alert-button" onClick={onClose}>
              No
            </button>
            <button
              className="react-confirm-alert-button"
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      ),
    });
  };

  return (
    <>
      <div className="heading-container">
        <h3 className="car-form-heading">Add a new advertisement</h3>
      </div>
      <div className="car-form-container">
        <form className="car-form" onSubmit={handleSubmit}>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="manufacturer">
              Manufacturer:
            </label>
            <select
              className="car-form-select"
              id="manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required="required"
            >
              <option disabled={true} placeholder=""></option>
              {manufacturers.map((make) => (
                <option>{make}</option>
              ))}
            </select>
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="model">
              Model:
            </label>
            <input
              className="car-form-input"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
            />
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="year">
              Year:
            </label>
            <input
              className="car-form-input"
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="title">
              Title:
            </label>
            <input
              className="car-form-input"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="price">
              Price:
            </label>
            <input
              className="car-form-input"
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="description">
              Description:
            </label>
            <textarea
              className="car-form-textarea"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="car-form-group">
            <label className="car-form-label" htmlFor="image">
              Image:
            </label>
            <div className="custom-file-upload">
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
                required
              />
              <label htmlFor="image" className="custom-file-upload-label">
                Choose File
              </label>
              <span className="ml-4">{imageName}</span>
            </div>
          </div>
          <button className="car-form-button" onClick={onClickAcceptButton}>
            Submit
          </button>
        </form>
      </div>
      <div className="car-animation-container">
        <Lottie animationData={animationData} />
      </div>
    </>
  );
};

export default Create;
