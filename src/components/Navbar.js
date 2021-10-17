import { Input, InputAdornment, Typography } from "@mui/material";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InputLabel } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router";

function Navbar(){

    const history = useHistory()

    function handleSwitchLogin(e){
        history.push("/login")
    }

    return(
        <nav className="navbar">
                    <a className="logo">Strings and Things</a>
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
                    <ShoppingCartIcon
                    sx={{color:"#a5362e", fontSize: "35px", cursor: "pointer"}}
                    />
                </li>
            </ul>
        </nav>
    )
}
export default Navbar