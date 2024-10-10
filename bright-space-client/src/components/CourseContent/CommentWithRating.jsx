import { Box, Divider, Text } from "@chakra-ui/react";
import { Rating } from "@smastrom/react-rating";
import React from "react";

const CommentWithRating = () => {
  const comments = [
    {
      profileImg:
        "https://i.ibb.co/yYJYZy7/3d-render-avatar-character-23-2150611746.jpg",
      duration: "1 year ago",
      rating: 5,
      commentText:
        "The course is extraordinary!! It explains everything from A to Z regarding Nutrition and also there are some very valuable workout tips. Great job!",
    },
    {
      profileImg:
        "https://i.ibb.co/yYJYZy7/3d-render-avatar-character-23-2150611746.jpg",
      duration: "1 year ago",
      rating: 4,
      commentText:
        "The course is extraordinary!! It explains everything from A to Z regarding Nutrition and also there are some very valuable workout tips. Great job!",
    },
  ];
  return (
    <Box>
      {comments?.map((item, idx) => (
        <Box
          id={idx}
          px={"10"}
          py={"16"}
          borderTop={"1px solid gray"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box w={"275px"} className="space-y-2 ">
            <img
              width={"58px"}
              height={"58px"}
              className="rounded-full"
              src={item.profileImg}
              alt=""
            />
            <Text>{item.duration}</Text>
          </Box>
          <Box className="space-y-3">
            <Rating className="w-32" value={item.rating} readOnly />
            <Text>{item.commentText}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CommentWithRating;
