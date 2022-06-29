import React from 'react'
import {AuthContext} from "../Context/AuthContext"
import {Link,  useNavigate} from "react-router-dom";
import {Box} from "@chakra-ui/react"

export const Navbar = () => {
    
    const navigate = useNavigate()
    const {isAuth, toggleAuth} = React.useContext(AuthContext)

    console.log({isAuth, toggleAuth})

    const handleLogout = () => {
        toggleAuth()
        navigate("/Home")
    } 

    return(
        <>
        <Box bg="tomato" w="100%" p={4} fontSize="20px" color="white" > 
        <ul>
        <li>
        {isAuth ? (
            <Link disabled={isAuth} to="/Home">Home</Link>
            ) :  ( <Link to="/">Home</Link> ) }
        </li>

        <li>
        {!isAuth && (
            <Link to="/"> Login </Link>
            )}
        </li>


        <li>
        {isAuth && (
            <button onClick={handleLogout} > Logout </button>   
        )}
        </li>

        </ul>
         </Box>

        </>
    )
}
