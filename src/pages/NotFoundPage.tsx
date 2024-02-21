import { Link } from "react-router-dom"
import FooterComponent from "../components/FooterCompnent.tsx"
import HeaderComponent from "../components/HeaderComponent"
import TheetImg from "../assets/teeth.png"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent />
            <main className="flex-grow max-w-screen-lg mx-auto p-4 flex flex-col gap-2 justify-center items-center">
                <div className="w-32">
                    <img src={TheetImg} alt="" />
                </div>
                <h2 className="font-bebas-neue text-9xl">404</h2>
                <h2 className="font-bebas-neue text-7xl">No encontrado</h2>
                <Link to="/">
                    <span className="underline underline-offset-4 text-lg">Regresa al inicio 🏠</span>
                </Link>
            </main>
            <FooterComponent />
        </div>
    )
}

export default NotFoundPage
