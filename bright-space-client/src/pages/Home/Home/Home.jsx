import Achievements from "../../About/Achievements/Achievements"
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Stats from "../Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner />
            <Achievements/>
            <PopularClasses />
            <Stats/>
        </div>
    );
};

export default Home;