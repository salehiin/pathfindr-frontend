
import usePackage from "../../hooks/usePackage";

import Wildlife from "./Wildlife";


const Category = () => {

    const [tourPackage] = usePackage();
    const allowedTypes = ['Adventure', 'Cultural', 'Beach', 'Wildlife', 'Historical'];
    const filteredTours = tourPackage.filter(item => allowedTypes.includes(item.tourType));


    return (
        <div className="flex flex-wrap gap-6 justify-between">
             
                {
                    filteredTours.map(item => <Wildlife
                        key={item.id}
                        item={item}
                    ></Wildlife>)
                }
            
        </div>
    );
};

export default Category;