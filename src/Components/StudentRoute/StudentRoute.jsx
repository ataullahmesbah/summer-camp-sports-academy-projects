import { Navigate, useLocation } from "react-router-dom";

import useStudent from "../../hooks/useStudent";
import Loader from "../../Pages/Shared/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if (loading || isStudentLoading) {
        return <Loader />;
    }

    if (user && isStudent) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace />;
};

export default StudentRoute;
