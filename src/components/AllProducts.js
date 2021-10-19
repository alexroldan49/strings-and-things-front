import React from "react";
import Navbar from "./Navbar";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';


function AllProducts({products, mappedCategories}){

    const mappedCards = products.map( product => {
        return(<li className="product-card">
            <Card sx={{ maxWidth: 345, minHeight: 550 }}>
            <CardActionArea>
            <CardMedia 
             component="img"
             height="400px"
             image={product.image}
             alt={product.name}
             />
             <CardContent>
                <Typography sx={{textAlign: "center", marginTop: "30px"}} gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography sx={{marginLeft: "20px"}} variant="h6" color="green">
                    {`$${product.price}`}
                </Typography>
             </CardContent>
            </CardActionArea>
            </Card>
            </li>)
})

    return(
        <>
        <Navbar mappedCategories={mappedCategories} />
        <div className="wrapper" >
            <h1>test</h1>
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
export default AllProducts