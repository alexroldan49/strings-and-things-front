import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";


function UserPage(){

    const history = useHistory()
    
    function handleChange(e){
        history.push(e.target.value)
    }

    return(
        <>
        <Button value="/login" onClick={handleChange} >Login</Button>
        <Button value="/signup" onClick={handleChange} >Signup</Button>
        </>
    )
}
export default UserPage