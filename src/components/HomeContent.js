import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

function HomeContent({ mappedCategories}){

  
   
   
    
    return(
        <>
        <img src="https://i.ibb.co/x1ZnBdW/banner-top-yamaha.png" alt="playing guitar" width="100%" height="50%"  />
        <div className="shop-now" >
        <Button sx={{height: "80px",width: "200px", borderRadius: "20px", backgroundColor: "#a5362e"}} variant="contained">Shop Now</Button>
        </div>
        </>
    )
}
export default HomeContent