import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useEnrolls from "../../hooks/useEnrolled";
import CourseCard from "../CourseCard/CourseCard";

const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    // console.log(courses);

  const {user} =useAuth()
  console.log(user?.email);
  const [enrolls] =useEnrolls()
  console.log(enrolls);

  const specificCourse =courses.filter(course => course._id === enrolls.courseId)
  console.log(specificCourse);
  useEffect(() => {
    // Fetch courses when component mounts
    const fetchEnrolledCourses = async () => {
        fetch('/courses.json')
        .then(res => res.json())
        .then(data =>{
            setCourses(data);
        })
    };

    fetchEnrolledCourses();
  }, [courses]);

    return (
        <div>
            {
                courses.map((course,idx) => <CourseCard key={idx}>


                </CourseCard>)
            }
        </div>
    );
};

export default MyCourses;