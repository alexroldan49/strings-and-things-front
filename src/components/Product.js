import React, { useEffect, useState } from "react";
import { ButtonGroup, Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useHistory } from "react-router";
import Rating from '@mui/material/Rating';


function Product({ cart, setCart, product, setRecentlyViewed, currentUser }){
    const [quantity, setQuantity] = useState(0)
    const [addedtoCart, setAddedToCart] = useState(false)
    const history = useHistory()


    function addItem(){
        if (currentUser){
            setAddedToCart(true)
            setTimeout(() => {
                setAddedToCart(false)
              }, 2500);
            if (JSON.parse(localStorage.getItem("cart")) === null)  {
                // localStorage.setItem("cart", JSON.stringify([]))
                setCart([product])
                localStorage.setItem("cart", JSON.stringify([product]))
            } else {
                let storage = JSON.parse(localStorage.getItem("cart"))
                setCart([...storage, product])
                localStorage.setItem("cart", JSON.stringify([...storage, product]))
            }
        }else{
            alert("Sign in to add to cart")
        }
        console.log(cart)
    }

    function handleChange(){
        if (JSON.parse(localStorage.getItem("viewed")) === null)  {
            localStorage.setItem("viewed", JSON.stringify([product]))
        } else {
            let storage = JSON.parse(localStorage.getItem("viewed"))
            if (storage.length > 4) {
            let storeLimit = JSON.parse(localStorage.getItem("viewed")).slice(2,5)
            localStorage.setItem("viewed", JSON.stringify([...storeLimit, product]))
            setRecentlyViewed([...storeLimit, product])
            } else {
                localStorage.setItem("viewed", JSON.stringify([...storage, product]))
                setRecentlyViewed([...storage, product])
            }
        }
        history.push(`/product/${product.id}`)
    }

    
    
    return(
            <li className="product-card">
                <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                <CardActionArea onClick={handleChange} >
                <CardMedia 
                 component="img"
                 height="340px"
                 image={product.image}
                 alt={product.name}
                 />
                 <CardContent>
                    <Typography sx={{textAlign: "center", marginTop: "30px", fontSize: "20px"}} gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <div style={{display: "flex", justifyContent: "center"}} >
                    <Rating name="read-only" value={product.rating_average} readOnly />
                    </div>
                    <Typography sx={{marginLeft: "20px"}} variant="h6" color="green">
                        {`$${product.price}`}
                    </Typography>
                 </CardContent>
                </CardActionArea>
                <div className="row" >
                    <ButtonGroup
                        sx={{marginRight: "5px"}}
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        <IconButton>
                            <AddCircleOutlinedIcon onClick={addItem} sx={{color: "rgb(255, 136, 0)", marginLeft: "15px", marginBottom: "20px", fontSize: "30px"}} />
                        </IconButton>
                    </ButtonGroup>
                        
                        {addedtoCart ? <h3 className="added">Added to Cart</h3> : <div></div> }
                </div>
                </Card>
                </li>)
}
export default Product