export const ROLE = {
  ADMIN: "admin",
  USER: "user",
  EDITOR: "editor",
};

const getCurrentUser = () => {
  return {
    isAuthenticated: true,
    role: ROLE.ADMIN,
    loading: false,
  };
};

export default getCurrentUser;
