import {
  Box,
  Image,
  Text,
  Stack,
  Icon,
  Button,
  ScaleFade,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import useLoadAllUsers from "../../hooks/useLoadAllUsers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const StudentProfile = () => {
  const [allUsers] = useLoadAllUsers();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Default dummy data
  const defaultProfile = {
    name: "John Doe",
    bio: "Passionate student and lifelong learner with a keen interest in technology.",
    location: "New York, USA",
    phone: "+1 234-567-8901",
    email: "johndoe@example.com",
    dateOfBirth: "2003-05-15",
    courseOfStudy: "Computer Science",
    hobbies: "Coding, Reading, Traveling",
    bannerImage: "https://via.placeholder.com/1200x400?text=Profile+Banner",
    profileImage: "https://via.placeholder.com/150?text=Profile+Image",
  };

  // Fetch the profile for the current user or fall back to default data
  const profile = allUsers.find(item => item.email === user?.email) || defaultProfile;

  // Handle update profile click
  const handleUpdateProfile = () => {
    navigate('/dashboard/updateStudentProfile');
  };

  return (
    <ScaleFade initialScale={0.9} in>
      <Box
        border="1px solid"
        borderColor="#FF9500"
        p={6}
        rounded="xl"
        maxW="3xl"
        mx="auto"
        boxShadow="lg"
        transition="0.3s"
        _hover={{ boxShadow: "xl", transform: "scale(1.02)" }} // Hover effect
      >
        <Box border="1px solid" borderColor="#FF9500" rounded="xl" overflow="hidden">
          <ProfileBanner
            bannerImage={profile.bannerImage}
            profileImage={profile.profileImage}
            name={profile.name}
            bio={profile.bio}
          />
          <ProfileDetails
            location={profile.location}
            phone={profile.phone}
            email={profile.email}
            dateOfBirth={profile.dateOfBirth}
            courseOfStudy={profile.courseOfStudy}
            hobbies={profile.hobbies}
          />
          <UpdateButton onClick={handleUpdateProfile} />
        </Box>
      </Box>
    </ScaleFade>
  );
};

// ProfileBanner Component
const ProfileBanner = ({ bannerImage, profileImage, name, bio }) => (
  <Box position="relative">
    <Image
      src={bannerImage}
      h="200px"
      w="100%"
      objectFit="cover"
      alt="Profile Banner"
      transition="0.3s"
      _hover={{ filter: "brightness(0.8)" }} // Image hover effect
    />
    <Image
      src={profileImage}
      boxSize={24}
      rounded="full"
      position="absolute"
      top="50%"
      left={6}
      transform="translateY(-50%)"
      border="4px solid white"
      alt="Profile Picture"
      boxShadow="lg"
    />
    <Box p={6} borderBottom="1px solid #FF9500">
      <Text fontSize="2xl" fontWeight="bold" mb={2}>{name}</Text>
      <Text fontSize="lg" mb={4}>{bio}</Text>
    </Box>
  </Box>
);

// ProfileDetails Component
const ProfileDetails = ({ location, phone, email, dateOfBirth, courseOfStudy, hobbies }) => (
  <Box p={6}>
    <Stack direction={{ base: "column", sm: "row" }} spacing={8} mt={4}>
      <ContactInfo icon={FaMapMarkerAlt} text={location} />
      <ContactInfo icon={IoMdCall} text={phone} />
      <ContactInfo icon={MdEmail} text={email} />
    </Stack>
    <Stack spacing={4} mt={6}>
      <Text fontSize="lg">Date of Birth: {dateOfBirth}</Text>
      <Text fontSize="lg">Course of Study: {courseOfStudy}</Text>
      <Text fontSize="lg">Hobbies: {hobbies}</Text>
    </Stack>
  </Box>
);

// UpdateButton Component
const UpdateButton = ({ onClick }) => (
  <Box display="flex" justifyContent="flex-end" p={4}>
    <Button
      colorScheme="orange"
      onClick={onClick}
      transition="0.2s"
      _hover={{ bg: "orange.600", transform: "scale(1.05)" }} // Button hover effect
    >
      Update Profile
    </Button>
  </Box>
);

// ContactInfo Component
const ContactInfo = ({ icon, text }) => (
  <Stack direction="row" align="center" spacing={3}>
    <Icon as={icon} boxSize={5} color="#FF9500" />
    <Text color="blue.500" fontSize="md">{text}</Text>
  </Stack>
);

export default StudentProfile;
