import React from "react";
import UserManagement from "./component/UserManagement";
import RoleManagement from "./component/RoleManagement";
import "./index.css";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-blue-100 via-gray-200 to-blue-100 p-8"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
      }}
    >
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-text drop-shadow-lg">
        Role Based Access Control Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-400 p-6 rounded-lg shadow-xl border border-gray-200">
          <UserManagement />
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-xl border border-gray-200">
          <RoleManagement />
        </div>
      </div>
    </div>
  );
};

export default App;
