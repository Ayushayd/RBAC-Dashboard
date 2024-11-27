import React, { useState } from "react";

const PermissionsModal = ({ isOpen, onClose, role, updateRolePermissions }) => {
  const [permissions, setPermissions] = useState(role?.permissions || []);

  const allPermissions = ["Read", "Write", "Delete", "Update"];

  const togglePermission = (permission) => {
    setPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSave = () => {
    updateRolePermissions(role.id, permissions);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Edit Permissions for {role.name}
        </h2>
        <div className="space-y-4">
          {allPermissions.map((permission) => (
            <label key={permission} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={permissions.includes(permission)}
                onChange={() => togglePermission(permission)}
                className="form-checkbox h-5 w-5 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
              />
              <span className="text-lg text-gray-700">{permission}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-6 py-2 rounded-md font-medium focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-medium focus:outline-none"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
