// import Achievements from "../../About/Achievements/Achievements"
import Banner from "../Banner/Banner";
import EducationVideo from "../EducationVideo/EducationVideo";
import Partners from "../Partners/Partners";
import PopularClasses from "../PopularCourses/PopularCourses";
import Stats from "../Stats/Stats";


const Home = () => {
    return (
        <div>
            <Banner />
            {/* <Achievements/> */}
            <Partners />
            <EducationVideo />
            <PopularClasses />
            <Stats/>
        </div>
    );
};

export default Home;