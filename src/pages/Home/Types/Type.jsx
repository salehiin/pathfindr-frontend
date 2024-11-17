import React from 'react';

const Type = ({image, tourTypes}) => {
    return (
        <div className="card image-full shadow-xl h-full w-full">
            <figure className='h-full'>
                <img
                    className="object-cover h-full w-full"
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body flex items-start justify-end p-4">
                {/* <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions justify-start">
                    <h5 className="card-title text-[#2591b1]">{tourTypes}</h5>
                </div>
            </div>
        </div>
    );
};

export default Type;