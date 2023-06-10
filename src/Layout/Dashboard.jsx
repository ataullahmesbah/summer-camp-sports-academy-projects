import { NavLink, Outlet } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import { FaShoppingCart, FaBookOpen, FaDollarSign, FaUserGraduate, FaHome, FaPeopleArrows } from "react-icons/fa";
import icon from '../Pages/Images/Education/learning.png'


const Dashboard = () => {
    return (

        <div className="drawer p-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}

                <label htmlFor="my-drawer" className=" drawer-button "><FaAlignLeft className="text-2xl" /></label>
                <Outlet></Outlet>
            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-blue-900 ">




                    {/* Sidebar content here */}

                    <div className="mx-4 mt-3 flex gap-3">
                        <img className="w-8 h-8" src={icon} alt="" />
                    <li className="text-3xl  mb-8 text-yellow-500 font-bold">Elite Athlete <br /> Arena</li>
                    </div>

                    <li><NavLink to='/dashboard/myclasses' className='font-bold text-xl text-white'><FaUserGraduate /> Student Home</NavLink></li>
                    <li><NavLink to='/dashboard/myclasses' className='font-semibold text-xl text-white'><FaBookOpen /> Enroll Class</NavLink></li>
                    <li><NavLink to='/dashboard/myclasses' className='font-semibold text-xl text-white'><FaShoppingCart /> My Booking Class</NavLink></li>
                    <li><NavLink to='/dashboard/payment' className='font-semibold text-xl text-white'><FaDollarSign /> Payment History</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to='/' className='font-bold text-xl text-white'><FaHome /> Home</NavLink></li>
                    <li><NavLink to='/classes' className='font-semibold text-xl text-white'><FaPeopleArrows /> Classes</NavLink></li>

                </ul>
            </div>
        </div>

    );
};

export default Dashboard;