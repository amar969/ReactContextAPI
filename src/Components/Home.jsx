import React from 'react'
import {AuthContext} from "../Context/AuthContext"

export const Home = () => {

    const {isAuth, toggleAuth, token} = React.useContext(AuthContext)

    
    
    return(
        <>
        <h1>Hello</h1>
        {isAuth ? "Login Successfull" : "Login Again"}
        User Token : {isAuth ? token : ""}

        </>
    )
}
