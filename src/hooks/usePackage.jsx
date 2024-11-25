// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePackage = () => {
    const axiosPublic = useAxiosPublic();

    // const [tourPackage, setTourPackage] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://pathfindr-server.vercel.app/packages')
    //         .then(res => res.json())
    //         .then(data => {
                
    //             setTourPackage(data);
    //             setLoading(false);
    //         });
    // }, [])

    const {data: tourPackage = [], isPending: loading, refetch} = useQuery({
        queryKey: ['packages'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    })

    return [tourPackage, loading, refetch]

}

export default usePackage;