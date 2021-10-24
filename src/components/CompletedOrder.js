import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";


function CompletedOrder({completedOrder}){

    const history = useHistory()

    function handleClick(e){
        history.push(e.target.id)
    }


    return(
            <div  className="middle2" >
                <div className="completedOrder" >
                    <h1>Completed Order</h1>
                    <div className="apart" >
                    </div>
                    <div className="apart" >
                        <h4>Status :</h4>
                        <h4>{completedOrder.status}</h4>
                    </div>
                    <div className="apart" >
                        <h4>Order Date :</h4>
                        <h4>{completedOrder.order_date}</h4>
                    </div>
                    <div className="apart" >
                        <h4>Shipping to :</h4>
                        <h4>{completedOrder.shipping}</h4>
                    </div>
                    <div className="apart" >
                        <h3 style={{fontWeight: "900"}} >Order Total :</h3>
                        <h3 style={{fontWeight: "900"}} >{`$${completedOrder.order_total}`}</h3>
                    </div>
                    <Button onClick={handleClick} id="/" sx={{alignSelf: "end", justifySelf: "end", marginRight: "120px", marginTop: "100px", marginBottom: "25px"}} >Go Home</Button>
                    <Button onClick={handleClick} id="/order-history" sx={{alignSelf: "end", justifySelf: "end", marginRight: "120px"}} >View All Orders</Button>
                </div>
            </div>
            )
}
export default CompletedOrder