import { FaGlobeAmericas } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { PiMedalThin } from "react-icons/pi";

const Features = () => {
    return (
        <div className="flex justify-around p-11">
            <div className="text-center p-4">
                <FaGlobeAmericas className="rounded-full text-white bg-[#02c39a] opacity-75 text-7xl inline-block" />
                <h3 className="text-black font-semibold text-lg py-4">Discover the possibilities</h3>
                <p className="text-[#2591b1]">With nearly half a million attractions, hotels & more, you're sure to find joy.</p>
            </div>
            <div className="text-center p-4">
            <MdCollectionsBookmark className="  text-[#02c39a] opacity-75 text-7xl inline-block" />
                <h3 className="text-black font-semibold text-lg py-4">Enjoy deals & delights</h3>
                <p className="text-[#2591b1]">Quality activities. Great prices. Plus, earn credits to save more.</p>
            </div>
            <div className="text-center p-4">
            <TbBeach className="  text-[#02c39a] opacity-75 text-7xl inline-block" />
                <h3 className="text-black font-semibold text-lg py-4">Exploring made easy</h3>
                <p className="text-[#2591b1]">Book last minute, skip lines & get free cancellation for easier exploring.</p>
            </div>
            <div className="text-center p-4">
            <PiMedalThin className=" text-[#02c39a] opacity-75 text-7xl inline-block" />
                <h3 className="text-black font-semibold text-lg py-4">Travel you can trust</h3>
                <p className="text-[#2591b1]">Read reviews & get reliable customer support. We're with you at every step.</p>
            </div>
        </div>
    );
};

export default Features;

// https://preview.themeforest.net/item/travelwp-traveltour-booking-wordpress-theme/full_screen_preview/19029758?_ga=2.257644875.1713976048.1731471275-115841023.1730522043&_gac=1.83943787.1730522043.CjwKCAjw-JG5BhBZEiwAt7JR6xlftHkIX5wn82O-DiZfWJKvKdsTzxa1fCWoMhUBOQFoN5D7HOXRIxoCZRAQAvD_BwE