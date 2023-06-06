
import { useContext, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaUserCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';


const ProfileDropDown = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenu, setIsMenu] = useState(false);
    

    return (
        <div className="relative">



            <div onClick={() => setIsMenu(!isMenu)} className=' text-2xl p-4 md:py-1 md:px-2 border-[2px] border-neutral-400 flex flex-row items-center rounded-3xl cursor-pointer hover:shadow-md transition gap-4'>
                <AiOutlineMenuUnfold />
                <div className="md:block hidden">
                    <FaUserCheck />
                </div>
            </div>
            

            {isMenu && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-gradient-to-r from-gray-400 to-gray-600 overflow-hidden right-0 top-14 text-white px-20 pb-5 pt-5'>
                <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (
                            <div
                                onClick={logOut}
                                className='mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                            >
                                Logout
                            </div>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className=' mx-[-40px] py-3 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProfileDropDown;