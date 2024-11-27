import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "Editor", status: "Inactive" },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const updateUser = (userId, updatedData) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, ...updatedData } : user
      )
    );
  };

  const updateRole = (roleId, updatedData) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId ? { ...role, ...updatedData } : role
      )
    );
  };

  return (
    <AppContext.Provider value={{ users, roles, updateUser, updateRole }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
