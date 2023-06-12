
import { useContext, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaUserCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Container from '../Container';


const ProfileDropDown = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenu, setIsMenu] = useState(false);
    const [isHovered, setIsHovered] = useState(false);


    return (
        <Container>
            <div className="relative">



            <div
    onClick={() => setIsMenu(!isMenu)}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="text-2xl p-4 md:py-1 md:px-2 shadow-lg flex flex-row items-center rounded-3xl cursor-pointer hover:shadow-md transition gap-4"
  >
    <AiOutlineMenuUnfold />
    <div>
      {user && user.photoURL ? (
        <>
          <div className="relative">
            <img src={user.photoURL} alt="Profile" className="w-9 h-9 rounded-full" />
            {isHovered && (
              <span className="absolute top-0 left-full ml-2 text-white bg-gray-800 p-1 rounded text-sm whitespace-nowrap overflow-hidden">
                {user.displayName}
              </span>
            )}
          </div>
        </>
      ) : (
        <FaUserCheck />
      )}
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
                            <Link className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold' to='/instructor'>Instructors</Link>
                            <Link className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold' to='/classes'> Classes</Link>
                            
                            {
                                user && (
                                    user.role === 'admin' ? (
                                        <Link className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold' to='/dashboard/adminhome'>Dashboard</Link>
                                    ) : user.role === 'instructor' ? (
                                        <Link className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold' to='/dashboard/instructorhome'>Dashboard</Link>
                                    ) : (
                                        <Link className='block md:hidden mx-[-40px] py-3 hover:bg-neutral-100 transition font-semibold' to='/dashboard/myclasses'>Dashboard</Link>
                                    )
                                )
                            }

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
        </Container>
    );
};

export default ProfileDropDown;