import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Rating from '@mui/material/Rating';
import Reviews from "./Reviews";
import BottomNav from "./BottomNav";


function ProductPage({ currentUser, product, cart, setCart, mappedCategories}){
    const [image, setImage] = useState(product.image)
    const [addedtoCart, setAddedToCart] = useState(false)
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(0)
    const [reviews, setReviews] = useState(product.reviews)
    const [errorMessages, setErrorMessages] = useState("")
    const [reviewCount, setReviewCount] = useState(product.reviews.length)
    const [stars, setStars] = useState(product.rating_average)
    const history = useHistory()
    const [zoom, setZoom] = useState(false)

    const reviewBody = {
        comment: comment,
        star_rating: rating,
        user_id: currentUser.id,
        product_id: product.id
    }

    function toggleZoom(){
        setZoom(!zoom)
    }
    
    function newAverage(){
        let added = stars + rating
        if (product.reviews.length >= 1){
            setStars(added/2)
        }else{
            setStars(rating)
        }
    }
    
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

    const mappedReviews = reviews.map(review =>{
        return <Reviews review={review} />
    })

    function handleComment(e){
        setComment(e.target.value)
    }

    function handleImage(e){
        setImage(e.target.src)
    }

    function submitComment(e){
        e.preventDefault()
        fetch("/reviews", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(reviewBody)
        }).then(r=> {
            if (r.ok) {
                r.json().then(rev => setReviews([...reviews, rev])).then(newAverage())
                .then(setComment("")).then(setRating(0)).then(setReviewCount(reviewCount + 1))
            } else {
                r.json().then(r => setErrorMessages(r.errors.full_message))
            }
        })
        
    }
    
    
    
    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <div className="product-page" >
            <div >
               <img onClick={toggleZoom} width="575px" height="575px" src={image}  /> 
                
                <div style={{marginLeft: "150px", marginTop: "20px"}} >
                <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.image}  />
                {product.back_image ? <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.back_image}  /> : ""}
                {product.third_image ? <img style={{cursor: "pointer"}} onClick={handleImage} width="100px" height="100px" src={product.third_image}  /> : "" }
                
                </div>
            </div>
            <div style={{width: "600px", MaxHeight: "600px", display: "flex", justifyContent: "center", padding: "40px", alignItems: "center", flexDirection: "column"}} >
                <h2 >{` Brand: ${product.brand}`}</h2>
                <h1 >{product.name}</h1>
                <div style={{gap: "10px", color: "gray", fontWeight: "lighter"}} className="row" >
                    <h2>{stars.toFixed(2)}</h2>
                    <Rating sx={{fontSize:"40px"}} name="read-only" value={stars} precision={0.5} readOnly />
                    <h2>{`(${reviewCount} reviews)`}</h2>
                </div>
                <div className="description">
                <p>Description :</p>
                    <h3>{product.description}</h3>
                </div>
                <h2 style={{color:"green"}} >{`Price: $${product.price}`}</h2>
                {addedtoCart ? <div style={{display:"flex", flexDirection: "row"}}><h3 style={{color:"green", fontSize: "25px"}}>Added to Cart</h3> <CheckCircleIcon sx={{fontSize: "30px"}} color="success" /></div> :  
                <Button 
                onClick={addItem}
                variant="contained" 
                color="success" 
                sx={{height: "70px", width: "250px", fontSize: "20px", margin: "10px"}} 
                > Add to cart</Button>}
            </div>
        </div>
        <div className="justify-center" >
            <div style={{borderTop: "solid gray"}} className="column" >
                <h1>Review This Item</h1>
                <form
                 onSubmit={submitComment}
                 style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{gap:"8px"}} className="row">
                    <Rating
                        sx={{fontSize:"29px"}}
                        name="simple-controlled"
                        precision={0.5}
                        value={rating}
                        onChange={(event, newValue) => {
                        setRating(newValue);
                        }}
                    />
                     { rating >= 1 ? <p>{`(${rating} star rating)`}</p> : <p>{`(no star rating provided)`}</p> }
                    </div>
                    <TextField
                    sx={{minWidth: "600px", textAlign: "center"}}
                    multiline
                    label="Let the World know how you feel about this product..."
                    type="text"
                    value={comment}
                    onChange={handleComment}
                    />
                    <div className="row" >
                        <p>Press Submit to post this comment</p>
                        {rating ? 
                        <Button
                        type="submit"
                         sx={{margin: "15px", backgroundColor: "rgba(206, 155, 62, 0.938)"}}
                         variant="contained"
                          >Submit</Button> :
                          <Button
                        type="submit"
                         sx={{margin: "15px", backgroundColor: "rgba(206, 155, 62, 0.938)"}}
                         variant="contained"
                         disabled >Submit</Button>
                    }
                    </div>
                    <Typography color="error" >{errorMessages}</Typography>
                </form>
               {mappedReviews}
            </div>
        </div>
        <BottomNav />
        </>
    )
    
}
export default ProductPage