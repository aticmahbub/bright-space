// import Achievements from "../../About/Achievements/Achievements"
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularCourses/PopularCourses";
import Stats from "../Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Achievements/> */}
            <Partners />
            <PopularClasses />
            <Stats/>
        </div>
    );
};

export default Home;