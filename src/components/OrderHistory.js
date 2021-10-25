import React from "react";


function OrderHistory({orderHistory, currentUser}){

    
    
    const mappedOrders = orderHistory.map(order =>{
       return( <div>
            <p>{order.status}</p>
            <p>{order.order_date}</p>
            <p>{order.order_total}</p>
            <p>{order.shipping}</p>
        </div>)
    })

    return(
        <div>
        <div className="middle" >
            <h2>order History</h2>
            
            {mappedOrders ? mappedOrders : ""}
            
        </div>
        </div>
    )
}

export default OrderHistory