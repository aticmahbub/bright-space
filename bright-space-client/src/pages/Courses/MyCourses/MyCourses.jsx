import useEnrolls from "../../../hooks/useEnrolls";
// import useLoadAllCourses from "../../../hooks/useLoadAllCourses";

const MyCourses = () => {

    const [enrolls] = useEnrolls()
    // const [courses] =useLoadAllCourses()
    console.log(enrolls);
    const handleMyCourses = id =>{
        console.log(id);
    }
    return (
        <div>
            My courses: {enrolls.length}
            <div>
                {
                    enrolls.map((item, idx) =>{
                       return <div key={idx}>
                            {item.course.title}
                            <button onClick={()=>handleMyCourses(item.course)}>Click</button>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default MyCourses;