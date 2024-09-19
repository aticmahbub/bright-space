import AboutBanner from "./AboutBanner/AboutBanner";
import Contact from "./contact/Contact";
import Faq from "./Faq/Faq";
import MIssion from "./Mission/MIssion";
import Team from "./Team/Team";

const About = () => {
    return (
        <div>
            <AboutBanner />
            <MIssion />
            <Faq />
            <Team />
            <Contact />
        </div>
    );
};

export default About;