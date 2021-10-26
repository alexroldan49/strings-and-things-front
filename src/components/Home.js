import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";
import ProductList from "./ProductList";

function Home({currentUser, mappedCategories, handleSearchBar, setProducts, prodsMemory, products}){



return(
    <div className="container">
        <section className="section-one" >
            <Navbar products={products} setProducts={setProducts} prodsMemory={prodsMemory} handleSearchBar={handleSearchBar} currentUser={currentUser} mappedCategories={mappedCategories} />
            <HomeContent mappedCategories={mappedCategories}/>
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