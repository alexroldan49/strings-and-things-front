import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import ProductList from "./ProductList";
import SuccessLogin from "./SuccessLogin";

function Home({currentUser, mappedCategories, handleSearchBar, setProducts, prodsMemory, products, open, setOpen}){



return(
    <div className="container">
        <section className="section-one" >
            <Navbar products={products} setProducts={setProducts} prodsMemory={prodsMemory} handleSearchBar={handleSearchBar} currentUser={currentUser} mappedCategories={mappedCategories} />
            <HomeContent mappedCategories={mappedCategories}/>
            <SuccessLogin open={open} setOpen={setOpen} currentUser={currentUser} />
        </section>
        <section className="section-two" >
        
        </section>
        <section className="section-three" >

        </section>
    </div>
        /* <button value="/signup" onClick={handleHistory} >Signup</button>
        <button value="/login" onClick={handleHistory} >Login</button> */


    
)
}

export default Home