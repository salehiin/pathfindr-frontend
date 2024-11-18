import { useEffect, useState } from "react";

const usePackage = () => {

    const [tourPackage, setTourPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('tourpackage.json')
            .then(res => res.json())
            .then(data => {
                
                setTourPackage(data);
                setLoading(false);
            });
    }, [])

    return [tourPackage, loading]

}

export default usePackage;