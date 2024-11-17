import SectionHeader from "../../Shared/Components/SectionHeader/SectionHeader";
import Guides from "../Guides/Guides";
import Overview from "../Overview/Overview";
import Packages from "../Packages/Packages";


const TravelKit = () => {
    return (
        <div className="mb-24">
            <style>
                {`
                    .tab {
                        padding: 0.5rem 1rem;
                        margin: 0 0.5rem;
                        cursor: pointer;
                        border: 1px solid transparent;
                        border-radius: 0.5rem;
                        transition: background-color 0.3s ease;
                    }

                    .tab:is(input:checked) {
                        background-color: white;
                        border-color: #ccc;
                        color: #fff;
                    }
                `}
            </style>
            <SectionHeader
                heading="Your Travel Companion"
            ></SectionHeader>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Overview" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Overview></Overview>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Packages"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Packages></Packages>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Guides" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <Guides></Guides>
                </div>
            </div>
        </div>
    );
};

export default TravelKit;