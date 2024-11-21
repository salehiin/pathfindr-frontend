import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Slider from '../pages/Shared/Slider/Slider';
// import Banner from '../pages/Home/Banner/Banner';

const Main = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');

    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            {/* <Slider></Slider> */}
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;