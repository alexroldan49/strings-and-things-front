import React from "react";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

function Home(){
    const history = useHistory()

function handleHistory(e){
    history.push(e.target.value)
}
    

return(
    <div className="container">
        <section className="section-one" >
            <Navbar/>
            <HomeContent/>
        </section>
        <section className="section-two" >
            
        </section>
        <section className="section-three" >

        </section>
    </div>
        /* <button value="/signup" onClick={handleHistory} >Signup</button>
        <button value="/login" onClick={handleHistory} >Login</button> */


    
)
}

export default Home