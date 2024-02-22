import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom"


interface HeaderProps {
    open: boolean,
    toggleMenu: () => void
}

const HeaderDashComponent = ({open, toggleMenu}: HeaderProps) => {


    return (<header>
        <div className="w-full bg-white fixed z-20">
            <div className="flex mx-auto py-5 px-7 justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={toggleMenu}>
                        {open ? <GrClose size={24}/> : <GiHamburgerMenu size={24}/>}
                    </button>
                    <Link to="/">
                        <h1 className="font-bebas-neue text-3xl">Odont App</h1>
                    </Link>
                </div>
                <nav>
                    <ul className="flex gap-4 text-xl">
                        <li>
                            <a className={`font-bebas-neue`}>Cerrar sesión</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>)
}

export default HeaderDashComponent
