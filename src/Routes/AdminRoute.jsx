import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loader from "../Pages/Shared/Loader/Loader";




const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader/>
    }

    if (user && isAdmin) {
        return children;
    }



    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;