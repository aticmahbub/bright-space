import {
  Box,
  IconButton,
  Image,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AddIcon, ExternalLinkIcon, RepeatIcon } from "@chakra-ui/icons";
import PersonalDetails from "../../components/StudentTeacherProfile/PersonalDetails";
import useLoadAllUsers from "../../hooks/useLoadAllUsers";
import { useState } from "react";

const StudentProfile = () => {
  const [allUsers] = useLoadAllUsers();
  const [option, setOption] = useState(false);

  // Set default dummy data
  const defaultProfile = {
    name: "John Doe",
    bio: "Passionate student and lifelong learner with a keen interest in technology.",
    location: "New York, USA",
    phone: "+1 234-567-8901",
    email: "johndoe@example.com",
    bannerImage: "https://via.placeholder.com/1200x400?text=Profile+Banner",
    profileImage: "https://via.placeholder.com/150?text=Profile+Image",
  };

  // Filter students from all users or use default
  const students = allUsers.filter((user) => user.role === "student");
  const profile = students.length > 0 ? students[0] : defaultProfile;

  return (
    <Box
      border="1px solid"
      borderColor="#FF9500"
      p={6}
      rounded="xl"
      maxW="3xl"
      mx="auto"
    >
      {/* Banner and Profile Image Section */}
      <Box border="1px solid" borderColor="#FF9500" rounded="xl" overflow="hidden">
        <Box position="relative">
          <Image
            src={profile.bannerImage || defaultProfile.bannerImage}
            h="200px"
            w="100%"
            objectFit="cover"
            alt="Profile Banner"
          />
          <Image
            src={profile.profileImage || defaultProfile.profileImage}
            boxSize={24}
            rounded="full"
            position="absolute"
            top="50%"
            left={6}
            transform="translateY(-50%)"
            border="4px solid white"
            alt="Profile Picture"
          />
        </Box>

        {/* Options Menu */}
        <Box display="flex" justifyContent="flex-end" p={4}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BsThreeDots />}
              aria-label="Options"
              variant="ghost"
              fontSize="2xl"
              _hover={{ bg: "none" }}
            />
            <MenuList>
              <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
              <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
              <MenuItem color="red.500">Close</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Profile Overview */}
        <Box p={6} borderBottom="1px solid #FF9500">
          <Text fontSize="lg" mb={4}>
            {profile.bio || defaultProfile.bio}
          </Text>

          {/* Contact Information */}
          <Stack direction={{ base: "column", sm: "row" }} spacing={8} mt={4}>
            <ContactInfo icon={FaMapMarkerAlt} text={profile.location || defaultProfile.location} />
            <ContactInfo icon={IoMdCall} text={profile.phone || defaultProfile.phone} />
            <ContactInfo icon={MdEmail} text={profile.email || defaultProfile.email} />
          </Stack>
        </Box>

        {/* Personal Details Section */}
        <Box p={6}>
          <PersonalDetails />
        </Box>
      </Box>
    </Box>
  );
};

// ContactInfo Component for Reusability
const ContactInfo = ({ icon, text }) => (
  <Stack direction="row" align="center" spacing={3}>
    <Icon as={icon} boxSize={5} color="#FF9500" />
    <Text color="blue.500" fontSize="md">
      {text}
    </Text>
  </Stack>
);

export default StudentProfile;

