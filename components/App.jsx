import React from "react"
import ReactDOM from "react-dom"
import Sidebar from "./Sidebar"
import MessageField from "./MessageField"
import "../Appp.css"
function App(){
    return(
       <div className="Total">
       <Sidebar/>
       <MessageField/>
       </div> 
    )
}
export default App;