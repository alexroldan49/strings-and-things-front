import React, { useState } from "react";
import { ButtonGroup, Card, CardActionArea, CardContent, IconButton } from "@mui/material";
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useHistory } from "react-router";


function Product({ cart, setCart, product}){
    const [quantity, setQuantity] = useState(0)
    const [addedtoCart, setAddedToCart] = useState(false)
    const history = useHistory()


    function addItem(){
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
        console.log(cart)
    }

    function handleChange(){
        history.push(`/product/${product.id}`)
    }

    return(
            <li className="product-card">
                <Card sx={{ maxWidth: 345, minHeight: 550 }}>
                <CardActionArea onClick={handleChange} >
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
                <div className="row" >
                <ButtonGroup
                    sx={{marginRight: "5px"}}
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                <IconButton >
                    <KeyboardArrowUpRoundedIcon sx={{color: "rgb(255, 136, 0)"}} />
                </IconButton>
                <IconButton>
                    <AddCircleOutlinedIcon onClick={addItem} sx={{color: "rgb(255, 136, 0)"}} />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownRoundedIcon sx={{color: "rgb(255, 136, 0)"}} />
                </IconButton>
                </ButtonGroup>
                    {addedtoCart ? <h3 className="added">Added to Cart</h3> : <div></div> }
                </div>
                </Card>
                </li>)
}
export default Product