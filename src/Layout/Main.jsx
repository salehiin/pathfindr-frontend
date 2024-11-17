import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';
import Slider from '../pages/Shared/Slider/Slider';
// import Banner from '../pages/Home/Banner/Banner';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Slider></Slider> */}
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;