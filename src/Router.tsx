import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import {action as loginAction} from "./routes/login";
import {action as registerAction} from "./routes/register";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./routes/dashboard";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ContactPage from "./pages/dashboard/ContactPage";
import ReportPage from "./pages/dashboard/ReportPage";
import SettingsPage from "./pages/dashboard/SettingsPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Root/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>} action={loginAction}/>
                <Route path="/register" element={<RegisterPage/>} action={registerAction}/>
            </Route>
            <Route path="dashboard" element={<Dashboard/>}>
                <Route index element={<DashboardPage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="report" element={<ReportPage/>}/>
                <Route path="settings" element={<SettingsPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

export default router
