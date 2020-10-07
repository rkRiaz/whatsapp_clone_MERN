import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat () {
    let sendMessage = e => {
        
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Rohoul Kuddus Riaz</h3>
                    <p>last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>     
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">
                        Rohoul Kuddus Riaz
                    </span>
                    this is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Rohoul Kuddus Riaz
                    </span>
                    this is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>          <p className="chat__message">
                    <span className="chat__name">
                        Rohoul Kuddus Riaz
                    </span>
                    this is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
            </div>
     
        </div>
    )
}

export default Chat
