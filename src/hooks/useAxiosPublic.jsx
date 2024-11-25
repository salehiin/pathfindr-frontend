import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://pathfindr-server.vercel.app'
})

const useAxiosPublic = () => {

    
    return axiosPublic;
};

export default useAxiosPublic;