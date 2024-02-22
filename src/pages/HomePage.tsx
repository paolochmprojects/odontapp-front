import { Form } from "react-router-dom"
import BracesImg from "../assets/braces.jpg"
import BrushImg from "../assets/brush-teeth.jpg"
import { useEffect } from "react"

const HomePage = () => {

    useEffect(() => {
        document.title = "Home - OdontApp"
    })

    return (

        <main className="flex-grow mt-20">
            <section>
                <div className="max-w-screen-lg mx-auto flex flex-wrap">
                    <div className="p-4 h-96 flex flex-col gap-4 mx-auto justify-center items-center md:w-1/2">
                        <h2 className="text-center font-bebas-neue text-7xl font-semibold">
                            Odont APP
                        </h2>
                        <p className="text-center">
                            Desarrollado para la gestión de pacientes y documentación de periodontogramas y más...
                        </p>
                        <button className="bg-black text-white p-3 rounded-xl shadow-2xl hover:scale-110 transition ease-in-out font-bebas-neue text-lg">
                            Solicita tu acceso
                        </button>
                    </div>
                    <div className="p-4 h-96 md:w-1/2">
                        <img className="rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition ease-in-out" src={BracesImg} alt="jeje" />
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-lg mx-auto bg-black text-white min-h-80 p-10">
                    <h2 className="font-bebas-neue text-4xl">Caracteristicas</h2>
                    <div className="flex flex-wrap items-center">
                        <ul className="md:px-6 md:py-2 md:w-1/3">
                            <li className="mt-4">
                                <h3 className="font-bebas-neue text-2xl">Numero de pacientes ilimitados</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="mt-4">
                                <h3 className="font-bebas-neue text-2xl">Disponibilidad total</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                        <ul className="md:px-6 md:py-2 md:w-1/3">
                            <li className="mt-4">
                                <h3 className="font-bebas-neue text-2xl">Manejo de citas</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="mt-4">
                                <h3 className="font-bebas-neue text-2xl">Análisis de historiales</h3>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                        <div className="mt-4 md:w-1/3">
                            <img className="rounded-2xl shadow-xl shadow-slate-800" src={BrushImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="max-w-screen-lg mx-auto min-h-80 flex flex-col gap-3 items-center justify-center">
                    <h3 className="font-bebas-neue text-center text-4xl">Solicita más info:</h3>
                    <Form className="flex gap-3 w-5/6 md:w-1/2" action="" method="post">
                        <input className="outline outline-2 rounded-xl p-2 w-full" name="email" placeholder="example@email.com" />
                        <button className="bg-black p-3 rounded-xl text-white">Enviar</button>
                    </Form>
                </div>
            </section>
        </main>

    )
}

export default HomePage