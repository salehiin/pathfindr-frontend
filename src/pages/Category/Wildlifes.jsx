// import { useEffect, useState } from "react";
// import Wildlife from "./Wildlife";
// import usePackage from "../../hooks/usePackage";


// const Wildlifes = () => {

//     const [tourPackage] = usePackage();
//     const allowedTypes = ['Adventure', 'Cultural', 'Beach', 'Wildlife', 'Historical'];
//     const filteredTours = tourPackage.filter(item => allowedTypes.includes(item.tourType));
//     const shuffledTours = filteredTours.sort(() => Math.random() - 0.5);
//     const selectedTours = shuffledTours.slice(0, 6);



//     return (
//         <div className="flex flex-wrap gap-6 justify-between">
             
//                 {
//                     selectedTours.map(item => <Wildlife
//                         key={item.id}
//                         item={item}
//                     ></Wildlife>)
//                 }
            
//         </div>
//     );
// };

// export default Wildlifes;



import usePackage from "../../hooks/usePackage";

import Wildlife from "./Wildlife";


const Wildlifes = () => {

    const [tourPackage] = usePackage();
    const wildlifePackage = tourPackage.filter(item => item.tourType === 'Wildlife');


    return (
        <div className="flex flex-wrap gap-6 justify-between py-20">
             
                {
                    wildlifePackage.map(item => <Wildlife
                        key={item.id}
                        item={item}
                    ></Wildlife>)
                }
            
        </div>
    );
};

export default Wildlifes;