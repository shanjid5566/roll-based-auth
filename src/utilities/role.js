export const ROLE = {
  ADMIN: "admin",
  USER: "user",
  EDITOR: "editor",
};

const getCurrentUser = () => {
  return {
    isAuthenticated: true,
    role: ROLE.EDITOR,
    loading: false,
  };
};

export default getCurrentUser;
