import  { useContext, useEffect, useState } from 'react';
import { Box, Spinner, Alert, AlertIcon, Heading, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';

const MyCourses = () => {
    const { user } = useContext(AuthContext);  // Assuming AuthContext provides user data including email
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch enrolled courses based on user email
    const fetchEnrolledCourses = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:3000/enrollments/${user?.email}`);
            setEnrolledCourses(response.data);
        } catch (err) {
            setError(`Failed to load enrolled courses: ${err.response?.data?.message || err.message}`);
            console.error("Error fetching enrolled courses:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.email) {
            fetchEnrolledCourses();
        }
    }, [user?.email]);

    if (loading) {
        return <Spinner size="xl" />;
    }

    if (error) {
        return (
            <Alert status="error" mt={4}>
                <AlertIcon />
                {error}
            </Alert>
        );
    }

    return (
        <Box p={4}>
            <Heading as="h2" size="xl" mb={4}>
                My Enrolled Courses
            </Heading>
            {enrolledCourses.length === 0 ? (
                <Text>No enrolled courses found.</Text>
            ) : (
                enrolledCourses.map((course) => (
                    <Box key={course._id} mb={4} p={4} borderWidth="1px" borderRadius="md">
                        <Heading as="h3" size="md">{course.title}</Heading>
                        <Text>Instructor: {course.instructorName}</Text>
                        <Text>Duration: {course.duration} hours</Text>
                        <Text>Level: {course.difficulty}</Text>
                        <Button colorScheme="orange" mt={2}>View Course</Button>
                    </Box>
                ))
            )}
        </Box>
    );
};

export default MyCourses;
