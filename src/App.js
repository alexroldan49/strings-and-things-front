import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import Signup from "./components/Signup"
import Home from "./components/Home";
import Login from "./components/Login";

function App() {

  const [currentUser, setCurrentUser] = useState("")

 useEffect(()=>{
    fetch("/me")
    .then(r => {
      if (r.ok) {
        r.json().then(r => setCurrentUser(r))
      }else{
        r.json().then(r => console.log(r))
      }
    })
 }, [])
  
 function logout(){
  fetch("/logout", { method: "DELETE"}).then(r=>{
    if (r.ok){
      setCurrentUser("")
    }
  })
}
  
  return (
    // <div className="App">
      
    //   {currentUser ? 
    //   <div>
    //   <h1>{currentUser.username}</h1>
    //   <button onClick={logout} >logout</button>
    //   </div>:
    //   <div></div>}
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/signup" >
         <Signup/>
        </Route>
        <Route path="/login" >
         <Login setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    // </div>
  );
}

export default App;
