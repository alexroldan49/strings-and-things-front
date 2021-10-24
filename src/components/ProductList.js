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


function ProductList( { brand, setBrand, currentUser, cart, setCart, category, mappedCategories} ){
    
    
    const [prods, setProds] = useState([])

    function filterProducts(){
        if (brand === "Fender") {
           setProds(category.products.filter(item=>{
                return item.brand === "Fender"
            }))
        } else if(brand === "Yamaha") {
            setProds(category.products.filter(item=>{
                return item.brand === "Yamaha"
            }))
        } else if(brand === "Gibson") {
            setProds(category.products.filter(item=>{
                return item.brand === "Gibson"
            }))
        }  else if(brand === "Epiphone") {
            setProds(category.products.filter(item=>{
                return item.brand === "Epiphone"
            }))
        } else if(brand === "Pearl") {
            setProds(category.products.filter(item=>{
                return item.brand === "Pearl"
            }))
        } else if(brand === "Tama") {
            setProds(category.products.filter(item=>{
                return item.brand === "Tama"
            }))
        } else{
            return category.products
        }
    }
    let mappedProds = prods.map( product => {
        return( <Product cart={cart} setCart={setCart} product={product} />)
})

    const mappedCards = category.products.map( product => {
            return( <Product cart={cart} setCart={setCart} product={product} />)
    })

    return(
        <>
        <Navbar setBrand={setBrand} currentUser={currentUser} mappedCategories={mappedCategories} />
        <LeftDrawer category={category} filterProducts={filterProducts} brand={brand} setBrand={setBrand} />
        <div className="inline3" >
        <div className="product-grid">
        {!brand ? mappedCards : mappedProds}
        </div>

        </div>

        </>
    )
}
export default ProductList