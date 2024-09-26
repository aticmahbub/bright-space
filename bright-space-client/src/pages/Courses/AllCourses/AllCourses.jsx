import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";

const AllCourses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    const handleAddToCart = (items) =>{
        console.log(items);
    }
    return (
        <Box display='flex' alignItems='center' py='20'>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    classes.map((cls, idx) => <CourseCard key={idx} cls={cls} handleAddToCart={handleAddToCart} />)
                }
            </Box>
        </Box>
    );
};

export default AllCourses;