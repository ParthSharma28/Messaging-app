import React from "react"
import A from "../Search.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search(){
    function Ser(){

    }
    return( 
    <div className="Search">
    <div className="middle">
        <input type="text" placeholder="  Search" name="Search"></input>
        <button type="submit"><SearchOutlinedIcon sx={{ fontSize: 13 }}/></button>
    </div>
    </div>
    )
}

export default Search;