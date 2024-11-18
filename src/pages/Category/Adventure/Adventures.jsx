
import usePackage from "../../../hooks/usePackage";
import Adventure from "./Adventure";




const Category = () => {

    const [tourPackage] = usePackage();
    const adventurePackage = tourPackage.filter(item => item.tourType === 'Adventure');


    return (
        <div className="flex flex-wrap gap-6 justify-between">
             
                {
                    adventurePackage.map(item => <Adventure
                        key={item.id}
                        item={item}
                    ></Adventure>)
                }
            
        </div>
    );
};

export default Category;