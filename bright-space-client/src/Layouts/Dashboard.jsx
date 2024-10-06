import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import brightSpace_logo from "../assets/bright-space-logo.svg";
import { FcMenu } from "react-icons/fc";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { BiSolidBookContent } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";





const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    const SideNavList = [
        {
            name: 'Dashboard',
            path: '/dashBoard',
            icon: TbLayoutDashboardFilled
        },
        {
            name: 'All Students',
            path: 'allStudents',
            icon: FaUser
        },
        {
            name: 'All Teachers',
            path: 'allStudents',
            icon: PiChalkboardTeacherFill
        },
        {
            name: 'Courses',
            path: 'allStudents',
            icon: BiSolidBookContent 
        },
        {
            name: 'Setting',
            path: 'allStudents',
            icon: IoMdSettings 
        }
    ]

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed min-h-screen bg-white shadow-sm shadow-primary-200 z-20 hidden lg:block`}>
                <div className={`transition-all duration-300 p-4 h-screen group ${isSidebarOpen ? 'w-72' : 'w-16 hover:w-72'}`}>
                    {/* Logo And Text */}
                    <div className="flex pl-2 items-center w-full justify-between">
                        <div className="flex items-center space-x-3">
                            <img className="w-6" src={brightSpace_logo} alt="Bright Space Logo" />
                            <h1 className={`text-lg font-bold transition-opacity duration-300 text-primary-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} overflow-hidden whitespace-nowrap `}>
                                Bright Space
                            </h1>
                        </div>
                        <button
                            className={`text-3xl p-2 rounded-full transition-all duration-500 hover:bg-primary-100 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            onClick={toggleSidebar}
                        >
                            <FcMenu className="text-[#8094AE]"/>
                        </button>
                    </div>
                    {/* List Item */}
                    <nav className="mt-10">
                        <ul className=" space-y-2">
                            {
                                SideNavList.map((item, idx) =>
                                    <li key={idx}>
                                        <NavLink to={item.path} className={'transition-all duration-300 text-lg grid grid-cols-[auto_1fr] items-center px-2 py-3 text-[#8094AE] space-x-3 rounded-lg hover:bg-[#EBEEF2] hover:text-primary-500'}>
                                            <item.icon className="inline-block text-[24px]" />
                                            <p className={`${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500 inline-block font-semibold text-base overflow-hidden whitespace-nowrap`}>{item.name}</p>
                                        </NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>

                </div>
            </div>
            {/* Main Content */}
            <div className="w-full h-full">
                {/* Top Bar for Main Content */}
                <div className={`z-10 bg-white py-2 transition-all duration-700 w-full fixed shadow-sm shadow-primary-100 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <h1 className="text-xl font-semibold text-left bg-white">Dashboard</h1>
                </div>
                {/* Outlet for Main Content */}
                <div className={`pt-16 h-full transition-all duration-700 bg-[#F5F6FA] ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;