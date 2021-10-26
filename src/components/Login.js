import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { height } from "@mui/system";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';


function Login( {setCurrentUser, setOpen} ){
    
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
                .then(history.push("/")).then(setOpen(true))
            }else{
                r.json().then(error => setError(error.errors))
            }
        })
    }
    
    
    return(
        <div style={{backgroundImage: "url(https://i.ibb.co/HLvdT3H/guitar-strings-wallpaper-58788-60564-hd-wallpapers.jpg)", backgroundSize: "100%", backgroundColor: "black" }} className="middle" >
            <div style={{ height: "750px",width: "600px", backgroundColor: "rgba(68, 68, 68, 0.3)",display: "flex",justifyContent: "center", alignItems: "center"}}>
            <div style={{textAlign: "center", height: "650px", backgroundColor: "white", justifyContent: "center", width: "500px", alignItems: "center", gap: "10px"}} className="column" >
            <h1 style={{fontFamily: 'Fleur De Leah', fontSize: "40px"}} >Strings and Things</h1>
                <FormatAlignRightIcon sx={{fontSize: "30px"}}  />
                <h1>Login</h1>
                <p>enter username and password to login</p>
                <form style={{alignItems: "center"}} className="column" onSubmit={handleSubmit} >
                <TextField 
                sx={{backgroundColor: "white", width: "300px" }}
                label="username"
                type="text"
                value={username}
                onChange={handleUsername}
                />
                <TextField
                sx={{backgroundColor: "white", width: "300px" }}
                label="password"
                type="text"
                value={password}
                onChange={handlePassword}
                />
                <Typography color="error" >{error}</Typography>
                <Button sx={{backgroundColor: "rgb(255, 136, 0)"}} variant="contained" type="submit" >Login</Button>
                </form>
            </div>
            </div>
        </div>
    )
}
export default Login