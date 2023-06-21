import { Link } from "react-router-dom";
import Container from "../Container";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import elitearena from '../../Images/Education/Elite.png'

import useBookingClass from "../../../hooks/useBookingClass";
import { FaShoppingCart } from "react-icons/fa";

import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";



const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [bookingClass] = useBookingClass();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error))
    // }




    return (

        <div className="fixed w-full z-10 bg-gradient-to-r from-gray-200 to-gray-300 shadow-sm">
            <div className="py-6 border-b-2">
                <Container>
                    <div className="flex flex-row items-center gap-4 md:gap-0 justify-between">



                        <Link to="/" className="font-semibold">
                            <img
                                className="w-32 md:w-32 lg:w-64"
                                src={elitearena}
                                alt=""
                            />
                        </Link>

                        <div className="space-x-4 font-semibold hidden md:block">
                            <Link to='/'>Home</Link>
                            <Link to='/instructor'>Instructors</Link>
                            <Link to='/classes'> Classes</Link>

                            {/* {
                                user && (
                                    user.role === 'admin' ? (
                                        <Link to='/dashboard/adminhome'>Dashboard</Link>
                                    ) : user.role === 'instructor' ? (
                                        <Link to='/dashboard/instructorhome'>Dashboard</Link>
                                    ) : (
                                        <Link to='/dashboard/myclasses'>Dashboard</Link>
                                    )
                                )
                            } */}

                            {
                                isAdmin ? (
                                    <Link to='/dashboard/adminhome'>Dashboard</Link>
                                ) : (
                                    isInstructor ? (
                                        <Link to='/dashboard/instructorhome'>Dashboard</Link>
                                    ) : (
                                        <Link to='/dashboard/studenthome'>Dashboard</Link>
                                    )
                                )
                            }





                            <Link to='/'><button className="gap-2 btn">
                                <FaShoppingCart /> <div className="">+{bookingClass?.length || 0}</div>
                            </button></Link>

                        </div>
                        <div className="">
                            <ProfileDropDown />
                        </div>




                    </div>
                </Container>
            </div>
        </div>

    );
};

export default Navbar;