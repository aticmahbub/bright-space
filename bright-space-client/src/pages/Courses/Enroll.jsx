import { Button, } from '@chakra-ui/react';
import axios from 'axios';

const Enroll = ({ courseId, onEnrollSuccess }) => {
    console.log(courseId)
  const handleEnroll = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/enroll`, { courseId });
      onEnrollSuccess(response.data); // Pass data back to parent if needed
      alert('Successfully enrolled in the course!'); // Or handle it as you wish
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll in the course. Please try again.');
    }
  };

  return (
    <Button colorScheme="orange" onClick={handleEnroll}>
      Enroll Now
    </Button>
  );
};

export default Enroll;
