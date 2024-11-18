
import usePackage from "../../../hooks/usePackage";
import Cultural from "./Cultural";




const Category = () => {

    const [tourPackage] = usePackage();
    const culturalPackage = tourPackage.filter(item => item.tourType === 'Cultural');


    return (
        <div className="flex flex-wrap gap-6 justify-between">
             
                {
                    culturalPackage.map(item => <Cultural
                        key={item.id}
                        item={item}
                    ></Cultural>)
                }
            
        </div>
    );
};

export default Category;