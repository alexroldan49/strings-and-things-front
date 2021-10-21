import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';


function PaymentMethod(){


    return(
        <div className="column" >
            <TextField
            sx={{width: "300px"}}
                id="input-with-icon-textfield"
                label="Card Number"
                placeholder="Enter Card Number..."
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <CreditCardOutlinedIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <div style={{marginBottom: "20px"}} >
            <TextField
                sx={{width: "130px"}}
                id="input-with-icon-textfield"
                label="Expiration Date"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccessTimeOutlinedIcon/>
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <TextField
                sx={{width: "130px", marginLeft: 3}}
                id="input-with-icon-textfield"
                label="CVC"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <HttpsOutlinedIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            </div>
        </div>
    )
}

export default PaymentMethod