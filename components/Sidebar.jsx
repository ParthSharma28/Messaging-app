import React from "react"
import UserProfile from "./userProfile"
import Search from "./Search"
import "../sidebar.css"
import Friend from "./Friend"

function Sidebar(){
    return(
        <div className="Sidebar">
        <UserProfile />
        <Search/>
        <Friend name="Friend 1" ext="Last Message" />
        <Friend name="Friend 2" ext="Last Message" />
        <Friend name="Friend 3" ext="Last Message" />
        <Friend name="Friend 4" ext="Last Message" />

        </div>
    )
}

export default Sidebar;