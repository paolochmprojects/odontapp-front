import React, { createContext } from "react";


interface AuthContextProps{
    signIn: () => null,
    signUp: () => null,
    token: string
}

export const AuthContext = createContext<AuthContextProps>({
    signIn: () => null,
    signUp: () => null,
    token: ""
})

interface Props {
    children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {

    const signIn = () => {
        return null
    }

    const signUp = () => {
        return null
    }

    const token = "" 

    return (<AuthContext.Provider value={{ signIn, signUp, token }}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider
