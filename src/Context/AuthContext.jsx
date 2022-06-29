import React from 'react'

export const AuthContext = React.createContext()

export function AuthContextProvider({children}){

    const [isAuth, setIsAuth] = React.useState(false)
    const [token, setToken] = React.useState("")

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    const handleToken = (val) => {
        setToken(token + val)
    }

    return(
        <AuthContext.Provider value={{isAuth, toggleAuth, token, handleToken}}>
            {children}
        </AuthContext.Provider>
    )
}