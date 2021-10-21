import React, { useState } from "react";
import Navbar from "./Navbar";
import { ButtonGroup, Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Product from "./Product";


function ProductList( {currentUser, cart, setCart, category, mappedCategories} ){

   
    
    const mappedCards = category.products.map( product => {
            return( <Product cart={cart} setCart={setCart} product={product} />)
    })

    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <div className="wrapper" >
        <nav>
            <ul >
            </ul>
        </nav>
        <div className="product-grid">
        {mappedCards}
        </div>

        </div>

        </>
    )
}

export default ProductList