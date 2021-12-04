import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import OrderHistory from "./OrderHistory";
import Chip from '@mui/material/Chip';
import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';
import BottomNav from "./BottomNav";
import BasicModal from "./AddressDelete";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';


function AccountPage( {displayedAddresses, setDisplayedAddresses, mappedCategories, setCurrentUser, currentUser, orderHistory}){

    const [addys, setAddys] = useState([])

    // const mappedAddys = addys.map(addy=>{
    //   <p></p>
    // })

    const herokuURL = "https://strings-and-things.herokuapp.com"
  
    
    const history = useHistory()
    

    function handleChange(e){
        history.push(e.target.id)
    }

    function handleHistory(){
      history.push("/add-addresses")
  }
  
    const mappedAddresses = displayedAddresses.map(address=>{
      return( <div className="each-address" >
                <div style={{borderTop: "solid gray "}} className="address-text" >
                  <p>Address :</p>
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
                <BasicModal displayedAddresses={displayedAddresses} setDisplayedAddresses={setDisplayedAddresses} address={address} />           
              </div>)
    })
    
    function logout(){
        fetch(`${herokuURL}/logout`, { method: "DELETE"}).then(r=>{
          if (r.ok){
            setCurrentUser(null)
          }
        })
        history.push("/")
      }

    return(
        <>
        <Navbar currentUser={currentUser} mappedCategories={mappedCategories} />
        <div style={{display: "flex", justifyContent: "space-between", marginLeft: "90px", marginRight: "90px"}} >
          {/* <div style={{display: "flex", justifyContent: "space-between"}} > */}
            <h2 style={{fontSize: "30px"}} className="sleek" >{currentUser.username}</h2>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}} >
              <h2 style={{fontSize: "35px"}} className="sleek" >Address Book</h2>
              <MenuBookOutlinedIcon sx={{fontSize: "50px", color: "gray", marginBottom: "5px"}} />
            </div>
            <Button sx={{backgroundColor:"#d4ab84", height: "40px", marginTop: "35px"}} variant="contained" onClick={logout}>logout</Button>
          {/* </div> */}
        </div>
        <h3 className="sleek" style={{marginLeft: "100px"}} >You can add new addresses to save for future purchases and access them within you cart</h3>
        <div className="justify-center" >
          <div className="address-book" >
              <div className="each-address" >
                  <h3>Add New Address</h3>
                  < AddToPhotosSharpIcon onClick={handleHistory} sx={{fontSize: "60px"}} className="plus" />
              </div>
              {mappedAddresses ? mappedAddresses : <></>}
          </div>
        </div>
        <div className="inline2" >
            <div className="box" ><h1 onClick={handleChange} id="/order-history" className="picture-text" >Order History</h1></div>
            {/* <div className="box" ><h1 onClick={handleChange} id="/reviewed"  className="picture-text" >Reviewed Items</h1></div> */}
        </div>
        <BottomNav />
        </>
    )
}
export default AccountPage