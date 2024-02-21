import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./routes/root";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Root />}>
                <Route index element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    )
)

export default router
