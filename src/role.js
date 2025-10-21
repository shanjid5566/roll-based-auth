export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  EDITOR: "editor",
};

const getcurrentUser = () => {
  return {
    isAuthenticated: true,
    role: ROLES.ADMIN,
    loading: false,
  };
};
export default getcurrentUser;
