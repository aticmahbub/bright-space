import useEnrolls from "../../../hooks/useEnrolls";
import useLoadAllCourses from "../../../hooks/useLoadAllCourses";

const MyCourses = () => {

    const [enrolls] = useEnrolls()
    const [courses] =useLoadAllCourses()
    console.log(enrolls);
    return (
        <div>
            My courses: {enrolls.length}
            <div>
                {
                    enrolls.map((item, idx) => {
                        <div>
                            
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default MyCourses;