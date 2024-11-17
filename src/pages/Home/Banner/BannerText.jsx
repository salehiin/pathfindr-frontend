import React from 'react';

const BannerText = () => {
    return (
        
            <div className="">
                <div className=" text-left md:space-y-7 w-2/3 md:w-1/2 pl-16 lg:pl-20">
                    <h1 className="mb-5 text-5xl font-bold text-[#2591b1] leading-tight">Your Journey, <br /> Expertly Led</h1>
                    <p className="mb-5 text-[#02c39a] pr-28">
                    Your journey begins here. Explore handpicked destinations, connect with experienced locals, and create memories that last a lifetime. Discover hidden gems, embrace new cultures, and embark on adventures tailored just for you.
                    </p>
                    <button className="btn text-white bg-[#2591b1] hover:bg-transparent">Get Started</button>
                </div>
            </div>
        
    );
};

export default BannerText;