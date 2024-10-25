import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/shared/Authentication/Login/Login";
import Registration from "../pages/shared/Authentication/Registration/Registration";
import Dashboard from "../Layouts/Dashboard";
import Features from "../pages/Features/Features";
import Contact from "../pages/Contact/Contact";
import Blog from "../pages/Blog/Blog";
import Forum from "../pages/Forum/Forum";
import UserProfile from "../pages/UserProfile/UserProfile";

import About from "../pages/About/About/About";
import ClassRoom from "../pages/ClassRoom/ClassRoom";
import LiveSession from "../pages/LiveSession/LiveSession";
import AiAssistant from "../pages/AiAssistant/AiAssistant";
import AllCourses from "../pages/Courses/AllCourses/AllCourses";
import PrivateRoute from "./PrivateRoute";
import ViewCourse from "../pages/Courses/ViewCourse/ViewCourse";
import AllTeachers from "../pages/AllTeachers/AllTeachers";
import AllStudents from "../pages/AllStudents/AllStudents";
import Quiz from "../pages/Quiz/Quiz";
import QuizForm from "../pages/Quiz/QuizForm";
// import QnA from "../pages/QnA/QnA";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import MyClasses from "../Student/MyClasses";
import Analysis from "../pages/Analysis/Analysis";
import StudentProfile from "../pages/StudentProfile/StudentProfile";
import MyClasses from "../Student/MyClasses";
import QnA from "../pages/QnA/QnA";
import CreatedCourses from "../pages/Courses/CreatedCourses/CreatedCourses";
import CreateCourses from "../pages/Courses/CreateCourse/CreateCourse";
import EnrolledCourses from "../pages/Courses/EnrolledCourses/EnrolledCourses";


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
                element: <PrivateRoute><ClassRoom /></PrivateRoute>
            },
            {
                path: '/live/:id',
                element: <PrivateRoute><LiveSession /></PrivateRoute>
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
                element: <About />
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
            },
            {
                path: 'view-course-details',
                element: <ViewCourse />
            },
            {
                path: 'qna',
                element: <PrivateRoute>
                    <QnA />
                </PrivateRoute>
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
                path: '/dashboard',
                element: <Analysis />
            },
            {
                path: 'studentProfile',
                element: <StudentProfile />
            },
            {
                path: 'allStudents',
                element: <AllStudents />
            },
            {
                path: 'enrolledCourses',
                element: <EnrolledCourses />
            },
            {
                path: 'viewCourseDetails',
                element: <ViewCourse />
            },
            // {
            //     path: 'ViewMyClasses',
            //     element: <ViewMyClasses />
            // },

            // teacher routes
            {
                path: 'teacherProfile',
                element: <StudentProfile />
            },
            {
                path: 'allTeachers',
                element: <AllTeachers />
            },
            {
                path: 'createCourse',
                element: <CreateCourses />
            },
            {
                path: 'createdCourses',
                element: <CreatedCourses />
            },
            {
                path: 'allCourses',
                element: <AllCourses />
            },
            {
                path: 'myClasses',
                element: <MyClasses />
            },
            {
                path: 'quiz',
                element: <Quiz />
            },
            {
                path: 'quizForm',
                element: <QuizForm />
            },
        ]
    }
])