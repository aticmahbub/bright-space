import {
  Box,
  Button,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import PersonalDetails from "../../components/StudentTeacherProfile/PersonalDetails";
import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { FaSave } from "react-icons/fa";

const StudentProfile = () => {
  const [update, setUpdate] = useState(false);
  return (
    <Box border={"1px solid"} borderColor={"primary.100"} p={4} rounded={"2xl"}>
      <Box
        border={"1px solid"}
        borderColor={"primary.100"}
        rounded={"2xl"}
        overflow={"hidden"}
      >
        <Box pos="relative">
          <Image
            src="https://i.imghippo.com/files/r7bNH1728411035.jpg"
            h={"32"}
            w={"full"}
          />
          <Image
            src="https://i.imghippo.com/files/M10af1728411363.jpg"
            h={"36"}
            w={"36"}
            rounded={"full"}
            pos="absolute"
            top={50}
            left={5}
          />
        </Box>
        <Box>
          <Box display="flex" justifyContent="end" userSelect="none" mt={2}>
            {/* <BsThreeDots size={30} cursor={"pointer"} onClick={()=> SetOption(true)} />
             */}
            <Menu>
              {!update ? (
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<BsThreeDots />}
                  variant="ghost"
                  _hover={{ bg: "none" }}
                  fontSize="2xl"
                  mx={4}
                />
              ) : (
               <Button mx={4} onClick={()=>setUpdate(!update)}>Save</Button>
              )}

              <MenuList>
                <MenuItem icon={<AddIcon />}>All Exam Sheet</MenuItem>
                <MenuItem icon={<ExternalLinkIcon />}>Attendance</MenuItem>
                <MenuItem
                  onClick={() => setUpdate(!update)}
                  icon={<RepeatIcon />}
                >
                  Update Profile
                </MenuItem>
                <MenuItem justifyContent={"center"} bg="primary.300">
                  Close
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        {/* {
                option && 
                <Box bg={"primary.100"} p="4" rounded={"xl"}>
                <Stack>
                  <Text>All Exam Result</Text>
                  <Text>Attendence</Text>
                  <Button size="xs" colorScheme="orange" w="full" onClick={()=> SetOption(false)}>
                    Close
                  </Button>
                </Stack>
              </Box>
              } */}

        <Box>
          {/* Profile overview */}
          <Box
            mt={10}
            display={"flex"}
            justifyContent={"space-between"}
            p={4}
            borderBottom={"1px solid orange"}
          >
            <Box>
              {/* <Image
                src="https://i.imghippo.com/files/M10af1728411363.jpg"
                h={"36"}
                w={"36"}
                rounded={"full"}
              /> */}
              <Text w={"700px"} my={4}>
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
          </Box>
          <Box px={4}>
            <PersonalDetails update={update} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfile;
