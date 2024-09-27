import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import useAuth from "../../../hooks/useAuth";
// import {useNavigate, useLocation } from "react-router-dom"

const AllCourses = () => {

    const {user} =useAuth()
    // const navigate = useNavigate()
    // const location = useLocation()
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const handleAddToCart = (items) =>{
        if(user && user?.email){
            // send cart to db
            console.log(items);
        }
        else{
            // navigate('/login', {state:{from: location}})
            console.log('user nai');
        }
    }
    console.log(handleAddToCart);
    return (
        <Box display='flex' alignItems='center' py='20'>
            <Box className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                {
                    courses.map((course, idx) => <CourseCard key={idx} course={course} handleAddToCart={handleAddToCart} />)
                }
            </Box>
        </Box>
    );
};

export default AllCourses;