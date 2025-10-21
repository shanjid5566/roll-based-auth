import { Navigate, useLocation } from 'react-router';
import getCurrentUser from "./utilities/role.js";

const PrivateRoute = ({children, allowedRoles}) => {
    const {isAuthenticated, role, loading} = getCurrentUser();
    console.log(role)
    console.log(allowedRoles)
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(!isAuthenticated){
        return <Navigate  to="/login" state={{from : location}} replace />
    }
    const userHasRequiredRole = allowedRoles && allowedRoles.includes(role);

    if(allowedRoles && !userHasRequiredRole){
        return <Navigate to="/unauthorized" state={{from : location}} replace />
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
