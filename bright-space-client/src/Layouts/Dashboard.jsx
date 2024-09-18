import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import useRole from "../hooks/useRole";
// import useRole from "../hooks/useRole";

const Dashboard = () => {
    const role = useRole()
    console.log(role);
    return (
        <div>
            <Navbar />
            <div className="flex justify-between">
                <div className="min-w-64  min-h-screen">
                    {/* student dashboard */}
                    {
                        role==='student' && <>
                        <h2 className="text-2xl">Students dashboard</h2>
                        <ul>
                            <li><NavLink to='/dashboard/studentProfile'>Profile</NavLink></li>
                            <li><NavLink to='/dashboard/studentProfile'>Profile</NavLink></li>
                            <li><NavLink to='/dashboard/studentProfile'>Profile</NavLink></li>
                        </ul>
                        </>
                    }
                    {/* teacher dashboard */}
                    {
                        role==='teacher' && <>
                        <h2 className="text-2xl">Teacher dashboard</h2>
                        <ul>
                            <li><NavLink to='/dashboard/teacherProfile'>Profile</NavLink></li>
                        </ul>
                        </>
                    }
                </div>
                <div><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;