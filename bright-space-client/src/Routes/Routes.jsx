import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/shared/Authentication/Login/Login";
import Registration from "../pages/shared/Authentication/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import Features from "../pages/Features/Features";
import Contact from "../pages/Contact/Contact";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import Blog from "../pages/Blog/Blog";
import Forum from "../pages/Forum/Forum";
import UserProfile from "../pages/UserProfile/UserProfile";
import TeacherProfile from "../pages/TeacherProfile/TeacherProfile";
import About from "../pages/About/About/About";
import ClassRoom from "../pages/ClassRoom/ClassRoom";
import LiveSession from "../pages/LiveSession/LiveSession";
import AiAssistant from "../pages/AiAssistant/AiAssistant";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import PrivateRoute from "./PrivateRoute";
import ViewCourse from "../pages/Courses/ViewCourse/ViewCourse";
import MyCourses from "../pages/Courses/MyCourses/MyCourses";
import AllTeachers from "../pages/AllTeachers/AllTeachers";
import AllStudents from "../pages/AllStudents/AllStudents";
import CreateCourse from "../pages/Courses/CreateCourse/CreateCourse";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/classroom',
                element: <ClassRoom />
            },
            {
                path: '/live/:id',
                element: <LiveSession />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/about',
                element: <PrivateRoute><About /></PrivateRoute>
            },
            {
                path: '/features',
                element: <Features />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/forum',
                element: <Forum />
            },
            {
                path: '/allCourses',
                element: <AllCourses />
            },
            {
                path: '/userProfile',
                element: <UserProfile />
            }
        ]
    },
    {
        path: '/support',
        element: <AiAssistant></AiAssistant>
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // student routes
            {
                path: 'studentProfile',
                element: <StudentProfile />
            },
            {
                path: 'allStudents',
                element: <AllStudents />
            },
            {
                path: 'myCourses',
                element: <MyCourses />
            },
            {
                path: 'viewCourseDetails/:id',
                element: <ViewCourse />
            },

            // teacher routes
            {
                path: 'teacherProfile',
                element: <TeacherProfile />
            },
            {
                path: 'allTeachers',
                element: <AllTeachers />
            },
            {
                path: 'createCourse',
                element: <CreateCourse />
            },
            {
                path: 'allCourses',
                element: <AllCourses />
            },
        ]
    }
])