

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Wildlifes from "../pages/Category/Wildlifes";
import Category from "../pages/Category/Category";
import Culturals from "../pages/Category/Cultural/Culturals";
import Adventures from "../pages/Category/Adventure/Adventures";
import Historicals from "../pages/Category/Historical/Historicals";
import Reservation from "../pages/Reservation/Reservation/Reservation";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddPackages from "../pages/Dashboard/AddPackages/AddPackages";
import AdminRoute from "./AdminRoute";
import ManagePackages from "../pages/Dashboard/ManagePackages/ManagePackages";
import UpdatePackage from "../pages/Dashboard/UpdatePackage/UpdatePackage";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/category',
            element: <Category></Category>
        },
        {
            path: '/wildlife',
            element: <Wildlifes></Wildlifes>
        },
        {
            path: '/cultural',
            element: <Culturals></Culturals>
        },
        {
            path: '/adventure',
            element: <Adventures></Adventures>
        },
        {
            path: '/historical',
            element: <Historicals></Historicals>
        },
        {
            path: '/reservation',
            element: <Reservation></Reservation>
        },
        {
            path: 'secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'checkout',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },
            // admin only routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'addPackages',
                element: <AdminRoute><AddPackages></AddPackages></AdminRoute>
            },
            {
                path: 'managePackages',
                element: <AdminRoute><ManagePackages></ManagePackages></AdminRoute>
            },
            {
                path: 'updatePackage/:id',
                element: <AdminRoute><UpdatePackage></UpdatePackage></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/packages/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
  ]);