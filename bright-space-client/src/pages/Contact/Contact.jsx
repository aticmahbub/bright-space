import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { IoCallOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { PiBuildingOfficeLight } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    webAddress: "",
    message: "",
  });
  const [buttonStatus, setButtonStatus] = useState("Get it Now");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setButtonStatus("Submitting...");

    try {
      const response = await axios.post(
        `https://bright-space-server.vercel.app/contact-us`,
        formData
      );
      // console.log("Email sent successfully", response.data);
      Swal.fire({
        icon: "success",
        title: "Thanks for contact us. We reach you soon",
        showConfirmButton: true,
      });
      setButtonStatus("Get it now");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to contact. Try again",
        showConfirmButton: true,
      });
      setButtonStatus("Try again")
    }
  };

  return (
    <Box>
      {/* parallax bg */}
      <Box
        minH="530px"
        bgAttachment=""
        bgImage="url(https://i.postimg.cc/XnrX7s1H/zw7-TK1729179425.jpg)"
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
      <Box
        bgImage="url(https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/contact-background-img-1.png)"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        py={16}
      >
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

          <GridItem
            colSpan={6}
            bg="white"
            p="8"
            rounded="lg"
            boxShadow="0 8px 30px rgba(0, 0, 0, 0.2)" // Strong shadow for popup effect
            transform="translateX(20px)" // Slight vertical offset for the floating effect
            zIndex={2} // Ensure the section appears on top of the background
          >
            <Text mb={16} fontSize="2xl" fontWeight="bold" letterSpacing={1}>
              Get in touch
            </Text>
            <form onSubmit={handleSubmit}>
              <VStack align="start" spacing="12">
                <Box display="flex" gap={6} w="full">
                  <Input
                    isRequired
                    size="sm"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    variant="flushed"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    isRequired
                    size="sm"
                    type="email"
                    name="emailAddress"
                    placeholder="Your email Address"
                    variant="flushed"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </Box>
                <Input
                  size="sm"
                  type="text"
                  name="webAddress"
                  placeholder="Your website address"
                  variant="flushed"
                  value={formData.webAddress}
                  onChange={handleChange}
                />
                <Textarea
                  isRequired
                  size="sm"
                  name="message"
                  placeholder="Your Message"
                  variant="flushed"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  size="lg"
                  bg="primary.500"
                  _hover={{ bg: "primary.300" }}
                  rounded="full"
                  w="full"
                  textTransform="uppercase"
                  type="submit"
                >
                  {buttonStatus}
                </Button>
              </VStack>
            </form>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
