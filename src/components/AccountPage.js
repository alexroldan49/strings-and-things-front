import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";


function AccountPage( { mappedCategories, setCurrentUser, currentUser}){

    const history = useHistory()

    function handleChange(e){
        history.push(e.target.id)
    }
    
    function logout(){
        fetch("/logout", { method: "DELETE"}).then(r=>{
          if (r.ok){
            setCurrentUser(null)
          }
        })
        history.push("/")
      }

    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <h1>{`You are Logged in! welcome ${currentUser.username}`}</h1>
        <Button onClick={logout}>logout</Button>
        <div className="inline2" >
            <div onClick={handleChange} id="/addresses" className="box" ><h1 className="picture-text" >Addresses</h1></div>
            <div onClick={handleChange} id="/order-history" className="box" ><h1 className="picture-text" >Order History</h1></div>
            <div onClick={handleChange} id="/reviewed" className="box" ><h1 className="picture-text" >Reviewed Items</h1></div>
        </div>

        </>
    )
}
export default AccountPage