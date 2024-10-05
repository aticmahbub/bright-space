import { Outlet } from "react-router-dom";
import { useState } from "react";
import brightSpace_logo from "../assets/bright-space-logo.svg";
import { FcMenu } from "react-icons/fc";


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed min-h-screen bg-white shadow-sm shadow-primary-200 z-20 hidden lg:block`}>
                <div className={`transition-all duration-700  h-screen overflow-hidden group ${isSidebarOpen ? 'w-72' : 'w-16 hover:w-72'}`}>
                    {/* Logo And Text */}
                    <div className="p-4 whitespace-nowrap flex items-center w-full justify-between">
                        <div className="flex items-center space-x-3">
                            <img className="w-6" src={brightSpace_logo} alt="Bright Space Logo"/>
                            <h1 className={`text-lg font-bold transition-opacity duration-700 text-primary-500 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                Bright Space
                            </h1>
                        </div>
                        <button
                            className={`text-3xl p-2 rounded-full transition-all duration-500 hover:bg-primary-100 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            onClick={toggleSidebar}
                        >
                            <FcMenu />
                        </button>
                    </div>
                    {/* List Item */}
                </div>
            </div>
            {/* Main Content */}
            <div className="w-full">
                {/* Top Bar for Main Content */}
                <div className={`z-10 bg-white py-2 transition-all duration-700 w-full fixed shadow-sm shadow-primary-200 ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <h1 className="text-xl font-semibold text-left bg-white">Dashboard</h1>
                </div>
                {/* Outlet for Main Content */}
                <div className={`pt-16 transition-all duration-700 bg-about_banner_background_color ${isSidebarOpen ? 'pl-80' : 'lg:pl-24'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;