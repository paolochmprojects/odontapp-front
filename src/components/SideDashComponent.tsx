import { NavLink } from "react-router-dom"
import { } from "react-icons"
import { RiContactsBook2Fill, RiDashboardLine, RiLogoutBoxLine, RiPagesLine, RiSettingsLine } from "react-icons/ri"

interface SideProps {
    open: boolean,
}

const SideDashComponent = ({ open }: SideProps) => {
    return (
        <aside className={`absolute bg-white ${open ? 'w-64' : 'w-20'} transition-all duration-500 ease-in-out top-20 bottom-20 overflow-hidden`}>
            <ul className="py-4 flex flex-col gap-6 items-center h-full relative ">
                <li>
                    <NavLink className={({ isActive }) => isActive ? "flex items-center rounded-xl bg-slate-200 p-2" : "flex items-center"}
                        to="/dashboard" end>
                        <RiDashboardLine size={24} />
                        <div className={`${open ? "w-36 ml-4" : "w-0"} overflow-hidden text-nowrap transition-all ease-in-out duration-700`}>
                            <span className="uppercase">
                                Panel de control
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className={({ isActive }) => isActive ? "flex items-center rounded-xl bg-slate-200 p-2" : "flex items-center"}
                        to="/dashboard/contact" end>
                        <RiContactsBook2Fill size={24} />
                        <div className={`${open ? "w-36 ml-4" : "w-0"} overflow-hidden text-nowrap transition-all ease-in-out duration-700`}>
                            <span className="uppercase">
                                Contactos
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className={({ isActive }) => isActive ? "flex items-center rounded-xl bg-slate-200 p-2" : "flex items-center"}
                        to="/dashboard/report">
                        <RiPagesLine size={24} />
                        <div className={`${open ? "w-36 ml-4" : "w-0"} overflow-hidden text-nowrap transition-all ease-in-out duration-700`}>
                            <span className="uppercase">
                                Documentos
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="">
                    <NavLink className={({ isActive }) => isActive ? "flex items-center rounded-xl bg-slate-200 p-2" : "flex items-center"}
                        to="/dashboard/settings">
                        <RiSettingsLine size={24} />
                        <div className={`${open ? "w-36 ml-4" : "w-0"} overflow-hidden text-nowrap transition-all ease-in-out duration-700`}>
                            <span className="uppercase">
                                Ajustes
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className="absolute bottom-2">
                    <NavLink className={({ isActive }) => isActive ? "flex items-center rounded-xl bg-slate-200 p-2" : "flex items-center"}
                        to="/logout">
                        <RiLogoutBoxLine size={24} />
                        <div className={`${open ? "w-36 ml-4" : "w-0"} overflow-hidden text-nowrap transition-all ease-in-out duration-700`}>
                            <span className="uppercase">
                                Cierra sesión
                            </span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideDashComponent