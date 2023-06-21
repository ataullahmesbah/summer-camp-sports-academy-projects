import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Shared/Container";
import googleLogo from '../Images/SignLogo/google-signIn.png'
import logo from '../Images/Education/learning.png'
import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const { createUser, userProfileUpdate, googleSignIn, logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");


    const onSubmit = (data, event) => {
  // profile image
  const image = event.target.image.files[0];
  const formData = new FormData();
  formData.append('image', image);

  const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image}`;
  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then(imageData => {
      const imageUrl = imageData.data.display_url;
      createUser(data.email, data.password, data.confirm)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          userProfileUpdate(data.name, imageUrl) // Update the user profile with the correct imageUrl
            .then(() => {
              const saveUser = { name: data.name, email: data.email, img: imageUrl }; // Use imageUrl instead of data.imageUrl
              fetch('https://final-project-server-side-ataullahmesbah.vercel.app/users', {
                method: 'POST',
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
              })
                .then(res => res.json())
                .then(data => {
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'User created successfully',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate(from, { replace: true });
                  }
                })
            })
            .catch(err => {
              console.log(err.message);
            });
        })
        .catch(err => {
          console.log(err.message);
        });
    })
    .catch(err => {
      console.log(err.message);
    });
};


    // Password visibility toggle
    const [passwordVisible, setPasswordVisible] = useState(false);

    const showPassword = () => {
        setPasswordVisible(true);
    };

    const hidePassword = () => {
        setPasswordVisible(false);
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://final-project-server-side-ataullahmesbah.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })

                    })

            })
            .catch(error => {
                console.log(error.message);
            })
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
                    <div onClick={handleGoogleSignIn} className=" mt-4 flex hover:bg-purple-100 text-sm border text-center justify-center p-1">
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
                                name='image'
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

                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="flex items-center">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                                id="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[a-z])/
                                })}
                                name='password'
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Enter your password"
                            />
                            <div
                                className="cursor-pointer ml-[-30px] self-center"
                                onClick={passwordVisible ? hidePassword : showPassword}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="text-gray-500" />
                                ) : (
                                    <FaEye className="text-gray-500" />
                                )}
                            </div>
                        </div>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one lowercase, one uppercase, one number, and one special character</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be at least 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                    </div>


                    {/* Confirmed password input field */}

                    {/* Confirmed password input field */}
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm">
                            Confirm Password
                        </label>
                        <div className="flex items-center">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight bg-gray-100 focus:outline-none focus:shadow-outline"
                                id="confirm"
                                {...register("confirm", {
                                    required: true,
                                    validate: (value) => value === password.current || "Passwords do not match"
                                })}
                                name="confirm"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Enter your confirm password"
                            />
                            <div
                                className="cursor-pointer ml-[-30px] self-center"
                                onClick={passwordVisible ? hidePassword : showPassword}
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="text-gray-500" />
                                ) : (
                                    <FaEye className="text-gray-500" />
                                )}
                            </div>
                        </div>
                        {errors.confirm && <span className="text-red-600">{errors.confirm.message}</span>}
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