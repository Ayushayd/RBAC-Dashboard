import React, { useContext, useState } from "react";
import PermissionsModal from "./PermissionModal";
import { AppContext } from "../context/AppContext";

const RoleManagement = () => {
  const { roles, updateRole } = useContext(AppContext);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (role) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRole(null);
    setModalOpen(false);
  };

  const updateRolePermissions = (roleId, permissions) => {
    updateRole(roleId, { permissions });
  };

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Role Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">Role</th>
              <th className="py-2 px-4 text-left text-gray-600">Permissions</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700">{role.name}</td>
                <td className="py-3 px-4 text-gray-600">
                  {role.permissions.join(", ")}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => openModal(role)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit Permissions
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRole && (
        <PermissionsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          role={selectedRole}
          updateRolePermissions={updateRolePermissions}
        />
      )}
    </div>
  );
};

export default RoleManagement;
