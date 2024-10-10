import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Badge,
  Stack,
  Center,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { px } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import CourseOverview from "../../../components/CourseOverview/CourseOverview";
import CourseContent from "../../../components/CourseContent/CourseContent";
import StudentReviews from "../../../components/CourseContent/StudentReviews";

const ratingStyles = {
  itemShapes: Star,
  activeFillColor: "#FED619",
  inactiveFillColor: "#ffedd5",
};

const ViewCourse = () => {
  return (
    <Grid
      templateColumns={["1fr", null, "4fr 2fr"]} // 1fr on small screens, 4fr 2fr on larger screens
      maxW="1596px"
      px={{ base: "2", lg: 8, "2xl": 0 }}
      mx="auto"
      my="20"
      borderRadius="md"
      gap={10}
    >
      {/* Left side: Instructor Image and Course Info */}
      <Box>
        <Box pos="relative">
          {" "}
          {/* Set background color */}
          <Image
            src="https://eduquest.itech-theme.com/wp-content/uploads/2019/05/1_0002_18-1-1.jpg" // Replace with the image URL or static image
            alt="Course Image"
            borderRadius="md"
            mb={4}
          />
          <Box
            display="flex"
            bg="white"
            p="8"
            justifyContent="space-between"
            alignItems={"center"}
            pos="absolute"
            w="850px"
            borderRadius="10px"
            bottom="-6"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="4"
            >
              <Image
                borderRadius="full"
                boxSize="70px"
                src="https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                alt="Instructor Avatar"
              />
              <Box>
                <Text fontSize={"xl"} fontWeight="bold">
                  SK AL
                </Text>
                <Text fontSize="md">Sr. Instructor</Text>
              </Box>
            </Box>
            <Center height="50px">
              <Divider borderColor="primary.200" orientation="vertical" />
            </Center>
            <Box direction="row" spacing={2}>
              <Text fontWeight={"bold"}>Category :</Text>
              <Text fontWeight={"medium"}>Marketing</Text>
            </Box>
            <Center height="50px">
              <Divider borderColor="primary.200" orientation="vertical" />
            </Center>
            <Box>
              <Text fontSize="md" color="">
                3 Reviews
              </Text>
              <Text fontSize="xl" color="primary.500">
                ☆☆☆☆☆
              </Text>
            </Box>
          </Box>
        </Box>
        {/* Overview */}
        <CourseOverview />
        <CourseContent />
        <StudentReviews />
      </Box>

      {/* Right side: Course Video and Features */}
      <Box>
        {" "}
        {/* Set background color */}
        <Box p={8} bg="white" borderRadius={"xl"}>
          <Box mb={4}>
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video link
              title="Course video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              Course pricing
            </Text>
            <Text fontWeight="bold" fontSize="3xl" textColor="primary.500">
              Free
            </Text>
            <Stack spacing={2} mt={4}>
              <Text fontSize="sm" className="flex items-center gap-1">
                <Icon textColor="primary.500" as={IoCheckmarkCircleOutline} />4
                hours on-demand video
              </Text>

              <Text fontSize="sm" className="flex items-center gap-1">
                <IoCheckmarkCircleOutline color="orange" size={15} /> 4 articles
              </Text>
              <Text fontSize="sm" className="flex items-center gap-1">
                <IoCheckmarkCircleOutline color="orange" size={15} /> 3
                downloadable resources{" "}
              </Text>
              <Text fontSize="sm" className="flex items-center gap-1">
                <IoCheckmarkCircleOutline color="orange" size={15} /> Full
                lifetime access
              </Text>
              <Text fontSize="sm" className="flex items-center gap-1">
                <IoCheckmarkCircleOutline color="orange" size={15} /> Access on
                mobile and TV
              </Text>
              <Text fontSize="sm" className="flex items-center gap-1">
                <IoCheckmarkCircleOutline color="orange" size={15} />{" "}
                Certificate of Completion
              </Text>
            </Stack>
            <Button
              colorScheme="primary"
              size="lg"
              mt={4}
              w="100%"
              borderRadius="md"
            >
              Enroll now
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ViewCourse;
