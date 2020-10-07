import React from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Rohul Kuddus Riaz</h2>
                <p> This is whatsapp clone with MERN stack. </p>
            </div>
        </div>
    )
}

export default SidebarChat
