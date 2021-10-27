import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import ProductList from "./ProductList";
import SuccessLogin from "./SuccessLogin";
import Product from "./Product";
import RecentProduct from "./RecentProduct";

function Home({currentUser, mappedCategories, handleSearchBar, setProducts, prodsMemory, products, open, setOpen, recentlyViewed, setRecentlyViewed, cart, setCart}){

    let slicedViewedProducts = recentlyViewed.slice(0, 5)
    
    const mappedRecentlyViewed = slicedViewedProducts.map(product=>{
       return ( <div className="inline" >
                    <RecentProduct setRecentlyViewed={setRecentlyViewed} cart={cart} setCart={setCart} product={product} />
                </div>)
    })

return(
    <div className="container">
        <section className="section-one" >
            <Navbar products={products} setProducts={setProducts} prodsMemory={prodsMemory} handleSearchBar={handleSearchBar} currentUser={currentUser} mappedCategories={mappedCategories} />
            <HomeContent mappedCategories={mappedCategories}/>
            <SuccessLogin open={open} setOpen={setOpen} currentUser={currentUser} />
        </section>
        <section className="section-two" >

        </section>
        <section className="section-two" >
            <div className="home-section-two" >
                    <h1 className="alex-font" style={{color: "white", fontSize: "55px"}} >Recently Viewed</h1>
                <div className="home-recently-viewed" >
                     {mappedRecentlyViewed}
                </div>
            </div>
        </section>
    </div>
        /* <button value="/signup" onClick={handleHistory} >Signup</button>
        <button value="/login" onClick={handleHistory} >Login</button> */


    
)
}

export default Home