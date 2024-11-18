import React from 'react';
import Type from './Type';
import t1 from "../../../assets/t1.jpg";
import t2 from "../../../assets/t2.jpg";
import t3 from "../../../assets/t3.jpg";
import t4 from "../../../assets/t4.jpg";
import usePackage from '../../../hooks/usePackage';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Types = () => {

    

    const [tourPackage] = usePackage();
    // const wildlife = tourPackage.filter(item => item.tourType === 'Wildlife');
    // const Cultural = tourPackage.filter(item => item.tourType === 'Cultural');
    // const Adventure = tourPackage.filter(item => item.tourType === 'Adventure');
    // const Historical = tourPackage.filter(item => item.tourType === 'Historical');

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-2 h-screen">
            <Link to="/wildlife" className="col-start-1 col-end-3 row-start-1 row-end-5">
                <Type 
                image={t1}
                tourTypes={"Nature & Wildlife"}
                ></Type>
            </Link>
            <Link to="cultural" className="col-start-3 col-end-4 row-start-1 row-end-3">
                <Type 
                image={t2}
                tourTypes={"Sightseeing"}
                ></Type>
            </Link>
            <Link to="adventure" className="col-start-4 col-end-5 row-start-1 row-end-3">
                <Type 
                image={t3}
                tourTypes={"Adventure"}
                ></Type>
            </Link>
            <Link to="historical" className="col-start-3 col-end-5 row-start-3 row-end-5">
                <Type 
                image={t4}
                tourTypes={"Cultural & Historical"}
                ></Type>
            </Link>
        </div>
    );
};

export default Types;


// https://preview.themeforest.net/item/citytours-city-tours-tour-tickets-and-guides/full_screen_preview/10715647?_ga=2.246495556.1713976048.1731471275-115841023.1730522043&_gac=1.188410330.1730522043.CjwKCAjw-JG5BhBZEiwAt7JR6xlftHkIX5wn82O-DiZfWJKvKdsTzxa1fCWoMhUBOQFoN5D7HOXRIxoCZRAQAvD_BwE