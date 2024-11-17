import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Package = ({ item }) => {

    const { tourType, tripTitle, cost, image } = item;

    return (


        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md text-black" style={{ backgroundImage: `url(${image})`, }}>
            {/* backgroundImage: "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)" */}
                <p className="p-2">{tripTitle}</p>
            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <div className="py-2 flex items-center justify-evenly">
                    <h3 className="font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{tourType}</h3>
                    <FaHeartCirclePlus />


                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">$ {cost}</span>
                    <Link className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Details</Link>
                </div>
            </div>
        </div>


    );
};

export default Package;