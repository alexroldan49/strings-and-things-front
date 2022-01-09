import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import ProductList from "./ProductList";
import SuccessLogin from "./SuccessLogin";
import Product from "./Product";
import RecentProduct from "./RecentProduct";

function Home({currentUser, mappedCategories, handleSearchBar, setProducts, prodsMemory, products, open, setOpen, recentlyViewed, setRecentlyViewed, cart, setCart}){

    const [homeImage, SetHomeImage] = useState("https://i.ibb.co/hyFLfN7/play-fender-stratocaster-blue-guitar-strat-wallpaper-preview-Home1.jpg")
    
    let slicedViewedProducts = recentlyViewed.slice(0, 5)
    
    const mappedRecentlyViewed = slicedViewedProducts.map(product=>{
       return ( <div className="inline" >
                    <RecentProduct setRecentlyViewed={setRecentlyViewed} cart={cart} setCart={setCart} product={product} />
                </div>)
    })

    function handleHover(e){
        SetHomeImage(e.target.id)
    }
    
return(
    <div className="container">
        <section className="section-one" >
            <Navbar products={products} setProducts={setProducts} prodsMemory={prodsMemory} handleSearchBar={handleSearchBar} currentUser={currentUser} mappedCategories={mappedCategories} />
            <HomeContent mappedCategories={mappedCategories}/>
            <SuccessLogin open={open} setOpen={setOpen} currentUser={currentUser} />
        </section>
        <section className="section-second" >
            <div className="home-images">
                <img height="600px" width="1000px" style={{borderRadius: "15px"}} className="home-img" src={homeImage} />
                <div className="home-img-text" >
                    <h2 className="text" onMouseOver={handleHover} id="https://i.ibb.co/hyFLfN7/play-fender-stratocaster-blue-guitar-strat-wallpaper-preview-Home1.jpg" >Discover Your Sound</h2>
                    <h2 className="text" onMouseOver={handleHover} id="https://i.ibb.co/pRbMHL4/audience-band-concert-crowd.jpg" >Soothe Your Soul</h2>
                    <h2 className="text" onMouseOver={handleHover} id="https://i.ibb.co/GcWRD4h/guitar-electric-guitar-stringed-instrument-musical-instrument.jpg" >Become lifted</h2>
                    <h2 className="text" onMouseOver={handleHover} id="https://i.ibb.co/C0SMsk3/4k-wallpaper-blur-close-up-depth-of-field.jpg" >Discover Yourself</h2>
                </div>
            </div>
        </section>
        <section className="section-two" >
            <div className="home-section-two" >
            <p  className="alex-font" style={{color: "white", fontSize: "24px"}} >"The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers." -Roy Ayers</p>
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