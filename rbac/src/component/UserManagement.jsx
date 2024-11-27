import React, { useState, useEffect } from "react";
import { mockApi } from "../utils/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const allUsers = await mockApi.fetchUsers();
      setUsers(allUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-semibold mb-4">User Management</h2>
      <ul className="space-y-3 overflow-auto max-h-[400px]">
        {users.map((user, index) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-3 border-b border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex flex-col">
              <span className="text-lg font-medium text-gray-800">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.role}</span>
            </div>
            <span
              className={`text-sm ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
