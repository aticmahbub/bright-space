
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import brightSpace_logo from "../assets/bright-space-logo.svg";
import { FcMenu } from "react-icons/fc";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSearch, FaUser } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { BiSolidBookContent } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import Messages from "../components/Messages/Messages";
import { GiOpenBook } from "react-icons/gi";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box, Flex, Image,
    Text, Button, Icon,
    Input, useDisclosure,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
// import useRole from "../hooks/useRole";
import { MdNotifications } from "react-icons/md";



const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = useLocation();
    // const role = useRole()
    const role = "student"
    console.log(role);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    console.log(pathname);

    // For Responsive
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ['xs'] // Only allow 'xs' size for the drawer

    const userRole = role;

    const SideNavList = [
        {
            name: 'Dashboard',
            path: '/dashBoard',
            icon: TbLayoutDashboardFilled,
            roles: ['Admin', 'teacher', 'student'],  // Visible to all roles
            exact: true
        },
        {
            name: 'All Students',
            path: 'allStudents',
            icon: FaUser,
            roles: ['Admin', 'teacher']  // Only for Admin and Teacher
        },
        {
            name: 'Profile',
            path: 'teacherProfile',
            icon: FaUser,
            roles: ['Admin', 'teacher', 'student']  // Only for Admin and Teacher
        },
        {
            name: 'All Teachers',
            path: 'allTeachers',
            icon: PiChalkboardTeacherFill,
            roles: ['Admin']  // Only for Admin
        },
        {
            name: 'Courses',
            path: 'myCourses',
            icon: BiSolidBookContent,
            roles: ['Admin', 'teacher', 'student']  // Visible to all roles
        },
        {
            name: 'My Classes',
            path: 'my-classes',
            icon: GiOpenBook,
            roles: ['Admin', 'teacher', 'student']  // Visible to all roles
        },
        {
            name: 'Setting',
            path: 'Setting',
            icon: IoMdSettings,
            roles: ['Admin']  // Only for Admin
        },
        {
            name: 'Quiz',
            path: 'quiz',
            icon: IoMdSettings,
            roles: ['student']  // Only for Admin
        },
        {
            name: 'Make Quiz',
            path: 'quizForm',
            icon: IoMdSettings,
            roles: ['teacher']  // Only for Admin
        },
    ];

    // Filter SideNavList based on userRole
    const filteredNavList = SideNavList.filter(item => item.roles.includes(userRole));

    return (
        <Flex className="bg-[#F5F6FA]">
            {/* Sidebar Large*/}
            <Box className={`fixed min-h-screen bg-white shadow-sm shadow-primary-200 duration-300 z-20 hidden lg:block ${isSidebarOpen ? 'w-72' : 'w-20 hover:w-72'}`}>
                <Box className="p-4 h-screen group overflow-hidden whitespace-nowrap">
                    {/* Logo And Text */}
                    <Flex className="pl-3 items-center w-full justify-between">
                        <Flex items-center='true'>
                            <Image className="w-6" src={brightSpace_logo} alt="Bright Space Logo" />
                            <Text className={`text-lg font-bold transition-opacity duration-300 text-primary-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                Bright Space
                            </Text>
                        </Flex>
                        <Button
                            className={`text-3xl p-2 rounded-full transition-all duration-500 hover:bg-primary-100 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            onClick={toggleSidebar}
                        >
                            <Icon as={FcMenu} className="text-[#8094AE]" />
                        </Button>
                    </Flex>
                    {/* List Item */}
                    <nav className="mt-7">
                        <Box className="space-y-2">
                            {filteredNavList.map((item, idx) =>
                                <Box key={idx}>
                                    <NavLink
                                        to={item.path}
                                        end={item.exact}
                                        className={({ isActive }) =>
                                            `transition-all duration-300 text-lg grid grid-cols-[auto_1fr] items-center px-[12px] py-3 space-x-3 rounded-lg ${isActive ? "bg-[#EBEEF2] text-primary-500" : "text-[#8094AE] hover:bg-[#EBEEF2] hover:text-primary-500"
                                            }`
                                        }
                                    >
                                        <Icon as={item.icon} className="inline-block text-[22px]" />
                                        <Text className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500 inline-block font-semibold text-base overflow-hidden whitespace-nowrap`}>{item.name}</Text>
                                    </NavLink>
                                </Box>
                            )}
                        </Box>
                    </nav>

                </Box>
            </Box>
            {/* Main Content */}
            <Box className="w-full">
                {/* Top Bar for Main Content */}
                <Box className={`z-10 bg-white py-2 transition-all duration-500 w-full fixed shadow-sm shadow-primary-100 pr-7 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Flex className="w-full items-center justify-between">

                        {/* Sidebar Small */}
                        <Box className="md:block lg:hidden">
                            {sizes.map((size) => (
                                <Button
                                    onClick={() => handleClick(size)}
                                    key={size}
                                    m={4}
                                    className="md:block lg:hidden"
                                ><Icon as={FcMenu} className="text-[#8094AE]" /></Button>
                            ))}

                            <Drawer className="md:block lg:hidden" onClose={onClose} isOpen={isOpen} size={size} placement="left">
                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton><ArrowBackIcon w={"30px"} h={"30px"} /></DrawerCloseButton>
                                    <DrawerHeader>
                                        <Flex items-center='true'>
                                            <Image className="w-6 mr-3" src={brightSpace_logo} alt="Bright Space Logo" />
                                            <Text className={`text-lg font-bold transition-opacity duration-300 text-primary-500`}>
                                                Bright Space
                                            </Text>
                                        </Flex>
                                    </DrawerHeader>
                                    <DrawerBody>
                                        {/* List Item */}
                                        <nav className="mt-7">
                                            <Box className="space-y-2">
                                                {filteredNavList.map((item, idx) =>
                                                    <Box key={idx}>
                                                        <NavLink
                                                            to={item.path}
                                                            end={item.exact}
                                                            className={({ isActive }) =>
                                                                `transition-all duration-300 text-lg grid grid-cols-[auto_1fr] items-center px-[12px] py-3 space-x-3 rounded-lg ${isActive ? "bg-[#EBEEF2] text-primary-500" : "text-[#8094AE] hover:bg-[#EBEEF2] hover:text-primary-500"
                                                                }`
                                                            }
                                                        >
                                                            <Icon as={item.icon} className="inline-block text-[22px]" />
                                                            <Text className={`transition-opacity duration-500 inline-block font-semibold text-base overflow-hidden whitespace-nowrap`}>{item.name}</Text>
                                                        </NavLink>
                                                    </Box>
                                                )}
                                            </Box>
                                        </nav>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                        <Flex items-center='true' display={['flex', 'flex', 'flex', 'none']}>
                            <Image className="w-6 mr-3" src={brightSpace_logo} alt="Bright Space Logo" />
                            <Text className={`text-lg font-bold transition-opacity duration-300 text-primary-500`}>
                                Bright Space
                            </Text>
                        </Flex>

                        <Box display={['none', 'none', 'none', 'flex']} flexDirection={'row'} className="items-center text-[#8094AE] text-sm">
                            <Icon as={FaSearch} className="text-gray-500" />
                            <Input placeholder="Search Anything..." border="none" _focus={{ boxShadow: 'none' }} fontSize={'14px'} className="w-full" />
                        </Box>

                        <Flex alignItems='center' justifyItems='end' gap='4' className="ml-auto">
                            <Menu isLazy>
                                <MenuButton>
                                    <Box pos='relative'>
                                        <Icon as={MdNotifications} fontSize='2xl' />
                                        <Badge pos='absolute' right='0' top='-0.5' variant='solid' colorScheme='red' fontSize='0.6em' rounded='full'>
                                            7
                                        </Badge>
                                    </Box>
                                </MenuButton>
                                <MenuList overflowY='auto'>
                                    {/* MenuItems are not rendered unless Menu is open */}
                                    <MenuItem>Notification 1</MenuItem>
                                    <MenuItem>Notification 2</MenuItem>
                                    <MenuItem>Notification 3</MenuItem>
                                </MenuList>
                            </Menu>
                            <Messages />
                        </Flex>
                    </Flex>
                </Box>
                {/* Outlet for Main Content */}
                <Box className={`pt-24 h-full transition-all duration-700 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    );
};

export default Dashboard;