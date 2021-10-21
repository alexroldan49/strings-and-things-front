import React from "react";


function OrderHistory({currentUser}){

    const mappedOrders = currentUser.orders.map(order =>{
       return( <div className="box2">
            <p>{order.status}</p>
            <p>{order.order_date}</p>
            <p>{order.order_total}</p>
            <p>{order.shipping}</p>
            <p>{order.status}</p>
        </div>)
    })

    return(
        <>
        <h2>order History</h2>
        {mappedOrders}
        </>
    )
}

export default OrderHistory