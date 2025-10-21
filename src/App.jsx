import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import { ROLE } from "./utilities/role";

const Home = () => <h2>Home Page</h2>;
const Login = () => <h2>Login Page</h2>;
const Unauthorized = () => <h2>Unauthorized Access</h2>;
const AdminDashboard = () => <h2>Admin Dashboard (Admin Only)</h2>;
const EditorDashboard = () => <h2>Editor Dashboard (Editor , Admin)</h2>;
const UserProfile = () => <h2>User Profile (User, Editor, Admin)</h2>;
function App() {
  console.log(ROLE.ADMIN);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Routes>

      <Routes>
        {/* Only Admin Can Access */}
        <Route
          path="admin"
          element={
            <PrivateRoute allowedRoles={[ROLE.ADMIN]}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        {/* Admin and editor can access */}
        <Route
          path="editor"
          element={
            <PrivateRoute allowedRoles={[ROLE.ADMIN, ROLE.EDITOR]}>
              <EditorDashboard />
            </PrivateRoute>
          }
        />

        {/* Admin, editor and user can access */}
        <Route
          path="profile"
          element={
            <PrivateRoute allowedRoles={[ROLE.ADMIN, ROLE.EDITOR, ROLE.USER]}>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
