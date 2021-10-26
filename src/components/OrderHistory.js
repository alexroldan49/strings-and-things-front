import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


function OrderHistory({orderHistory, currentUser}){

    
    
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
        <div>
        <div className="middle" >
          
            <div style={{ height: 700, width: '60%' }}>
            <h2>order History</h2>
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