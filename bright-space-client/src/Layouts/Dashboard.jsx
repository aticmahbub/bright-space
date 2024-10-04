import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";
import { LuGraduationCap, LuHome, LuLayoutDashboard, LuLightbulb, LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { IoChatbubblesOutline, IoCreateOutline } from "react-icons/io5";
import './css/dashboard.css';
import { Box, Button, Container, Flex, Heading, HStack, Icon, Text, VStack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, IconButton, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// Hisam
const Dashboard = () => {
    const role = useRole();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLargerThanTablet] = useMediaQuery("(min-width: 992px)");

    const renderStudentDashboard = () => (
        <Box>
            <Heading as="h2" size="lg" mb={4}>Students dashboard</Heading>
            <VStack align="stretch" spacing={2}>
                <Link as={NavLink} to='/dashboard/studentProfile'>Profile</Link>
                <Link as={NavLink} to='/dashboard/studentProfile'>Profile</Link>
            </VStack>
        </Box>
    );

    const renderTeacherDashboard = () => (
        <Box>
            <Heading as="h2" size={["lg", "xl"]} fontWeight="bold" color="primary_color_1" mb={[6, 8]} mt={[5, 7]} pl={[2, 3]}>
                Bright<Text as="span" color="primary.500">Space</Text>
            </Heading>
            <VStack spacing={[3, 4]} align="stretch">
                {[
                    { to: '/dashboard/', icon: LuLayoutDashboard, text: 'Dashboard' },
                    { to: '/dashboard/myCourses', icon: LuGraduationCap, text: 'My Courses' },
                    { to: '/dashboard/allStudents', icon: LuUser, text: 'Students' },
                    { to: '/dashboard/allCourses', icon: LuLightbulb, text: 'Courses' },
                    { to: '/dashboard/createCourse', icon: IoCreateOutline, text: 'Create Course' },
                    { to: '/dashboard/allCourses', icon: IoChatbubblesOutline, text: 'Group Chat' },
                    { to: '/dashboard/allCourses', icon: LuSettings, text: 'Settings' },
                    { to: '/', icon: LuHome, text: 'Hone' }
                ].map(({ to, icon, text }) => (
                    <Link key={text} as={NavLink} to={to} className="dashboard-sidebar">
                        <HStack>
                            <Icon as={icon} boxSize={[5, 6]} />
                            <Text fontSize={["md", "lg"]}>{text}</Text>
                        </HStack>
                    </Link>
                ))}
            </VStack>
        </Box>
    );

    const sidebarContent = (
        <Box>
            {role === 'student' && renderStudentDashboard()}
            {role === 'teacher' && renderTeacherDashboard()}
            <Box mt={[8, 12]} mb={[5, 7]}>
                <Button leftIcon={<LuLogOut />} className="dashboard-logOut" fontSize={["md", "lg"]}>
                    Sign Out
                </Button>
            </Box>
        </Box>
    );

    return (
        <Box>
            <Container maxW="full" p={0}>
                <Flex>
                    {/* Sidebar for larger screens */}
                    {isLargerThanTablet && (
                        <Box 
                            w="300px" 
                            borderRight="2px" 
                            borderColor="gray.200" 
                            minH="100vh" 
                            boxShadow="2xl" 
                            pt={7}
                            position="fixed"
                            top="0"
                            left="0"
                            overflowY="auto"
                            height="100vh"
                        >
                            {sidebarContent}
                        </Box>
                    )}
                    
                    {/* Hamburger menu for mobile and tablet */}
                    {!isLargerThanTablet && (
                        <Box position="fixed" top="5" left="5" zIndex="overlay">
                            <IconButton
                                icon={<HamburgerIcon />}
                                onClick={onOpen}
                                variant="outline"
                                aria-label="Open menu"
                            />
                        </Box>
                    )}
                    
                    {/* Drawer for mobile and tablet */}
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={isLargerThanTablet ? "xs" : "full"}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                {sidebarContent}
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                    
                    <Box flex={1} p={[4, 6]} ml={isLargerThanTablet ? "300px" : "0"}>
                        <Outlet />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Dashboard;
