import { Link } from "react-router-dom";
import Container from "../Container";
import ProfileDropDown from "../ProfileDropDown/ProfileDropDown";


const Navbar = () => {
    return (
        <div className="fixed w-full z-10 bg-gradient-to-r from-gray-200 to-gray-300 shadow-sm">
            <div className="py-6 border-b-2">
                <Container>
                    <div className="flex flex-row items-center gap-4 md:gap-0 justify-between">


                    <Link to='/' className="font-semibold hidden md:block">
                        F-Project
                    </Link>
                    <div className="space-x-4 font-semibold">
                       <Link to='/about'>About</Link>
                       <Link to='/blog'>Blog</Link>
                       <Link>Dashboard</Link>
                       <Link>Menu</Link>
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