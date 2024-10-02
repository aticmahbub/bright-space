    import { Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import useAuth from "../../../hooks/useAuth";
import {useNavigate, useLocation } from "react-router-dom"
import useEnrolls from "../../../hooks/useEnrolls";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useLoadAllCourses from "../../../hooks/useLoadAllCourses";

const AllCourses = () => {


    const [courses] = useLoadAllCourses()
    console.log(courses);
    const { user } = useAuth()
    const [, refetch] = useEnrolls()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    // const { title, posted_by, image_url, short_description, price } = courses;

    const handleAddToCart = (specificCourse) => {
        if (user && user?.email) {
            // send cart to db
            console.log(specificCourse);
            const cartItem = {
                course: specificCourse,
                email: user?.email
            }
            axiosSecure.post('/enrolls', cartItem)
                .then(res => {
                    console.log(res.data);
                    refetch()
                })
        }
        else {
            navigate('/login', { state: { from: location } })
            console.log('user null');
        }
    }
    return (
        <Box display='flex' alignItems='center' maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} py='20'>
            <Box className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10'>
                {
                    courses.map((course,idx) =>(
                        <CourseCard 
                        key={idx}
                        course={course}
                        handleAddToCart={handleAddToCart}
                        ></CourseCard>
                    ))
                }
            </Box>
        </Box>
    );
};

export default AllCourses;