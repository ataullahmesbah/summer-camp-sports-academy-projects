import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/AdminHome/AdminHome";
import PopularInstructor from "../Pages/PopularInstructor/PopularInstructor";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'popularinstructor',
                element: <PopularInstructor></PopularInstructor>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            
            // admin route
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            }
        ]
    }
])