

// const Type = ({image, tourTypes}) => {
//     return (
//         <div className="card image-full shadow-xl h-full w-full">
//             <figure className='h-full'>
//                 <img
//                     className="object-cover h-full w-full"
//                     src={image}
//                     alt="" />
//             </figure>
//             <div className="card-body flex items-start justify-end p-4">

import { Link } from "react-router-dom";

//                 <div className="card-actions justify-start">
//                     <h5 className="card-title text-[#2591b1]">{tourTypes}</h5>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Type;


const Type = ({ image, tourTypes }) => {
    return (
        <div className="relative shadow-xl h-full w-full rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src={image}
                alt=""
            />
            {/* Overlay using Tailwind's `before:` */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            {/* Content */}
            <div className="relative z-10 flex items-end h-full p-4">
                <Link 
                // to={`/category`}
                className="text-lg font-semibold text-white">{tourTypes}</Link>
            </div>
        </div>
    );
};

export default Type;