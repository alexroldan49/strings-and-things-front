import React, { useState } from "react";


function Signup(){
    const [username, setUsername] = useState("username...")
    const [password, setPassword] = useState("password...")
    
    function handleUserChange(e){
      setUsername(e.target.value)
    }
    function handlePasswordChange(e){
      setPassword(e.target.value)
    }
  
    function handleSubmit(e){
      e.preventDefault()
      const user = {
        username: username,
        password: password
      }
      fetch("/signup", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user)
      })
      .then(r => {
        if (r.ok) {
          r.json().then(user => console.log(user))
        }
      })
    }
    
    
    return (
      <div>
           <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={handleUserChange}  />
          <input type="text" value={password} onChange={handlePasswordChange}  />
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </div>
    );
  }


  export default Signup