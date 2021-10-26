import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import OrderHistory from "./OrderHistory";
import Chip from '@mui/material/Chip';
import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';
import BottomNav from "./BottomNav";


function AccountPage( { mappedCategories, setCurrentUser, currentUser, orderHistory}){

    // const addys = currentUser.addresses

    // const mappedAddys = addys.map(addy=>{
    //   <p></p>
    // })
    
    const history = useHistory()

    function handleChange(e){
        history.push(e.target.id)
    }

    function handleHistory(){
      history.push("/add-addresses")
  }
    
    const mappedAddresses = currentUser.addresses.map(address=>{
      return( <div className="each-address" >
                <div style={{borderTop: "solid gray "}} className="address-text" >
                  <p>address street and number :</p>
                  <p>{address.address}</p>
                </div>
                <div className="address-text" >
                  <p>Apt/unit/suite :</p>
                  <p>{address.apt}</p>
                </div>
                <div className="address-text" >
                  <p>City :</p>
                  <p>{address.city}</p>
                </div>
                <div className="address-text" >
                  <p>State :</p>
                  <p>{address.state}</p>
                </div>
                <div className="address-text" >
                  <p>Zipcode:</p>
                  <p>{address.zipcode}</p>
                </div>                  
              </div>)
    })
    
    
    function logout(){
        fetch("/logout", { method: "DELETE"}).then(r=>{
          if (r.ok){
            setCurrentUser(null)
          }
        })
        history.push("/")
      }

    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <h1>{`You are Logged in! welcome ${currentUser.username}`}</h1>
        <Button onClick={logout}>logout</Button>
        <div className="justify-center" >
          <div className="address-book" >
              <div className="each-address" >
                  <h3>Add New Address</h3>
                  < AddToPhotosSharpIcon onClick={handleHistory} sx={{fontSize: "60px"}} className="plus" />
              </div>
              {mappedAddresses}
          </div>
        </div>
        <div className="inline2" >
            <div onClick={handleChange} id="/addresses" className="box" ><h1 className="picture-text" >Addresses</h1></div>
            <div onClick={handleChange} id="/order-history" className="box" ><h1 className="picture-text" >Order History</h1></div>
            <div onClick={handleChange} id="/reviewed" className="box" ><h1 className="picture-text" >Reviewed Items</h1></div>
        </div>
        <BottomNav />
        </>
    )
}
export default AccountPage