import { Box, Icon, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegStar } from "react-icons/fa";


const RatingsBar = ({star, value, totalStar}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={4}
    >
      <Icon fontSize={"16"} as={FaRegStar} mt={"-1.4"} />
      <Text>{star}</Text>
      <Progress
        size={"sm"}
        value={value * 20}
        borderRadius={"full"}
        w={"xl"}
        colorScheme="primary"
        bg={"gray.200"}
      />
      <Text>{totalStar} Ratings</Text>
    </Box>
  );
};

export default RatingsBar;
