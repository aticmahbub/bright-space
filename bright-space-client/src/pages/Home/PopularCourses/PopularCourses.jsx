import { Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ClassCard from "../../../components/CourseCard/CourseCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <Box maxW='1596px' mx='auto' px={{ base: '2', lg: 8, '2xl': 0 }} mt={{ base: 10, md: 20, '2xl': 28 }}>
            <Box display='flex' flexDir={{base: 'column', lg: 'row'}} alignItems={{base: 'left', lg: 'center'}} justifyContent='space-between' gap='6'>
                <SectionTitle
                    title='Popular Courses'
                    description='Explore our top-rated courses designed to enhance your skills and knowledge. From coding and data science to creative design and business management, these popular courses are chosen by thousands of students for their relevance and practical value.'
                />
                <Button as={Link} to='/allCourses' colorScheme='gray' w='max-content' size={{ base: 'md', md: 'lg' }}>View All</Button>
            </Box>
            <Box className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-16'>
                {
                    courses.map((course, idx) => <ClassCard key={idx} course={course} />)
                }
            </Box>
        </Box>
    );
};

export default PopularCourses;