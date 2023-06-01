import React, { useEffect, useState } from "react";
import { profile } from "../assets";
import { useAuthContext } from "../hooks/useAuthContext";

const UserProfileCard = () => {
  const { user } = useAuthContext();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend API
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/users/${user.userId}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img
          src={profile}
          alt="User Profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">User Profile</h2>
          {userData && (
            <p className="text-gray-600">
              Username: {userData.username}
              <br />
              Role: {userData.role}
              <br />
              Email: {userData.email}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
