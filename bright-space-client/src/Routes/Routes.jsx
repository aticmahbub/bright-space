import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/shared/Authentication/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import Registration from "../pages/shared/Authentication/Registration/Registration";


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
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration/>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
        children:[
            // student routes
            {
                
            }
        ]
    }
])