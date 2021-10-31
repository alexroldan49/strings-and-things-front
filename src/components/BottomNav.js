import React from "react";
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import InstagramIcon from '@mui/icons-material/Instagram';


function BottomNav(){


    return(
        <div className="bottom-nav" >
            <div style={{color: "white", alignItems: "center", textAlign: "center"}} classname="column" >
                <FormatAlignRightIcon sx={{fontSize: "50px"}}  />
                <p>Strings and Things</p>
            </div>
            <div style={{color: "white", alignItems: "center", textAlign: "center", marginBottom: 16}} classname="column" >
               <p>Get to know me</p>
               <p>Alexander Roldan</p>
               <a style={{color: "rgb(255, 136, 0)"}} href="https://medium.com/@alexroldan49" >Medium Blogs</a>
            </div>
            <div style={{color: "white", alignItems: "center", textAlign: "center"}} classname="column" >
                <p>Contact</p>
                <p>AlexRoldan49@gmail.com</p>
                <div style={{marginLeft: "30px", textAlign: "center"}} className="row" >
                <InstagramIcon sx={{height: "30px", marginRight: 1}} />
                <p>alpha18alex</p>
                </div>
            </div>
            <div style={{color: "white", alignItems: "center", textAlign: "center"}} classname="column" >
                <p>Thank you for visiting my site!</p>
                <p>Developed for Capstone Project</p>
            </div>
        </div>
    )
}

export default BottomNav