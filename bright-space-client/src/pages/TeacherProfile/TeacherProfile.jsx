import { Box, Icon, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const TeacherProfile = () => {
  return (
    <Box border={"1px solid orange"} p={4} rounded={"2xl"}>
      <Box border={"1px solid orange"} rounded={"2xl"} overflow={"hidden"}>
        <Image
          src="https://i.imghippo.com/files/r7bNH1728411035.jpg"
          h={"32"}
          w={"full"}
        />
        <Box p={4}>
          {/* Profile overview */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <Image
                src="https://i.imghippo.com/files/M10af1728411363.jpg"
                h={"36"}
                w={"36"}
                rounded={"full"}
              />
              <Text w={"700px"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                totam blanditiis dolores nemo ducimus fugiat magnam laboriosam
                labore expedita corporis.
              </Text>
              {/* Contact  */}
              <Box display={"flex"} gap={8}>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon
                    bg={"primary.400"}
                    p={1}
                    rounded={"full"}
                    as={FaLocationDot}
                    textColor={"white"}
                    className="text-xl"
                  />
                  <Text textColor={"blue.500"} fontSize={18}>
                    {" "}
                    Rangunia,Chittagong, Sukhbilas
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon
                    bg={"primary.400"}
                    p={1}
                    rounded={"full"}
                    as={IoMdCall}
                    textColor={"white"}
                    className="text-xl"
                  />
                  <Text textColor={"blue.500"} fontSize={18}>
                    +880 1518-786-405
                  </Text>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Icon
                    bg={"primary.400"}
                    p={1}
                    rounded={"full"}
                    as={MdEmail}
                    textColor={"white"}
                    className="text-xl"
                  />
                  <Text textColor={"blue.500"} fontSize={18}>
                    {" "}
                    itsharifofficial@gmail.com{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box>
              <BsThreeDots size={30} cursor={"pointer"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TeacherProfile;
