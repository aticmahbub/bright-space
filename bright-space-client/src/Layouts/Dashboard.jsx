import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import useRole from "../hooks/useRole";
// import useRole from "../hooks/useRole";
import { LuGraduationCap, LuLayoutDashboard, LuLightbulb, LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
// import { Flex } from "@chakra-ui/react";
import './css/dashboard.css'



const Dashboard = () => {
    const role = useRole()
    console.log(role);
    return (
        <div>
            <Navbar />
            <div className="flex justify-between">
                <div className="min-w-96 h-screen border-r-2 shadow-2xl relative">
                    {/* sidebar */}
                    <div className="min-w-64  min-h-screen">
                        {/* student dashboard */}
                        {
                            role === 'student' && <>
                                <h2 className="text-2xl">Students dashboard</h2>
                                <ul>
                                    <li><NavLink to='/dashboard/studentProfile'>Profile</NavLink></li>
                                    <li><NavLink to='/dashboard/studentProfile'>Profile</NavLink></li>

                                </ul>
                            </>
                        }
                        {/* teacher dashboard */}
                        {
                            role === 'teacher' && <>
                                <h2 className="text-4xl font-bold text-primary_color_1 mb-24 mt-20 pl-14">
                                    Bright<span className='text-[#2A3290]'>Space</span>
                                </h2>
                                <ul>
                                    <li>
                                        <NavLink to='/dashboard/teacherProfile' className="dashboard-sidebar">
                                            <LuLayoutDashboard /> Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/CreateCourse' className="dashboard-sidebar">
                                            <LuGraduationCap /> My Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <LuUser />Instructor
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <LuLightbulb />Courses
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <IoChatbubblesOutline />Group Chat
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <LuSettings />Settings
                                        </NavLink>
                                    </li>
                                </ul>
                            </>
                        }
                        {/* Sign Out Button */}
                        <div className="absolute bottom-6">
                            <button className="dashboard-logOut">
                                <LuLogOut />Sign Out
                            </button>
                        </div>
                    </div>
                    {/* content */}
                    <div><Outlet /></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;