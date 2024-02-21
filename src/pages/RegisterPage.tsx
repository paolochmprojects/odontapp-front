import { Form, useNavigate } from "react-router-dom"

const RegisterPage = () =>{

    const navigate = useNavigate()

    return (
        <main className="flex-grow max-w-screen-lg mx-auto flex flex-col justify-center items-center">
            <Form className="w-96 p-6 rounded-xl shadow-lg">
                <h1 className="font-bebas-neue text-4xl mb-2">Registrate</h1>
                <div className="flex flex-col gap-2 items-center">
                    <label className="font-bebas-neue text-2xl w-full text-left">Email</label>
                    <input className="w-full h-10 outline rounded-lg outline-1 p-2" placeholder="example@email.com" name="email" type="email" />
                </div>
                <div className="flex flex-col gap-2 mt-2 items-center">
                    <label className="font-bebas-neue text-2xl w-full text-left">Contraseña</label>
                    <input className="w-full h-10 outline rounded-lg outline-1 p-2" placeholder="SuperSecret99" name="password" type="password" />
                </div>
                <div className="flex flex-col gap-2 mt-2 items-center">
                    <label className="font-bebas-neue text-2xl w-full text-left">Confirmar Contraseña</label>
                    <input className="w-full h-10 outline rounded-lg outline-1 p-2" placeholder="SuperSecret99" name="confirmPassword" type="password" />
                </div>  
                <button type="submit" className="bg-black h-10 text-white mt-4 rounded-lg w-full font-bebas-neue text-xl">Enviar</button>
                <button
                    onClick={()=>navigate("/login")}
                    type="button" 
                    className="bg-black h-10 text-white mt-4 rounded-lg w-full font-bebas-neue text-xl">¿Ya tienes cuenta?</button>
            </Form>
        </main>
    )
}

export default RegisterPage