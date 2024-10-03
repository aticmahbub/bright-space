import { Outlet } from "react-router-dom";
import { useState } from "react";
const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className={`fixed z-20 transition-all duration-700 bg-primary-200 min-h-screen overflow-hidden group ${isSidebarOpen ? 'w-1/6' : 'w-16 hover:w-1/6'}`}>
                <div className="p-4 whitespace-nowrap flex items-center space-x-6">
                    <div className="flex items-center space-x-3">
                        <h1 className="text-2xl font-bold">BS</h1>
                        <h1 className={`text-2xl font-bold transition-opacity duration-700 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            Bright Space
                        </h1>
                    </div>
                    <button 
                        className={`bg-primary-500 p-2 rounded-full transition-opacity duration-700 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                        onClick={toggleSidebar}
                    >
                        X
                    </button>
                </div>
            </div>
            {/* Main Content */}
            <div className="w-full">
                {/* Top Bar for Main Content */}
                <div className={`z-10 bg-secondary-300 w-full py-4 transition-all duration-700 ${isSidebarOpen ? 'ml-[16.67%]' : 'ml-16'}`}>
                    <h1 className="text-xl font-semibold text-white text-right bg-primary_color_1">Dashboard</h1>
                </div>
                {/* Outlet for Main Content */}
                <div className={`p-6 mt-16 transition-all duration-700 ${isSidebarOpen ? 'ml-[16.67%]' : 'ml-16'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;