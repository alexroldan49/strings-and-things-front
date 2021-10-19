import { Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function ProductPage({product, cart, setCart, mappedCategories}){
    const [image, setImage] = useState(product.image)
    const [addedtoCart, setAddedToCart] = useState(false)
    const history = useHistory()


    function addItem(){
        setAddedToCart(true)
        setTimeout(() => {
            setAddedToCart(false)
          }, 2500);
        if (JSON.parse(localStorage.getItem("cart")) === null)  {
            // localStorage.setItem("cart", JSON.stringify([]))
            setCart([product])
            localStorage.setItem("cart", JSON.stringify([product]))
        } else {
            let storage = JSON.parse(localStorage.getItem("cart"))
            setCart([...storage, product])
            localStorage.setItem("cart", JSON.stringify([...storage, product]))
        }
        console.log(cart)
    }


    function handleImage(e){
        setImage(e.target.src)
    }

    return(
        <>
        <Navbar mappedCategories={mappedCategories} />
        <div className="product-page" >
            <div >
                <img width="575px" height="575px" src={image}  />
                <div style={{marginLeft: "150px", marginTop: "20px"}} >
                <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.image}  />
                <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.back_image}  />
                <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.third_image}  />
                </div>
            </div>
            <div style={{width: "600px", MaxHeight: "600px", display: "flex", justifyContent: "center", padding: "40px", alignItems: "center", flexDirection: "column"}} >
                <h2 >{` Brand: ${product.brand}`}</h2>
                <h1>{product.name}</h1>
                <h3>{product.description}</h3>
                <h2 style={{color:"green"}} >{`Price: $${product.price}`}</h2>
                {addedtoCart ? <div style={{display:"flex", flexDirection: "row"}}><h3 style={{color:"green", fontSize: "25px"}}>Added to Cart</h3> <CheckCircleIcon sx={{fontSize: "30px"}} color="success" /></div> :  
                <Button 
                onClick={addItem}
                variant="contained" 
                color="success" 
                sx={{height: "80px", width: "300px", fontSize: "20px", margin: "10px"}} 
                > Added to cart</Button>}
            </div>

        </div>
        </>
    )
}
export default ProductPage