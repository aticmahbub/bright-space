import { Box, Heading } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import ClassCard from "../../../components/CourseCard/CourseCard";

const PopularCourses = () => {
    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/courses')
    //         .then(res => res.json())
    //         // .then(data => setCourses(data))
    // }, []);

    return (
        <Box maxW='1596px' mx='auto' py='20'>
            <Heading>Popular Courses</Heading>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10'>
                {/* {
                    courses.map((cls, idx) => <ClassCard key={idx} cls={cls} />)
                } */}
            </Box>
        </Box>
    );
};

export default PopularCourses;