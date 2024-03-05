import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { action as loginAction } from "./routes/login";
import { action as registerAction } from "./routes/register";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./routes/dashboard";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ContactPage from "./pages/dashboard/ContactPage";
import ReportPage from "./pages/dashboard/ReportPage";
import SettingsPage from "./pages/dashboard/SettingsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
                action: loginAction
            },
            {
                path: "register",
                element: <RegisterPage />,
                action: registerAction
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            { 
                index: true, 
                element: <DashboardPage /> 
            },
            {
                path:"contact",
                element:<ContactPage/>
            },
            {
                path:"report",
                element: <ReportPage/>
            },
            {
                path:"settings",
                element: <SettingsPage/>
            }
        ]
    },
    {
        path: "/*",
        element: <NotFoundPage/>
    }
])

export default router
