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
            Thubnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
        {
            CourseTitle: "Recommended for Complete Web Development Course",
            Instructor: "Programming Hero",
            Thubnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
        {
            CourseTitle: "Next Level Web development",
            Instructor: "Programming Hero",
            Thubnail: "https://i.imghippo.com/files/uTca61728920903.png"
        },
    ]
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={8} px={6}>
        {
            Data?.map((item, idx)=>(
                <GridItem bg="primary.50" display={"flex"} gap={6} p={6} rounded={"xl"}>
        <Box>
          <Image
            maxWidth={"500px"}
            height={"200px"}
            src={item.Thubnail}
            rounded="xl"
          />
        </Box>
        <Box display="flex" flexDir="column" justifyContent="space-between">
          <Box className="space-y-2">
            <Text fontSize={"2xl"} textTransform={"capitalize"} fontWeight={"bold"}>
              {item.CourseTitle}
            </Text>
            <Text> {item.Instructor} </Text>
          </Box>

          <Stack direction={"row"}>
            <Button colorScheme='primary' size={{ base: 'sm', md: 'lg' }}>Continue Course</Button>
            <Button colorScheme='primary' size={{ base: 'sm', md: 'lg' }} variant='outline'>Course Outline</Button>
          </Stack>
        </Box>
      </GridItem>
            ))
        }
      
    </Grid>
  );
};

export default MyClasses;
