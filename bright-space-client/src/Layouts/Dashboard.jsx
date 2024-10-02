import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import useRole from "../hooks/useRole";
// import useRole from "../hooks/useRole";
import { LuGraduationCap, LuLayoutDashboard, LuLightbulb, LuLogOut, LuSettings, LuUser } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
// import { Flex } from "@chakra-ui/react";
import './css/dashboard.css'
import { IoCreateOutline } from "react-icons/io5";




const Dashboard = () => {
    const role = useRole()
    console.log(role);
    return (
        <div>
            <Navbar />
            <div>
                <div className="border-r-2 grid grid-cols-5">
                    {/* sidebar */}
                    
                    <div className="h-full relative shadow-2xl pt-10">
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
                                        <NavLink to='/dashboard/myCourses' className="dashboard-sidebar">
                                            <LuGraduationCap /> My Courses
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allTeachers' className="dashboard-sidebar">
                                            <LuUser />Teachers
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allStudents' className="dashboard-sidebar">
                                            <LuUser />Students
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
                                            <IoCreateOutline />Create Course
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <LuSettings />Settings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/allCourses' className="dashboard-sidebar">
                                            <IoCreateOutline />Create Course
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
                        <div className="mt-32">
                            <button className="dashboard-logOut">
                                <LuLogOut />Sign Out
                            </button>
                        </div>
                    </div>


                    {/* content */}
                    <div className="col-span-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;