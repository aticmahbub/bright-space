import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import {
    MdKeyboardArrowDown,
    MdOutlineKeyboardArrowRight,
  } from "react-icons/md";
  import { RxVideo } from "react-icons/rx";
  import { CiLock } from "react-icons/ci";

const CourseContentType = ({advancedContent,setAdvancedContent, title}) => {
  return (
    <Box>
      <Box
        border={"0.5px solid #376bf1"}
        borderRadius={"lg"}
        overflow={"hidden"}
        bg={"white"}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          borderBottom={advancedContent ? "1px solid orange" : "none"}
          p={"4"}
          cursor={"pointer"}
          userSelect={"none"}
          transition="all 0.3s ease-in"
          onClick={() => setAdvancedContent(!advancedContent)}
        >
          <Text fontSize={"xl"}>{title}</Text>
          <Icon textColor={"orange.500"}
            fontSize={"2xl"}
            as={
              advancedContent
                ? MdKeyboardArrowDown
                : MdOutlineKeyboardArrowRight
            }
          ></Icon>
        </Box>

        <>
          <Box className="space-y-4" display={advancedContent ? "" : "none"}>
            <Box
              _hover={{ bg: "gray.100" }}
              display={"flex"}
              justifyContent={"space-between"}
              px={"4"}
              py={"2"}
            >
              <Box display={"flex"} alignItems={"center"} gap={"4"}>
                <Icon fontSize={"xl"} as={RxVideo}></Icon>
                <Text fontSize={"xl"}>Meal Planning Explained</Text>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"4"}>
                <Text fontSize={"lg"}>07:00</Text>
                <Icon fontSize={"xl"} as={CiLock}></Icon>
              </Box>
            </Box>
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default CourseContentType;
