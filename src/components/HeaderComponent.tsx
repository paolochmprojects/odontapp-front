import { Link, NavLink } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header>
            <div className="w-full bg-white fixed z-20">
                <div className="flex max-w-screen-lg mx-auto p-5 justify-between items-center">
                    <div>
                        <Link to="/">
                            <h1 className="font-bebas-neue text-3xl">OdontAPP</h1>
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex gap-4 text-xl">
                            <li>
                                <NavLink className={`font-bebas-neue`} to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink className={`font-bebas-neue`} to="/login">Ingresa</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent