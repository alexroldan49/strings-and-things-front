import { Input, InputAdornment, Typography } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InputLabel } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar( {mappedCategories} ){

    const history = useHistory()

    function handleSwitchLogin(e){
        history.push("/login")
    }

    function handleSwitchHome(){
        history.push("/")
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
                    <Input
                    placeholder="Search Item..."
                    sx={{backgroundColor:"white"}}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                          <SearchIcon sx={{fontSize: "30px"}} />
                        </InputAdornment>}
                    />
                </li>
                <li>
                    <AccountCircleOutlinedIcon sx={{fontSize: "35px", cursor: "pointer"}} value="/login" onClick={handleSwitchLogin} />
                </li>
                <li>
                    <div className="inline" >
                    <ShoppingCartIcon
                    sx={{color:"#a5362e", fontSize: "35px", cursor: "pointer"}}
                    />
                    {localStorage.cart? <div><h4>{storage.length}</h4></div> : <div></div> }
                    
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