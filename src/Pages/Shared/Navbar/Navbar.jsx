import { Link } from "react-router-dom";
import Container from "../Container";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";
import elitearena from '../../Images/Education/Elite Athlete Arena Logo ..png'


const Navbar = () => {
    return (
       
            <div className="fixed w-full z-10 bg-gradient-to-r from-gray-200 to-gray-300 shadow-sm">
            <div className="py-6 border-b-2">
                <Container>
                    <div className="flex flex-row items-center gap-4 md:gap-0 justify-between">


                    <Link to='/' className="font-semibold hidden md:block">
                        <img className="w-48" src={elitearena} alt="" />
                    </Link>
                    <div className="space-x-4 font-semibold hidden md:block">
                       <Link to='/'>Home</Link>
                       <Link to='/instructors'>Instructors</Link>
                       <Link to='/classes'> Classes</Link>
                       <Link>Dashboard</Link>
                      
                    </div>
                    <div className="">
                        <ProfileDropDown/>
                    </div>




                    </div>
                    </Container>
            </div>
        </div>
       
    );
};

export default Navbar;