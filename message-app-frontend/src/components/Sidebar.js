import React from 'react'
import './Sidebar.css'
import { SearchOutlined} from '@mui/icons-material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material'
// import IconButton from '@mui/material/IconButton';
import SidebarChat from './SidebarChat'
import { useStateValue } from './StateProvider';
const Sidebar = ({ messages }) => {
    const [{ user }, dispatch] = useStateValue()
 return (
 <div className="sidebar">
 <div className="sidebar__header">
 <Avatar src={user?.photoURL}/>
 <div className="sidebar__headerRight">
 <IconButton>
 <DonutLargeIcon />
 </IconButton>
 <IconButton>
 <ChatIcon />
 </IconButton>
 <IconButton>
 <MoreVertIcon />
 </IconButton>
 </div>
 </div>
 <div className="sidebar__search">
 <div className="sidebar__searchContainer">
 <SearchOutlined />
 <input placeholder="Search or start new chat" 
type="text" />
 </div>
 </div>
 <div className="sidebar__chats">
 <SidebarChat  messages={messages}/>
 </div>
 </div>
 )
}
export default Sidebar