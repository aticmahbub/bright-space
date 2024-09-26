import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendar, FaFacebook, FaHome, FaInstagram, FaTag, FaTwitter, FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useLocation, useParams } from "react-router-dom";
import { GiNetworkBars } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { TiTick } from "react-icons/ti";



const ClassDetails = () => {
    const location = useLocation();
    const { id } = useParams()
    const _id = parseInt(id)
    const [classDetails, setClassDetails] = useState([]);

    useEffect(() => {
        fetch('/classDetails.json')
            .then(res => res.json())
            .then(data => setClassDetails(data))
    }, [])

    const details = classDetails.find(cls => cls.id === _id)

    return (
        <Box className="font-english_font_family">
            <Text display={"flex"} alignItems={"center"} gap={3} backgroundColor={'secondary.900'} py={'50px'} px={{ base: 4, md: 6, xl: 10, '2xl': 44 }}>
                <Box as={FaHome} color='white' /> <Text color={'white'} className="font-english_font_family">Home {location.pathname}</Text>
            </Text>
            <Box className="flex flex-row justify-between" backgroundColor={'secondary.900'} px={{ base: 4, md: 6, xl: 10, '2xl': 44 }}>
                <Box>
                    <Heading my={"30px"} color={'white'}>{details?.course_name}</Heading>
                    {/* Some Information share */}
                    <Box className="space-y-4">
                        <Box display={"flex"} flexDirection={"row"} gap={6} fontSize={'16px'}>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={FaUserGroup} color='primary.500' /> <Text color={'white'}>{details?.students_enrolled} students enrolled</Text>
                            </Text>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={FaUser} color='primary.500' /> <Text color={'white'}>Created by {details?.course_creator}</Text>
                            </Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"} gap={6} fontSize={'16px'}>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={FaCalendar} color='primary.500' /> <Text color={'white'}>Last updated {details?.last_update}</Text>
                            </Text>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={GiNetworkBars} color='primary.500' /> <Text color={'white'}>{details?.course_level}</Text>
                            </Text>
                        </Box>
                        <Box display={"flex"} flexDirection={"row"} gap={6} fontSize={'16px'}>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={TbWorld} color='primary.500' /> <Text color={'white'}>{details?.language}</Text>
                            </Text>
                            <Text display={"flex"} gap={3} alignItems={"center"}>
                                <Box as={FaTag} color='primary.500' /> <Text color={'white'}>{details?.sector}</Text>
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image
                        src={details?.image_url}
                        alt={details?.course_name}
                        objectFit="cover"
                        boxSize={{ base: "200px", md: "300px" }}
                        fallbackSrc={details?.image_url}
                    />
                </Box>
            </Box>
            {/* New Text */}
            <Box>
                <Tabs variant='unstyled'>
                    <TabList bg={'gray.200'} px={{ base: 4, md: 6, xl: 10, '2xl': 44 }}>
                        <Tab _selected={{ color: 'white', bg: 'secondary.900' }} py={'19px'} px={'30px'}>Overview</Tab>
                        <Tab _selected={{ color: 'white', bg: 'secondary.900' }} py={'19px'} px={'30px'}>Curriculum</Tab>
                        <Tab _selected={{ color: 'white', bg: 'secondary.900' }} py={'19px'} px={'30px'}>Instructors</Tab>
                        <Tab _selected={{ color: 'white', bg: 'secondary.900' }} py={'19px'} px={'30px'}>Reviews</Tab>
                    </TabList>
                    <TabPanels px={{ base: 4, md: 6, xl: 10, '2xl': 44 }}>
                        <TabPanel py={'100px'}>
                            <h3 className="text-xl mt-6">{details?.overview}</h3>
                            <h1 className="text-2xl font-bold mt-6">What will you learn?</h1>
                            <p className="text-xl mt-6">{details?.what_you_will_learn}</p>
                            <Box className="mt-10" display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={20}>
                                <Box>
                                    <h1 className="text-2xl font-bold mb-6">Who is your target Audience?</h1>
                                    {details?.target_audience.map((audience, index) => (
                                        <Text key={index} display={"flex"} gap={3} alignItems={"center"} className="text-xl mt-4">
                                            <Box as={TiTick} color='primary.500' /> {audience}
                                        </Text>
                                    ))}
                                </Box>
                                <Box>
                                    <h1 className="text-2xl font-bold mb-6">Requirements</h1>
                                    {details?.requirements.map((requirement, index) => (
                                        <Text key={index} display={"flex"} gap={3} alignItems={"center"} className="text-xl mt-4">
                                            <Box as={TiTick} color='primary.500' /> {requirement}
                                        </Text>
                                    ))}
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel py={'80px'}>
                            <Text className="text-2xl font-bold mb-6" color={'primary.500'}>Course Content</Text>
                            {details?.curriculum.map((data, idx) =>
                                <Accordion allowToggle key={idx}>
                                    <AccordionItem py={'10px'}>
                                        <h2>
                                            <AccordionButton py={'20px'}>
                                                <Box className="text-xl font-bold" as='span' flex='1' textAlign='left'>
                                                    {data.section}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {data.lessons.map((audience, index) => (
                                                <Text key={index} display={"flex"} gap={3} alignItems={"center"} className="text-xl mt-4">
                                                    <Box as={FaArrowRight} color='primary.500' /> {audience}
                                                </Text>
                                            ))}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            )}
                        </TabPanel>
                        <TabPanel py={'80px'}>
                            <Box className="relative" border={'1px solid'} borderColor={'gray.300'} borderRadius={'10px'} p={'30px'}>
                                <Box className="flex flex-row gap-7">
                                    <Box>
                                        <Box
                                            width="100px"
                                            height="100px"
                                            borderRadius="50%"
                                            overflow="hidden"
                                        >
                                            <Image
                                                src={details?.image_url}
                                                alt={details?.course_name}
                                                objectFit="cover"
                                                width="100%"
                                                height="100%"
                                                fallbackSrc={details?.image_url}
                                            />
                                        </Box>
                                        
                                    </Box>
                                    <Box className="space-y-7">
                                        <Box>
                                            <Text fontSize={'2xl'} fontWeight={'bold'}>{details?.instructor.name}</Text>
                                            <Box display={"flex"} flexDirection={"row"} gap={3}>
                                                {details?.instructor.expertise.map((bio, index) => (
                                                    <Text key={index}>{bio},</Text>
                                                ))}
                                            </Box>
                                        </Box>
                                        <Box className="absolute top-0 right-10" display={"flex"} flexDirection={"row"} gap={3} fontSize={"35px"}>
                                            <Box as={FaFacebook} color='gray.500' />
                                            <Box as={FaInstagram} color='gray.500' />
                                            <Box as={FaTwitter} color='gray.500' />
                                        </Box>
                                        <Box>
                                            <Text className="text-xl">
                                                {details?.instructor.bio}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </TabPanel>
                        <TabPanel py={'80px'}>
                            <Box>
                                <Text>Reviews</Text>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default ClassDetails;