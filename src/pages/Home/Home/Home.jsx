import Features from '../Features/Features';
import Banner from '../Banner/Banner';
import Types from '../Types/Types';
import Destinations from '../Destinations/Destinations';
import Ideas from '../Ideas/Ideas';
import TravelKit from '../TravelKit/TravelKit';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Pathfindr | Home</title>
            </Helmet>
            <Banner></Banner>
            <Features></Features>
            <TravelKit></TravelKit>
            <Types></Types>
            <Destinations></Destinations>
            <Ideas></Ideas>
        </div>
    );
};

export default Home;