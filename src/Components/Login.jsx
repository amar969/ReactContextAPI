import React from 'react'
import { AuthContext} from '../Context/AuthContext'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const Login = () => {

    const authCtx = React.useContext(AuthContext)
    console.log(authCtx)



    const [email, setEmail] = React.useState("")
    const [password, setPassword ] = React.useState("")
  
    const handleEmail = (e) => {
        setEmail(e.target.value)   
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const payload = {
            email : email,
            password : password
        }

        let res = await fetch("https://reqres.in/api/login", {
            method: "POST", 
            body: JSON.stringify(payload),
            headers: {
                "Content-type" : "application/json"
            }

        })
        let data = await res.json()
        console.log(data.token)
        authCtx.handleToken(data.token)
        if(data.token) authCtx.toggleAuth()
        console.log(authCtx.isAuth)
    }
  

    return(
        <>
        <h1>Login </h1>
        Email : 
        <Input placeholder='Enter your Email' type="text" htmlSize={4} m={3} width="400px" value={email} name={email} onChange={handleEmail} />
        <br/>
        <br />
        Password:
        <Input placeholder="Enter your Password" type="text" htmlSize={4} m={3} width="400px" value={password} onChange={handlePass} /> 
        <br />
        <br /> 
        <Button colorScheme="teal" size="lg"  onClick={handleSubmit}> Submit </Button>

        </>
    )
}
