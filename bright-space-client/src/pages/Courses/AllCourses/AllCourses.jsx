import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import {useNavigate, useLocation } from "react-router-dom"
import useEnrolls from "../../../hooks/useEnrolled";

const AllCourses = () => {

    const {user} =useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [courses, setCourses] = useState([]);
    // const [,refetch] = useEnrolls

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    // const handleAddToCart = (specificCourse) =>{
    //     if(user && user?.email){
    //         // send cart to db
    //         console.log(specificCourse);
    //         const cartItem = {
    //             courseId: specificCourse._id,
    //             email: user.email
    //         }
    //         axios.post('http://localhost:3000/enrolls',cartItem)
    //         .then(res =>{
    //             console.log(res.data);
    //             refetch()
    //         })
    //     }
    //     else{
    //         navigate('/login', {state:{from: location}})
    //         console.log('user nai');
    //     }
    // }
    return (
        <Box display='flex' alignItems='center' maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} py='20'>
            <Box className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10'>
                {
                    courses.map((course, idx) => <CourseCard key={idx} course={course} />)
                }
            </Box>
        </Box>
    );
};

export default AllCourses;