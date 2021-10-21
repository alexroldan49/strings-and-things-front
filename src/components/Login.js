import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

function Login( {setCurrentUser} ){
    
    const history = useHistory()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    
    const credentials = {
        username: username,
        password: password
    }
    
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(credentials)
        }).then(r => {
            if (r.ok) {
                r.json().then(user => setCurrentUser(user))
                .then(history.push("/"))
            }else{
                r.json().then(error => setError(error.errors))
            }
        })
    }
    
    
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} >
            <TextField 
            label="username"
            type="text"
            value={username}
            onChange={handleUsername}
             />
            <TextField
             label="password"
             type="text"
             value={password}
             onChange={handlePassword}
            />
            <Button type="submit" >Login</Button>
            <Typography color="error" >{error}</Typography>
            </form>
        </div>
    )
}
export default Login