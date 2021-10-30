import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";

function Addresses({currentUser, setDisplayedAddresses, displayedAddresses}){

    const [address, setAddress] = useState("")
    const [apt, setApt] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")

    const history = useHistory()

    const newAddy = {
        user_id: currentUser.id,
        address: address,
        apt: apt,
        city: city,
        state: state,
        zipcode: zipcode
    }

    function updateAddress(){
        setDisplayedAddresses([...displayedAddresses, newAddy])
    }
    
    function addAddress(e){
        e.preventDefault()
        fetch("/addresses", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newAddy)
          }).then(r => {
              if (r.ok){
                  r.json().then(updateAddress()).then(history.push("/user-account-page"))
              }else{
                  r.json().then(r => console.log(r.errors))
              }
          })
    }

    function handleChange(e){
        const target = e.target.value
        const id = e.target.id
        if (id == "Address") {
            setAddress(target)
        } else if(id == "Apt") {
            setApt(target)
        } else if(id == "City"){
            setCity(target)
        } else if(id == "State"){
            setState(target)
        } else if (id == "Zipcode" ){
            setZipcode(target)
        }
    }

    function goTo(e){
        history.push(e.target.value)
    }
    
    return(
        <div style={{backgroundColor:"#c2c7c0"}} className="middle">
            <div style={{backgroundColor: "white", padding: "100px"}} className="column" >
                <h2>Add New Address</h2>
                <form className="column" onSubmit={addAddress} >
                <TextField
                id = "Address"
                label="Address"
                type="text"
                value={address}
                onChange={handleChange}
                />
                <TextField
                id = "Apt"
                label="Apt"
                type="text"
                value={apt}
                onChange={handleChange}
                />
                <TextField
                id = "City"
                label="City"
                type="text"
                value={city}
                onChange={handleChange}
                />
                <TextField
                id = "State"
                label="State"
                type="text"
                value={state}
                onChange={handleChange}
                />
                <TextField
                id = "Zipcode"
                label="Zipcode"
                type="text"
                value={zipcode}
                onChange={handleChange}
                />
                <Button
                 type="submit"
                 variant="contained"
                 sx={{backgroundColor: "black"}}
                   >Add</Button>
                </form>
                <div style={{alignSelf: "flex-end", margin: 0}} >
                    <Button onClick={goTo} value="/" sx={{ margin: 1, padding: 0, color: "orange"}} >Home</Button>
                    <Button onClick={goTo} value="/user-account-page" sx={{ margin: 1, padding: 0,  color: "orange"}} >Account</Button>
                </div>
            </div>
        </div>
    )
}
export default Addresses