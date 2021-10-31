import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from 'react-router';
import { Button } from '@mui/material';


function OrderHistory({orderHistory, currentUser}){

    const history = useHistory()

    function handleRoute(e){
        history.push(e.target.value)
    }
    
    const mappedOrders = orderHistory.map(order =>{
       return( <div>
            <p>{order.status}</p>
            <p>{order.order_date}</p>
            <p>{order.order_total}</p>
            <p>{order.shipping}</p>
        </div>)
    })
    const columns = [

        {
          field: 'status',
          headerName: 'Status',
          width: 180,
        },
        {
          field: 'order_date',
          headerName: 'Order Date',
          width: 150,
        },
        {
          field: 'order_total',
          headerName: '$ Total Amount',
          type: 'number',
          width: 150,
        },
        {
          field: 'shipping',
          headerName: 'Shipping Address',
          description: 'This column has a value getter and is not sortable.',
          width: 350,
        },
      ];

      const rows = [...orderHistory]

    return(
        <div >
        <div className="middle" >
          
            <div style={{ height: 700, width: '60%'}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#444444"}} >
                <h2 className="sleek" style={{color: "white", marginLeft: "20px"}} >order History</h2>
                <div className="inline" >
                <Button onClick={handleRoute} value="/" sx={{color: "white", marginRight: "15px"}} >Home</Button>
                <Button onClick={handleRoute} value="user-account-page" sx={{color: "white", marginRight: "15px"}} >Account</Button>
                </div>
              </div>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                />
            </div>
            {/* {mappedOrders ? mappedOrders : ""} */}
            
        </div>
        </div>
    )
}

export default OrderHistory