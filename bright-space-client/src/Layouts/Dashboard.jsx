import { NavLink, Outlet, useLocation } from "react-router-dom";
import React from "react";
import brightSpace_logo from "../assets/bright-space-logo.svg";
import { TbLayoutDashboard } from "react-icons/tb"; // Dashboard icon
import { FaUserCircle, FaGraduationCap, FaBook } from "react-icons/fa"; // Profile, All Students, Enrolled Courses
import { BsFillGearFill } from "react-icons/bs"; // Settings
import { MdOutlinePeople, MdOutlineSchool } from "react-icons/md"; // All Teachers, All Courses
import {
    Icon,
    Box, Flex, Image,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText
} from '@chakra-ui/react';

const Analytics = () => {
    return (
        <Flex wrap="wrap" justify="space-between" p="6">
            <AnalyticsCard title="Total Students" number={120} helpText="+5 since last week" />
            <AnalyticsCard title="Total Courses" number={30} helpText="+2 since last week" />
            <AnalyticsCard title="Active Enrollments" number={75} helpText="+10 since last week" />
            <AnalyticsCard title="New Feedback" number={15} helpText="+3 since last week" />
        </Flex>
    );
};

const AnalyticsCard = ({ title, number, helpText }) => {
    return (
        <Box
            w={{ base: "100%", md: "45%", lg: "22%" }}
            p="4"
            mb="4"
            borderWidth="1px"
            borderRadius="lg"
            shadow="md"
            bg="white"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }} // Hover effect
        >
            <Stat>
                <StatLabel>{title}</StatLabel>
                <StatNumber>{number}</StatNumber>
                <StatHelpText>{helpText}</StatHelpText>
            </Stat>
        </Box>
    );
};

const Dashboard = () => {
    const userRole = "Admin";
    const location = useLocation();

    const SideNavList = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: TbLayoutDashboard,
            roles: ['Admin', 'Teacher', 'Student'],
            exact: true
        },
        {
            name: 'Profile',
            path: 'studentProfile',
            icon: FaUserCircle,
            roles: ['Admin', 'Student']
        },
        {
            name: 'All Courses',
            path: 'allCourses',
            icon: MdOutlineSchool,
            roles: ['Admin', 'Student']
        },
        {
            name: 'Enrolled Courses',
            path: 'myCourses',
            icon: FaBook,
            roles: ['Admin', 'Student']
        },
        {
            name: 'All Students',
            path: 'allStudents',
            icon: FaGraduationCap,
            roles: ['Admin', 'Teacher']
        },
        {
            name: 'All Teachers',
            path: 'allTeachers',
            icon: MdOutlinePeople,
            roles: ['Admin']
        },
        {
            name: 'Setting',
            path: 'Setting',
            icon: BsFillGearFill,
            roles: ['Admin']
        }
    ];

    const filteredNavList = SideNavList.filter(item => item.roles.includes(userRole));

    return (
        <Flex bg="#F5F6FA" minH="100vh">

            {/* Sidebar */}
            <Box
                as="aside"
                bg="white"
                shadow="sm"
                w="250px"
                minH="100vh"
                position="fixed"
                zIndex="20"
            >
                <Flex direction="column" h="100%">
                    <Flex align="center" p="4">
                        <Image src={brightSpace_logo} alt="Logo" w="8" />
                        <Text ml="4" fontWeight="bold" color="orange.500">Bright Space</Text>
                    </Flex>
                    <Box flex="1" p="4">
                        {filteredNavList.map((item, idx) => (
                            <NavLink
                                to={item.path}
                                key={idx}
                                className={({ isActive }) =>
                                    `transition-all duration-300 text-lg flex items-center px-4 py-3 rounded-lg my-2 ${isActive ? "bg-[#EBEEF2] text-orange-500" : "text-gray-500 hover:bg-[#EBEEF2] hover:text-orange-500"}`
                                }
                            >
                                <Icon as={item.icon} boxSize="7" className="mr-4" />
                                <Text>{item.name}</Text>
                            </NavLink>
                        ))}
                    </Box>
                </Flex>
            </Box>

            {/* Main Content */}
            <Box className="w-full">

                <Box pt="24" pl="250px">
                    {/* Render Analytics only on /dashboard */}
                    {location.pathname === '/dashboard' && <Analytics />}
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    );
};

export default Dashboard;
