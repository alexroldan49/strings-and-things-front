import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";

function HomeContent({ mappedCategories}){
    const history = useHistory()
  
   function handleChange(){
       history.push("/products")
   }
   
    
    return(
        <>
        <img src="https://i.ibb.co/QDYx8Jz/Thank.png" className="home-img" alt="playing guitar" width="100%" height="55%"  />
        <div className="shop-now" >
        <Button onClick={handleChange} sx={{height: "80px",width: "200px", borderRadius: "20px", backgroundColor: "#a5362e"}} variant="contained">Shop Now</Button>
        </div>
        </>
    )
}
export default HomeContent