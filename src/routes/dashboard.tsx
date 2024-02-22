import { Outlet } from "react-router-dom"
import HeaderDashComponent from "../components/HeaderDashComponent"
import FooterComponent from "../components/FooterCompnent.tsx"
import SideDashComponent from "../components/SideDashComponent.tsx"
import { useState } from "react"

const Dashboard = () => {
    const [open, setOpen] = useState(false)

    function toggleMenu (){
        setOpen(!open)
    }
    return (
        <>
            <div className="flex flex-col min-h-screen relative">
                <SideDashComponent open={open}/>
                <HeaderDashComponent open={open} toggleMenu={toggleMenu}/>
                <Outlet />
                <FooterComponent/>
            </div>
        </>
    )
}

export default Dashboard