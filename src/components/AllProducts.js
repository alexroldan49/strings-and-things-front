import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import LeftDrawer from "./LeftDrawer";
import Product from "./Product";
import AllProductsDrawer from "./AllProductsDrawer";
import BottomNav from "./BottomNav";


function AllProducts({ setRecentlyViewed, cart, setCart, categories, products, mappedCategories, brand, setBrand}){

    const mappedAllProductCategories = categories.map(category=>{
        return category.products
    })

    const [prods, setProds] = useState([])
    
    const categ = products.map(pro=>{
        return pro
    })

    let mappedProds = prods.map( product => {
        return( <Product setRecentlyViewed={setRecentlyViewed} cart={cart} setCart={setCart} product={product} />)
})

    function filterItems(e){
        setProds(products.filter(item=>{
            return item.brand === e.target.value
        }))
    }

    const mappedCards = products.map( product => {
        return(<Product setRecentlyViewed={setRecentlyViewed} cart={cart} setCart={setCart} product={product}/>)
})
function check(){
    console.log(categories)
}

    return(
        <>
        <AllProductsDrawer filterItems={filterItems} category={categ} brand={brand} setBrand={setBrand} products={products} />
        <Navbar mappedCategories={mappedCategories} category={categ} />
        <div className="wrapper" >
            <div className="product-grid">
            {!brand ? mappedCards : mappedProds}
            </div>
        </div>
        <BottomNav />
        </>
    )
}
export default AllProducts