import React, { useState } from "react";
import UsersTable from "../components/UsersTable";
import AdvertsTable from "../components/AdvertsTable";

const AdminPage = () => {
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
              activeButton === "users" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("users")}
          >
            <span className="admin-sidebar__button-text">Users</span>
          </button>
          <button
            className={`admin-sidebar__button ${
              activeButton === "adverts" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("adverts")}
          >
            <span className="admin-sidebar__button-text">Adverts</span>
          </button>
          <button
            className={`admin-sidebar__button ${
              activeButton === "statistics" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("statistics")}
          >
            <span className="admin-sidebar__button-text">Statistics</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        {activeButton === "users" && (
          <div className="admin-content__table">
            <UsersTable />
          </div>
        )}
        {activeButton === "adverts" && (
          <div className="admin-content__table">
            <AdvertsTable />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
