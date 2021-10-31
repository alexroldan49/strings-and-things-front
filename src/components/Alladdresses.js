import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { useHistory } from "react-router";


function Alladdresses({currentUser}){

    const history = useHistory()

    function handleHistory(){
        history.push("/add-addresses")
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "100px",
        width: "500px",
        lineHeight: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
      }));
      
      const mappedAddresses = currentUser.addresses.map(address =>{
          return(
            <Item  elevation="18">
                <div>
                    <h3>{currentUser.username}</h3>
                    <h3>{`${address.address} ${address.apt} ${address.city} ${address.city} ${address.state} ${address.zipcode} `}</h3>
                </div>
          </Item>
          )
      })

    return(
        <>
            <div>
                <div >
                    <div >
                        <h2>Saved Addresses</h2>
                        <div >
                            {mappedAddresses}
                        </div>
                    </div>
                </div>
                <Button onClick={handleHistory} color="secondary" >Add Shipping Address</Button>
            </div>
        </>
    )
}
export default Alladdresses