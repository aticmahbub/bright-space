import  { useContext, useEffect, useState } from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../providers/AuthProvider';

const SingleCourseView = () => {
  const {user} = useContext(AuthContext)
  const { id } = useParams(); // Using 'id' to match the API route
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollLoading, setEnrollLoading] = useState(false);
  const [enrollError, setEnrollError] = useState(null);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  // Fetch the course details from the API
  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(`https://bright-space-server.vercel.app/courses/${id}`);
      setCourse(response.data);
    } catch (err) {
      setError('Failed to load course details.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Handle course enrollment
  const handleEnroll = async () => {
    setEnrollLoading(true);
    setEnrollError(null);
    setEnrollSuccess(false);
    try {
      const response = await axios.post(`https://bright-space-server.vercel.app/enroll`, {
        courseId: course._id, // Assuming your course object has an _id
        enrolledStudentEmail: user?.email, // Replace with the actual user ID or retrieve it from your context/auth system
      });
      console.log(response.data);
      setEnrollSuccess(true);
    } catch (err) {
      setEnrollError('Failed to enroll in the course.');
      console.error(err);
    } finally {
      setEnrollLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

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

  if (!course) {
    return null; // Handle case where course data is null
  }

  return (
    <Box p={4}>
      <Image
        src={course.image_url || 'https://via.placeholder.com/600x400'}
        alt={course.title}
        borderRadius="md"
        mb={4}
      />
      <Heading as="h2" size="xl" mb={2}>
        {course.title}
      </Heading>
      <Text fontSize="lg" mb={4}>
        {course.long_description}
      </Text>
      <Stack spacing={4} mb={4}>
        <Text fontSize="md"><strong>Instructor:</strong> {course.lessonName}</Text>
        <Text fontSize="md"><strong>Duration:</strong> {course.duration || 'N/A'} hours</Text>
        <Text fontSize="md"><strong>Level:</strong> {course.difficulty}</Text>
        <Text fontSize="md"><strong>Price:</strong> ${course.price}</Text>
      </Stack>
      {enrollError && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          {enrollError}
        </Alert>
      )}
      {enrollSuccess && (
        <Alert status="success" mb={4}>
          <AlertIcon />
          Successfully enrolled in the course!
        </Alert>
      )}
      <Button 
        colorScheme="orange" 
        size="lg" 
        isLoading={enrollLoading} 
        onClick={handleEnroll}
      >
        Enroll Now
      </Button>
    </Box>
  );
};

export default SingleCourseView;
