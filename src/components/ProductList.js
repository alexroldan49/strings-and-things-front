import React from "react";
import Navbar from "./Navbar";



function ProductList( {mappedCategories} ){


    return(
        <>
        <Navbar mappedCategories={mappedCategories} />
        <div className="wrapper" >
            <h1>test</h1>
        <nav>
            <ul>
                <li><a>test</a></li>
                <li><a>test</a></li>
                <li><a>test</a></li>
                <li><a>test</a></li>
                <li><a>test</a></li>
            </ul>
        </nav>
        </div>

        </>
    )
}

export default ProductList