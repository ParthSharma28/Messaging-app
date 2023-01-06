import React from "react"
import A from "./userlogo.png"
import  "../friends.css"

function Friend(props){
return(
    <div className="Friends">
        <img src={A}/>
        <div className="messinfo">
        <h4>{props.name}</h4>
        <p>{props.ext}</p>
        </div>
    </div>
);
}

export default Friend;