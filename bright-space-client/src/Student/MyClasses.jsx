import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

const MyClasses = () => {
  const Data = [
    {
      CourseTitle: "Full Stack Web Development",
      Instructor: "John Doe",
      Thumbnail: "https://www.creativeitinstitute.com/images/course/course_1728383943.jpg",
      Progress: 20,
    },
    {
      CourseTitle: "Introduction to Machine Learning",
      Instructor: "Jane Smith",
      Thumbnail: "https://media.geeksforgeeks.org/wp-content/uploads/20230706133033/An-introduction-to-Machine-Learning-01.webp",
      Progress: 35,
    },
    {
      CourseTitle: "Cloud Computing Fundamentals",
      Instructor: "Jessica Green",
      Thumbnail: "https://digitalcloud.training/wp-content/uploads/2022/12/Copy-of-Blog-Image.png?update_image_id_1726759990",
      Progress: 45,
    },
    {
      CourseTitle: "Cybersecurity Essentials",
      Instructor: "David Clark",
      Thumbnail: "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/21e06a80-3a03-48b7-9be2-148e3188e602/image.png?ut=1682208119833",
      Progress: 80,
    },
  ];

  return (
    <Grid 
      templateColumns={{
        base: "1fr",
        md: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }} // 1 column on small screens, 2 on medium and above
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
          <Box w={{ base: "100%", md: "350px" }}>
            <Image
            width="100%"
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
            <Box>
              <Text
                fontSize={{ base: "xl", md: "2xl" }} // Smaller font on mobile, larger on medium+
                textTransform="capitalize"
                fontWeight="bold"
              >
                {item.CourseTitle}
              </Text>
              <Text> -{item.Instructor} </Text>
              <Box display="flex" alignItems="center" gap={4} mt={4}>
                <Box w="sm" bg="white" rounded="full" overflow="hidden">
                  <Progress
                    value={item.Progress}
                    colorScheme="blue"
                    bg={"white"}
                    sx={{
                      "& > div": {
                        borderRadius: "full", // Rounded progress indicator
                      },
                    }}
                  />
                </Box>
                <Text>{item.Progress}%</Text>
              </Box>
            </Box>
            <Stack
              direction={{ base: "column", md: "row" }} // Column buttons on small screens, row on larger
              spacing={4} // Spacing between buttons
            >
              <Button colorScheme="primary" size={{ base: "sm", md: "lg" }}>
                Continue Course
              </Button>
              <Button
                colorScheme="primary"
                size={{ base: "sm", md: "lg" }}
                variant="outline"
              >
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
