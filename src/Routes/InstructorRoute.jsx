import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";
import Loader from "../Pages/Shared/Loader/Loader";



const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <Loader />
    }

    if (user && isInstructor) {
        return children;
    }



    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;