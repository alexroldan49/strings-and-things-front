import { Button, Drawer, Paper } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";


function Cart({ currentUser, mappedCategories}){
    let storage = JSON.parse(localStorage.getItem("cart"))
    const [cartProducts, setCartProducts] = useState([])

    const history = useHistory()
    
    function checkout(){
        history.push("/checkout")
    }
  
    const storageTotal = storage.map(item => item.price).reduce((prev, curr) => prev + curr, 0)
    const total = storageTotal.toFixed(2)
    
    const mappedCart = storage.map(product =>{
        function removeItem(){
            let stored = JSON.parse(localStorage.getItem("cart"))
            let filteredStorage = stored.filter(item =>{
               return item.id !== product.id
            })
            console.log(filteredStorage)
            localStorage.setItem("cart", JSON.stringify(filteredStorage))
            window.location.reload(true); 
        }
        return(
            <div className="cart-items" >
                <div style={{display: "flex", flexDirection: "row"}} >
                    <img width="250px" height="250px" src={product.image} />
                    <div className="item-info">
                        <h4>{product.name}</h4>
                        <h3>{`Price: $${product.price} `}</h3>
                        <div className="remove" >
                        <Button onClick={removeItem} sx={{height: "20px", width: "80px"}} color="error" variant="contained" >Remove</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    const mappedList = storage.map( product =>{
        return(
            <div className="item" >
                <p>{`Item Name : ${product.name.slice(0,30)}...`}</p>
                <p>{`Price : ${product.price}`}</p>
            </div>
        )
    })
    
    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <div className="inline" >
        <div >
            {mappedCart}
        </div>
            <div style={{width: "60%", display: "flex", justifyContent: "center"}} >
                {mappedList.length <=5 ?
                    <Paper className="checkout" elevation={24} >
                    <h1>Shopping Cart</h1>
                    <div className="item" ></div>
                    {mappedList}
                    <div style={{alignSelf: "flex-end"}} >
                        <h2>Subtotal</h2>
                        <h2>{`$${total}`}</h2>
                    </div>
                    <Button onClick={checkout} variant="contained" >Checkout</Button>
                </Paper>
                :
                <Paper className="item-unfixed" elevation={24} >
                <h1>Shopping Cart</h1>
                <div className="item" ></div>
                {mappedList}
                <div style={{alignSelf: "flex-end"}} >
                    <h2>Subtotal</h2>
                    <h2>{`$${total}`}</h2>
                </div>
                <Button sx={{marginBottom:"30px"}} onClick={checkout} variant="contained" >Checkout</Button>
            </Paper>
                }
            </div>
        </div>
        </>
    )
}
export default Cart