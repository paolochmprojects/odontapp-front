import HeaderComponent from "../components/HeaderComponent"
import { Outlet } from "react-router-dom"
import FooterComponent from "../components/FooterCompnent.tsx"

const Root = () => {

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <HeaderComponent />
                <Outlet />
                <FooterComponent />
            </div>
        </>
    )
}

export default Root