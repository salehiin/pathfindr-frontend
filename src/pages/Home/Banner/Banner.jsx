import bi1 from "../../../assets/bi1.jpg"
import bi2 from "../../../assets/bi2.jpg"
import bi3 from "../../../assets/bi3.jpg"
import bi4 from "../../../assets/bi4.jpg"
// src={bi1}

import BannerComponent from "./BannerComponent";

const Banner = () => {
    return (
        <div className="bg-fixed">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <BannerComponent
                        image={bi4}
                    ></BannerComponent>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <BannerComponent
                        image={bi1}
                    ></BannerComponent>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <BannerComponent
                        image={bi2}
                    ></BannerComponent>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <BannerComponent
                        image={bi3}
                    ></BannerComponent>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;