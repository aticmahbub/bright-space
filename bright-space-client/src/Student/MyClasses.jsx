import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MyClasses = () => {
    const Data = [
        {
            CourseTitle: "Complete Web Development Course With Jhankar Mahbub",
            Instructor: "ঝংকার মাহবুব",
            Thumbnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
        {
            CourseTitle: "Recommended for Complete Web Development Course",
            Instructor: "Programming Hero",
            Thumbnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
        {
            CourseTitle: "Next Level Web development",
            Instructor: "Programming Hero",
            Thumbnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
    ]
  return (
    <Grid
    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // 1 column on small screens, 2 on medium and above
    gap={{ base: 4, md: 8 }} // Smaller gap on mobile, larger on medium+
    px={{ base: 4, md: 6 }} // Smaller padding on mobile, larger on medium+
  >
    {Data?.map((item, idx) => (
      <GridItem
        key={idx}
        bg="primary.50"
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Column layout on small screens, row on larger
        gap={6}
        p={6}
        rounded="xl"
      >
        <Box>
          <Image
            maxWidth={{ base: "100%", md: "500px" }} // Full width on small screens, fixed width on larger
            height="200px"
            src={item.Thumbnail}
            rounded="xl"
          />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          mt={{ base: 4, md: 0 }} // Margin-top only on small screens
        >
          <Box mb={4}> {/* Spacing between text and buttons */}
            <Text
              fontSize={{ base: "xl", md: "2xl" }} // Smaller font on mobile, larger on medium+
              textTransform="capitalize"
              fontWeight="bold"
            >
              {item.CourseTitle}
            </Text>
            <Text> {item.Instructor} </Text>
          </Box>
          <Stack
            direction={{ base: "column", md: "row" }} // Column buttons on small screens, row on larger
            spacing={4} // Spacing between buttons
          >
            <Button colorScheme="primary" size={{ base: 'sm', md: 'lg' }}>
              Continue Course
            </Button>
            <Button colorScheme="primary" size={{ base: 'sm', md: 'lg' }} variant="outline">
              Course Outline
            </Button>
          </Stack>
        </Box>
      </GridItem>
    ))}
  </Grid>
  
  );
};

export default MyClasses;
