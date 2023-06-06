import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import googleLogo from '../Images/SignLogo/google-signIn.png'
import logo from '../Images/Education/learning.png'
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Container>
            <div className="flex flex-col justify-center items-center h-screen bg-gray-100">



                <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 py-6 w-1/2 lg:w-1/3">

                    <div className="text-center space-y-3 mb-8">
                        <img className="w-8 h-8 mx-auto" src={logo} alt="" />
                        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
                    </div>

                    {/* Google Sign up field */}
                    <div className=" mt-4 flex hover:bg-purple-100 text-sm border text-center justify-center p-1">
                        <div className="">
                            <img className="w-10 h-10 mx-5 text-center items-center" src={googleLogo} alt="" />
                        </div>
                        <button
                            className="font-bold  focus:outline-none focus:shadow-outline  ml-3"
                            type="button"
                        >
                            Sign up with Google
                        </button>
                    </div>




                    <div className="flex items-center justify-center mt-5 mb-5">
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                        <div className="text-gray-500">Or</div>
                        <div className="border border-gray-300 flex-grow mx-4"></div>
                    </div>
                    {/* name input and photo files*/}

                    <div className="lg:flex md:flex gap-3">
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                id="name"
                                {...register("name")}
                                name='name'
                                type="text"
                                placeholder="Enter your name"
                            />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                                Photo
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                id="photo"
                                type="file"
                                name='photo'
                                accept="image/*"
                            />
                        </div>
                    </div>
                    {/* email input field */}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                            id="email"
                            {...register("email")}
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-600">E-mail is required</span>}
                    </div>
                    {/* password input field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outlinlearning.pnge"
                            id="password"
                            {...register('password', {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-z])/
                            })}
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                        />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one lower case, one upper case, one number and one special characters is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                    </div>

                    {/* Confirmed password input field */}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                            id="password"
                            {...register("confirm")}
                            name='confirm'
                            type="password"
                            placeholder="Enter your confirm password"
                        />
                        {errors.confirm && <span className="text-red-600">Confirmed password required</span>}
                    </div>

                    {/* Sign Up input value */}
                    <div className="text-center mb-4 ">

                        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full " type="submit" value="Create Account" />

                    </div>
                    <p className="text-sm">Have an account? <Link to='/login' className="text-blue-500 underline">Sign in</Link></p>
                </form>
            </div>
        </Container>
    );
};

export default SignUp;