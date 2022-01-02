import { Button, Input, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InputLabel } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import UnAuthProfile from './UnAuthProfile';
import Box from '@mui/material/Box';

function Navbar( { setBrand, currentUser, mappedCategories, handleSearchBar, setProducts, prodsMemory, products} ){

    let stored = JSON.parse(localStorage.getItem("cart"))

    const [emptyCartMessage, setEmptyCartMessage] = useState(false)
    const [search, setSearch] = useState("")
    
    const history = useHistory()
    function handleChange(e){
        setSearch(e.target.value)
    }

    function handleSwitchLogin(e){
        if (currentUser) {
            history.push("/user-account-page")
        } else {
            history.push("/userpage")
        }
    }

    function handleSwitchHome(){

        history.push("/")
    }
    function handleCart(){
        if (stored) {
            history.push("/cart")
        } else {
            setEmptyCartMessage(true)
            setTimeout(() => {
                setEmptyCartMessage(false)
              }, 2500);
        }
    }

    let storage = JSON.parse(localStorage.getItem("cart"))

    return(
        <>
        <nav className="navbar">
            <div className="logo" onClick={handleSwitchHome} >
                    <h2>Strings and Things</h2>
            </div>
            <ul>
                <li>
                    {/* <form onSubmit={(e)=>handleSearchBar(e, search)}> */}
                    {/* <Box
                        component="form"
                        onSubmit={handleSearchBar}
                    > */}
                    <Input
                    id={search}
                    value={search}
                    onChange={(e)=>handleChange(e)}
                    placeholder="Search Item..."
                    sx={{backgroundColor:"white"}}
                    id="input-with-icon-adornment"
                    />
                    <Button className="navButton" sx={{height: "32px", marginBottom: "2px", backgroundColor: "black", color: "white"}} variant="contained" value={search} onClick={handleSearchBar} type="submit" >Enter</Button>
                    {/* </Box> */}
                    {/* </form> */}
                </li>
                <li>
                    {currentUser ? <AccountCircleOutlinedIcon sx={{fontSize: "35px", cursor: "pointer"}} value="/login" onClick={handleSwitchLogin} />
                    : < UnAuthProfile /> }
                    
                    
                </li>
                <li>
                    <div onClick={handleCart} className="inline" >
                    <ShoppingCartIcon
                    sx={{color:"#a5362e", fontSize: "35px", cursor: "pointer" }}
                    />
                    {localStorage.cart  ? <div><h4>{storage.length}</h4></div> : <div></div> }
                    { emptyCartMessage ?  <p style={{color: "orange", position: "fixed", marginTop: "40px"}} >Cart Is currently Empty</p> : "" }
                    </div>
                </li>
            </ul>
        </nav>
            <div className="subheader">
                <ul>
                    <li>
                    <MenuIcon px={{fontSize: "large"}}/>
                    </li>
                    {mappedCategories}
                </ul>
            </div>
        </>
    )
}
export default Navbar