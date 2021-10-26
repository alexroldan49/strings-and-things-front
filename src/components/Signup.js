import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';


function Signup({setCurrentUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const history = useHistory()
    
    function handleUserChange(e){
      setUsername(e.target.value)
    }
    function handlePasswordChange(e){
      setPassword(e.target.value)
    }
    function handleEmailChange(e){
      setEmail(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const user = {
        username: username,
        email: email,
        password: password
      }
      fetch("/signup", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user)
      })
      .then(r => {
        if (r.ok) {
          r.json().then(user => setCurrentUser(user))
          .then(history.push("/"))
        }
      })
    }
    
    
    return (
      <div style={{backgroundImage: "url(https://i.ibb.co/N13BPNz/wp2971579.jpg)", backgroundSize: "100%"}} className="middle">
        <div style={{ height: "750px",width: "600px", backgroundColor: "rgba(68, 68, 68, 0.3)",display: "flex",justifyContent: "center", alignItems: "center"}}>
          <div style={{textAlign: "center", height: "650px", backgroundColor: "white", justifyContent: "center", width: "500px", alignItems: "center", gap: "10px"}} className="column" >
            <h1 style={{fontFamily: 'Fleur De Leah', fontSize: "40px"}} >Strings and Things</h1>
                <FormatAlignRightIcon sx={{fontSize: "30px"}}  />
              <h1>Signup</h1>
           
              <form style={{alignItems: "center"}} className="column" onSubmit={handleSubmit}>
                <TextField 
                sx={{backgroundColor: "white", width: "300px" }}
                label="username"
                type="text"
                value={username}
                onChange={handleUserChange}
                />
                <TextField 
                sx={{backgroundColor: "white", width: "300px" }}
                label="email"
                type="text"
                value={email}
                onChange={handleEmailChange}
                />
                <TextField 
                sx={{backgroundColor: "white", width: "300px" }}
                label="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                />
{/* 
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
                /> */}
                <Typography color="error" >{error}</Typography>
                <Button sx={{backgroundColor: "rgb(255, 136, 0)"}} variant="contained" type="submit" >Signup</Button>
                  </form>
            </div>
        </div>
      </div>
    );
  }


  export default Signup