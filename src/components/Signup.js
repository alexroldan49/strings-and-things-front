import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";


function Signup({setCurrentUser}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
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
      <div>
           <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <TextField 
          label="username"
          type="text"
          value={username}
          onChange={handleUserChange}
          />
          <TextField 
          label="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
          />
          <TextField 
          label="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          />
          {/* <input type="text" value={username} onChange={handleUserChange}  />
          <input type="text" value={password} onChange={handlePasswordChange}  /> */}
          <Button type="submit" >submit</Button>
        </form>
      </div>
    );
  }


  export default Signup