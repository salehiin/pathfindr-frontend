

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
      ]
    },
  ]);