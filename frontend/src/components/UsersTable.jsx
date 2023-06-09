import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/users", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Error fetching users:", response.status);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [user.token]);

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      } else {
        console.error("Error deleting user:", response.status);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <table className="users-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => deleteUser(user.id)}
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

export default UsersTable;
