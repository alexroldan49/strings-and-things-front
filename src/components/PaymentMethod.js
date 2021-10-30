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


function PaymentMethod( {cardNumber, setCardNumber, expiration, setExpiration, cvc, setCvc} ){

    function handleInput(e){
        const target = e.target.value
        const id = e.target.id
        if (id == "cardNumber") {
            setCardNumber(target)
        } else if(id == "expirationDate") {
            setExpiration(target)
        } else if(id == "cvc"){
            setCvc(target)
        }
    }

    return(
        <div className="column" >
            <TextField
            sx={{width: "300px"}}
                id="cardNumber"
                onChange={handleInput}
                label="Card Number"
                value={cardNumber}
                placeholder="Enter Card Number..."
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <CreditCardOutlinedIcon />
                    </InputAdornment>
                ),
                }}
                
            />
            <div style={{marginBottom: "20px"}} >
            <TextField
                sx={{width: "130px"}}
                id="expirationDate"
                onChange={handleInput}
                label="Expiration Date"
                value={expiration}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AccessTimeOutlinedIcon/>
                    </InputAdornment>
                ),
                }}
                
            />
            <TextField
                sx={{width: "130px", marginLeft: 3, color:"white"}}
                id="cvc"
                type="password"
                onChange={handleInput}
                label="CVC"
                value={cvc}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <HttpsOutlinedIcon  />
                    </InputAdornment>
                ),
                }}
                
            />
            </div>
        </div>
    )
}

export default PaymentMethod