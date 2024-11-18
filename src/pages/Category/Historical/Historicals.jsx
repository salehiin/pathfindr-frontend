
import usePackage from "../../../hooks/usePackage";
import Historical from "./Historical";




const Category = () => {

    const [tourPackage] = usePackage();
    const historicalPackage = tourPackage.filter(item => item.tourType === 'Historical');


    return (
        <div className="flex flex-wrap gap-6 justify-between">
             
                {
                    historicalPackage.map(item => <Historical
                        key={item.id}
                        item={item}
                    ></Historical>)
                }
            
        </div>
    );
};

export default Category;