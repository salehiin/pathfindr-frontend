import { useEffect, useState } from "react";
import Package from "./Package";
import usePackage from "../../../hooks/usePackage";


const Packages = () => {

    const [tourPackage] = usePackage();
    const allowedTypes = ['Adventure', 'Cultural', 'Beach', 'Wildlife', 'Historical'];
    const filteredTours = tourPackage.filter(item => allowedTypes.includes(item.tourType));
    const shuffledTours = filteredTours.sort(() => Math.random() - 0.5);
    const selectedTours = shuffledTours.slice(0, 6);

    // const  [ tourPackage, setTourPackage ] = useState([]);

    // useEffect( () =>{

        

    //     fetch('tourpackage.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         // const popularTours = data.filter(item => item.tourType === 'Adventure');
    //         // setTourPackage(popularTours)

    //         // Filter tours to include only the specified types
    //         const allowedTypes = ['Adventure', 'Cultural', 'Beach', 'Wildlife', 'Historical'];
    //         const filteredTours = data.filter(item => allowedTypes.includes(item.tourType));

    //         // Shuffle the filtered tours to randomize the selection
    //         const shuffledTours = filteredTours.sort(() => Math.random() - 0.5);

    //         // Select only the first 6 tours
    //         const selectedTours = shuffledTours.slice(0, 6);

    //         // Update state with the selected tours
    //         setTourPackage(selectedTours);

    //     })
    // }, [])

    return (
        <div className="flex flex-wrap gap-6 justify-between">
             
                {
                    selectedTours.map(item => <Package
                        key={item.id}
                        item={item}
                    ></Package>)
                }
            
        </div>
    );
};

export default Packages;