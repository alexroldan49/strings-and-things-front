import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator'

function OrderHistory({orderHistory, currentUser}){

    
    
    const mappedOrders = orderHistory.map(order =>{
       return( <div>
            <p>{order.status}</p>
            <p>{order.order_date}</p>
            <p>{order.order_total}</p>
            <p>{order.shipping}</p>
        </div>)
    })
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 6,
      });
    const [sortModel, setSortModel] = React.useState([
        {
          field: 'commodity',
          sort: 'asc',
        },
      ]);

    return(
        <div>
        <div className="middle" >
            <h2>order History</h2>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                {...data}
                sortModel={sortModel}
                onSortModelChange={(model) => setSortModel(model)}
            />
            </div>
            {/* {mappedOrders ? mappedOrders : ""} */}
            
        </div>
        </div>
    )
}

export default OrderHistory