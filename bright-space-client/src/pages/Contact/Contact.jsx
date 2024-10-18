import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { PiBuildingOfficeLight } from "react-icons/pi";

const Contact = () => {
  return (
    <Box>
      {/* parallax bg */}
      <Box
        minH="530px"
        bgAttachment=""
        bgImage="url(https://i.imghippo.com/files/zw7TK1729179425.jpg)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        fontSize="5xl"
        fontWeight="semibold"
        bgRepeat="no-repeat"
        bgPos="center"
      >
        Contact Us
      </Box>
      <Grid
        templateColumns="repeat(10, 1fr)"
        width="container.xl"
        mx="auto"
        my="16"
        gap={4}
      >
        <GridItem colSpan="4" className="space-y-8">
          <Box className="space-y-3 line">
            <Text fontSize="3xl" fontWeight="medium">
              Contact Details
            </Text>
            <Text lineHeight={1.8} color="gray.600">
              Proin ac lobortis arcu, a vestibulum augue. Vivamus ipsum,
              facilisis vel mollis vitae, mollis nec ante. Quisque aliquam
              dictumfacilisis vel mollis vitae. Lorem ipsum dolor sit amet,
              ubique admodum euripidis has no, in luptatum nominati.
            </Text>
          </Box>
          <Box className="space-y-5">
            <Text fontSize="xl" fontWeight="medium">
              New York Office
            </Text>

            <VStack align="start" spacing="4" color="gray.500">
              <Text display="flex" gap={3} alignContent={"center"}>
                <IoCallOutline size={20} />
                1-677-124-44227
              </Text>
              <Text display="flex" gap={3} alignContent={"center"}>
                <BiMessageRounded size={20} />
                esmarts@qodeinteractive.com
              </Text>
              <Text display="flex" gap={3} alignContent={"center"}>
                <PiBuildingOfficeLight size={20} />
                184 Main Collins Street, West Victoria
              </Text>
            </VStack>
          </Box>
          <Box className="space-y-5">
            <Text fontSize="xl" fontWeight="medium">
              Hamburg Office
            </Text>
            <VStack align="start" spacing="4" color="gray.500">
              <Text display="flex" gap={3} alignContent={"center"}>
                <IoCallOutline size={20} />
                1-677-124-44227
              </Text>
              <Text display="flex" gap={3} alignContent={"center"}>
                <BiMessageRounded size={20} />
                esmarts@qodeinteractive.com
              </Text>
              <Text display="flex" gap={3} alignContent={"center"}>
                <PiBuildingOfficeLight size={20} />
                184 Main Collins Street, West Victoria
              </Text>
            </VStack>
          </Box>
        </GridItem>

        <GridItem colSpan={6} bg="white" p="8" rounded="md" shadow="base">
          <Text mb={16} fontSize={"2xl"} fontWeight={"bold"} letterSpacing={1}>
            Get in touch
          </Text>
          <form>
            <VStack align="start" spacing="12">
              <Box display="flex" gap={6} w="full">
                <Input
                  size="sm"
                  type="text"
                  placeholder="Your Name"
                  variant={"flushed"}
                />
                <Input
                  size="sm"
                  type="email"
                  placeholder="Your email Adress"
                  variant={"flushed"}
                />
              </Box>
              <Input
                size="sm"
                type="text"
                placeholder="Your website adress"
                variant={"flushed"}
              />
              <Textarea
                size="sm"
                placeholder="Your Message"
                variant={"flushed"}
              />
              <Button
                size="lg"
                bg="primary.500"
                rounded="full"
                w="full"
                textTransform={"uppercase"}
              >
                Get it now
              </Button>
            </VStack>
          </form>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
