export const mockApi = {
  users: [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
    { id: 3, name: "Alice Johnson", role: "Viewer", status: "Active" },
    { id: 4, name: "Bob Lee", role: "Editor", status: "Active" },
    { id: 5, name: "Charlie Brown", role: "Admin", status: "Inactive" },
    { id: 6, name: "David Clark", role: "Viewer", status: "Active" },
    { id: 7, name: "Eve Martin", role: "Admin", status: "Active" },
    { id: 8, name: "Frank White", role: "Editor", status: "Inactive" },
    { id: 9, name: "Grace Adams", role: "Viewer", status: "Active" },
    { id: 10, name: "Hannah Green", role: "Admin", status: "Active" },
    { id: 11, name: "Ivy Lewis", role: "Editor", status: "Inactive" },
    { id: 12, name: "Jack Scott", role: "Viewer", status: "Active" },
    { id: 13, name: "Kelly Walker", role: "Admin", status: "Inactive" },
    { id: 14, name: "Leo Harris", role: "Editor", status: "Active" },
    { id: 15, name: "Mona Perez", role: "Viewer", status: "Active" },
    { id: 16, name: "Nina Turner", role: "Admin", status: "Active" },
    { id: 17, name: "Oscar Allen", role: "Editor", status: "Inactive" },
    { id: 18, name: "Paul King", role: "Viewer", status: "Active" },
    { id: 19, name: "Quincy Lee", role: "Admin", status: "Active" },
    { id: 20, name: "Rachel Harris", role: "Editor", status: "Inactive" },
    { id: 21, name: "Steve Martin", role: "Viewer", status: "Active" },
    { id: 22, name: "Tina Taylor", role: "Admin", status: "Inactive" },
    { id: 23, name: "Ursula Scott", role: "Editor", status: "Active" },
    { id: 24, name: "Victor Moore", role: "Viewer", status: "Inactive" },
    { id: 25, name: "Wendy Clark", role: "Admin", status: "Active" },
  ],
  roles: [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
    {
      id: 4,
      name: "Super Admin",
      permissions: ["Read", "Write", "Delete", "Manage Users"],
    },
    { id: 5, name: "Content Creator", permissions: ["Read", "Write"] },
    { id: 6, name: "Guest", permissions: ["Read"] },
    { id: 7, name: "Moderator", permissions: ["Read", "Delete"] },
    { id: 8, name: "Contributor", permissions: ["Read", "Write"] },
    {
      id: 9,
      name: "Manager",
      permissions: ["Read", "Write", "Delete", "Manage Content"],
    },
    { id: 10, name: "Support", permissions: ["Read", "Write", "Comment"] },
    { id: 11, name: "Customer", permissions: ["Read", "Comment"] },
    { id: 12, name: "Sales", permissions: ["Read", "Write", "Manage Leads"] },
    { id: 13, name: "HR", permissions: ["Read", "Write", "Manage Employees"] },
    {
      id: 14,
      name: "Finance",
      permissions: ["Read", "Write", "Manage Transactions"],
    },
    {
      id: 15,
      name: "Developer",
      permissions: ["Read", "Write", "Delete", "Manage Code"],
    },
    {
      id: 16,
      name: "Project Manager",
      permissions: ["Read", "Write", "Manage Projects"],
    },
    {
      id: 17,
      name: "Content Manager",
      permissions: ["Read", "Write", "Manage Content"],
    },
    { id: 18, name: "Analyst", permissions: ["Read", "Analyze Data"] },
    {
      id: 19,
      name: "Legal",
      permissions: ["Read", "Write", "Manage Contracts"],
    },
    { id: 20, name: "Quality Assurance", permissions: ["Read", "Test"] },
  ],

  fetchUsers: () => Promise.resolve(mockApi.users),

  fetchRoles: () => Promise.resolve(mockApi.roles),

  addUser: (user) => {
    mockApi.users.push(user);
    return Promise.resolve(user);
  },

  addRole: (role) => {
    mockApi.roles.push(role);
    return Promise.resolve(role);
  },

  updateUser: (id, data) => {
    const user = mockApi.users.find((u) => u.id === id);
    Object.assign(user, data);
    return Promise.resolve(user);
  },

  updateRole: (id, data) => {
    const role = mockApi.roles.find((r) => r.id === id);
    Object.assign(role, data);
    return Promise.resolve(role);
  },
};
