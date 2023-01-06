import React from "react"
import reactdom from "react-dom"
import "../usename.css"
import P from "./logout.png"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function userProfile(props){
return(
     <div className="userdiv">

        {/* <AccountCircleOutlinedIcon /> */}
        <h2>UserName</h2>
        {/* <img src={P}/> */}
     </div>
);
}

export default userProfile;