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
import Instructor from "../Pages/Instructor/Instructor";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/AddClass/AddClass";
import InstructorOwnClass from "../Pages/InstructorOwnClass/InstructorOwnClass";
import InstructorHome from "../Components/InstructorHome/InstructorHome";
import AdminAllClasses from "../Pages/AdminAllClasses/AdminAllClasses";
import ErrorPage from "../Pages/ErrorPage";





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: 'instructor',
                element: <Instructor></Instructor>
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

            // instructor route
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path: 'instructorownclass',
                element: <InstructorRoute>
                    <InstructorOwnClass></InstructorOwnClass>
                </InstructorRoute>
            },

            // admin route
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'adminallclasses',
                element: <AdminRoute><AdminAllClasses></AdminAllClasses></AdminRoute>
            }
        ]
    }
])