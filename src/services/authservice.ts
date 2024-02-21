interface SignInParams {
    email:string, 
    password: string
}

interface SignUpParams extends SignInParams {
    confirmPassword: string
}

export const signIn = (data: SignInParams) => {
    localStorage.setItem("user", JSON.stringify(data))
    return true
};

export const signUp = (data: SignUpParams) => {
    console.log(data)
    return true
};

export const signOut = () => {
    localStorage.clear()
};
