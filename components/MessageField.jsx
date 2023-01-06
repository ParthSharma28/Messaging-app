import React from "react"
import "../MessageField.css"
import Friend from "./Friend"
import Type from "./Typefield"

function MessageField(){
    return(
        <div className="MessageField">
        <Friend name="Friend" ext="Last seen at 9:00pm"/>
        <div className="Messagee">
        
        </div>
        <Type/>
      

        </div>
    )
}

export default MessageField;