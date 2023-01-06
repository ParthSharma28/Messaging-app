import React from "react"
import Search from "./Search"
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import "../Typefield.css"
function Type(){
    return(
        <div className="Typefield">
        <div className="emoji">
        <EmojiEmotionsOutlinedIcon />
        </div>
        <div className="file">
        <AttachFileOutlinedIcon />
        </div>
        <input type="text" name="chatMessage" placeholder="Chat Message..." />
        <div className="mic">
        <MicOutlinedIcon />
        </div>
        </div>
    )
}
export default Type;