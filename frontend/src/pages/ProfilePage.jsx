import React, { useState } from "react";
import UserProfileCard from "../components/UserProfileCard";

import UserAdverts from "../components/UserAdverts";
import WishlistTable from "../components/WishlistTable";

const ProfilePage = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="admin-page">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="admin-sidebar__buttons">
          <button
            className={`admin-sidebar__button ${
              activeButton === "profile" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("profile")}
          >
            <span className="admin-sidebar__button-text">Profile</span>
          </button>
          <button
            className={`admin-sidebar__button ${
              activeButton === "myAdverts" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("myAdverts")}
          >
            <span className="admin-sidebar__button-text">My Adverts</span>
          </button>
          <button
            className={`admin-sidebar__button ${
              activeButton === "wishlist" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("wishlist")}
          >
            <span className="admin-sidebar__button-text">Wishlist</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        {activeButton === "profile" && (
          <div className="admin-content__table">
            <UserProfileCard />
          </div>
        )}
        {activeButton === "myAdverts" && (
          <div className="admin-content__table">
            <UserAdverts />
          </div>
        )}
        {activeButton === "wishlist" && (
            <div className="admin-content__table">
              <WishlistTable />
            </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
