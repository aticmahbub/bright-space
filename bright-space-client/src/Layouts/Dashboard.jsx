import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import brightSpace_logo from "../assets/bright-space-logo.svg";
import { FcMenu } from "react-icons/fc";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaSearch, FaUser } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { BiSolidBookContent } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { Box, Flex, Image, Text, Button, Icon, Input } from '@chakra-ui/react';
import Messages from "../components/Messages/Messages";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    console.log(pathname);

    const SideNavList = [
        {
            name: 'Dashboard',
            path: '/dashBoard',
            icon: TbLayoutDashboardFilled,
            exact: true
        },
        {
            name: 'All Students',
            path: 'allStudents',
            icon: FaUser
        },
        {
            name: 'All Teachers',
            path: 'allTeachers',
            icon: PiChalkboardTeacherFill
        },
        {
            name: 'Courses',
            path: 'Courses',
            icon: BiSolidBookContent
        },
        {
            name: 'Setting',
            path: 'Setting',
            icon: IoMdSettings
        }
    ];

    return (
        <Flex className="bg-[#F5F6FA]">
            {/* Sidebar */}
            <Box className={`fixed min-h-screen bg-white shadow-sm shadow-primary-200 duration-300 z-20 hidden lg:block ${isSidebarOpen ? 'w-72' : 'w-20 hover:w-72'}`}>
                <Box className="p-4 h-screen group overflow-hidden whitespace-nowrap">
                    {/* Logo And Text */}
                    <Flex className="pl-3 items-center w-full justify-between">
                        <Flex items-center spaceX="3">
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
                            {SideNavList.map((item, idx) =>
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
            <Box className="w-full h-screen">
                {/* Top Bar for Main Content */}
                <Box className={`z-10 bg-white py-2 transition-all duration-500 w-full fixed shadow-sm shadow-primary-100 pr-7 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Flex className="w-full justify-between items-center">
                        <Flex className="items-center w-1/6 text-[#8094AE] text-sm">
                            <Icon as={FaSearch} className="text-gray-500" />
                            <Input placeholder="Search Anything..." border="none" _focus={{ boxShadow: 'none' }} fontSize={'14px'} className="w-full" />
                        </Flex>
                        <Flex>
                            <Messages />
                        </Flex>
                    </Flex>
                </Box>
                {/* Outlet for Main Content */}
                <Box className={`pt-16 h-full transition-all duration-700 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Outlet />
                </Box>
            </Box>
        </Flex>
    );
};

export default Dashboard;