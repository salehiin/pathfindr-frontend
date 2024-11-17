import React from 'react';
import Destination from './Destination';
import t3 from "../../../assets/t3.jpg";
import d1 from "../../../assets/d1.jpg";
import { div } from 'framer-motion/client';
import { Link } from 'react-router-dom';
import SectionHeader from '../../Shared/Components/SectionHeader/SectionHeader';

const Destinations = () => {
    return (
        <div className='my-24'>
            <div className="carousel w-full pb-10">
                <div id="lide1" className="carousel-item relative w-full">
                    <div className="absolute w-full ">

                        <div className="flex justify-between items-center">
                            {/* <p className="font-bold text-black text-3xl capitalize">Top Destination for your next vacation</p> */}
                            <SectionHeader
                                heading={"Top Destination for your next vacation"}
                            ></SectionHeader>
                            <div>
                                <a href="#lide3" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❮</a>
                                <a href="#lide2" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex gap-8">


                            <Destination
                                image={d1}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={d1}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={d1}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={d1}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>


                        </div>

                    </div>

                </div>
                <div id="lide2" className="carousel-item relative w-full">
                    <div className="absolute w-full ">

                        <div className="flex justify-between items-center">
                            <p className="font-bold text-black text-3xl capitalize">Top Destination for your next vacation</p>
                            <div>
                                <a href="#lide1" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❮</a>
                                <a href="#lide3" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex gap-8">


                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>


                        </div>

                    </div>

                </div>
                <div id="lide3" className="carousel-item relative w-full">
                    <div className="absolute w-full ">

                        <div className="flex justify-between items-center">
                            <p className="font-bold text-black text-3xl capitalize">Top Destination for your next vacation</p>
                            <div>
                                <a href="#lide2" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❮</a>
                                <a href="#lide1" className="m-2 btn btn-circle text-2xl bg-[#f2f2f2] border-none text-black hover:bg-[#02c39a] hover:text-white">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16">
                        <div className="flex gap-8">


                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>
                            <Destination
                                image={t3}
                                title={"Dhaka"}
                                details={"Discover Dhaka with our special tours"}
                            ></Destination>


                        </div>

                    </div>

                </div>


            </div>
            <div className='text-center'>
                <Link className='btn  text-[#02c39a] btn-outline hover:bg-[#02c39a]  hover:text-black'>See All Destinations</Link>
            </div>
        </div>
    );
};

export default Destinations;

// https://preview.themeforest.net/item/travelwp-traveltour-booking-wordpress-theme/full_screen_preview/19029758?_ga=2.257644875.1713976048.1731471275-115841023.1730522043&_gac=1.83943787.1730522043.CjwKCAjw-JG5BhBZEiwAt7JR6xlftHkIX5wn82O-DiZfWJKvKdsTzxa1fCWoMhUBOQFoN5D7HOXRIxoCZRAQAvD_BwE