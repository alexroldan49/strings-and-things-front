import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddressOption from './AddressOption'
import { Button } from "@mui/material";
import PaymentMethod from "./PaymentMethod";


function Checkout( {currentUser} ){
    const [address, setAddress] = useState("")

    let date = new Date().toUTCString().slice(0, 16);

    let storage = JSON.parse(localStorage.getItem("cart"))

    const productIds = storage.map(product =>{
        return({product_id: product.id})
    })

    const storageTotal = storage.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    const total = storageTotal.toFixed(2)

    const mappedCart = storage.map(product =>{
        const style = {
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper'
          };
    
        return(
            <List sx={style} component="nav"    sx={{
                width: '100%',
                minWidth: 360,
                maxWidth: 3600,
                height: 150,
                bgcolor: 'background.paper',
            }} >
                <ListItem sx={{textAlign: "center", backgroundColor: "rgb(31, 31, 31)", color: "white"}} className="list-item" button>
                    <ListItemText sx={{fontWeight: "bold"}} primary="ITEM" />
                </ListItem>
                <Divider />
                <ListItem className="list-item" button divider>
                    <ListItemText secondary={product.brand} />
                </ListItem>
                <ListItem className="list-item" button>
                    <ListItemText secondary={product.name}  />
                </ListItem>
                <Divider light />
                <ListItem className="list-item" button>
                    <ListItemText secondary={`Price: $${product.price}`}  />
                </ListItem>
            </List>
        )
    })

    const orderBody = {
        user_id: currentUser.id,
        status: "In Progress",
        order_date: date,
        order_total: total,
        shipping: address,
        product_orders: [...productIds]
    }

    function placeOrder(){

        fetch("/orders", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(orderBody)
        }).then(r => {
            if (r.ok) {
                r.jon().then()
            } else {
                
            }
        })
    }
   
    return(
        <>
            <div style={{display:"flex", justifyContent: "center"}} >
            <h1>Chechout</h1>
            </div>
            <div className="Checkout-page" >
                <div className="column" >
                    {mappedCart}
                </div>
                <div>
                    <div className="checkout-box" >
                        <h3>Shipping Address</h3>
                        <AddressOption setAddress={setAddress} address={address} currentUser={currentUser} />
                        <Button sx={{color: "black"}} >Add New Address</Button>
                    </div>
                    <div className="checkout-box">
                        <h3>Payment Method</h3>
                        <PaymentMethod />
                    </div >
                </div>
                <div>
                    <div className="checkout-box">
                        <h2>Summary</h2>
                        <div style={{textAlign: "left", color: "#5b5b5b"}} >
                            <h4>{`${storage.length} items in cart`}</h4>
                            <h4>Shipping and Handling : $00.00</h4>
                            <h4>Taxes : $00.00</h4>
                        </div>
                        <Divider />
                        <div style={{backgroundColor: "rgb(31, 31, 31)", width:"inherit", color: "white"}} >
                            <h1>{`Total : $${total}`}</h1>
                            <Button onClick={()=>console.log(date)} >Place Order</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout