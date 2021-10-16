import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function HomeContent(){

    return(
        <>
        <div className="subheader">
            <ul>
                <li>
                <MenuIcon px={{fontSize: "large"}}/>
                </li>
                <li>
                <h3>Guitars</h3>
                </li>
                <li>
                    <h3>Pianos</h3>
                </li>
                <li>
                    <h3>Drums</h3>
                </li>
                <li>
                    <h3>Bass</h3>
                </li>
            </ul>
        </div>
        <img src="https://i.ibb.co/x1ZnBdW/banner-top-yamaha.png" alt="playing guitar" width="100%" height="50%"  />

        </>
    )
}
export default HomeContent