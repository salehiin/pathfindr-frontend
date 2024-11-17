import Features from '../Features/Features';
import Banner from '../Banner/Banner';
import Types from '../Types/Types';
import Destinations from '../Destinations/Destinations';
import Ideas from '../Ideas/Ideas';
import TravelKit from '../TravelKit/TravelKit';

const Home = () => {

    return (
        <div>
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