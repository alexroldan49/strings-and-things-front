import React, { useState } from "react";
import Navbar from "./Navbar";
import { ButtonGroup, Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Product from "./Product";
import LeftDrawer from "./LeftDrawer";
import BottomNav from "./BottomNav";


function ProductList( { brand, setBrand, currentUser, cart, setCart, category, mappedCategories} ){
    
    
    const [prods, setProds] = useState([])

    function filterItems(e){
        setProds(category.products.filter(item=>{
            return item.brand === e.target.value
        }))
    }
    
    let mappedProds = prods.map( product => {
        return( <Product cart={cart} setCart={setCart} product={product} />)
})

    const mappedCards = category.products.map( product => {
            return( <Product cart={cart} setCart={setCart} product={product} />)
    })
    
    return(
        <>
        <LeftDrawer filterItems={filterItems} category={category} brand={brand} setBrand={setBrand} />
        <Navbar setBrand={setBrand} currentUser={currentUser} mappedCategories={mappedCategories} />
        <div className="inline3" >
        <div className="product-grid">
        {!brand ? mappedCards : mappedProds}
        </div>

        </div>
        </>
    )
}
export default ProductList