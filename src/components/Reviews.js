import { Rating } from "@mui/material"
import React from "react"


function Reviews({review}){

    function log(){
        console.log(review.include_user)
    }
    
    return(
        <div className="justify-center-reviews" >
            <h3>{review.include_user}</h3>
            <Rating name="rating" value={review.star_rating} precision={0.5} readOnly />
            <p style={{fontSize: "20px"}} >{review.comment}</p>
        </div>
    )
}
export default Reviews
