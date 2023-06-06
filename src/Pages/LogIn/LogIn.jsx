import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import googleLogo from '../Images/SignLogo/google-signIn.png'
import logo from '../Images/Education/learning.png'



const LogIn = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">



                <form className="bg-white shadow-md rounded px-8 py-6 w-1/2 lg:w-1/3">

                    <div className="text-center space-y-3 mb-8">
                        <img className="w-8 h-8 mx-auto" src={logo} alt="" />
                        <h1 className="text-3xl font-bold mb-4">Log In</h1>
                    </div>


                    <div className=" mt-4 flex hover:bg-purple-100 text-sm border text-center justify-center p-1">
                        <div className="">
                            <img className="w-10 h-10 mx-5 text-center items-center" src={googleLogo} alt="" />
                        </div>
                        <button
                            className="font-bold  focus:outline-none focus:shadow-outline  ml-3"
                            type="button"
                        >
                            Sign in with Google
                        </button>
                    </div>




                    <div className="flex items-center justify-center mt-5 mb-5">
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                        <div className="text-gray-500">Or</div>
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                    </div>



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                            id="password"
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="/">
                            Forgot password?
                        </a>
                    </div>

                    <div className="text-center mb-4 ">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                            type="submit"
                        >
                            Create Account
                        </button>

                    </div>
                    <p className="text-sm">Don't have an account? <Link to='/signup' className="text-blue-500 underline">Sign Up</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default LogIn;