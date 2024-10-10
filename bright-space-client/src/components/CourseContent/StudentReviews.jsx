import { Box, Icon, Progress, Text } from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";
import React from "react";
import RatingsBar from "./RatingsBar";
import CommentWithRating from "./CommentWithRating";

const StudentReviews = () => {
  return (
    <Box>
      <Text mt={"16"} mb={"6"} fontSize={"lg"} fontWeight={"medium"}>
        Students Rating and Reviews
      </Text>
      <Box border={"1px solid gray"} p={""} borderRadius={"lg"} >
        <Box display={"flex"} alignItems={"center"} gap={16} p={"10"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={"6xl"} fontWeight={"medium"}>
              4.7
            </Text>
            <Rating
            value={4}
             className="w-32 mb-3" />
            <Text>Total 3 Ratings</Text>
          </Box>

          <Box
            bg={"purple.10"}
            w={"full"}
            px={""}
            className="space-y-3"
          >
            <RatingsBar star={5} value={4} totalStar={2} />
            <RatingsBar star={4} value={3} totalStar={1} />
            <RatingsBar star={3} value={2.5} totalStar={0} />
            <RatingsBar star={2} value={2} totalStar={0} />
            <RatingsBar star={1} value={2} totalStar={0} />
            
          </Box>
        </Box>
        <Box>
          <CommentWithRating/>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentReviews;
