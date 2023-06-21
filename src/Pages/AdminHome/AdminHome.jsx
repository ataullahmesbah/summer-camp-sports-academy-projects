import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();




    return (
        <div>
            <h2 className="text-center mt-10 font-bold text-4xl font-serif mb-10">Welcome to my Admin Home</h2>

            <h3 className="text-3xl font-semibold text-center">Hi, Welcome back, {user?.displayName}</h3>



        </div>
    );
};

export default AdminHome; 