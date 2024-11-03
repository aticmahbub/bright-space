import  { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Alert,
  AlertIcon,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Enroll from '../Enroll';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all courses from the API
  const fetchCourses = async () => {
    try {
      const response = await axios.get('https://bright-space-server.vercel.app/courses');
      setCourses(response.data);
    } catch (err) {
      setError('Failed to load courses.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

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
      <Heading as="h1" mb={4}>
        All Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {courses.map((course) => (
          <Box
            key={course._id}
            border="1px solid"
            borderColor="#FF9500"
            borderRadius="md"
            overflow="hidden"
            transition="0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
            p={4}
          >
            <Box
              as="img"
              src={course.image_url || 'https://via.placeholder.com/300x200'}
              alt={course.title}
              borderRadius="md"
              mb={2}
              width="100%"
              height="auto"
            />
            <Heading as="h3" size="md" mb={2}>
              {course.title}
            </Heading>
            <Box fontSize="sm" color="gray.600" mb={4}>
              {course.short_description || 'No description available.'}
            </Box>
            <Link to={`/dashboard/viewCourseDetails/${course._id}`}>
              <Button colorScheme="orange" variant="outline" width="100%">
                View Course Details
              </Button>
            </Link>
            {/* Enroll Now button */}
            <Enroll courseId={course._id} onEnrollSuccess={(data) => console.log(data)} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AllCourses;
