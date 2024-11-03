import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Textarea,
    ScaleFade,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateStudentProfile = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // Get the user from context

    // State for profile information
    const [profile, setProfile] = useState({
        name: "John Doe",
        location: "Rangunia, Chittagong, Sukhbilas",
        phone: "+880 1518-786-405",
        email: user?.email || "", // Initialize with user's email if available
        bio: "Passionate about web development, specializing in MERN stack.",
        education: "BSc in Computer Science",
        interests: "Coding, AI, Machine Learning",
    });

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    // Save profile handler
    const handleSaveProfile = async () => {
        if (!user?.email) {
            console.error('User is not authenticated or email is missing.');
            return; // Early return if email is not available
        }

        try {
            const response = await axiosSecure.put(`/users/${user.email}`, profile); // Use email in the URL
            console.log('Profile updated:', response.data);
            navigate("/dashboard/studentProfile");
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <ScaleFade initialScale={0.9} in>
            <Box
                border="1px solid"
                borderColor="#FF9500"
                p={6}
                rounded="2xl"
                maxWidth="600px"
                mx="auto"
                boxShadow="lg"
                transition="0.3s"
                _hover={{ boxShadow: "xl" }} // Box shadow on hover
            >
                <Stack spacing={4}>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input name="name" value={profile.name} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Location</FormLabel>
                        <Input name="location" value={profile.location} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input name="phone" value={profile.phone} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" value={profile.email} onChange={handleChange} isReadOnly />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Bio</FormLabel>
                        <Textarea name="bio" value={profile.bio} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Education</FormLabel>
                        <Input name="education" value={profile.education} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Interests</FormLabel>
                        <Input name="interests" value={profile.interests} onChange={handleChange} />
                    </FormControl>

                    <Button
                        colorScheme="orange"
                        mt={4}
                        onClick={handleSaveProfile} // Call the save function
                        transition="0.2s"
                        _hover={{ bg: "orange.600", transform: "scale(1.05)" }} // Button hover effect
                    >
                        Save Profile
                    </Button>
                </Stack>
            </Box>
        </ScaleFade>
    );
};

export default UpdateStudentProfile;
