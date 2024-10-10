import { Box, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import CourseContentType from "./CourseContentType";

const CourseContent = () => {
  const [advancedContent, setAdvancedContent] = useState(true);
  const [basicContent, setBasicContent] = useState(false);
  return (
    <Box mt={"70px"}>
      <Text fontWeight={"medium"} fontSize={"lg"} my={"7"}>
        Course content
      </Text>
      <Box className="space-y-6">
        <CourseContentType
          advancedContent={advancedContent}
          setAdvancedContent={setAdvancedContent}
          title={"Advanced Concepts"}
        />
        <CourseContentType
          advancedContent={basicContent}
          setAdvancedContent={setBasicContent}
          title={"Basic Contents"}
        />
      </Box>
    </Box>
  );
};

export default CourseContent;
